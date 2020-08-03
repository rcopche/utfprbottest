const express = require("express");
const mysql = require("mysql");
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const app = express();


const PORT = process.env.PORT || 8080;

//const connection = mysql.createConnection({
//    host:"localhost",
//    port:3306,
//    user: "root",
//   database:"testing1"
//});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

client.connect(function(error){
   console.log("conectado ao banco");  
    app.listen(PORT, function(){
       console.log("Escutando porta "+ PORT);
    })  
});

app.get("/api/all", function(req,res){
    client.query("SELECT * FROM test1",  function(error, result){
        res.json(result);
    });    
});


