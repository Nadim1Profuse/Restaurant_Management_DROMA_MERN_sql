import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";

const app=express();
const routerSalOvrtm=Router();

app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());

//{1}*****************INSERTING/Adding details TO sal_overtime TABLE****************{1}//

routerSalOvrtm.post("/empSalOvrTmApi/add",body,(req,res)=>{
    console.log(".post method from empSalOvrTmApi.js")
    const {empSalOvrTimeDetails,lastAddedEmpId}=req.body;
    const emp=empSalOvrTimeDetails
    console.log("empSalOvrTmApi is caleed with id="+lastAddedEmpId)
    console.log(emp);
//creating a Objecte and putting all details in it to send it into database   
    const post={
        empId:lastAddedEmpId,
        date_ot:emp.date_ot,
        reason_ot:emp.reason_ot,
        ot_amount_perDay:emp.ot_amount_perDay
    }

//Sql Query String
    const sqlQuery="INSERT INTO sal_overtime SET ?"

// SqL function to send data in db by using sqlQuery,PostEmp and handling error
    db.query(sqlQuery,post,err=>{
        if(!err){
            console.log("Data insrted to sal_Overtime table in db");
            res.send("Data insrted to sal_Overtime table in db")
        }else{
            console.log(err);
        }
    })
})

//(2)*************************get request from FrontEnd/Postment**********************{2}//
     //geting data from `sal_Overtime` Table in DB  And Sending to ClientSide/postman

     routerSalOvrtm.get("/empSalOvrTmApi/get",(req,res)=>{
      const sqlQuery ="SELECT * FROM sal_Overtime"
      db.query(sqlQuery,(err,emp)=>{
        if(!err){
            res.send(emp)
            console.log(emp)
        }else{
            console.log(err);
        }
      })
     });
     
//(3)***********************Update request from FrontEnd/Postment********************{3}//
     //Updating data from `sal_Overtime` Table in DB  And Sending to ClientSide/postman

    routerSalOvrtm.post("/empSalOvrTmApi/update",(req,res)=>{
        
        const {feild,updateQuery,empIdForUpdate}=req.body;         //object destructing

        const sql=`UPDATE sal_Overtime SET ${feild} = '${updateQuery}' WHERE empId = ${empIdForUpdate}`;
        db.query(sql,err=>{
            if(!err){
                console.log("successfully updated employee id= "+empIdForUpdate);
            }else{
                console.log(err);
            }
        })
    
     });

//(4)*************************Delete request from FrontEnd/Postment**********************{4}//
     //Deleting data from `sal_Overtime` Table in DB  And Sending to ClientSide/postman

    routerSalOvrtm.delete("/empSalOvrTmApi/:id",(req,res)=>{
      const empIdForDel=(req.params.id)
      const sqlQuery=`DELETE FROM sal_Overtime WHERE empId= ${empIdForDel} `;
      console.log(sqlQuery);
      db.query(sqlQuery,err=>{
        if(!err){
            console.log("Successfully Deleted Employee Of empId="+empIdForDel);
        }else{
            console.log(err);
        }
      })
    })




export default routerSalOvrtm; 