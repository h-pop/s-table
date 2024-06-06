import { STable } from "./s-table";

function app() {
  const container = document.getElementById('s-table-container');
  new STable(container);
}

new app();