import React from 'react'

function EmpDetails(props) {
  return (
    <div>
        
      <h1>Employee Details</h1>
      
      <ul style={{listStyle:'none'}}>
            <li>Eid: {props.data.Eid}</li>
        <li>Fname: {props.data.Fname} </li>
            <li>Lname :{props.data.Lname}</li>
            <li>Department : {props.data.Department}</li>
            <li>Phno": "{props.data.Phno}</li>
            <li>JoinDate": "{props.data.JoinDate}</li>
            <li>gmail": {props.data.gmail}</li>
            <li>Workmail": {props.data.Workmail}</li>
            <li>pswd": {props.data.pswd}</li>
            <li>work_loc":{props.data.work_loc}</li>
            <li>pincode": {props.data.pincode}</li>
            <li>salary":{props.data.salary}</li>
            <li>roleId": {props.data.roleId}</li>
            <li>AssignedBy : {props.data.AssignedBy}</li>
      </ul>
    </div>
  )
}

export default EmpDetails
