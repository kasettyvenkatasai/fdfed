import React from "react";
import "./suserlogin.css";
import { Link } from "react-router-dom";
function Suserlg(){

    return(
        <div>

<div className="susercontainer" >
        <form className="suserform" method="post" action="/suser/home">
            <p id="suserp">lOG IN</p>
            <input  type="email" name="email" placeholder="Username" id="suserin" style={{marginBottom: "2rem;"}}/><br/>
            <div className="suserpassword">
                <input type="password" name="password1" placeholder="Password" id="suserpassword1"/><br/>
                <img src="/images/lock.png" alt="" id="lockimage"/>
            </div>
            <div className="checkbox">
                <input type="checkbox" name="checkbox"/>
                <label for="">Remember me</label>
            </div>
            
            <input type="submit" value="Sign in" id="signin"/><br/>
            <div className="suernew1">
            <Link  to="/forgetpassword" id="fp" style={{ marginLeft: "0px" }}>Forgot Password?</Link>
            </div>
           
        </form>
    </div>

        </div>
    )
}
export default Suserlg