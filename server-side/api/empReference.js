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
    const {empReferenceArray,lastAddedEmpId}=req.body;
    console.log("empReferApi is caleed with id="+lastAddedEmpId)
    console.log(empReferenceArray);

    empReferenceArray.map(emp=>{
    //creating a varriabile and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        referedBy:emp.referedBy,
        relation:emp.relation,
        address:emp.address,
        city:emp.city,
        phone1:emp.phone1,
        
    }

    //query of sql to to insert data into "emp_reference_details"
    const sql=("INSERT INTO emp_reference_details SET ?");

    db.query(sql,post,err=>{
        if(!err){
            console.log("successfully inserted docs into `employeement_professional_details` table");   
            
        }else{
            console.log(err);
        }
    });

    });
    res.send("successfully inserted docs into `employeement_professional_details` table")
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
});

//getting A Specefic Data By Employee Id Of EmployeeProfessonal Details Table

routerEmpRefer.get("/empReferApi/get/:empId",(req,res)=>{
    const empId=req.params.empId;
    const sql=`select * from emp_reference_details where empId=${empId} `
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            // console.log(emp);
            console.log("mp_reference_details For id="+empId)
        }else{
            console.log(err);
        }
    })
});



//(3)***********************Update request from FrontEnd/Postment********************{3}//
     //Updating data from `emp_reference_details` Table in DB  And Sending to ClientSide/postman

//Updating `Reference` Details

routerEmpRefer.post("/empReferApi/update/:refId",(req,res)=>{
    const refId=req.params.refId;
    const updatedRefrnceDetail=req.body;
    console.log(updatedRefrnceDetail);
    console.log("update emp_reference_details  in backend refId="+refId);

    const sql=`UPDATE emp_reference_details SET referedBy= '${updatedRefrnceDetail.referedBy}', relation='${updatedRefrnceDetail.relation}', address='${updatedRefrnceDetail.address}', city='${updatedRefrnceDetail.city}', phone1=${updatedRefrnceDetail.phone1} WHERE (empId = ${updatedRefrnceDetail.empId}) AND (refId=${refId}) `;
    db.query(sql,err=>{
        if(!err){
            console.log(`succesfully updated emp_reference_details Detailst where empId=${updatedRefrnceDetail.empId} and refId=${refId}`);
            res.send(`succesfully updated emp_reference_details where empId=${updatedRefrnceDetail.empId} and refId=${refId}`)
        }else{
            console.log(err);
        }
    })

});

//(4)*************************Delete request from FrontEnd/Postment**********************{4}//
     //Deleting data from `emp_reference_details` Table in DB  And Sending to ClientSide/postman

    routerEmpRefer.post("/empReferApi/delete",(req,res)=>{
        const {empId,refId}=req.body;
        const sql=`delete from emp_reference_details where (empId=${empId}) AND (refId=${refId})`;
        console.log(sql);
        db.query(sql,err=>{
            if(!err){
                res.send(`suceesfully deleted the employeement_professional_details of emp whre empId=${empId} and refId=${refId} `);
                console.log(`suceesfully deleted the emp_reference_details of emp whre empId=${empId} and refId=${refId} `);
            }else{
                console.log(err);
            }
        })
    });

export default routerEmpRefer;