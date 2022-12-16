import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmpPersonalDetails from './EmpPersonalDetails';


export default function EmpViewModel(props){
    const [isViewModelOpen,setViewModelOpen]=useState(true);
    const [ViewRadioValue, setRadioValue] = useState('personalDetails');

    useEffect(()=>{  
      setViewModelOpen(true);
    },[props.empViewModelStatus]);

    const empIdView=props.viewEmpId;

    const viewRadios = [
        { name: 'Personal Detail', value: 'personalDetails'},
        { name: 'Address/Contact Detail', value: 'addCont' },
        { name: 'Professonal Detail', value: 'prof' },
        { name: 'Education Detail', value: 'education' },
        { name: 'Reference Detail', value: 'reference'},
        { name: 'Salary OverTime Details', value: 'salOverTime' },
        { name: 'Salary Advance/Penalty Details', value: 'salaAdv' },
        { name: 'Salary Master Details', value: 'salMaster' }
        
      ];

     


    return(
        <>
    <div style={{ display: isViewModelOpen ? "block" : "none", marginBottom: "26rem", marginTop: "0%" }}>
    
    
    <Card >
        <Card.Header>    
          <ButtonGroup>
            {viewRadios.map((vRadio, idx) => (
              <><ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={'outline-success'}
                name="radio"
                value={vRadio.value}
                checked={ViewRadioValue === vRadio.value}    
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                // disabled={radio.isDisabled ? true : false}
                >
               <div >{vRadio.name }</div> 
                <DoubleArrowIcon />
               </ToggleButton>
              </>
            ))}
            
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            
            <Card.Text style={{marginBottom:"0%"}} >
              {
                ViewRadioValue==="personalDetails" ? <EmpPersonalDetails empIdView={empIdView}/>  :null
              }
              {
                ViewRadioValue==="addCont" ? <h1>Address Contact</h1> : null
              }
              {
                ViewRadioValue==="prof" ? <h1>Professional</h1> :null
              }
              {
                ViewRadioValue==="education" ? <h1>Education</h1> :null
              }
              {
                ViewRadioValue==="reference" ? <h1>Reference</h1> :null
              }
              {
                ViewRadioValue==="salOverTime" ? <h1>Salary OverTime</h1> :null
              }
              {
                ViewRadioValue==="salaAdvPnlt" ? <h1>Salary Advance Penalty</h1> : null
              }
              {
                ViewRadioValue==="salMaster" ? <h1>Salary Master</h1> : null
              }
              
            </Card.Text>
            
            <Button style={{position: "relative", float: "right", marginTop:"5px" }} onClick={() =>{setViewModelOpen(false); props.closeViewModule()}} variant="outline-danger">Close it!</Button>
        </Card.Body>
    </Card>

    </div>
    </>
    )


}