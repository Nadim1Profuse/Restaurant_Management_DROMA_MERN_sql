import Button from 'react-bootstrap/Button'

export default function TrEmpSumm(props){
    return(
        <tr>
          <td>{props.empId}</td>
          <td>{props.fName}</td>
          <td>{props.mName}</td>
          <td>{props.lName}</td>
          <td>{props.designation}</td>
          <td>{props.department}</td>
          <td>{props.phone}</td>
          <td><Button variant="outline-primary" value={props.btnValue} onClick={props.empView}>Veiw</Button>{' '}</td>
          <td><Button variant="outline-warning" value={props.btnValue} onClick={props.empUpdate}>Update</Button>{' '}</td>
          <td><Button variant="outline-danger" value={props.btnValue} onClick={props.empDelete}>Delete</Button>{' '}</td>
          
        </tr>
    )
}