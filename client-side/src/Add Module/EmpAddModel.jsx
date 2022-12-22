import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
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

  const[empAddContDetails,setEmpAddContDetails]=useState({
    add1:"", apartment:"", landMark:"", city:"",
    state:"", pincode:"", mobNum:"", altMobNum:""
  });

  const [empAddContObj,setEmpAddContObj]=useState([]);

  const[empProfDetails,setEmpProfDetails]=useState({
    company_Name:"",designation:"",   joining_Date:"",
    ending_Date:"", reasonOfResign:"",salary:""
    });

  const[empEducationDetails,setEmpEducationDetails]=useState({
    ssc_percentage:"",hsc_percentage:"",graduation_Stream:"", 
    year_of_Graduation:"",post_Graduation_Stream:"",year_of_pg:"",
    any_diploma:"",any_Certification:"",college_name:"",university_name:"",
    });

  const[empRefrenceDetails,setEmpRefrenceDetails]=useState({
    referenceName:"",  relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    }); 


//Complte Form Details From All Section TO Sinlge Object
  const empCompleteDetails={
    empPersonalDetails,
    empAddContDetails,
    empProfDetails,
    empEducationDetails,
    empRefrenceDetails
  }
  

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

  function addDetailsToArray(){
    
    setEmpAddContObj(prev=>{
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
    ssc_percentage:"",hsc_percentage:"",graduation_Stream:"", 
    year_of_Graduation:"",post_Graduation_Stream:"",year_of_pg:"",
    any_diploma:"",any_Certification:"",college_name:"",university_name:"",
    })
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



//********************************Final Submission*************************************//
function finalFullFormDetails(){
  setSubmitAllStage(true);
  var lastAddedEmpId;
  console.log("clicked on full foem details")
  console.log(empCompleteDetails);
  //Sending Data To EMployeeDetails Api
  Axios.post("http://localhost:3001/empDetailsApi/add",empPersonalDetails).then(res=>{
  if(res.status===200){
    const lengthOfDataArr=(res.data).length;
    lastAddedEmpId=res.data[lengthOfDataArr-1].empId;
    console.log("successfully Added EMployeePersonal Details with empId="+lastAddedEmpId)
  
  //Sending Data To empAddCont Api   
  Axios.post("http://localhost:3001/empAddContApi/Add",({empAddContDetails,...{lastAddedEmpId}})).then(res=>{
  if(res.status===200){
    console.log("Successfully added EmployeeAddcONT DETAILS")
    console.log(res.data)
  }})

  //Sending Data To empAddCont Api
  Axios.post("http://localhost:3001/empProfApi/add",({empProfDetails,...{lastAddedEmpId}})).then(res=>{
  if(res.status===200){
    console.log("Successfully added EmpProfessional DETAILS")
    console.log(res.data);
  }});
  
  //Sending Data To empEducation Api
  Axios.post("http://localhost:3001/empEduApi/add",({empEducationDetails,...{lastAddedEmpId}})).then(res=>{
  if(res.status===200){
    console.log("Successfully added EmpEducation DETAILS")
    console.log(res.data)
  }});

  //Sending Data To empRefrerence Api
  Axios.post("http://localhost:3001/empReferApi/add",({empRefrenceDetails,...{lastAddedEmpId}})).then(res=>{
  if(res.status===200){
    console.log("Successfully added empRefrenceDetails DETAILS")
    console.log(res.data)
  }});

 

}}); 
console.log("Full Data of employee is Compltely Saved In Data BAse")
}

    
  return ( 
    <>
    <div style={{ display: isEmpAddOpen ? "block" : "none", marginBottom: "26rem", marginTop: "0%" }}>
    <CloseAddModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <ButtonGroup>
        <ToggleButton
            key={122}
            id={`22`}
            type="radio"
            variant={'outline-dark'}
            name="Add Employee Details"
            value={"personalDetailsClicked"}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            disabled
        >
            Adding Employee Details
        </ToggleButton>
    </ButtonGroup>
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
                  empAddObj={empAddContObj}
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
                 handleChange={handleChangeEmpProfessionalForm}
                 handleClear={clearEmpProfessionalForm}
                 company_Name={empProfDetails.company_Name}
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
                handleChange={handleChangeEmpEducationForm}
                handleClear={clearEmpEducationForm}
                ssc_percentage={empEducationDetails.ssc_percentage}
                hsc_percentage={empEducationDetails.hsc_percentage}
                graduation_Stream={empEducationDetails.graduation_Stream}
                year_of_Graduation={empEducationDetails.year_of_Graduation}
                post_Graduation_Stream={empEducationDetails.post_Graduation_Stream}
                year_of_pg={empEducationDetails.year_of_pg}
                any_diploma={empEducationDetails.any_diploma}
                any_Certification={empEducationDetails.any_Certification}
                college_name={empEducationDetails.college_name}
                university_name={empEducationDetails.university_name}
                /> :null
              }
              {
                radioValue==="referenceClicked" ? 
                <EmpRefrenceForm
                submitNext={()=>{setRadioValue('completed');
                setSectionDisabled(prev=>{return{...prev,finalSubmit:false}})}
                }
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
            
            <Button style={{position: "relative",float: "right"}} onClick={() =>{if(submitAllStage){window.location.reload()}else{setModalShow(true)}}} variant="outline-danger">Close Add Employee</Button>
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

