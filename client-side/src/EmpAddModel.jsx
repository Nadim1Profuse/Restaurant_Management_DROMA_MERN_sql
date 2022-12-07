import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import EmpDetailsForm from './EmpDetailsForm';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmpAddContForm from './EmpAddContForm';
import EmpProfDetails from './EmpProfDetails';
import EmpEducationDetails from './EmpEducationDetails';

export default function EmpAddModel(props) {
  const [isEmpAddOpen,setEmpAddOpen]=useState(false);
  const [isFirstLoad,setFirstLoad]=useState(true);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  

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
    { name: 'Reference Details', value: 'referenceClicked' },
    { name: 'Salary OverTime', value: 'salOverTimeClicked' },
    { name: 'Salary Advance/Penalty', value: 'salaAdvPnltClicked' },
    { name: 'Salary Master', value: 'salMasterClicked' },
  ];

  

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
            value={"add"}
            checked={checked}
            onChange={(e) => setRadioValue(e.currentTarget.value)
            }
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
              >
               <div >{radio.name }</div> 
                <DoubleArrowIcon />
              </ToggleButton>
              
              </>
            ))}
         </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title>General Details</Card.Title>
            <Card.Text>
              {
                radioValue==="personalDetailsClicked" ? <EmpDetailsForm />:null
              }
              {
                radioValue==="addContClicked" ? <EmpAddContForm/> :null
              }
              {
                radioValue==="profClicked" ? <EmpProfDetails/> :null
              }
              {
                radioValue==="educationClicked" ? <EmpEducationDetails/> :null
              }
            </Card.Text>
            <Button style={{position: "relative",float: "right"}} onClick={() => setEmpAddOpen(false)} variant="outline-danger">Close Add Employee</Button>
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

