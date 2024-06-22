import sortUp from "./assets/sort-up.svg";
import sortDown from "./assets/sort-down.svg";
import { Direction } from "./types";
import { SColumnDef } from "./s-column-def";

export class SHeaderCell {

    htmlElement: HTMLElement;
    onSortChange: Function;

    static readonly HIDDEN_CLASS = 's-sort-hidden';

    constructor(columnDefinition: SColumnDef) {
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 's-header-cell');
        this.appendLabel(columnDefinition);
        this.appendSortIcon(`s-sort-up`, sortUp);
        this.appendSortIcon(`s-sort-down`, sortDown);
        this.htmlElement.addEventListener('click', this.sort.bind(this));
    }

    public get(): HTMLElement {
        return this.htmlElement;
    }

    public setOnSortChange(fn: Function) {
        this.onSortChange = fn;
    }

    private appendLabel(columnDefinition: SColumnDef) {
        const cellTextDiv = document.createElement('div');
        cellTextDiv.setAttribute('class', 's-text');
        const cellTextNode = document.createTextNode(columnDefinition.name);
        cellTextDiv.appendChild(cellTextNode);
        this.htmlElement.appendChild(cellTextDiv);
    }

    private appendSortIcon(id, src) {
        const cellIconDiv = document.createElement('div');
        cellIconDiv.setAttribute('id', id)
        cellIconDiv.setAttribute('class', SHeaderCell.HIDDEN_CLASS);
        const sortImg = document.createElement('img');
        sortImg.setAttribute('src', src);
        sortImg.setAttribute('class', 's-sort-icon');
        cellIconDiv.appendChild(sortImg);
        this.htmlElement.appendChild(cellIconDiv);
    }

    private sort(): void {
        const direction = this.determineDirection();
        this.onSortChange(direction);
    }

    private determineDirection(): Direction {
        const bothSortsHidden = this.htmlElement.querySelectorAll(`.${SHeaderCell.HIDDEN_CLASS}`).length > 1;
        const sortDescHidden = this.isSortDescHidden();
        this.hideSort();
        if (bothSortsHidden) {
            this.showSortAsc();
            return 'asc';
        } else if (sortDescHidden) {
            this.showSortDesc();
            return 'desc';
        } else {
            return 'none';
        }
    }

    private hideSort() {
        this.htmlElement.querySelectorAll('#s-sort-up, #s-sort-down')
            .forEach(a => a.setAttribute('class', SHeaderCell.HIDDEN_CLASS));
    }

    private showSortDesc() {
        this.showSort(this.getSortDesc());
    }

    private showSortAsc() {
        this.showSort(this.getSortAsc());
    }

    private showSort(element: Element): void {
        element.classList.remove(SHeaderCell.HIDDEN_CLASS);
    }

    private getSortAsc() {
        return this.htmlElement.querySelector('#s-sort-up');
    }

    private getSortDesc() {
        return this.htmlElement.querySelector('#s-sort-down');
    }

    private isSortDescHidden(): boolean {
        return this.isSortHidden(this.getSortDesc());
    }

    private isSortHidden(element: Element): boolean {
        return element.classList.contains("s-sort-hidden");
    }
}