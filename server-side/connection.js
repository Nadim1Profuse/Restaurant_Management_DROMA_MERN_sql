import mysql from "mysql2";

// Create connection configuration

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "nKhan.Profuse",
    database:"employeedb"
    
})

// Connect to the server

const connect=db.connect(err=>{
    if(!err){
        console.log("Successfully connected to mysql server");

    }else{
        console.log(err)
    }
});

export {db,connect};