import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import EmpDetails from './EmpDetails'
import Cookies from 'js-cookie'
function Employee({handleItems}) {
    const [datam,setDatam]=useState([])
    const [emp,setEmp]=useState()
    const navigate=useNavigate()
    
    // const t=localStorage.getItem('token')
    const t=Cookies.get('token')
    console.log(t)
    useEffect(()=>{
      axios({
        // url:"http://localhost:8080/getData?id=2",
        url:"http://localhost:4200/User/protected/data",
        method:"get",
        headers:{
          Authorization:t
        }
      }).then(res=>{
        console.log(res.data.post)
        setDatam(res.data.post)
      }).catch(err=>{
        console.log(err)
      })
    },[])

    const handlePress=(d)=>{
          let url="/emp"
          url=url+"/"+d.Fname
          setEmp(d)
          handleItems(d);
          console.log(url)
          navigate(url)
          
    }
  return (
    // <div>
    //     {
    //         console.log(datam)
    //     }
    // </div>
    <div className="grid grid-cols-4 gap-x-44 gap-y-10 place-items-stretch h-56 " >
       {datam.map(item=>(<div className="bg-green-200 border w-40 p-6 border-gray-100 text-amber-950 rounded text-center"><button onClick={()=>handlePress(item)}> <p>{item.Fname}</p></button>    </div>))} 
     
      
   
     
     </div>
  )
}

export default Employee
