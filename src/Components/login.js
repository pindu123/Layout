
import '../Components/login.css'
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Cookies from 'js-cookie';
function Login( {trigger}) {
    const [uname, setUname] = useState('');
    const [paswd, setPaswd] = useState('');
    // const [cookie,setCookie]=useState('')
    const [authenticated, setAuthenticated] = useState(false);
    // const history = useNavigate();

    const handleSubmit = () => {
        const formData = {
            "uname": uname,
            "paswd": paswd
        };

        axios({
            url: 'http://localhost:4200/User/auth/login',
            method: 'post',
            data: formData
        })
        .then(res => {
            console.log(res.data.Token);
            const token=res.data.Token;
            setAuthenticated(true);
             
            if(res.status==200){
                console.log("hhhh")
                // localStorage.setItem('token', token);
                Cookies.set('token',token)
                trigger();

                // history('/layout');
            }
            // console.log("hiii")
            //  // Redirect to '/layout' upon successful login
        })
        .catch(err => {
            console.error('Login failed:', err);
            // Handle login failure (e.g., show error message to user)
        });

        // if(authenticated)
        // {
        //     console.log("hiii")
        //    
        // }
    };

    return (
        <div className=" abc flex items-center justify-center min-h-screen"   > 
        <div className="flex flex-col items-center justify-center bg-white h-72 w-72 p-6 rounded shadow gap-3 bg-opacity-70">
       <input type="text" placeholder="Enter username" id="uname" onChange={e => setUname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><br />
        <input type="password" placeholder="Enter password" id="password" onChange={e => setPaswd(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/><br />
              <button  onClick={handleSubmit} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</button>
               </div>
 </div>
    //    <div  className=" mt-72 bg-slate-700 h-40 w-60">
    //         <input type="text" placeholder="Enter username" id="uname" onChange={e => setUname(e.target.value)} /><br />
    //         <input type="password" placeholder="Enter password" id="password" onChange={e => setPaswd(e.target.value)} /><br />
    //         <button onClick={handleSubmit}>Login</button>
    //     </div>
    );
}

export default Login;


 