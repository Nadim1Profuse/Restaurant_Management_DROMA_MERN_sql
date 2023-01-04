/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
import Axios from "axios";
import AddListItemPopUp from './UpdateSummeryPopup'
import DeleteItemFromSummeryPopUp from './UpdateSummeryPopup'
import UpdatedListItemPopUp from './UpdateSummeryPopup'





export default function EmpUpdateModel(props) {
  const [isEmpUpdateOpen,setEmpUpdateOpen]=useState(true);
  const [radioValue, setRadioValue] = useState('personalDetailsClicked');
  const [addDoneModelShow,setAddDoneModelShow]= useState(false);
  const [modalShowDeleteItem,setModalShowDeleteItem]=useState(false);
  const [updateDoneModelShow,setUpdateDoneModelShow]=useState(false);
  const [isUpdateBtnDisable,setUpdateBtnDisable]=useState(true);
  const [isAddNewBtnDisable,setAddNewBtnDisable]=useState(false);
 
  

//******************Initailasing The State Of Every Form SecTion******************//
 
//------------------States For Employee Personal Details Section----------//
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
  const [addrIdFromList,setaddrIdFromList]=useState();

  //------------------States Fro Employee Professional Section----------//
  const[empProfDetails,setEmpProfDetails]=useState({
    company_Name:"", isCurrent:"",designation:"", joining_Date:"",
    ending_Date:"", reasonOfResign:"",salary:""
    });

  const [empProfArray,setEmpProfArray]= useState([]);
  const [profIdFromList,setProfIdFromList]=useState();

  //------------------States Fro Employee Education Section----------//  

  const[empEducationDetails,setEmpEducationDetails]=useState({
    education:"", percentage:"", yearOfPassing:"",
    instituteName:"", place:"",
    });

  const [empEducationArray,setEmpEducationArray]=useState([]);
  const [educationIdFromList,setEducationIdFromList]=useState();
  
  //------------------States Fro Employee Reference Section----------//
  const[empRefrenceDetails,setEmpRefrenceDetails]=useState({
    referedBy:"",  relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    }); 

  const [empReferenceArray,setEmpReferenceArray]=useState([])
  const [referenceIdFromList,setReferenceIdFromList]=useState();
  


  useEffect(()=>{
    setEmpUpdateOpen(true);
  },[props.empUpdateModelStatus]);

  const empIdForUpdate=props.empIdForUpdate;
  console.log(empIdForUpdate);
 
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

//Calling Api For Employee Personal Details To Show On Update Form
useEffect(()=>{
  Axios.get(`http://localhost:3001/empDetailsApi/get/${empIdForUpdate}`)
  .then((res)=>{
    setEmpPersonalDetails(res.data[0]);
    console.log(res.data[0]);
  });    
console.log("useEffectExecuted form EmpUpdate Module for empPersonalDetails")
},[]);

  function updateEmpPersonnalDetails(){
    
    const empUpdatedPersonalDetails={
      updatedEmpPersonalDetails:empPersonalDetails,
      empIdForUpdate:empIdForUpdate
    }
    // Calling Api to Update Employee Perosnal Details To DataBAse
    console.log(empUpdatedPersonalDetails);
    Axios.post("http://localhost:3001/empDetailsApi/update",empUpdatedPersonalDetails)
    .then(res=>{
      console.log(res.data)
      setUpdateDoneModelShow(true);
      setRadioValue('addContClicked');
    })
  }

//******************Handling 2nd Section(Address and Contact details)*****************

  // Declearing States For Changing Upadting Table List
  const [isNewAddrContAdded,setNewAddrContAdded]=useState(false);
  const [isAddrContUpdated,setAddrContUpdated]=useState(false);
  const [isAddrContDeleted,setAddrContDeleted]=useState(false);

  // calling Api For Address/Contact Details
  useEffect(()=>{
    Axios.get(`http://localhost:3001/empAddContApi/get/${empIdForUpdate}`)
    .then(res=>{
      setEmpAddContArray(res.data)
      console.log("empUpdateModue UseEffect for addresscontcat api");
    })
  },[isAddrContUpdated,isAddrContDeleted,isNewAddrContAdded]); 

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

  //Adding New Address/contact details In Table List As Well as Database
  function addNewAddrCont(){
    Axios.post("http://localhost:3001/empAddContApi/Add",
    {empAddContArray:[empAddContDetails],lastAddedEmpId:empIdForUpdate})
    .then(res=>{
      console.log(res.data);
      setNewAddrContAdded(prev=>!prev);
      clearEmpAddContForm();
      setAddDoneModelShow(true);
    });
    
  }

  //Updating of Employee address contact 
  function handleUpdateEmpAddContList(e){
    console.log("update index of addresscontactArray="+e.target.value);
    console.log("addresId="+empAddContArray[e.target.value]);
    setaddrIdFromList(empAddContArray[e.target.value].addrId);
    setEmpAddContDetails(empAddContArray[e.target.value])
    setUpdateBtnDisable(false);
    setAddNewBtnDisable(true);
  
  }

  function updateExistingAddCont(){
    console.log("emp addreId from list to update="+addrIdFromList)
    Axios.post(`http://localhost:3001/empAddrCont/update/${addrIdFromList}`,(empAddContDetails))
    .then(res=>{
      console.log(res.data);
      setAddrContUpdated(prev=>!prev);
      setUpdateBtnDisable(true);
      setAddNewBtnDisable(false);
      setUpdateDoneModelShow(true);
      clearEmpAddContForm();
    })

  }

  //Deleting From List and Database

  function deleteEmpAddCont(e){
    const empAddContIdForDelete={
      empId:empIdForUpdate,
      addrId:empAddContArray[e.target.value].addrId
    };
    console.log(`addrId and empId of clicked addressContact= `);
    console.log(empAddContIdForDelete);

    Axios.post("http://localhost:3001/empAddContact/delete",empAddContIdForDelete)
    .then(res=>{
      console.log(res.data)
      setModalShowDeleteItem(true);
      setAddrContDeleted(prev=>!prev);
    });

  }

 
//******************Handling 3rd Section(Professional details)*****************

  // Declearing States For Changing Upadting Table List
  const [isNewProfDetailAdded,setNewProfDetailAdded]=useState(false);
  const [isProfDetailUpdated,setProfDetailUpdated]=useState(false);
  const [isProfDetailDeleted,setProfDetailDeleted]=useState(false);

  // calling Api For Professonal Details
  useEffect(()=>{
    Axios.get(`http://localhost:3001/empProfApi/get/${empIdForUpdate}`)
    .then(res=>{
      setEmpProfArray(res.data)
      console.log("Emp Update Module  api Professonal Details");
    })
  },[isNewProfDetailAdded,isProfDetailUpdated,isProfDetailDeleted]);

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
  function addNewProfDetails(){
    Axios.post("http://localhost:3001/empProfApi/add",
    {empProfArray:[empProfDetails],lastAddedEmpId:empIdForUpdate})
    .then(res=>{
      console.log(res.data);
      setNewProfDetailAdded(prev=>!prev);
      clearEmpProfessionalForm();
      setAddDoneModelShow(true);
    });

  }

  //Updating Employee Professional Details
  function handleUpdateEmpProfDetail(e){
    console.log("update index of EmpProfArray="+e.target.value);
    console.log("profId="+empProfArray[e.target.value].profId);
    setProfIdFromList(empProfArray[e.target.value].profId);
    setEmpProfDetails(empProfArray[e.target.value])
    setUpdateBtnDisable(false);
    setAddNewBtnDisable(true);
  }

  function updateExistingProfDetail(){
    console.log("emp ProfId from list to update="+profIdFromList)
    Axios.post(`http://localhost:3001/empProfApi/update/${profIdFromList}`,(empProfDetails))
    .then(res=>{
      console.log(res.data);
      setProfDetailUpdated(prev=>!prev);
      setUpdateBtnDisable(true);
      setAddNewBtnDisable(false);
      setUpdateDoneModelShow(true);
      clearEmpProfessionalForm();
    })

  }

  //Deleting
  function deleteEmpProfDetail(e){
    const empProfIdForDelete={
      empId:empIdForUpdate,
      profId:empProfArray[e.target.value].profId
    };
    console.log(`profId and empId of clicked addressContact= `);
    console.log(empProfIdForDelete);

    Axios.post("http://localhost:3001/empProfApi/delete",empProfIdForDelete)
    .then(res=>{
      console.log(res.data)
      setModalShowDeleteItem(true);
      setProfDetailDeleted(prev=>!prev);
    });

  }

//******************Handling 4th Section(Education details)*****************


  // Declearing States For Changing Upadting Table List
  const [isNewEducationDetailAdded,setNewEducationDetailAdded]=useState(false);
  const [isEducationDetailUpdated,setEducationDetailUpdated]=useState(false);
  const [isEducationDetailDeleted,setEducationDetailDeleted]=useState(false);

  // calling Api For Education Details
  useEffect(()=>{
    Axios.get(`http://localhost:3001/empEduApi/get/${empIdForUpdate}`)
    .then(res=>{
      setEmpEducationArray(res.data)
      console.log("Emp Update Module  api Education Details");
    })
  },[isNewEducationDetailAdded,isEducationDetailUpdated,isEducationDetailDeleted]);

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
  
  //Adding New Education Details To Table List And DataBase
  function addNewEducationDetail(){
    Axios.post("http://localhost:3001/empEduApi/add",
    {empEducationArray:[empEducationDetails],lastAddedEmpId:empIdForUpdate})
    .then(res=>{
      console.log(res.data);
      setNewEducationDetailAdded(prev=>!prev);
      clearEmpEducationForm();
      setAddDoneModelShow(true);
    });
  }

  //Updating Employee Education Details

  function handleUpdateEmpEducationDetail(e){
    console.log("update index of EmpEducationArray="+e.target.value);
    console.log("educnId="+empEducationArray[e.target.value].educnId);
    setEducationIdFromList(empEducationArray[e.target.value].educnId);
    setEmpEducationDetails(empEducationArray[e.target.value])
    setUpdateBtnDisable(false);
    setAddNewBtnDisable(true);


  }

  function updateExistingEducationDetails(){
    console.log("emp educnId from list to update="+educationIdFromList)
    Axios.post(`http://localhost:3001/empEduApi/update/${educationIdFromList}`,(empEducationDetails))
    .then(res=>{
      console.log(res.data);
      setEducationDetailUpdated(prev=>!prev);
      setUpdateBtnDisable(true);
      setAddNewBtnDisable(false);
      setUpdateDoneModelShow(true);
      clearEmpEducationForm();
    })

  }

  //Deleting Employee Education Details educnId
  function deleteEmpEducationDetail(e){
    const empEducnIdForDelete={
      empId:empIdForUpdate,
      educnId:empEducationArray[e.target.value].educnId
    };
    console.log(`educnId and empId of clicked addressContact= `);
    console.log(empEducnIdForDelete);

    Axios.post("http://localhost:3001/empEduApi/delete",empEducnIdForDelete)
    .then(res=>{
      console.log(res.data)
      setModalShowDeleteItem(true);
      setEducationDetailDeleted(prev=>!prev);
    });

  }



//******************Handling 5th Section(Reference Details)*****************

// Declearing States For Changing Upadting Table List
const [isNewReferenceDetailAdded,setNewReferenceDetailAdded]=useState(false);
const [isReferenceDetailUpdated,setReferenceDetailUpdated]=useState(false);
const [isReferenceDetailDeleted,setReferenceDetailDeleted]=useState(false);

// calling Api For Reference Details
useEffect(()=>{
  Axios.get(`http://localhost:3001/empReferApi/get/${empIdForUpdate}`)
  .then(res=>{
    setEmpReferenceArray(res.data)
    console.log("Emp Update Module  api Reference Details");
  })
},[isNewReferenceDetailAdded,isReferenceDetailUpdated,isReferenceDetailDeleted]);


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
      referedBy:"",relation:"",address:"",
    city:"",  phone1:"",  phone2:"",
    })
  }

  //Adding New Education Details To Table List And DataBase
  function addNewReferenceDetail(){
    Axios.post("http://localhost:3001/empReferApi/add",
    {empReferenceArray:[empRefrenceDetails],lastAddedEmpId:empIdForUpdate})
    .then(res=>{
      console.log(res.data);
      setNewReferenceDetailAdded(prev=>!prev);
      clearEmpReferenceForm();
      setAddDoneModelShow(true);
    });
  }

  //Updating Employee Education Details

  function handleUpdateEmpReferenceDetail(e){
    console.log("update index of EmpReferenceArray="+e.target.value);
    console.log("refId="+empReferenceArray[e.target.value].refId);
    setReferenceIdFromList(empReferenceArray[e.target.value].refId);
    setEmpRefrenceDetails(empReferenceArray[e.target.value])
    setUpdateBtnDisable(false);
    setAddNewBtnDisable(true);

  }

  function updateExistingReferenceDetails(){
    console.log("emp refId from list to update="+referenceIdFromList)
    Axios.post(`http://localhost:3001/empReferApi/update/${referenceIdFromList}`,(empRefrenceDetails))
    .then(res=>{
      console.log(res.data);
      setReferenceDetailUpdated(prev=>!prev);
      setUpdateBtnDisable(true);
      setAddNewBtnDisable(false);
      setUpdateDoneModelShow(true);
      clearEmpReferenceForm();
    })

  }

  //Deleting Employee reference Details educnId
  function deleteEmpReferenceDetail(e){
    const empRefrnceIdForDelete={
      empId:empIdForUpdate,
      refId:empReferenceArray[e.target.value].refId
    };
    console.log(`refId and empId of clicked Refrence= `);
    console.log(empRefrnceIdForDelete);

    Axios.post("http://localhost:3001/empReferApi/delete",empRefrnceIdForDelete)
    .then(res=>{
      console.log(res.data)
      setModalShowDeleteItem(true);
      setReferenceDetailDeleted(prev=>!prev);
    });

  }


    
  return ( 
    <>
    <AddListItemPopUp
    show={addDoneModelShow}
                onHide={() => setAddDoneModelShow(false)}
                heading="Successfully Added New Details..." 
                body="Succesfully Added and Updated Corresponding Employee Details."

    />
    <UpdatedListItemPopUp
    show={updateDoneModelShow}
                onHide={() => setUpdateDoneModelShow(false)}
                heading="Successfully Updated." 
                body="Succesfully Updated Corresponding Employee Details.
                       "

    />

    <DeleteItemFromSummeryPopUp
    show={modalShowDeleteItem}
                onHide={() => setModalShowDeleteItem(false)}
                heading="Successfully Deleted.." 
                body="Successfully Deleted Corresponding Employee Detail. "

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
                <EmpDetailsUpdate 
                  submitNext={()=>{setRadioValue('addContClicked')}}
                  handleChange={handleChangeEmpDetailsForm}
                  handleClear={clearEmpDetailsForm}
                  updateEmpDetails={updateEmpPersonnalDetails}
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
                
                <EmpAddContUpdate
                  submitNext={()=>{setRadioValue('profClicked')}}
                  prevSection={()=>setRadioValue('personalDetailsClicked')}
                  empAddArray={empAddContArray}
                  addDetailsToList={addNewAddrCont}
                  handleChange={handleChangeEmpAddContForm}
                  updateExistingAddCont={updateExistingAddCont}
                  updateAddCont={handleUpdateEmpAddContList}
                  deleteAddCont={deleteEmpAddCont} 
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
                 addProfDetailsToList={addNewProfDetails}
                 handleChange={handleChangeEmpProfessionalForm}
                 handleClear={clearEmpProfessionalForm}
                 updateExistingProfDetail={updateExistingProfDetail}
                 updateProfDetail={handleUpdateEmpProfDetail}
                 deleteProfDetail={deleteEmpProfDetail} 
                 isUpdateBtnDisable={isUpdateBtnDisable}
                 isAddNewBtnDisable={isAddNewBtnDisable}
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
                handleChange={handleChangeEmpEducationForm}
                handleClear={clearEmpEducationForm}
                empEducationArray={empEducationArray}
                addEducationDetailsToList={addNewEducationDetail}
                updateEducation={handleUpdateEmpEducationDetail}
                updateExistingEducation={updateExistingEducationDetails}
                deleteEducation={deleteEmpEducationDetail}
                isUpdateBtnDisable={isUpdateBtnDisable}
                isAddNewBtnDisable={isAddNewBtnDisable}
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
                handleChange={handleChangeEmpReferenceForm}
                handleClear={clearEmpReferenceForm} 
                addRefrnceDetailsToList={addNewReferenceDetail}
                updateReference={handleUpdateEmpReferenceDetail}
                updateExistingRefrnceDetail={updateExistingReferenceDetails}
                deleteReference={deleteEmpReferenceDetail}
                isUpdateBtnDisable={isUpdateBtnDisable}
                isAddNewBtnDisable={isAddNewBtnDisable}
                referedBy={empRefrenceDetails.referedBy}  
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

