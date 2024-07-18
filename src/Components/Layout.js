import React, { useState } from 'react'
import { BrowserRouter,Switch,Link } from 'react-router-dom'
import Employee from './Employee'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Logout from './logout'
function Layout({children, isLogout}) {
    const [show,setShow]=useState(false)
    const navigate=useNavigate();
     
 const handleLogout=()=>{
      axios({
        url:'http://localhost:4200/User/logout',
        method:'get',
        headers:{
          Authorization:'token'
        }
        
      }).then(res=>{
             Cookies.remove('token')
            //  navigate("/logout")
             isLogout()
             

      }).catch(err=>{
        console.log(err)
      })
       
      if(show)
        {
           <Link>{<Logout/>}</Link>
        }
       
  } 
  
   
  return (
    <div className="w-screen h-screen bg-orange-100 flex flex-col">
        {/* <button onClick={()=>handleChange()}>Employee</button> */}
      <div className='w-screen h-20  bg-red-100 flex justify-end items-center space-x-4 pr-4   ' ><button className='bg-amber-400 hover:bg-blue-700 text-white font-bold ml-96 py-2 px-4 rounded-full'> <Link to="/emp">Employee </Link> </button>
      <button className='bg-blue-500 hover:bg-blue-700 gap-12 mr-20 text-white font-bold py-2 px-4 rounded-full  ' onClick={()=>handleLogout()}>Logout</button>
      </div>

     
       <div className='w-screen h-auto flex flex-grow overflow-hidden scrollbars-none'>
                <div className="w-40 bg-orange-200 overflow-y-auto">
                    Sidebar
                </div>
                <div className='w-auto overflow-y-auto scrollbar-none'>
                    {children}
                </div>
            </div>
      <div className='w-screen h-20 bg-slate-300 ' >footer</div>
  
    </div>
 

    

  )
}

export default Layout
 
 