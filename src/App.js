import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/login';
import Layout from './Components/Layout';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Employee from './Components/Employee';
import { useEffect, useState } from 'react';
import EmpDetails from './Components/EmpDetails';
import Logout from './Components/logout';
import Cookies from 'js-cookie';

function App() {
  const [IsLoggedIn,setIsLoggedIn]=useState(false)
  const [emp,setEmp]=useState()

  useEffect(() => {
    const token = Cookies.get('token') 
    if (token) {
       setIsLoggedIn(true);
    }
  }, []);
const handleItems=(data)=>{
  setEmp(data)
}
const trigger=()=>{
  setIsLoggedIn(true)
}


if(IsLoggedIn===false){

   return <Login trigger={trigger}/>
}



const handleLogout = () => {
  setIsLoggedIn(false)
  return <Logout/>
 
};

  return (
    <div className="App">
         
    <BrowserRouter>
      
      <Layout isLogout={handleLogout} >
      <Routes>
        
        <Route path="/emp" element={<Employee handleItems={handleItems}/>}/>
        
        <Route path="/emp/*" element={<EmpDetails data={emp} />}></Route>
          
      </Routes>

      </Layout>
      
       
      
      </BrowserRouter>

 
    </div>  
  );
}

export default App;


 