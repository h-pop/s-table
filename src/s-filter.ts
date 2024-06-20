import { SFilterCell } from "./s-filter-cell";
export class SFilter {

    htmlElement: HTMLElement;

    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions?.forEach(cd => {
            const sFilterCell = new SFilterCell(cd);
            this.htmlElement.appendChild(sFilterCell.get());
        });
    }

    get(): HTMLElement {
        return this.htmlElement;
    }
}