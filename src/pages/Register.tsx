import { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";




const Register = () => {

  const [action,setAction]=useState("Register")

  return (
    <>
      <div className="login-cointner">

        <form className="login-continer-form" onSubmit={()=>{setAction("Login")}}>
        <center><h1>{action}</h1></center>
        <div className="login-continer-form-inputfields">
            <input type="text" placeholder="name" required/>
        </div>
          
          <div className="login-continer-form-inputfields">
           {action==="Login"?<div> </div>:            
           <input type="email"  placeholder="name@example.com" required />}
          </div>


          <div className="login-continer-form-inputfields">
            <input type="password"  placeholder="Password" required/>
          </div>

          { action==="Register"?  
           <> <button type="submit" className="login-continer-form-button" >register</button>
           <p className="login-continer-form-paragraph">I already have a account  <a className="login-continer-form-paragraph-link" onClick={()=>{setAction("Login")}}>login</a></p></>:
           
           <><Link type="submit" className="login-continer-form-button" to="/Home">Login</Link>
           <p className="login-continer-form-paragraph">I already have a account  <a className="login-continer-form-paragraph-link" onClick={()=>{setAction("Register")}}>Register</a></p></>}
         
        
        </form>
      </div>
    </>
  );
}

export default Register;
