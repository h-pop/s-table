Key concepts/challenges
---
- Technologies used: TypeScript/JavaScript, HTML, CSS, webpack, webpack-dev-server
- Table with some typical business functionalities and nice styling, 

Usage
---

1. Init the sTable library:
```
<script src="dist/sTable.js"></script>
```
2. Create sTable instance inside provided html container:
```
container = document.getElementById('s-table-container');
sTable.create(container);
```
Whole example on how to use this library can be found in [this test html file](test.html).

Development
---
Run `npm start` to run webpack-dev-server with hot code recompile and serve.

Test website using `s-table` can be viewed at `http://localhost:9000/test.html`.
