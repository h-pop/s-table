export class SHeader {

    htmlElement: HTMLElement;

    constructor(columnDefinitions) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-main');
        columnDefinitions.forEach(cd => {
            const cell = document.createElement('div');
            cell.setAttribute('class', 's-header-cell');
            const cellTextNode = document.createTextNode(cd);
            cell.appendChild(cellTextNode);
            this.htmlElement.appendChild(cell);
        });
    }

    get(): HTMLElement {
        return this.htmlElement;
    }
}