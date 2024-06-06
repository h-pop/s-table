import { SBody } from "./s-body";
import { SHeader } from "./s-header";
import { TestData } from "./test-data";
import "./styles.css";

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
    const sheader = new SHeader(this.columnDefinitions);
    this.htmlElement.appendChild(sheader.get());

    const sbody = new SBody(this.data);
    this.htmlElement.appendChild(sbody.get());
  }
}