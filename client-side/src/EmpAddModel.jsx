import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import EmpDetailsForm from './EmpDetailsForm';

export default function EmpAddModel(props) {
  const [isEmpAddOpen,setEmpAddOpen]=useState(false);
  const [isFirstLoad,setFirstLoad]=useState(true);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  useEffect(()=>{
    if(isFirstLoad){
        setFirstLoad(false)
    }else{
        setEmpAddOpen(true);
    }

  },[props.empAddModelOpen]);

  const radios = [
    { name: 'Personal Details', value: '1' },
    { name: 'Address/Contact Details', value: '2' },
    { name: 'Professonal Details', value: '3' },
    { name: 'Education Details', value: '4' },
    { name: 'Reference Details', value: '5' },
    { name: 'Salary OverTime', value: '6' },
    { name: 'Salary Advance/Penalty', value: '7' },
    { name: 'Salary Master', value: '8' },
    
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
            onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
            Add Employee Details
        </ToggleButton>
    </ButtonGroup>
    <Card >
        <Card.Header>    
         <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={'outline-success'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                  {radio.name}
              </ToggleButton>
            ))}
         </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title>General Details</Card.Title>
            <Card.Text>
                <EmpDetailsForm />
            </Card.Text>
            <Button style={{position: "relative",float: "right"}} onClick={() => setEmpAddOpen(false)} variant="outline-danger">Close Add Employee</Button>
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

