import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CancelIcon from '@mui/icons-material/Cancel';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmpDetailsForm from './EmpDetailsForm';
import EmpAddContForm from './EmpAddContForm';
import EmpProfDetails from './EmpProfForm';
import EmpEducationDetails from './EmpEducationForm';
import EmpRefrenceForm from './EmpReferenceForm';
import EmpFullFormDetails from './EmpFullFormDetails';
import CloseAddModel from './CloseAddModel';
import Axios from "axios";




export default function EmpAddModel(props) {
  const [isEmpAddOpen,setEmpAddOpen]=useState(true);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  const [sectionDisabled,setSectionDisabled]=useState({
    personalDetails:false,
    addContDetails:true,
    professionalDetails:true,
    educationDetails:true,
    referenceDetails:true,
    finalSubmit:true
  });
  const [modalShow, setModalShow] = useState(false);
  const [submitAllStage,setSubmitAllStage]=useState(false);

//******************Initailasing The State Of Every Form SecTion******************//
  const [empPersonalDetails,setEmpPersonalDetails]=useState({
    fName:"",    mName:"",      lName:"",age:"", gender:"",bloodGroup:"",department:"",
    pwdStatus:"",adharNumber:"",pancardNumber:"",drivingLicenseNumber:"",designation:""
  });

  //------------------States Fro Employee Address/Contact Section----------//
  const[empAddContDetails,setEmpAddContDetails]=useState({
    add1:"", apartment:"", landMark:"", city:"",
    state:"", pincode:"", mobNum:"", altMobNum:""
  });

  const [empAddContArray,setEmpAddContArray]=useState([]);

  //------------------States Fro Employee Professional Section----------//

  const[empProfDetails,setEmpProfDetails]=useState({
    company_Name:"", isCurrent:"",designation:"", joining_Date:"",
    ending_Date:"", reasonOfResign:"",salary:""
    });

  const [empProfArray,setEmpProfArray]= useState([]);

  //------------------States Fro Employee Education Section----------//  

  const[empEducationDetails,setEmpEducationDetails]=useState({
    education:"", percentage:"", yearOfPassing:"",
    instituteName:"", place:"",
    });

  const [empEducationArray,setEmpEducationArray]=useState([]);
  
  //------------------States Fro Employee Reference Section----------//

  const[empRefrenceDetails,setEmpRefrenceDetails]=useState({
    referenceName:"",  relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    }); 

  const [empReferenceArray,setEmpReferenceArray]=useState([])


  useEffect(()=>{
    setEmpAddOpen(true);
  },[props.empAddModelOpen]);

  const radios = [
    { name: 'Personal Details', value: 'personalDetailsClicked', isDisabled:sectionDisabled.personalDetails},
    { name: 'Address/Contact Details', value: 'addContClicked', isDisabled:sectionDisabled.addContDetails },
    { name: 'Professonal Details', value: 'profClicked', isDisabled:sectionDisabled.professionalDetails },
    { name: 'Education Details', value: 'educationClicked', isDisabled:sectionDisabled.educationDetails },
    { name: 'Reference Details', value: 'referenceClicked', isDisabled:sectionDisabled.referenceDetails} 
  ];

  //*************Handling 1st Section(Personal Details)***********

  // handling and saving Changes in EmployeeAddressContact Form Data
  function handleChangeEmpDetailsForm(e){
    console.log("empdetails handle Change From Parent")
    const {name,value}=e.target;
    setEmpPersonalDetails(prevValue=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
    console.log(empPersonalDetails)
  };

//Clearing EmplyeesDetails Form Feild On clicking Clear Button 
  function clearEmpDetailsForm(){
    setEmpPersonalDetails({
      fName:"",    mName:"",      lName:"",age:"", gender:"",bloodGroup:"",
      pwdStatus:"",adharNumber:"",pancardNumber:"",drivingLicenseNumber:""
    })
  }

//******************Handling 2nd Section(Address and Contact details)*****************

  // handling and saving Changes in EmployeeAddressContact Details Form Data
  function handleChangeEmpAddContForm(e){
    const {name,value}=e.target;
    setEmpAddContDetails(prev=>{
       return{
        ...prev,
        [name]:value
       } 
    })
    console.log(empAddContDetails)
  }
  //Clearing EmployeeAddressContact Form Feild On clicking Clear Button 
  function clearEmpAddContForm(){
    setEmpAddContDetails({
      add1:"", apartment:"", landMark:"", city:"",
      state:"", pincode:"", mobNum:"", altMobNum:""
    })
  }

  //Adding Address/contact details In Table List 

  function addDetailsToArray(){
    
    setEmpAddContArray(prev=>{
      return [...prev,empAddContDetails]
    });
    clearEmpAddContForm();

  }

 
//******************Handling 3rd Section(Professional details)*****************

  // handling and saving Changes in EmployeeProfessional Details Form Data
  function handleChangeEmpProfessionalForm(e){
    const {name,value}=e.target
    setEmpProfDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(empProfDetails)
  }
  //Clearing EmployeeProfessional Form Feild On clicking Clear Button
  function clearEmpProfessionalForm(){
    setEmpProfDetails({
      company_Name:"",designation:"",   joining_Date:"",
      ending_Date:"", reasonOfResign:"",salary:""
    })
  }

  //Adding Professional details In Table List 
  function addProfDetailsToArray(){
    setEmpProfArray(prev=>{
      return[...prev,empProfDetails]
    });
    clearEmpProfessionalForm();

  }

//******************Handling 4th Section(Education details)*****************

  // handling and saving Changes in EmployeeEducation Details Form Data
  function handleChangeEmpEducationForm(e){
    const {name,value}=e.target;
    setEmpEducationDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
   console.log(empEducationDetails); 
  }
  //Clearing EmployeeProfessional Form Feild On clicking Clear Button
  function clearEmpEducationForm(){
    setEmpEducationDetails({
      education:"", percentage:"", yearOfPassing:"",
      instituteName:"", place:""
    })
  }

  function addEducationDetailToArray(){
    setEmpEducationArray(prev=>{
      return[...prev,empEducationDetails]
    })
    clearEmpEducationForm();

  }
//******************Handling 5th Section(Reference Details)*****************

  // handling and saving Changes in EmployeeReference Details Form Data 

  function handleChangeEmpReferenceForm(e){
    const {name,value}=e.target;
    setEmpRefrenceDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(empRefrenceDetails);
  }

  //Clearing EmployeeRefrence Form Feild On clicking Clear Button
  function clearEmpReferenceForm(){
    setEmpRefrenceDetails({
    referenceName:"",relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    })
  }

  function addReferenceDetailsToArray(){
    setEmpReferenceArray(prev=>{
      return[...prev,empRefrenceDetails]
    })
    clearEmpReferenceForm();
  }



//********************************Final Submission*************************************//
function finalFullFormDetails(){
  setSubmitAllStage(true);
  console.log("clicked on full foem details")
  console.log(empPersonalDetails);
  console.log(empAddContArray);
  console.log(empProfArray);
  console.log(empEducationArray);
  console.log(empReferenceArray)


  var lastAddedEmpId;
 
  
  //Sending Data To EMployeeDetails Api
  Axios.post("http://localhost:3001/empDetailsApi/add",empPersonalDetails)
  .then(res=>{
  if(res.status===200){
    const lengthOfDataArr=(res.data).length;
    lastAddedEmpId=res.data[lengthOfDataArr-1].empId;
    console.log("successfully Added EMployeePersonal Details with empId="+lastAddedEmpId)
  
  //Sending Data To empAddCont Api   
  Axios.post("http://localhost:3001/empAddContApi/Add",({empAddContArray,...{lastAddedEmpId}}));
 

  //Sending Data To EmpProfessinal Api
  Axios.post("http://localhost:3001/empProfApi/add",({empProfArray,...{lastAddedEmpId}}));
 
  
  //Sending Data To empEducation Api
  Axios.post("http://localhost:3001/empEduApi/add",({empEducationArray,...{lastAddedEmpId}}));
 
  //Sending Data To empRefrerence Api
  Axios.post("http://localhost:3001/empReferApi/add",({empReferenceArray,...{lastAddedEmpId}}));
  
 

}}); 
console.log("Full Data of employee is Compltely Saved In Data BAse")
}

    
  return ( 
    <>
    <div style={{ display: isEmpAddOpen ? "block" : "none" }}>
    <CloseAddModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <div style={{display: "flex",justifyContent: "space-between", margin:"7px"}}>
    <ButtonGroup>
        <ToggleButton
            key={122}
            id={`22`}
            type="radio"
            variant={'outline-dark'}
            name="Add Employee Details"
            value={"personalDetailsClicked"}
            disabled
        >
            Adding Employee Details
        </ToggleButton>
    </ButtonGroup>

    <Button onClick={() =>{if(submitAllStage){window.location.reload()}else{setModalShow(true)}}} variant="outline-danger"><CancelIcon/></Button>

    </div>
    
    <Card >
        <Card.Header style={{textAlign:"center",padding:"10px"}}>    
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <><ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={'outline-success'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}    
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                disabled={radio.isDisabled ? true : false}
                >
               <div >{radio.name }</div> 
                <DoubleArrowIcon />
               </ToggleButton>
              </>
            ))}
            <ToggleButton
                key={1}
                id={`1`}
                type="radio"
                variant={'outline-dark'}
                name="radio"
                value={"completed"}
                checked={radioValue === "completed"}    
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                disabled={sectionDisabled.finalSubmit}
                >
               <div >Final Submition</div>
               <VerifiedIcon/> 
            </ToggleButton>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            
            <Card.Text style={{marginBottom:"0%"}} >
              {
                radioValue==="personalDetailsClicked" ? 
                <EmpDetailsForm 
                  submitNext={()=>{setRadioValue('addContClicked');
                  setSectionDisabled(prev=>{return{...prev,addContDetails:false}})}
                  }
                  handleChange={handleChangeEmpDetailsForm}
                  handleClear={clearEmpDetailsForm}
                  fName={empPersonalDetails.fName}
                  mName={empPersonalDetails.mName}
                  lName={empPersonalDetails.lName}
                  age={empPersonalDetails.age}
                  gender={empPersonalDetails.gender}
                  bloodGroup={empPersonalDetails.bloodGroup}
                  pwdStatus={empPersonalDetails.pwdStatus}
                  department={empPersonalDetails.department}
                  designation={empPersonalDetails.designation}
                  adharNumber={empPersonalDetails.adharNumber}
                  pancardNumber={empPersonalDetails.pancardNumber}
                  drivingLicenseNumber={empPersonalDetails.drivingLicenseNumber}
                />:null
              }
              {
                radioValue==="addContClicked" ? 
                <EmpAddContForm
                  submitNext={()=>{setRadioValue('profClicked');
                  setSectionDisabled(prev=>{return{...prev,professionalDetails:false}})}
                  }
                  prevSection={()=>setRadioValue('personalDetailsClicked')}
                  empAddArray={empAddContArray}
                  addDetailsToList={addDetailsToArray}
                  handleChange={handleChangeEmpAddContForm}
                  handleClear={clearEmpAddContForm} 
                  add1={empAddContDetails.add1}
                  apartment={empAddContDetails.apartment}
                  landMark={empAddContDetails.landMark}
                  city={empAddContDetails.city}
                  state={empAddContDetails.state}
                  pincode={empAddContDetails.pincode}
                  mobNum={empAddContDetails.mobNum}
                  altMobNum={empAddContDetails.altMobNum}

                /> : null
              }
              {
                radioValue==="profClicked" ? 
                <EmpProfDetails
                 submitNext={()=>{setRadioValue(`educationClicked`);
                 setSectionDisabled(prev=>{return{...prev,educationDetails:false}})}
                 }
                 prevSection={()=>setRadioValue('addContClicked')}
                 empProfArray={empProfArray}
                 addProfDetailsToList={addProfDetailsToArray}
                 handleChange={handleChangeEmpProfessionalForm}
                 handleClear={clearEmpProfessionalForm}
                 company_Name={empProfDetails.company_Name}
                 isCurrent={empProfDetails.isCurrent}
                 designation={empProfDetails.designation}
                 joining_Date={empProfDetails.joining_Date}
                 ending_Date={empProfDetails.ending_Date}
                 reasonOfResign={empProfDetails.reasonOfResign}
                 salary={empProfDetails.salary}
                /> :null
              }
              {
                radioValue==="educationClicked" ? 
                <EmpEducationDetails
                submitNext={()=>{setRadioValue('referenceClicked');
                setSectionDisabled(prev=>{return{...prev,referenceDetails:false}})}
                }
                prevSection={()=>setRadioValue('profClicked')}
                empEducationArray={empEducationArray}
                addEducationDetailsToList={addEducationDetailToArray}
                handleChange={handleChangeEmpEducationForm}
                handleClear={clearEmpEducationForm}
                education={empEducationDetails.education}
                percentage={empEducationDetails.percentage}
                yearOfPassing={empEducationDetails.yearOfPassing}
                instituteName={empEducationDetails.instituteName}
                place={empEducationDetails.place}
                /> :null
              }
              {
                radioValue==="referenceClicked" ? 
                <EmpRefrenceForm
                submitNext={()=>{setRadioValue('completed');
                setSectionDisabled(prev=>{return{...prev,finalSubmit:false}})}
                }
                prevSection={()=>setRadioValue('educationClicked')}
                emRefrnceArray={empReferenceArray}
                addRefrnceDetailsToList={addReferenceDetailsToArray}
                handleChange={handleChangeEmpReferenceForm}
                handleClear={clearEmpReferenceForm} 
                referenceName={empRefrenceDetails.referenceName}  
                relation={empRefrenceDetails.relation}
                address={empRefrenceDetails.address}
                city={empRefrenceDetails.city}
                phone1={empRefrenceDetails.phone1}
                phone2={empRefrenceDetails.phone2}
                /> :null
              }
             
              {
                radioValue==="completed" ? 
                <EmpFullFormDetails 
                reviewIt={()=>setRadioValue('personalDetailsClicked')}
                finalSubmit={finalFullFormDetails}
                /> : null
              }
            </Card.Text>
            
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

