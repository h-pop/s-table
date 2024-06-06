export class Table {
  data;
  filteredData;
  filterValues = {};

  constructor(data: any[]) {
    this.data = data;
    this.filteredData = this.data;
    this.createTable();
  }

  createTable() {
    this.createHeader();
    this.createBody();
  };

  createHeader() {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    table.setAttribute("id", "stable");
    tableContainer.appendChild(table);
    const thead = table.createTHead();
    thead.setAttribute("style", "position: sticky; top: 0;");
    const headerRow = thead.insertRow();
    const element = this.data[0];
    for (const animalProperty in element) {
      if (Object.prototype.hasOwnProperty.call(element, animalProperty)) {
        const cell = headerRow.insertCell();
        const cellTextNode = document.createTextNode(animalProperty);
        cell.appendChild(cellTextNode);
        cell.addEventListener('click', this.sort.bind(this));
      }
    }
    const filterRow = thead.insertRow();
    for (const animalProperty in element) {
      if (Object.prototype.hasOwnProperty.call(element, animalProperty)) {
        const cell = filterRow.insertCell();
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("id", animalProperty);
        cell.appendChild(inputElement);
        inputElement.addEventListener('change', this.filter.bind(this));
      }
    }
  };

  createBody() {
    const table = document.getElementById('stable') as any;
    const body = table.createTBody();
    this.filteredData.forEach(animal => {
      const row = body.insertRow();
      row.addEventListener('click', ($event) => alert($event.target.textContent));
      for (const animalProperty in animal) {
        if (Object.prototype.hasOwnProperty.call(animal, animalProperty)) {
          const cell = row.insertCell();
          cell.appendChild(document.createTextNode(animal[animalProperty]));
        }
      }
    });
  };

  sort(event) {
    const previousSort = event.target.getAttribute("sort");
    const currentSort = previousSort && previousSort === 'asc' ? 'desc' : 'asc';
    event.target.setAttribute("sort", currentSort);
    const sortField = event.target.textContent;
    // this.filteredData.sort((a, b) => {
    //   return currentSort === 'asc'
    //   ? a[sortField] > b[sortField]
    //   : a[sortField] < b[sortField]
    // });

    this.rerenderBody();
  };

  filter(event) {
    const filterValue = event.target.value;
    const filterField = event.target.getAttribute('id');
    this.filterValues[filterField] = filterValue;
    this.filteredData = this.data;
    for (const entry in this.filterValues) {
      this.filteredData = this.filteredData.filter(
        a => a[entry]?.includes(this.filterValues[entry]));
    }
    this.rerenderBody();
  };

  rerenderBody() {
    document.getElementById('stable');
    document.querySelector('#stable > tbody').remove();
    this.createBody();
  }
}