import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import cors from "cors"

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
const body=app.use(bodyParser.json());

const routerAdd=Router();

//**********************INSERTING details TO TABLE EmployeeDetails*********************//
routerAdd.post("/empAddContApi/Add",body,(req,res)=>{
    console.log("`/empAddContApi/Add` path called" );
    const {empAddContDetails,lastAddedEmpId}=req.body;
    const emp=empAddContDetails
    console.log(emp);
    console.log("employee Id latest="+lastAddedEmpId);
//creating a varriabile and putting all details in it to send it into database    
    const empPost={
        empId: lastAddedEmpId,
        address1: emp.address1,
        landMark: emp.landMark,
        city: emp.city,
        state: emp.state,
        pincode: 440018,
        mobileNumber: emp.phone1,
        alternateMobileNumber: emp.phone2,
        landlineNumber: emp.phone3
    }
//query of sql to to insert data into "empaddcontact"
    const sql=("INSERT INTO empaddcontact SET ?");
    db.query(sql,empPost,err=>{
        if(!err){
            console.log("successfully added emp details in `empaddcontact` table");
            res.send("successfully added emp details in `empaddcontact` table")
        }else{
            console.log(err);
            res.send(err)
        }
    })
});

//*************************get request from FrontEnd**********************
//geting data from `empaddcontact` Table in DB  And Sending back to ClientSide

routerAdd.get("/getEmpAddCont",(req,res)=>{
    const sql="SELECT * FROM empaddcontact"
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err)
        }
    })
});







export default routerAdd;