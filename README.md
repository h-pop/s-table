Key concepts/challenges
---
- Technologies used: TypeScript/JavaScript, HTML, CSS, webpack, webpack-dev-server
- Table with some typical business functionalities and nice styling, 

Usage
---

1. Init the sTable library providing valid library directory:
```
<script src="sTable.js"></script>
```
2. Create some html container, in which sTable will reside:
```
<div id="s-table-container"></div>
```
3. Create sTable instance inside provided html container with data and columns definition:
```
const htmlElement = document.getElementById('s-table-container');
const sTableConfig = {
    data: [
        { "id": 1, "name": "John Doe", "age": 30, "email": "john.doe@example.com", "active": true },
        { "id": 2, "name": "Jane Smith", "age": 25, "email": "jane.smith@example.com", "active": false },
        { "id": 3, "name": "Mike Johnson", "age": 35, "email": "mike.johnson@example.com", "active": true },
        { "id": 4, "name": "Emily Davis", "age": 28, "email": "emily.davis@example.com", "active": true }
    ],
    columns: [
        { name: 'id' },
        { name: 'name' },
        { name: 'age' },
        { name: 'email' },
        { name: 'active' }
    ]
}
sTable.create(htmlElement, sTableConfig);
```
Whole example on how to use this library can be found in [this file](dist/example_standalone.html) or on [github repository](https://github.com/h-pop/s-table/tree/master/example).

Development
---
Run `npm run serve` to run webpack-dev-server with hot code recompile and serve.

Example website using `sTable` can be viewed at `http://localhost:9000/example.html`.

Run `npm run pack-lib` to build library using webpack and pack it using npm.
