import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CancelIcon from '@mui/icons-material/Cancel';
import EmpDetailsUpdate from './EmpDetailsUpdate';
import EmpAddContUpdate from './EmpAddContUpdate';
import EmpProfUpdate from './EmpProfUpdate';
import EmpEducationUpdate from './EmpEducationUpdate';
import EmpRefrenceUpdate from './EmpReferenceUpdate';
// import CloseAddModel from './CloseAddModel';
import Axios from "axios";
import UpdateSummeryPopUp from './UpdateSummeryPopup';
import DeleteItemFromSummeryPopUp from './UpdateSummeryPopup'
import UpdatedListItemPopUp from './UpdateSummeryPopup'




export default function EmpUpdateModel(props) {
  const [isEmpUpdateOpen,setEmpUpdateOpen]=useState(true);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  const [modalShow, setModalShow] = useState(false);
  const [modalShowDeleteItem,setModalShowDeleteItem]=useState(false);
  const [modalShowUpdateItem,setModalShowpdateItem]=useState(false);
  const [isUpdateBtnDisable,setUpdateBtnDisable]=useState(true);
  const [isAddNewBtnDisable,setAddNewBtnDisable]=useState(false);
  const [firstLoad,setFirstLoad]=useState(true)
  

//******************Initailasing The State Of Every Form SecTion******************//
  const [empPersonalDetails,setEmpPersonalDetails]=useState({
    fName:"",    mName:"",      lName:"",age:"", gender:"",bloodGroup:"",department:"",
    pwdStatus:"",adharNumber:"",pancardNumber:"",drivingLicenseNumber:"",designation:""
  });

  //------------------States Fro Employee Address/Contact Section----------//
  const[empAddContDetails,setEmpAddContDetails]=useState({
    address1:"", apartment:"", landMark:"", city:"",
    state:"", pincode:"", mobileNumber:"", alternateMobileNumber:""
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
    setEmpUpdateOpen(true);
  },[props.empUpdateModelStatus]);

  const empIdForUpdate=props.empIdForUpdate;
  console.log(empIdForUpdate);
 
  useEffect(()=>{
    if(firstLoad){
      setFirstLoad(false);
      Axios.get(`http://localhost:3001/empDetailsApi/get/${empIdForUpdate}`).then((res)=>{
        setEmpPersonalDetails(res.data[0]);
        console.log(res.data[0]);
      });

      
    }
    console.log("useEffectExecuted form EmpUpdate Module for empPersonalDetails")
  },[]);

  useEffect(()=>{
    Axios.get(`http://localhost:3001/empAddContApi/get/${empIdForUpdate}`).then(res=>{
        setEmpAddContArray(res.data)
        console.log(res.data);
        console.log("empUpdateModue UseEffect for addresscontcat api");
      })

  },[])

  

  const radios = [
    { name: 'Personal Details', value: 'personalDetailsClicked'},
    { name: 'Address/Contact Details', value: 'addContClicked' },
    { name: 'Professonal Details', value: 'profClicked' },
    { name: 'Education Details', value: 'educationClicked' },
    { name: 'Reference Details', value: 'referenceClicked'} 
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

//Updating Section

  function empPersonalDetailsUpdate(){
    setRadioValue('addContClicked');
    // console.log(empPersonalDetails);

    const empUpdatedPersonalDetails={
      updatedEmpPersonalDetails:empPersonalDetails,
      empIdForUpdate:empIdForUpdate
    }
    // Calling Api to serverSide
    console.log(empUpdatedPersonalDetails);
    Axios.post("http://localhost:3001/empDetailsApi/update",empUpdatedPersonalDetails).then(res=>{
      console.log(res.data)
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
      address1:"", apartment:"", landMark:"", city:"",
      state:"", pincode:"", mobileNumber:"", alternateMobileNumber:""
    })
  }

  //Adding Address/contact details In Table List 
  function addDetailsToArray(){
    setEmpAddContArray(prev=>{
      return [...prev,empAddContDetails]
    });
    clearEmpAddContForm();
  }

// Handling CallBack Function For Update and Delete of Employee address contact
  const [indexValueOfClickedAddCont,setIndexValueOfClickedAddCont]=useState();
  // const empId=useRef(empAddContArray[0].empId);
  
  function handleUpdateEmpAddContList(e){
    setIndexValueOfClickedAddCont(e.target.value);
    console.log("update index of addresscontactArray="+e.target.value);
    console.log(empAddContArray[e.target.value])
    setEmpAddContDetails(empAddContArray[e.target.value])
    setUpdateBtnDisable(false);
    setAddNewBtnDisable(true);
  
  }

  function updateExistingAddCont(){
    console.log("updating exixting address contact details for index value="+indexValueOfClickedAddCont);
    const updatedEmpAddressContactArray=empAddContArray.map((emp,i)=>{
      if(i==indexValueOfClickedAddCont){
        return empAddContDetails;
      }else{
        return emp;
      }
    })
    setEmpAddContArray(updatedEmpAddressContactArray);
    console.log(updatedEmpAddressContactArray)
    // empId.current=updatedEmpAddressContactArray[0].empId;
    console.log("employee id for update="+empIdForUpdate);
    setUpdateBtnDisable(true);
    setAddNewBtnDisable(false);
    setModalShowpdateItem(true);
    clearEmpAddContForm();

  }

  function updateAddContSummery(){
    setModalShow(true);
    console.log("updateAddContSummery callback Function Latest Updated Summry=");
    console.log(empAddContArray);
    console.log("employee Id For Update EMployee Summery ="+empIdForUpdate)
    Axios.post(`http://localhost:3001/empAddContact/delete/${empIdForUpdate}`).then(res=>{
      console.log(res.data);
      Axios.post("http://localhost:3001/empAddContApi/Add",({empAddContArray,...{lastAddedEmpId:empIdForUpdate}})).then(res=>{
        console.log("successfully Added Update Employee Address/Contact Summery");
        
      });
    })
   }

  function deleteEmpAddCont(e){
    console.log("succsesfully deleted addresscontact from array where index="+e.target.value)
    setEmpAddContArray(prev=>{
      return prev.filter((addCont,index)=>{
        return (index!=e.target.value)
      })
    });
    setModalShowDeleteItem(true);

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

    const empProfListObj={empProfArray};
    console.log("empProfessionalListObje=")
    console.log(empProfListObj);
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

    const empEducationListObj={empProfArray};
    console.log("empEducationListObje=")
    console.log(empEducationListObj);
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

    const empReferenceListObj={empProfArray};
    console.log("empReferenceListObj=")
    console.log(empReferenceListObj);
  }


    
  return ( 
    <>
    <UpdatedListItemPopUp
    show={modalShowUpdateItem}
                onHide={() => setModalShowpdateItem(false)}
                heading="Successfully Updated this List Item From Summery list" 
                body="Click On  'Update Complete Summery'  To Finalized Updete "

    />

    <DeleteItemFromSummeryPopUp
    show={modalShowDeleteItem}
                onHide={() => setModalShowDeleteItem(false)}
                heading="Successfully Deleted From Summery" 
                body="Click On  'Update Complete Summery'  To Finalized Updete "

    />
    <div style={{ display: isEmpUpdateOpen ? "block" : "none" }}>
   
    <div style={{display: "flex",justifyContent: "space-between", margin:"7px"}}>
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
            Updating Employee Details
        </ToggleButton>
    </ButtonGroup>

    <Button onClick={() =>{setEmpUpdateOpen(false); props.closeUpdateModel(); window.location.reload()}} variant="outline-danger"><CancelIcon/></Button>

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
            
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            
            <Card.Text style={{marginBottom:"0%"}} >
              {
                radioValue==="personalDetailsClicked" ? 
                <>
                <UpdateSummeryPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
                heading="Successfully Updated Employee" 
                body="Successfully Updated Employee Address/Contact Summery. 
                      Click On Close Button "

                />
                
                <EmpDetailsUpdate 
                  submitNext={empPersonalDetailsUpdate}
                  handleChange={handleChangeEmpDetailsForm}
                  handleClear={clearEmpDetailsForm}
                  // updateEmpDetails={updateEmpPersonnalDetails}
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
                /> </> : null
                
              }
              {
                radioValue==="addContClicked" ? 
                <>
                <UpdateSummeryPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
                heading="Successfully Updated Employee" 
                body="Successfully Updated Employee Address/Contact Summery. 
                      Click On 'Next Section' If Wan't to Update More "

                />
                <EmpAddContUpdate
                  submitNext={()=>{setRadioValue('profClicked')}}
                  prevSection={()=>setRadioValue('personalDetailsClicked')}
                  empAddArray={empAddContArray}
                  addDetailsToList={addDetailsToArray}
                  handleChange={handleChangeEmpAddContForm}
                  updateExistingAddCont={updateExistingAddCont}
                  updateAddCont={handleUpdateEmpAddContList}
                  deleteAddCont={deleteEmpAddCont} 
                  updateAddContSummery={updateAddContSummery}
                  isUpdateBtnDisable={isUpdateBtnDisable}
                  isAddNewBtnDisable={isAddNewBtnDisable}
                  address1={empAddContDetails.address1}
                  apartment={empAddContDetails.apartment}
                  landMark={empAddContDetails.landMark}
                  city={empAddContDetails.city}
                  state={empAddContDetails.state}
                  pincode={empAddContDetails.pincode}
                  mobileNumber={empAddContDetails.mobileNumber}
                  alternateMobileNumber={empAddContDetails.alternateMobileNumber}

                /></> : null
              }
              {
                radioValue==="profClicked" ? 
                <EmpProfUpdate
                 submitNext={()=>{setRadioValue(`educationClicked`)}}
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
                <EmpEducationUpdate
                submitNext={()=>{setRadioValue('referenceClicked')}}
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
                <EmpRefrenceUpdate
                submitNext={()=>{setRadioValue('personalDetailsClicked')}}
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
             
            </Card.Text>
            
        </Card.Body>
    </Card>

    </div>
    </>
  );
}

