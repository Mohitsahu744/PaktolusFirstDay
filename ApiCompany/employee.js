var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());
var con = mysql.createConnection({
    host : "localhost",
    user : "com",
    password : "12345",
    database : "company"
});

    con.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("connection succesfully");
    }
});

    app.get('/api/company/employee/display_all_data', function(req,res){
        let sqlQuery= "SELECT * FROM employee";
        let query = con.query(sqlQuery,function(err,result){
            if(err) throw err;
            res.send(JSON.stringify({"status" : 200, "response" : result}  ));
        });
    });
   
 
    
    app.listen(7000,()=>{
        console.log("server running");
    });
    