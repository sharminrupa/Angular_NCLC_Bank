const express = require('express')
const app = express()
const port = 3000
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', (req, res) => {
    // Handle the get for this route
    res.send( 'text', 'this text was sent from the server');
  });
  
  app.listen(port, () =>  {
   console.log('Exeample app listing on port $(port)!');
  });