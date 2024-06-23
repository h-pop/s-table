import "./styles/styles.css";
import { SBody } from "./s-body";
import { SHeader } from "./s-header";
import { EventBus } from "./event-bus";
import { EventEnum } from "./types";
import { STableConfig } from "./s-table-config";
import { SFilter } from "./s-filter";

export class STable {

  htmlElement: HTMLElement;
  sTableConfig: STableConfig;

  sHeader: SHeader;
  sFilter: SFilter;
  sBody: SBody;

  constructor(container: HTMLElement, sTableConfig: STableConfig) {
    this.htmlElement = document.createElement('div');
    this.sTableConfig = sTableConfig;
    container.appendChild(this.htmlElement);
    this.htmlElement.setAttribute('class', 's-table-main');
    this.create();
  }

  private create(): void {
    this.createHeader();
    if (this.sTableConfig.showFilter) {
      this.createFilter();
    }
    this.createBody();
  }

  private createHeader(): void {
    this.sHeader = new SHeader(this.sTableConfig.columns);
    this.htmlElement.appendChild(this.sHeader.get());
    EventBus.getInstance().subscribe(EventEnum.SORT, () => this.operateData());
  }

  private createFilter(): void {
    this.sFilter = new SFilter(this.sTableConfig.columns);
    this.htmlElement.appendChild(this.sFilter.get());
    EventBus.getInstance().subscribe(EventEnum.FILTER, () => this.operateData());
  }

  private createBody(data = this.sTableConfig.data): void {
    this.sBody = new SBody(data);
    this.htmlElement.appendChild(this.sBody.get());
  }

  private operateData() {
    this.htmlElement.querySelector('.s-body-main')?.remove();
    const filteredData = this.filterData(this.sFilter.getFilterObject());
    const operatedData = this.sortData(this.sHeader.getSortObject(), filteredData);
    this.createBody(operatedData);
  }

  private sortData(sortObject, data = this.sTableConfig.data) {
    return data.slice()
      .sort((left, right) => {
        let orders: number;
        for (const sortObjectField in sortObject) {
          let order = ('' + left[sortObjectField]).localeCompare(('' + right[sortObjectField]))
          orders ||= sortObject[sortObjectField] === 'asc' ? order : -order;
        }
        return orders;
      });
  }

  private filterData(filterObject, data = this.sTableConfig.data) {
    let result = data;
    for (const filterObjectField in filterObject) {
      result = result.filter(e => ('' + e[filterObjectField])?.includes(filterObject[filterObjectField]));
    }
    return result;
  }

  // PUBLIC API

  public showFilter(showFilter: boolean): void {
    if (showFilter) {
      if (this.sFilter) {
        this.sFilter.show();
      } else {
        this.createFilter();
      }
    } else {
      this.sFilter.hide();
    }
  }
}