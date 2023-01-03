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
    const {empEducationArray,lastAddedEmpId}=req.body;
    
    console.log("empProfApi is called with id="+lastAddedEmpId)
    
    console.log(empEducationArray);

    empEducationArray.map(emp=>{
    //creating a Object and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        education:emp.education,
        percentage:emp.percentage,
        yearOfPassing:emp.yearOfPassing,
        instituteName:emp.instituteName,
        place:emp.place
    }

   //Sql Query String
   const sql=("INSERT INTO emp_education_details SET ?");

    // Sql Function To perform Db Operations
    db.query(sql,post,err=>{
        if(!err){
            console.log("successfully added doc in `emp_education_details` table");   
        }else{
            console.log(err);    
        }
    })
    });

    res.send(`successfully added doc in "emp_education_details" table where empId=${lastAddedEmpId}`)
    

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

//getting A Specefic Data By Employee Id Of `emp_education_details` Table

routerEmpEdu.get("/empEduApi/get/:empId",(req,res)=>{
    const empId=req.params.empId;
    const sql=`select * from emp_Education_Details where empId=${empId} `
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            console.log("emp_Education_Details Details For id="+empId)
        }else{
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