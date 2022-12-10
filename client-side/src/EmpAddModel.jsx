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
import EmpSalOvrTimeForm from './EmpSalaryOverTimeForm';
import EmpSalAdvPenaltyForm from './EmpSalAdvPenaltyForm';
import EmpSalaryMasterForm from './EmpSalaryMasterForm';
import EmpFullFormDetails from './EmpFullFormDetails';


export default function EmpAddModel(props) {
  const [isEmpAddOpen,setEmpAddOpen]=useState(false);
  const [isFirstLoad,setFirstLoad]=useState(true);
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  

//******************Initailasing The State Of Every Form SecTion******************//
  const [empPersonalDetails,setEmpPersonalDetails]=useState({
    fName:"",    mName:"",      lName:"",age:"", gender:"",bloodGroup:"",
    pwdStatus:"",adharNumber:"",pancardNumber:"",drivingLicenseNumber:""
  });

  const[empAddContDetails,setEmpAddContDetails]=useState({
    add1:"",add2:"", add3:"",add4:"",landMark:"", pincode:"",
    city:"",state:"", phone1:"",phone2:"",phone3:"",phone4:""
  });

  const[empProfDetails,setEmpProfDetails]=useState({
    company_Name:"",designation:"",   joining_Date:"",
    ending_Date:"", reasonOfResign:"",salary:""
    });

  const[empEducationDetails,setEmpEducationDetails]=useState({
    ssc_percentage:"",hsc_percentage:"",graduation_Stream:"", 
    year_of_Graduation:"",post_Graduation_Stream:"",year_of_pg:"",
    any_diploma:"",any_Certification:"",college_name:"",university_name:"",
    });

  const[EmpRefrenceDetails,setEmpRefrenceDetails]=useState({
    referenceName:"",  relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    }); 
    
  const[empSalOvrTimeDetails,setEmpSalOvrTimeDetails]=useState({
    empId:"",    date_ot:"",
    reason_ot:"",ot_amount_perDay:"",
    });

  const[empSalAdvPenaltyDetails,setEmpSalAdvPenaltyDetails]=useState({
    empId:"",date_:"",reason:"",
    amount:"", advOrPenalty:""
    });

  const[empSalaryMasterDetails,setEmpSalaryMasterDetails]=useState({
    empId:"",crnt_month:"",total_gross_sal:"",total_overTime:"",
    total_deduction:"",net_sal:"",paid_amnt:"",bal_amnt:""
    });


//Complte Form Details From All Section TO Sinlge Object
  const empCompleteDetails={
    empPersonalDetails,
    empAddContDetails,
    empProfDetails,
    empEducationDetails,
    EmpRefrenceDetails,
    empSalOvrTimeDetails,
    empSalAdvPenaltyDetails,
    empSalaryMasterDetails
  }
  

  useEffect(()=>{
    if(isFirstLoad){
        setFirstLoad(false)
    }else{
        setEmpAddOpen(true);
    }

  },[props.empAddModelOpen]);

  const radios = [
    { name: 'Personal Details', value: 'personalDetailsClicked' },
    { name: 'Address/Contact Details', value: 'addContClicked' },
    { name: 'Professonal Details', value: 'profClicked' },
    { name: 'Education Details', value: 'educationClicked' },
    { name: 'Reference Details', value: 'referenceClicked'},
    { name: 'Salary OverTime', value: 'salOverTimeClicked' },
    { name: 'Salary Advance/Penalty', value: 'salaAdvPnltClicked' },
    { name: 'Salary Master', value: 'salMasterClicked' }
    
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
      add1:"",add2:"", add3:"",add4:"",landMark:"", pincode:"",
      city:"",state:"", phone1:"",phone2:"",phone3:"",phone4:""
    })
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
    console.log(EmpRefrenceDetails);
  }

  //Clearing EmployeeRefrence Form Feild On clicking Clear Button
  function clearEmpReferenceForm(){
    setEmpRefrenceDetails({
    referenceName:"",relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    })
  }

//******************Handling 6th Section(Salary Over Time Details)*****************

  // handling and saving Changes in EmployeeSalaryOverTime Details Form Data 
  function handleChangeEmpSalOverTimeForm(e){
    const {name,value}=e.target
    setEmpSalOvrTimeDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(empSalOvrTimeDetails);
  }

  //Clearing EmployeeRefrence Form Feild On clicking Clear Button
  function clearSalOverTimeForm(){
    setEmpSalOvrTimeDetails({
    empId:"",    date_ot:"",
    reason_ot:"",ot_amount_perDay:"",
    })
  }

//******************Handling 7th Section(Salary Advance/Penalty Details)*****************

  // handling and saving Changes in EmployeeSalaryAdvance/Penalty Details Form Data 
  function handleChangeEmpSalAdvPenaltyForm(e){
    const {name,value}=e.target;
    setEmpSalAdvPenaltyDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(empSalAdvPenaltyDetails)
  }

  //Clearing EmployeeAdvPenaltyForm Form Feild On clicking Clear Button
  function clearSalAdvPenaltyForm(){
    setEmpSalAdvPenaltyDetails({
      empId:"",date_:"",reason:"",
      amount:"", advOrPenalty:""
    })
  }
  
