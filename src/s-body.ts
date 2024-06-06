export class SBody {

    htmlElement: HTMLElement;

    constructor(data) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-body-main');
        data.forEach(entry => {
            const row = document.createElement('div');
            row.setAttribute('class', 's-body-row');
            for (const field in entry) {
                if (Object.prototype.hasOwnProperty.call(entry, field)) {
                    const cell = document.createElement('div');
                    cell.setAttribute('class', 's-body-cell');
                    const cellTextNode = document.createTextNode(entry[field]);
                    cell.appendChild(cellTextNode);
                    row.appendChild(cell);
                }
            }
            this.htmlElement.appendChild(row);
        });
    }

    get(): HTMLElement {
        return this.htmlElement;
    }
}