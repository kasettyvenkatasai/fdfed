import React from "react";
import "./signup.css";

function Signup(){

    return(
        <div>

<div className="signcontainer"> 
        <form className="signform" method="post" action="/field" id="signupForm">
            <p id="signp">REGISTER</p>
            <input type="email" name="email" placeholder="Username" id="signin" style={{marginBottom: "1.5rem"}} className="input"/><br/>
            
            <div className="signpassword">
                <input type="password" name="password1" placeholder="Password" id="signpassword1" className="input"/><br/>
                <img src="/images/lock.png" alt="" className="lockimage" id="lockimage"/>
                 <span id="signpassword1Error" className="error"></span> {/* <!-- Error message -->*/}
            </div> 
            
            <div className="signpassword">
                <input type="password" name="password2" placeholder="Confirm password" id="signpassword2" className="input"/><br/>
                <img src="/images/lock.png" alt="" className="lockimage" id="lockimage1"/>
                <span id="signpassword2Error" className="error"></span>  {/*<!-- Error message --> */}
            </div>
            
            <div>
                <select name="signcollege" id="signcolleges">
                    {/* <% if (providedCollege) { %>  */}
                        <option value="<%= providedCollege.name %>" selected>BACKEND{/*<%= providedCollege.name %>*/}</option>
                    {/* <% } else { %>  */}
                        {/* <% for (let index = 0; index < clgs.length; index++) { %> */}
                            <option value="<%= clgs[index].name %>">BACKEND{/*<%= clgs[index].name %>*/}</option>
                        {/* <% } %> */}
                    {/* <% } %> */}
                </select>
            </div>
            
            <input type="submit" value="SIGN UP" id="signup"/><br/>
            <div className="signnew1">
                <a href="#" id="su"></a>
                <a href="#" id="fp"></a>
            </div>
        </form>
    </div>

        </div>
    )
}

export default Signup