import React from 'react';
import Axios from 'axios';
import API from '../api/jsonPlaceholder';

export default function AdminLogin() {

    // API.get('')
    //     .then(res=>{
    //         console.log(res)
    //     })

    return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <div className='font-weight-bold h5 mt-4'>Admin Login</div>
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div> 
                </div> 
            </div>
    
    )
}
