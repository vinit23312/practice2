import React from 'react'
import{useState} from "react"

const [userData, setUserData]= useState({
    userName : '';
    userEmail : '';
    userPassword : '';
    userYourProfession : '';
    userPhone : '';
    userConfirmPassword : '';

})
const getUserData= () =>{
    console.log(userData)
}

const Signup = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[YourProfession,setYourProfession]=useState("");
    const[Phone,setPhone]=useState("");
    const[ConfirmPassword,setConfirmPassword]=useState("");
    const getUserData=()=>{
        console.log(name,email,Password,YourProfession,Phone,ConfirmPassword)
    }
    return (
        <>
       
        
            <section className='signup'>
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your name" onChange={(e)=> setUserData({...userData, userName :e.target.value)}></input>
                            
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"></label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your email" onChange={(e)=> setUserData(...userData, userEmail : e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"></label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your phone" onChange={(e)=> setUserData(...userData, userPhone:e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"></label>
                                    <input type="text" name="work" id="work" autoComplete="off" placeholder="Your Profession" onChange={(e)=> setUserData(...userData, userYourProfession:e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"></label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" onChange={(e)=> setUserData(...userData, userPassword : e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"></label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="ConfirmPassword" onChange={(e)=> setUserData(...userData,userConfirmPassword:e.target.value)}></input>
                                </div>
                                <div className="form-group form button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <button onClick={getUserData}>Get Data</button>

            </section>

        </>
    )
}
export default Signup