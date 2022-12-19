import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import cors from "cors";

const app=express();
app.use(cors());
const routerEmpRefer=Router();
app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());

//**********************INSERTING details TO TABLE emp_reference_details*********************//
routerEmpRefer.post("/empReferApi/add",body,(req,res)=>{
    const {empRefrenceDetails,lastAddedEmpId}=req.body;
    const emp=empRefrenceDetails
    console.log("empReferApi is caleed with id="+lastAddedEmpId)
    console.log(emp);

//creating a varriabile and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        referedBy:emp.referenceName,
        relation:emp.relation,
        address:emp.address,
        city:emp.city,
        phone1:emp.phone1,
        phone2:emp.phone2
    }

//query of sql to to insert data into "emp_reference_details"
 const sql=("INSERT INTO emp_reference_details SET ?");

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
//geting data from `emp_reference_details` Table in DB  And Sending back to ClientSide

routerEmpRefer.get("/empReferApi/get",(req,res)=>{
    const sql="SELECT * FROM emp_reference_details";
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})


//(3)***********************Update request from FrontEnd/Postment********************{3}//
     //Updating data from `emp_reference_details` Table in DB  And Sending to ClientSide/postman

routerEmpRefer.post("/empReferApi/update",(req,res)=>{
        
        const {feild,updateQuery,empIdForUpdate}=req.body;         //object destructing

        const sql=`UPDATE emp_reference_details SET ${feild} = '${updateQuery}' WHERE empId = ${empIdForUpdate}`;
        db.query(sql,err=>{
            if(!err){
                console.log("successfully updated employee id= "+empIdForUpdate);
            }else{
                console.log(err);
            }
        })
});

//(4)*************************Delete request from FrontEnd/Postment**********************{4}//
     //Deleting data from `emp_reference_details` Table in DB  And Sending to ClientSide/postman

routerEmpRefer.delete("/empReferApi/:id",(req,res)=>{
      const empIdForDel=(req.params.id)
      const sqlQuery=`DELETE FROM emp_reference_details WHERE empId= ${empIdForDel} `;
      console.log(sqlQuery);
      db.query(sqlQuery,err=>{
        if(!err){
            console.log("Successfully Deleted Employee Of empId="+empIdForDel);
        }else{
            console.log(err);
        }
      })
})


export default routerEmpRefer;