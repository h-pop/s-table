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
3. Create sTable instance inside provided html container:
```
container = document.getElementById('s-table-container');
sTable.create(container);
```
Whole example on how to use this library can be found in [this example html file](example.html).

Development
---
Run `npm run serve` to run webpack-dev-server with hot code recompile and serve.

Example website using `sTable` can be viewed at `http://localhost:9000/example.html`.

Run `npm run pack-lib` to build library using webpack and pack it using npm.
