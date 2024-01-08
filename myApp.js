let express = require('express');
let app = express();

module.exports = { app };
console.log("Hello world");


app.get("/", function(req,res) {
  res.send("Hello Express");
});

console.log(app);

































 module.exports = app;
