import React, { useState } from 'react'
import axios from 'axios';
function Signup() {

    const [uname,setUname]=useState('')
    const [paswd,setPaswd]=useState('')
    
     
    const handleSubmit=()=>{
      const formData={
        "uname":uname,
        "paswd":paswd
      }
      console.log(formData)
         axios({
          url:'http://localhost:4200/User/insert',
          method:'post',
          data:formData 

         })
    }
  return (
    <div>
      <input type="text" placeholder="Enter username" id="uname" onChange={e=>setUname(e.target.value)}/><br/>
      <input type="text" placeholder="enter password" id="password" onChange={e=>setPaswd(e.target.value)} /><br/>
       <button onClick={()=>handleSubmit()}>Signup</button>
    </div>
  )
}

export default Signup
