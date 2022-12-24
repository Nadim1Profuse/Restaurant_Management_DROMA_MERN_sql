import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmpPersonalDetails from './EmpPersonalDetails';
import EmpAddContDetails from './EmpAddContDetails';
import EmpProfessionalDetails from './EmpProfessionalDetails';
import EmpEducationDetails from './EmpEducationDetails';
import EmpReferenceDetails from './EmpReferenceDetails';


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
        
      ];

     


    return(
        <>
    <div style={{ display: isViewModelOpen ? "block" : "none" }}>
    
    <ButtonGroup style={{marginBottom:".5rem"}}>
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
           Complete Details of Selected Employee 
        </ToggleButton>
    </ButtonGroup>
    
    <Card >
        <Card.Header style={{textAlign:"center",padding:"10px"}}>    
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
                ViewRadioValue==="addCont" ? <EmpAddContDetails empIdView={empIdView} /> : null
              }
              {
                ViewRadioValue==="prof" ? <EmpProfessionalDetails empIdView={empIdView} /> :null
              }
              {
                ViewRadioValue==="education" ? <EmpEducationDetails empIdView={empIdView} /> :null
              }
              {
                ViewRadioValue==="reference" ? <EmpReferenceDetails empIdView={empIdView} /> :null
              }
              
              
            </Card.Text>
            
            <Button style={{position: "relative", float: "right", marginTop:"15px" }} onClick={() =>{setViewModelOpen(false); props.closeViewModule(); window.location.reload()}} variant="outline-danger">Close it!</Button>
        </Card.Body>
    </Card>

    </div>
    </>
    )


}