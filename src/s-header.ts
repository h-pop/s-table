
import { SCell } from "./s-cell";

export class SHeader {

    htmlElement: HTMLElement;

    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions.forEach(cd => {
            const sCell = new SCell(cd);
            this.htmlElement.appendChild(sCell.get());
        });
    }

    get(): HTMLElement {
        return this.htmlElement;
    }
}