import express from "express"
import bodyParser from "body-parser"
import { Router } from "express"
import { db } from "../connection.js"


const app=express();
const routerSalMaster=Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//(1)***********************POST/Creat request from FrontEnd/Postment**********************{1}//
    //***************INSERTING/Adding details TO sal_master TABLE**************//
  
routerSalMaster.post("/salMasterApi/add",(req,res)=>{
    const emp=req.body;

    //creating a Object and putting all details in it to send it into database
    const post={
        empId:emp.empId,
        crnt_month:emp.crnt_month,
        total_gross_sal:emp.total_gross_sal,
        total_adv_ot:emp.total_adv_ot,
        net_sal:emp.net_sal,
        status_payment:emp.status_payment
    }
    
    //sql Query String
    const sqlQuery="INSERT INTO sal_master SET ?";

    //Sql Function to perform Db Operations
    db.query(sqlQuery,post,err=>{
        if(!err){
            console.log("successfully added data to sal_master table")
            res.send("successfully added data to sal_master table")
        }else{
            res.send(err);
        }  
    })
    
})


//(1)***********************Get request from FrontEnd/Postment**********************{1}//
   //***************Sending  details froms sal_master TABLE to FrontENd**************//

routerSalMaster.get("/salMasterApi/get",(req,res)=>{
    const sqlQuery="SELECT * FROM sal_master";
    db.query(sqlQuery,(err,emp)=>{
        if(!err){
            console.log(emp);
            res.send(emp);
        }else{
            res.send(err);
            console.log(err);
        }

    })
});

//(3)***********************Update request from FrontEnd/Postment********************{3}//
                     //Updating data from `sal_saster` Table in DB  

routerSalMaster.post("/salMasterApi/update",(req,res)=>{
    const {feild,updateQuery,empIdForUpdate}=req.body;         //object destructing
    const sqlQuery= `UPDATE sal_master SET ${feild} = '${updateQuery}' WHERE empId= ${empIdForUpdate}`;
    db.query(sqlQuery,err=>{
        if(!err){
            res.send("successfully updated employee details empID="+empIdForUpdate);
            console.log("successfully updated employee details empID="+empIdForUpdate);
        }else{
            res.send(err);
            console.log(err);
        }
    })  
});

//(4)***********************Delete request from FrontEnd/Postment********************{4}//
     //Deleting data from `sal_saster` Table in DB  And Sending to ClientSide/postman

routerSalMaster.delete("/salMasterApi/delete/:id",(req,res)=>{
    const empIdForDel=req.params.id;
    const sqlQuery=`DELETE FROM sal_master WHERE empId=${empIdForDel}`;

    db.query(sqlQuery,err=>{
        if(!err){
            console.log("succesfully deleted employee empid="+empIdForDel);
            res.send("succesfully deleted employee empid="+empIdForDel);
        }else{
            res.send(err);
            console.log(err);
        }
    })
})



export default routerSalMaster;