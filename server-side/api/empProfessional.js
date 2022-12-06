import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import cors from "cors";

const app=express();
app.use(cors());
const routerEmpProf=Router();
app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());

//**********************INSERTING details TO TABLE EmployeeDetails*********************//
routerEmpProf.post("/empProfApi/add",body,(req,res)=>{
    const emp=req.body;
    console.log("`empProfApi/add` path from empProfApi.js")
    console.log(emp);

//creating a varriabile and putting all details in it to send it into database
    const post={
        empId:emp.empId,
        company_Name:emp.company_Name,
        designation:emp.designation,
        joining_Date:emp.joining_Date,
        ending_Date:emp.ending_Date,
        reasonOfResign:emp.reasonOfResign,
        salary:emp.salary
    }

//query of sql to to insert data into "employeement_professional_details"
 const sql=("INSERT INTO employeement_professional_details SET ?");

    db.query(sql,post,err=>{
        if(!err){
            console.log("successfully inserted docs into `employeement_professional_details` table");
            res.send("successfully inserted docs into `employeement_professional_details` table");
            
        }else{
            console.log(err);
            res.send(err);
        }
    });
});

//{2}*************************get request from FrontEnd**********************{2}//
//geting data from `employeement_professional_details` Table in DB  And Sending back to ClientSide

routerEmpProf.get("/getEmpProf",(req,res)=>{
    const sql="SELECT * FROM employeement_professional_details";
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})






export default routerEmpProf;