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
    console.log("empPersonal Details from front end")
    console.log(emp);
    console.log("`/empDetailsApi/add` path called from empDetailApi.js")
    
// creating a Object and putting all details in it to send it into database
    const postEmp={
        fName:emp.fName,
        mName:emp.mName,
        lName:emp.lName,
        age:emp.age,
        gender:emp.gender,
        bloodGroup:emp.bloodGroup,
        pwdStatus:emp.pwdStatus,
        adharNumber:emp.adharNumber,
        pancardNumber:emp.pancardNumber,
        department:emp.department,
        designation:emp.designation,
        voterIdNumber:emp.voterIdNumber,
        drivingLicenseNumber:emp.drivingLicenseNumber
    };
// query of sql to to insert data into "employeedetails"
    const sqlQuery="INSERT INTO employeedetails SET ?";

// function to send data in db by using sqlQuery,PostEmp and handling error
    db.query(sqlQuery,postEmp,err=>{
        if(!err){
            // res.send("succesfully added employee details");
            // console.log("succesfully added employee details")
            const sql="SELECT * FROM employeedetails"
            db.query(sql,(err,emp)=>{
              if(!err){
              res.send(emp);
            //   console.log(emp)
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
//geting all data from `employeeDetails` Table in DB  And Sending to ClientSide


router.get("/empDetailsApi/get",body,(req,res)=>{
    const sql="SELECT * FROM employeedetails"
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            console.log(emp)
        }else{
            res.send(err)
        }
    })

});

//gettin data of a specific employee by employee id

router.get(`/empDetailsApi/get/:empId`,(req,res)=>{
    const empIdForGet=req.params.empId;
    // console.log("router.get method from empId ="+empIdForGet);
    // res.send("router.get method from empId ="+empIdForGet); 
    const sql=`select * from employeedetails where empId=${empIdForGet}`
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            console.log(emp);
        }else{
            console.log(err);
        }
    })  
})


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
            console.log(err)
        }
    });

});

//(4)*************************Update request from FrontEnd**********************{4}//
          //Updating Employee from `employeeDetails` Table and child tables


router.post("/empDetailsApi/update",(req,res)=>{
    const {updatedEmpPersonalDetails,empIdForUpdate}=req.body;
    console.log("updated data from front end to back end=")
    console.log(updatedEmpPersonalDetails);
    console.log(empIdForUpdate)
    const sql=`UPDATE employeedetails SET fName= '${updatedEmpPersonalDetails.fName}', mName= '${updatedEmpPersonalDetails.mName}',lName= '${updatedEmpPersonalDetails.lName}',age= '${updatedEmpPersonalDetails.age}',gender= '${updatedEmpPersonalDetails.gender}',bloodGroup= '${updatedEmpPersonalDetails.bloodGroup}',pwdStatus= '${updatedEmpPersonalDetails.pwdStatus}',adharNumber= ${updatedEmpPersonalDetails.adharNumber}, pancardNumber= '${updatedEmpPersonalDetails.pancardNumber}',drivingLicenseNumber= '${updatedEmpPersonalDetails.drivingLicenseNumber}',department= '${updatedEmpPersonalDetails.department}',designation= '${updatedEmpPersonalDetails.designation}'  WHERE empId = ${empIdForUpdate}`;
    db.query(sql,err=>{
        if(!err){
            console.log("successfully updated employee id= "+empIdForUpdate);
            res.send("successfully updated employee id= "+empIdForUpdate);
        }else{
            console.log(err);
        }
    })
});





export default router;