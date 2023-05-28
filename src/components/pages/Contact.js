import React, { useState } from 'react';
import { validateEmail } from '../../Assets/utils/helpers';


export default function Contact (){
    const mainStyle = {
        background: '#596e79',
        color:"#f0ece2" }

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message,setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //handle input
  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'username') {
      setUserName(inputValue);
    }else{
        setMessage(inputValue);
    }
  };
//handle submit
  const handleFormSubmit = (e)=>{
    e.preventDefault();
//used email validator
    if(!validateEmail(email)){
        setErrorMessage('Invalid email!');
        return;
    }else if(!message){
        setErrorMessage('Please enter a message');
        return;
    }
    setUserName("");
    setEmail("");
    setMessage(" ");
    setErrorMessage("Thank you!");


}


    return (
        //contact form with email and text area validation
        <div className="container-fluid mt-5 py-2 vh-100">
        <div className="row justify-content-center mt-5">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card card-size mb-2" style={mainStyle}>
                    <div className="card-header">
                        <h3>Contact Me!</h3>
                    </div>
                    <div className="card-body">
                        <form action=""  className="contact-form mt-5">
                           <label  className="form-label">Name: </label>
                            <input className="form-control mb-1" type="text" placeholder="your name" 
                            value={userName} name="username" onChange={handleInputChange}  style={mainStyle}/>
                            <label className="form-label">Email Address: </label>
                            <input className="form-control mb-1" type="text" placeholder="your email" 
                            value={email} name="email" onChange={handleInputChange}  style={mainStyle}/>
                            <label className="form-label">Message: </label>
                            <textarea className="form-control mb-1" type="text" placeholder="your message here" 
                            name="message" value={message}onChange={handleInputChange}  style={mainStyle}/>
                            {/* similar to if statement */}
                            {errorMessage && (
                                                <div>
                                                <p className="error-text">{errorMessage}</p>
                                                </div>
                                            )}
                             <button className="btn btn-secondary form-control mt-2 mb-1" onClick={handleFormSubmit}>Submit</button>
                        </form> 
                    </div>
            </div>
            </div>
        </div>
        </div>
    );
}
