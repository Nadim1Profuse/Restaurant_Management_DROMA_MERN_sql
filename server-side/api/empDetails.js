import express from "express"
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import cors from "cors";

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());
const router=Router();

//**********************INSERTING details TO EmployeeDetails TABLE*********************//

router.post("/empDetailsApi/add",body,(req,res)=>{
    const emp=req.body;
    console.log(emp);
    console.log("`/empDetailsApi/add` path called from empDetailApi.js")
    
//creating a Object and putting all details in it to send it into database
    const postEmp={
        fName:emp.fName,
        mName:emp.mName,
        lName:emp.lName,
        age:emp.age,
        gender:emp.gender,
        bloodGroup:emp.bloodGroup,
        pwdStatus:emp.pwdStatus,
        adharNumber:emp.adharNumber,
        pancardNumber:emp.panCardNumber,
        department:emp.department,
        designation:emp.designation,
        voterIdNumber:emp.voterIdNumber,
        drivingLicenseNumber:emp.drivingLicenseNumber
    };
//query of sql to to insert data into "employeedetails"
    const sqlQuery="INSERT INTO employeedetails SET ?";

// function to send data in db by using sqlQuery,PostEmp and handling error
    db.query(sqlQuery,postEmp,err=>{
        if(!err){
            // res.send("succesfully added employee details");
            // console.log("succesfully added employee details")
            const sql="SELECT * FROM employeedetails"
            db.query(sql,(err,emp)=>{
              if(!err){
              res.send(postEmp);
              }else{
              res.send(err)
              }
    })

            
        }else{
            console.log(err);
        }
    })

});


//(2)*************************get request from FrontEnd**********************{2}//
//geting data from `employeeDetails` Table in DB  And Sending to ClientSide


router.get("/empDetailsApi/get",body,(req,res)=>{
    const sql="SELECT * FROM employeedetails"
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
        }else{
            res.send(err)
        }
    })

});

//(3)*************************Delete request from FrontEnd**********************{3}//
//Deleting Employee from `employeeDetails` Table and child tables

router.delete("/delete/:id",(req,res)=>{
    const idForDelete=parseInt(req.params.id);
    let sqlQuery = "DELETE FROM employeedetails WHERE empId = " +idForDelete+";"

    db.query(sqlQuery,err=>{
        if(!err){
            console.log("Succsefully deleted from parent");
            res.send("successfully deleted employee empId="+idForDelete)
        }else{
            res.send(err);
        }
    });

});

//(4)*************************Update request from FrontEnd**********************{4}//
          //Updating Employee from `employeeDetails` Table and child tables


router.post("/updateAddCont",(req,res)=>{
    const {feild,updateQuery,empIdForUpdate}=req.body;
    const sql=`UPDATE empaddcontact SET ${feild} = '${updateQuery}' WHERE empId = ${empIdForUpdate}`;
    db.query(sql,err=>{
        if(!err){
            console.log("successfully updated employee id= "+empIdForUpdate);
        }else{
            console.log(err);
        }
    })
});





export default router;