//******************Handling 8th Section(Salary Master Details)*****************

  // handling and saving Changes in EmployeeSalaryMAster Details Form Data 
  function handleChangeEmpSalMasterForm(e){
    const {name,value}=e.target;
    setEmpSalaryMasterDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(empSalaryMasterDetails);
  }
 //Clearing EmployeeMaster Form Feild On clicking Clear Button
  function clearSalaryMasterForm(){
    setEmpSalaryMasterDetails({
    empId:"",crnt_month:"",total_gross_sal:"",total_overTime:"",
    total_deduction:"",net_sal:"",paid_amnt:"",bal_amnt:""
    })
  }

    
  return ( 
    <>
    <div style={{ display: isEmpAddOpen ? "block" : "none", marginBottom: "26rem", marginTop: "1rem" }}>

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
        <Card.Header>    
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
                >
               <div >Final Submition</div>
               <VerifiedIcon/> 
            </ToggleButton>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              {
                radioValue==="personalDetailsClicked" ? 
                <EmpDetailsForm 
                  submitNext={()=>setRadioValue('addContClicked')}
                  handleChange={handleChangeEmpDetailsForm}
                  handleClear={clearEmpDetailsForm}
                  fName={empPersonalDetails.fName}
                  mName={empPersonalDetails.mName}
                  lName={empPersonalDetails.lName}
                  age={empPersonalDetails.age}
                  gender={empPersonalDetails.gender}
                  bloodGroup={empPersonalDetails.bloodGroup}
                  pwdStatus={empPersonalDetails.pwdStatus}
                  adharNumber={empPersonalDetails.adharNumber}
                  pancardNumber={empPersonalDetails.pancardNumber}
                  drivingLicenseNumber={empPersonalDetails.drivingLicenseNumber}
                />:null
              }
              {
                radioValue==="addContClicked" ? 
                <EmpAddContForm
                  submitNext={()=>setRadioValue('profClicked')}
                  handleChange={handleChangeEmpAddContForm}
                  handleClear={clearEmpAddContForm} 
                  add1={empAddContDetails.add1}
                  add2={empAddContDetails.add2}
                  add3={empAddContDetails.add3}
                  add4={empAddContDetails.add4}
                  landMark={empAddContDetails.landMark}
                  city={empAddContDetails.city}
                  state={empAddContDetails.state}
                  phone1={empAddContDetails.phone1}
                  phone2={empAddContDetails.phone2}
                  phone3={empAddContDetails.phone3}

                /> : null
              }
              {
                radioValue==="profClicked" ? 
                <EmpProfDetails
                 submitNext={()=>setRadioValue(`educationClicked`)}
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
                submitNext={()=>setRadioValue('referenceClicked')}
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
                submitNext={()=>setRadioValue('salOverTimeClicked')}
                handleChange={handleChangeEmpReferenceForm}
                handleClear={clearEmpReferenceForm} 
                referenceName={EmpRefrenceDetails.referenceName}  
                relation={EmpRefrenceDetails.relation}
                address={EmpRefrenceDetails.address}
                city={EmpRefrenceDetails.city}
                phone1={EmpRefrenceDetails.phone1}
                phone2={EmpRefrenceDetails.phone2}
                /> :null
              }
              {
                radioValue==="salOverTimeClicked" ? 
                <EmpSalOvrTimeForm
                submitNext={()=>setRadioValue('salaAdvPnltClicked')}
                handleChange={handleChangeEmpSalOverTimeForm}
                handleClear={clearSalOverTimeForm}
                empId={empSalOvrTimeDetails.empId}    
                date_ot={empSalOvrTimeDetails.date_ot}
                reason_ot={empSalOvrTimeDetails.reason_ot}
                ot_amount_perDay={empSalOvrTimeDetails.ot_amount_perDay}
                /> :null
              }
              {
                radioValue==="salaAdvPnltClicked" ? 
                <EmpSalAdvPenaltyForm 
                submitNext={()=>setRadioValue('salMasterClicked')}
                handleChange={handleChangeEmpSalAdvPenaltyForm}
                handleClear={clearSalAdvPenaltyForm}
                empId={empSalAdvPenaltyDetails.empId}
                date_={empSalAdvPenaltyDetails.date_}
                reason={empSalAdvPenaltyDetails.reason}
                amount={empSalAdvPenaltyDetails.amount}
                advOrPenalty={empSalAdvPenaltyDetails.advOrPenalty}
                /> : null
              }
              {
                radioValue==="salMasterClicked" ? 
                <EmpSalaryMasterForm
                submitNext={()=>{setRadioValue('completed'); console.log(empCompleteDetails)}}
                handleChange={handleChangeEmpSalMasterForm}
                handleClear={clearSalaryMasterForm}
                empId={empSalaryMasterDetails.empId}
                crnt_month={empSalaryMasterDetails.crnt_month}
                total_gross_sal={empSalaryMasterDetails.total_gross_sal}
                total_overTime={empSalaryMasterDetails.total_overTime}
                total_deduction={empSalaryMasterDetails.total_deduction}
                net_sal={empSalaryMasterDetails.net_sal}
                paid_amnt={empSalaryMasterDetails.paid_amnt}
                bal_amnt={empSalaryMasterDetails.bal_amnt}
                /> : null
              }
              {
                radioValue==="completed" ? 
                <EmpFullFormDetails 
                reviewIt={()=>setRadioValue('personalDetailsClicked')}
                finalSubmit={()=>{console.log("Final Submition Done all details=");console.log(empCompleteDetails)}}
                /> : null
              }
            </Card.Text>
            <Button style={{position: "relative",float: "right"}} onClick={() => setEmpAddOpen(false)} variant="outline-danger">Close Add Employee</Button>
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

