import "./styles/styles.css";
import { SBody } from "./s-body";
import { SHeader } from "./s-header";
import { TestData } from "./test-data";
import { EventBus } from "./event-bus";
import { EventEnum, Sort } from "./types";

export class STable {

  htmlElement: HTMLElement;
  data: any[] = TestData.animals;
  columnDefinitions: any[] = ['name', 'type', 'isVaccinated', 'incidentDescription', 'context'];

  constructor(htmlElement: HTMLElement) {
    this.htmlElement = htmlElement;
    this.htmlElement.setAttribute('class', 's-table-main');
    this.create();
  }


  create(): void {
    this.createHeader();
    this.createBody();

    EventBus.getInstance().subscribe(EventEnum.SORT, (sort: Sort) => {
      console.log(sort);
      this.htmlElement.querySelector('.s-body-main').remove();
      const sortedData = this.sortData(sort);
      this.createBody();
    });
  }

  private sortData(sort) {
    return this.data.sort((a, b) =>
      sort.direction === 'asc'
        ? (a[sort.columnName] > b[sort.columnName] ? 1 : -1)
        : (a[sort.columnName] < b[sort.columnName] ? 1 : -1)
    );
  }

  private createHeader(): void {
    const sheader = new SHeader(this.columnDefinitions);
    this.htmlElement.appendChild(sheader.get());
  }

  private createBody(data = this.data): void {
    const sbody = new SBody(data);
    this.htmlElement.appendChild(sbody.get());
  }
}