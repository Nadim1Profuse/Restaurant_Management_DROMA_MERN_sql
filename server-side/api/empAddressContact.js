import express from "express";
import { Router } from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import cors from "cors"

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
const body=app.use(bodyParser.json());

const routerAdd=Router();

//**********************INSERTING details TO TABLE EmployeeDetails*********************//
routerAdd.post("/empAddContApi/Add",body,(req,res)=>{
    console.log("`/empAddContApi/Add` path called" );
    const {empAddContArray,lastAddedEmpId}=req.body;
    console.log("employee Id latest="+lastAddedEmpId);
    console.log(empAddContArray);
   

    empAddContArray.map(emp=>{
        
    //creating a varriabile and putting all details in it to send it into database    
    const empPost={
        empId: lastAddedEmpId,
        address1: emp.address1,
        apartment:emp.apartment,
        landMark: emp.landMark,
        city: emp.city,
        state: emp.state,
        pincode: 440018,
        mobileNumber: emp.mobileNumber,
        alternateMobileNumber: emp.alternateMobileNumber,
        
    }
    // query of sql to to insert data into "empaddcontact"
    const sql=("INSERT INTO empaddcontact SET ?");
    db.query(sql,empPost,err=>{
        if(!err){
            console.log("successfully added emp details in `empaddcontact` table");
            
        }else{
            console.log(err);
            
        }
    })

    });
    res.send("SuccesFully added AddressCOntact Details to Database empId= "+lastAddedEmpId)
 

});

//*************************get request from FrontEnd**********************
//geting All data from `empaddcontact` Table in DB  And Sending back to ClientSide

routerAdd.get("/empAddContApi/get",(req,res)=>{
    const sql="SELECT * FROM empaddcontact"
    db.query(sql,(err,emp)=>{
        if(!err){
            // console.log(emp)
            res.send(emp);
        }else{
            console.log(err)
        }
    })
});

//getting A Specefic Data Of EmployeeAddressContact By Employee Id

routerAdd.get("/empAddContApi/get/:empId",(req,res)=>{
    const empId=req.params.empId;
    const sql=`select * from empaddcontact where empId=${empId} `
    db.query(sql,(err,emp)=>{
        if(!err){
            res.send(emp);
            // console.log(emp);
            console.log("empAddressContactFor id="+empId)
        }else{
            console.log(err);
        }
    })
});


//*************************Update request from FrontEnd**********************
//Updating `empaddcontact` Details

routerAdd.post("/empAddrCont/update/:addrId",(req,res)=>{
    const addrId=req.params.addrId;
    const updatedAddrCont=req.body;
    console.log(updatedAddrCont);
    console.log("update addr cont method in backend addrId="+addrId);

    const sql=`UPDATE empaddcontact SET address1= '${updatedAddrCont.address1}', landMark='${updatedAddrCont.landMark}', city='${updatedAddrCont.city}', state='${updatedAddrCont.state}', apartment='${updatedAddrCont.apartment}', pincode=${updatedAddrCont.pincode}, mobileNumber=${updatedAddrCont.mobileNumber}, alternateMobileNumber=${updatedAddrCont.alternateMobileNumber} WHERE (empId = ${updatedAddrCont.empId}) AND (addrId=${addrId}) `;
    db.query(sql,err=>{
        if(!err){
            console.log(`succesfully updated employee address/contact where empId=${updatedAddrCont.empId} and addrId=${addrId}`);
            res.send(`succesfully updated employee address/contact where empId=${updatedAddrCont.empId} and addrId=${addrId}`)
        }else{
            console.log(err);
        }
    })

});

//deleting Employee Address Contact Details by Emplyee Id And AddrId
routerAdd.post("/empAddContact/delete",(req,res)=>{
    const {empId,addrId}=req.body;
    const sql=`delete from empaddcontact where (empId=${empId}) AND (addrId=${addrId})`;
    console.log(sql);
    db.query(sql,err=>{
        if(!err){
            res.send(`suceesfully deleted the addressContact of emp whre empId=${empId} and addrId=${addrId} `)
            console.log(`suceesfully deleted the addressContact of emp whre empId=${empId} and addrId=${addrId} `);
        }else{
            console.log(err);
        }
    })
});







export default routerAdd;