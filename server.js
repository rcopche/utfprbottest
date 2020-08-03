const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "root",
    database:"testing1"
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

connection.connect(function(error){
    console.log("conectado ao banco");  
    app.listen(PORT, function(){
        console.log("Escutando porta "+ PORT);
    })  
});

app.get("/", function(req,res){
    connection.query("SELECT * FROM TESTE", "testing1", function(error, result){
        res.json(result);
    });    
});


