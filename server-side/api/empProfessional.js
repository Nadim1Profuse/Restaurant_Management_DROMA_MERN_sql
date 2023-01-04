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
    const {empProfArray,lastAddedEmpId}=req.body;
    console.log("empProfApi is caleed with id="+lastAddedEmpId);
    console.log(empProfArray);

    empProfArray.map(emp=>{

    //creating a varriabile and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        company_Name:emp.company_Name,
        isCurrent:emp.isCurrent,
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
        }else{
            console.log(err);     
        }
    });

    });
    res.send(`Successfully Added Employee Professional Detail For EmpId=${lastAddedEmpId}`)


});

//{2}*************************get request from FrontEnd**********************{2}//
//geting data from `employeement_professional_details` Table in DB  And Sending back to ClientSide

routerEmpProf.get("/empProfApi/get",(req,res)=>{
    const sql="SELECT * FROM employeement_professional_details";
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            console.log(err);
            res.send(err);
        }
    })
});

//getting A Specefic Data By Employee Id Of EmployeeProfessonal Details Table

routerEmpProf.get("/empProfApi/get/:empId",(req,res)=>{
    const empId=req.params.empId;
    const sql=`select * from employeement_professional_details where empId=${empId} `
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            // console.log(emp);
            console.log("empProfessional Details For id="+empId)
        }else{
            console.log(err);
        }
    })
});


//*************************Update request from FrontEnd**********************
//Updating `Professional` Details

routerEmpProf.post("/empProfApi/update/:profId",(req,res)=>{
    const profId=req.params.profId;
    const updatedProfDetail=req.body;
    console.log(updatedProfDetail);
    console.log("update Professional Details  in backend profId="+profId);

    const sql=`UPDATE employeement_professional_details SET company_Name= '${updatedProfDetail.company_Name}', isCurrent='${updatedProfDetail.isCurrent}', designation='${updatedProfDetail.designation}', joining_Date='${updatedProfDetail.joining_Date}', ending_Date='${updatedProfDetail.ending_Date}', reasonOfResign='${updatedProfDetail.reasonOfResign}', salary=${updatedProfDetail.salary} WHERE (empId = ${updatedProfDetail.empId}) AND (profId=${profId}) `;
    db.query(sql,err=>{
        if(!err){
            console.log(`succesfully updated employee Professional Detailst where empId=${updatedProfDetail.empId} and addrId=${profId}`);
            res.send(`succesfully updated employee address/contact where empId=${updatedProfDetail.empId} and addrId=${profId}`)
        }else{
            console.log(err);
        }
    })

});


//deleting Employee Address Contact Details by Emplyee Id And AddrId
routerEmpProf.post("/empProfApi/delete",(req,res)=>{
    const {empId,profId}=req.body;
    const sql=`delete from employeement_professional_details where (empId=${empId}) AND (profId=${profId})`;
    console.log(sql);
    db.query(sql,err=>{
        if(!err){
            res.send(`suceesfully deleted the employeement_professional_details of emp whre empId=${empId} and profId=${profId} `)
            console.log(`suceesfully deleted the employeement_professional_details of emp whre empId=${empId} and profId=${profId} `);
        }else{
            console.log(err);
        }
    })
});







export default routerEmpProf;