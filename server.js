const express = require("express"),
  portConstants = require('./constants/portConstants')
  axios = require('axios'),
  api = express(),
  app = express();

app.use(express.static(__dirname + '/app'))
app.listen(portConstants.webServer, () => {
 console.log(`Server running on port ${portConstants.webServer}`);
});

// Research CORS
api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();  
  });

api.listen(portConstants.api, () => {
 console.log(`api running on port ${portConstants.api}`);
});

api.get("/url", (req, res, next) => {
    res.json({name: "Stpe", age:17});
   });
api.post("/example", (req, res, next) => {
    console.log(req);
    res.json({name: 'stephen', age: 20});
    // res.end({name: 'tephen', age: 20});
   });
api.get('/delay', (req, res, next) => {
  const date = new Date();
  const time = date.getTime();
  const spinOff = (time) => {
    const newDate = new Date();
    const newTime = newDate.getTime();
    console.log('lol', newTime - time)
    if (newTime - time < 3000) {
      setTimeout(spinOff, 100, time)
    }
    else {
      res.json({name: 'delay', age: undefined});
    }
  }
  setTimeout(spinOff, 100, time)
  
});