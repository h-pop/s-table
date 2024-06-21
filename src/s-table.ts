import "./styles/styles.css";
import { SBody } from "./s-body";
import { SHeader } from "./s-header";
import { EventBus } from "./event-bus";
import { EventEnum, Sort } from "./types";
import { STableConfig } from "./s-table-config";
import { SFilter } from "./s-filter";

export class STable {

  htmlElement: HTMLElement;
  sTableConfig: STableConfig;

  constructor(container: HTMLElement, sTableConfig: STableConfig) {
    this.htmlElement = document.createElement('div');
    this.sTableConfig = sTableConfig;
    container.appendChild(this.htmlElement);
    this.htmlElement.setAttribute('class', 's-table-main');
    this.create();
  }

  private create(): void {
    this.createHeader();
    this.createFilter();
    this.createBody();

    EventBus.getInstance().subscribe(EventEnum.SORT, (sort: Sort) => {
      this.htmlElement.querySelector('.s-body-main').remove();
      const sortedData = this.sortData(sort);
      this.createBody(sortedData);
    });

    EventBus.getInstance().subscribe(EventEnum.FILTER, (emitted: any) => {
      this.htmlElement.querySelector('.s-body-main').remove();
      const filteredData = this.filterData(emitted);
      this.createBody(filteredData);
    })
  }

  private sortData(sort) {
    if (sort.direction === 'none') {
      return this.sTableConfig.data;
    }
    return [...this.sTableConfig.data].sort((a, b) =>
      sort.direction === 'asc'
        ? (a[sort.columnName] > b[sort.columnName] ? 1 : -1)
        : (a[sort.columnName] < b[sort.columnName] ? 1 : -1)
    );
  }

  private filterData(filterObject) {
    let result = this.sTableConfig.data;
    for (const filterObjectField in filterObject) {
      result = result.filter(e => e[filterObjectField]?.includes(filterObject[filterObjectField]));
    }
    return result;
  }

  private createHeader(): void {
    const sheader = new SHeader(this.sTableConfig.columns);
    this.htmlElement.appendChild(sheader.get());
  }

  private createFilter(): void {
    const sfilter = new SFilter(this.sTableConfig.columns);
    this.htmlElement.appendChild(sfilter.get());
  }

  private createBody(data = this.sTableConfig.data): void {
    const sbody = new SBody(data);
    this.htmlElement.appendChild(sbody.get());
  }
}