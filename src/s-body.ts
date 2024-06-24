import { SColumnDef } from "./s-column-def";

export class SBody {

    htmlElement: HTMLElement;
    selectedCell: HTMLDivElement;
    selectedRow: HTMLDivElement;
    
    constructor(columnDefs: SColumnDef[], data) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-body-main');
        data?.forEach(entry => {
            const row = document.createElement('div');
            row.setAttribute('class', 's-body-row');
            row.addEventListener('click', this.onRowClick.bind(this, row));
            columnDefs.forEach(cd => {
                const cell = document.createElement('div');
                cell.setAttribute('class', 's-body-cell');
                const cellTextNode = document.createTextNode(entry[cd.name]);
                cell.appendChild(cellTextNode);
                cell.addEventListener('click', this.onCellClick.bind(this, cell));
                row.appendChild(cell);
            });
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