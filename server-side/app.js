import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./api/empDetails.js";
import routerAddCont from "./api/empAddressContact.js";
import routerEmpEdu from "./api/empEducation.js";
import routerEmpProf from "./api/empProfessional.js";
import routerEmpRefer from "./api/empReference.js";
import routerEmpSalaryAccession from "./api/empSalaryAccession.js";
import routerEmpSalaryDeduction from "./api/empSalaryDeduction.js";


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//*********************************Path Declairing for Router***********************//
// declaring a default path for router from empDetailsApi.js
app.use("/",router);
// declaring a default path for router from empAddContApi.js
app.use("/",routerAddCont);
// declaring a default path for router from empEduApi.js
app.use("/",routerEmpEdu);
// declaring a default path for router from empProfApi.js
app.use("/",routerEmpProf);
// declaring a default path for router from empReference.js
app.use("/",routerEmpRefer);
// declaring a default path for router from empSalaryAccession.js
app.use('/',routerEmpSalaryAccession);
// declaring a default path for router from empSalaryDeduction.js
app.use('/',routerEmpSalaryDeduction);



app.listen(3001,()=>{
    console.log("server is connected localhost 3001");
});