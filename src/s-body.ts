export class SBody {

    htmlElement: HTMLElement;
    selectedCell: HTMLDivElement;
    selectedRow: HTMLDivElement;
    
    constructor(data) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-body-main');
        data?.forEach(entry => {
            const row = document.createElement('div');
            row.setAttribute('class', 's-body-row');
            row.addEventListener('click', () => this.onRowClick(row));
            for (const field in entry) {
                if (Object.prototype.hasOwnProperty.call(entry, field)) {
                    const cell = document.createElement('div');
                    cell.setAttribute('class', 's-body-cell');
                    const cellTextNode = document.createTextNode(entry[field]);
                    cell.appendChild(cellTextNode);
                    cell.addEventListener('click', () => this.onCellClick(cell));
                    row.appendChild(cell);
                }
            }
            this.htmlElement.appendChild(row);
        });
    }

    public get(): HTMLElement {
        return this.htmlElement;
    }

    private onCellClick(cell: HTMLDivElement): void {
        this.htmlElement.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
        this.selectedCell = cell;
        this.selectedCell.classList.add('selected');
    }

    private onRowClick(row: HTMLDivElement): void {
        this.selectedRow = row;
        this.selectedRow.classList.add('selected');
    }
}