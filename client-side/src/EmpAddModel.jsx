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


export default function EmpAddModel(props) {
  const [isEmpAddOpen,setEmpAddOpen]=useState(false);
  const [isFirstLoad,setFirstLoad]=useState(true);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  const [sectionCompleted,setSectionCompleted]=useState({
    empDetailsForm:false,
    empAddContForm:false,
    empProfDetails:false,
    empEducationDetails:false,
    empRefrenceForm:false,
    empSalOvrTimeForm:false,
    empSalAdvPenaltyForm:false,
    empSalaryMasterForm:false,
    complted:false
  })
  const [empPersonalFormData,setEmpPersonalData]=useState({});
  const [empAddressContFormData,setEmpAddressContData]=useState({});
  const [empProfFormData,setEmpProfessionalData]=useState({});
  const [empEducFormData,setEmpEducFormData]=useState({});
  const [empRefrnceFormData,setEmpRefrnceFormData]=useState({});
  const [empSalOvrTmFormData,setEmpSalOverTmFOrmData]=useState({});
  const [empSalAdvPnltFormData,setEmpSalAdvPnltyFormData]=useState({});
  const [empSalMasterFormData,setEmpSalMastrFormData]=useState({});
  

  useEffect(()=>{
    if(isFirstLoad){
        setFirstLoad(false)
    }else{
        setEmpAddOpen(true);
    }

  },[props.empAddModelOpen]);

  const radios = [
    { name: 'Personal Details', value: 'personalDetailsClicked',isDisabled:sectionCompleted.empDetailsForm },
    { name: 'Address/Contact Details', value: 'addContClicked' ,isDisabled:sectionCompleted.empAddContForm},
    { name: 'Professonal Details', value: 'profClicked' ,isDisabled:sectionCompleted.empProfDetails},
    { name: 'Education Details', value: 'educationClicked',isDisabled:sectionCompleted.empEducationDetails },
    { name: 'Reference Details', value: 'referenceClicked',isDisabled:sectionCompleted.empRefrenceForm },
    { name: 'Salary OverTime', value: 'salOverTimeClicked' ,isDisabled:sectionCompleted.empSalOvrTimeForm },
    { name: 'Salary Advance/Penalty', value: 'salaAdvPnltClicked' ,isDisabled:sectionCompleted.empSalAdvPenaltyForm },
    { name: 'Salary Master', value: 'salMasterClicked' ,isDisabled:sectionCompleted.empSalaryMasterForm}
    
  ];

  function empPersonalData(data){
    console.log("empPersonalData in Parent Add compoenet=")
    setEmpPersonalData(data);
    console.log(empPersonalFormData)
    setRadioValue('addContClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empDetailsForm:true
      }
    })
  }
  function empAddContFormDetails(data){
    console.log("empAddConact Data from child form to parent compnt=");
    console.log(data);
    setEmpAddressContData(data);
    setRadioValue('profClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empAddContForm:true
      }
    })
  }

  function empProfessionalData(data){
    console.log("employee professnoal data from child=");
    console.log(data);
    setEmpProfessionalData(data);
    setRadioValue('educationClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empProfDetails:true
      }
    })
  }

  function empEducationFormData(data){
    console.log("empEducation Dat From Child COmponent");
    console.log(data);
    setEmpEducFormData(data);
    setRadioValue('referenceClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empEducationDetails:true

      }
    })
  }

  function empRefFormDetails(data){
    console.log("empReferenceFOrm Dta From chiled")
    console.log(data);
    setEmpRefrnceFormData(data);
    setRadioValue(`salOverTimeClicked`);
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empRefrenceForm:true

      }
    })
  }
  function salOvrTimeDetails(data){
    console.log("empSalaryOvertimeData from Child=");
    console.log(data);
    setEmpSalOverTmFOrmData(data);
    setRadioValue('salaAdvPnltClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empSalOvrTimeForm:true

      }
    })
  }

  function empSalAdvPnltData(data){
    console.log("empSalAdvPenlty Data From Child")
    console.log(data);
    setEmpSalAdvPnltyFormData(data);
    setRadioValue('salMasterClicked');
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empSalAdvPenaltyForm:true
      }
    })
  }

  function empSalMstrdetails(data){
    console.log("empSalMasterForm Dat from chiled")
    console.log(data);
    setEmpSalMastrFormData(data);
    setRadioValue(`completed`);
    setSectionCompleted(prev=>{
      return{
        ...prev,
        empSalaryMasterForm:true

      }
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
            checked={checked}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
            Add Employee Details
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
               <div >Full Details</div>
               <VerifiedIcon/> 
            </ToggleButton>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title>General Details</Card.Title>
            <Card.Text>
              {
                radioValue==="personalDetailsClicked" ? <EmpDetailsForm empPrsnlDetails={empPersonalData}/>:null
              }
              {
                radioValue==="addContClicked" ? <EmpAddContForm empAddContFormData={empAddContFormDetails} /> :null
              }
              {
                radioValue==="profClicked" ? <EmpProfDetails empProfFormData={empProfessionalData}/> :null
              }
              {
                radioValue==="educationClicked" ? <EmpEducationDetails empEducationData={empEducationFormData} /> :null
              }
              {
                radioValue==="referenceClicked" ? <EmpRefrenceForm empRefData={empRefFormDetails} /> :null
              }
              {
                radioValue==="salOverTimeClicked" ? <EmpSalOvrTimeForm empSalOvrTmData={salOvrTimeDetails} /> :null
              }
              {
                radioValue==="salaAdvPnltClicked" ? <EmpSalAdvPenaltyForm empSalAdvDetails={empSalAdvPnltData} /> : null
              }
              {
                radioValue==="salMasterClicked" ? <EmpSalaryMasterForm empSalMastrDetails={empSalMstrdetails} /> : null
              }
            </Card.Text>
            <Button style={{position: "relative",float: "right"}} onClick={() => setEmpAddOpen(false)} variant="outline-danger">Close Add Employee</Button>
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

