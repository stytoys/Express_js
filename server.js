const express = require('express');
const app = express();

//Specifié un port serveur
app.listen(3000, function() {
    console.log("Server started on port 3000");
})

// Middleware interconnexion
app.use(function (req, res, next) {
  //console.log('Time:', Date.now());
  req.name = "Antho";
  next();
});

app.get('/', function(req, res) {
    //console.log(req.name);
    res.send(req.name);
});

// reponse avec GET request is made to the body-html
//app.get('/', function(req, res) {
//    res.send("<h1>Welcome back!</h1>");
//});
//console.log(app);

// reponse de GET request /Contact
//app.get('/Contact', function(req, res) {
app.get('/Contact', (req, res) => {
    res.send("page /Contact test2");
  });
  console.log(app);