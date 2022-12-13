import exprees from "express";
import bodyParser from "body-parser";
import { db } from "../connection.js";
import { Router } from "express";


const app=exprees();
const routerSalAdvPenlty=Router();
app.use(bodyParser.urlencoded({extended:true}));
const body=app.use(bodyParser.json());

//(1)***********************POST request from FrontEnd/Postment**********************{1}//
   //***************INSERTING/Adding details TO sal_adv_penalty TABLE**************//

routerSalAdvPenlty.post("/salAdvPenlty/add",body,(req,res)=>{
    const {empSalAdvPenaltyDetails,lastAddedEmpId}=req.body;
    const emp=empSalAdvPenaltyDetails
    console.log("salAdvPenlty is caleed with id="+lastAddedEmpId)
    console.log(emp);

    //creating a Object and putting all details in it to send it into database
    const post={
        empId:lastAddedEmpId,
        date_:emp.date_,
        reason:emp.reason,
        amount_perDay:emp.amount_perDay,
        type_adv_penalty:emp.type_adv_penalty
    }

    //sql Query String
    const sqlQuery="INSERT INTO sal_adv_penalty SET ?"
    //sql Function to perfom db operations
    db.query(sqlQuery,post,err=>{
        if(!err){
            console.log("Successfully added dat to sal_adv_penalty table")
            res.send("Successfully added dat to sal_adv_penalty table")
        }else{
            console.log(err);
            res.send(err);
        }
    })
})
//(2)***********************Get request from FrontEnd/Postment********************{2}//
  //*****************GET all Docs from sal_adv_penalty TABLE****************//

routerSalAdvPenlty.get("/empSalAdvPenltyApi/get",(req,res)=>{
    const sqlQuery="SELECT * FROM sal_adv_penalty";
    db.query(sqlQuery,(err,emp)=>{
        if(!err){
            res.send(emp)
        }else{
            res.send(err)
        }
    })
});

//(3)***********************Update request from FrontEnd/Postment********************{3}//
     //Updating data from `sal_adv_penalty` Table in DB  And Sending to ClientSide/postman

    routerSalAdvPenlty.post("/empSalAdvPenltyApi/update",(req,res)=>{
        const {feild,updateQuery,empIdForUpdate}=req.body;
        const sqlQuery=`UPDATE sal_adv_penalty SET ${feild} = ${updateQuery} WHERE empId=${empIdForUpdate}`;
        db.query(sqlQuery,err=>{
            if(!err){
                console.log("Successfully Updated the Employee Details empId="+empIdForUpdate);
            }else{
                console.log(err)
            }
        })
     })

//(4)***********************DELETE request from FrontEnd/Postment********************{4}//
  //DELETING data from `sal_adv_penalty` Table in DB  And Sending to ClientSide/postman

    routerSalAdvPenlty.delete("/empSalAdvPenltyApi/delete/:id",(req,res)=>{
        const empIdForDelete=req.params.id;
        const sqlQuery=`DELETE FROM sal_adv_penalty WHERE empId= ${empIdForDelete} `;
        
        db.query(sqlQuery,err=>{
            if(!err){
                console.log("succesfully delted employee where empId= "+empIdForDelete);
                res.send("succesfully delted employee where empId= "+empIdForDelete);
            }else{
                console.log(err);
            }
        })
    })


export default routerSalAdvPenlty;
