
import { SHeaderCell } from "./s-header-cell";

export class SHeader {

    htmlElement: HTMLElement;

    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions?.forEach(cd => {
            const sCell = new SHeaderCell(cd);
            this.htmlElement.appendChild(sCell.get());
        });
    }

    get(): HTMLElement {
        return this.htmlElement;
    }
}