import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from "axios";


//styles
import './component_style/signup.css';
function Signup(){
    //hooks
    const[first_name, set_first_name] = useState('');
    const[last_name, set_last_name] = useState('');
    const[email, set_email] = useState('');
    const[phone_number, set_phone_number] = useState('');
    const[password, set_password] = useState('');

    //post to server function
    function create_account(){
        var user_account = {
            first_name : first_name,
            last_name : last_name,
            email : email,
            phone_no: phone_number,
            password : password,
            user_id : uniqid()
        }
        axios.post('http://localhost:8000/api/user/add_new_user', user_account).then(res=>{
            alert(res.data)
        }).then(err => {
            console.log(err)
        })
    }




    return(
        <div className='sign-up'>
            <h1>This is a sign up page</h1>
            <div className='sign'>
                <div>
                    <input type="text" placeholder="Enter first name" className='input-control'
                    value={first_name} onChange={(e) => {set_first_name(e.target.value)}}
                    />
                    <input type="text" placeholder="Enter last name" className='inpt-control'
                    value={last_name} onChange={(e) => {set_last_name(e.target.value)}}
                    />
                    <input type="text" placeholder="Enter your Email address" className='input-control'
                    value={email} onChange={(e) => {set_email(e.target.value)}}
                    />
                    <input type="text" placeholder="Enter your phone number" className='input-control'
                    value={phone_number} onChange={(e) => {set_phone_number(e.target.value)}}
                    />
                    <input type="password" placeholder="Enter your password" className='input-control'
                    value={password} onChange={(e) => {set_password(e.target.value)}}
                    />
                    <button onClick={create_account} className='btn_submit'>Submit</button>

                </div>
            </div>
        </div>
    );
}
export default Signup;
