import mysql from "mysql2";

console.log("connection.js is running");

// Create connection configuration

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "nKhan.Profuse",
    database:"employeedb"
    
})

// Connect to the server

db.connect(err=>{
    console.log("connesction.js Executed db.connect");
    if(!err){
        console.log("Successfully connected to mysql server");

    }else{
        console.log(err)
    }
});

export {db};