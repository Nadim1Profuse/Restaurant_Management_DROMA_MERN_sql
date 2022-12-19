import express from "express"
import { Router } from "express"
import bodyParser from "body-parser"
import { db } from "../connection.js"
import cors from "cors";


const app=express();
app.use(cors());
const routerEmpEdu=Router();
app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());

//(1)***********************POST request from FrontEnd/Postment**********************{1}//
   //***************INSERTING/Adding details TO emp_education_details TABLE**************//

routerEmpEdu.post("/empEduApi/add",body,(req,res)=>{
    const {empEducationDetails,lastAddedEmpId}=req.body;
    const emp=empEducationDetails;
    console.log("empProfApi is called with id="+lastAddedEmpId)
    console.log(emp);
    
//creating a Object and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        ssc_percentage:emp.ssc_percentage,
        hsc_percentage:emp.hsc_percentage,
        graduation_Stream:emp.graduation_Stream,
        year_of_Graduation:emp.year_of_Graduation,
        post_Graduation_Stream:emp.post_Graduation_Stream,
        year_of_pg:emp.year_of_pg,
        college_name:emp.college_name,
        university_name:emp.university_name,
        any_diploma:emp.any_diploma,
        any_Certification:emp.any_Certification
    }

   //Sql Query String
    const sql=("INSERT INTO emp_education_details SET ?");

    //Sql Function To perform Db Operations
    db.query(sql,post,err=>{
        if(!err){
            console.log("successfully added doc in `emp_education_details` table");
            res.send("successfully added doc in `emp_education_details` table");
        }else{
            console.log(err);
            res.send(err);
        }
    })

})

//{2}*************************get request from FrontEnd**********************
//geting data from `emp_education_details` Table in DB  And Sending back to ClientSide

routerEmpEdu.get("/empEduApi/get",(req,res)=>{
    const sql="SELECT * FROM emp_Education_Details"
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            res.send(err);
            console.log(err);
        }
    })
});

//***********************Update request from FrontEnd/Postment********************{3}//
                //Updating data from `emp_Education_Details` Table in DB  

routerEmpEdu.post("/empEduApi/update",(req,res)=>{
    const {feild,updateQuery,empIdForUpdate}=req.body;
    const sqlQuery=`UPDATE emp_Education_Details SET ${feild}='${updateQuery}' WHERE empId=${empIdForUpdate} `;
    db.query(sqlQuery,err=>{
        if(!err){
            res.send("successfully updated empId="+empIdForUpdate);
            console.log("successfully updated empId="+empIdForUpdate);
        }else{
            res.send(err);
            console.log(err);
        }

    })

});

//(4)************************Delete request from FrontEnd/Postment*******************{4}//
                  //Deleting data from `emp_Education_details` Table in DB  

routerEmpEdu.delete("/empEduApi/delete/:id",(req,res)=>{
    const empIdForDel=req.params.id;
    const sqlQuery=`DELETE FROM emp_Education_details WHERE empId = ${empIdForDel} `;
    db.query(sqlQuery,err=>{
        if(!err){
            res.send("successfully deleted empId="+empIdForDel);
            console.log("successfully deleted empId="+empIdForDel);
        }else{
            res.send(err);
            console.log(err);
        }
    })
})




export default routerEmpEdu;