const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send([
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 28 },
    { id: 4, name: "Chris Lee", age: 32 },
    { id: 5, name: "David Brown", age: 22 },
    { id: 6, name: "Emma Wilson", age: 27 },
    { id: 7, name: "Michael Clark", age: 35 },
    { id: 8, name: "Sarah Lewis", age: 29 },
    { id: 9, name: "Daniel Walker", age: 31 },
    { id: 10, name: "Laura Hall", age: 26 }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
