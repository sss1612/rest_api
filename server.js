const express = require("express");
const axios = require('axios');
const api = express();
const app = express();

app.use(express.static(__dirname + '/app'))
app.listen(80, () => {
 console.log("Server running on port 80");
});

// Research CORS
api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  
  });

api.listen(3000, () => {
 console.log("api running on port 3000");
});

api.get("/url", (req, res, next) => {
    res.json({name: "Stpe", age:17});
   });
api.post("/example", (req, res, next) => {
    console.log(req);
    res.json({name: 'stephen', age: 20});
    // res.end({name: 'tephen', age: 20});
   });