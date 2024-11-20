import React, { useState } from "react";
import "./dslogin.css";
import { Link } from "react-router-dom";
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="lgcontainer">
                <form  className="lgform" method="post" action="/doctor/home">
                    <p id="lg">LOG IN</p>
                    <input className="lgin"type="email" name="email" placeholder="Username" style={{ marginBottom: "2rem" }}/><br/>
                    
                    <div className="lgpassword">
                        <input type={passwordVisible ? "text" : "password"} name="password1" placeholder="Password" id="lgpassword1"/><br/>
                        <img src={passwordVisible ? "/images/eyeopen.png" : "/images/lock.png"} alt="Toggle visibility" id="lockimage" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}
                        />
                    </div>

                    <div>
                        <select name="college" id="colleges">
                            
                            {/* CHATGTP */}
                            {/* Assuming clgs is a list of college objects */}
                            {/* clgs.map((college, index) => (
                                <option key={index} value={college.name}>{college.name}</option>
                            )) */}

                            {/* NORMAL */}

                             {/* <% for( let index = 0; index < clgs.length; index++ ) { %> */}
                        {/* <option value="<%= clgs[index].name %>"><%= clgs[index].name %></option> */}
                    {/* <% } %> */}

                        </select>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="checkbox" />
                        <label>Remember me</label>
                    </div>

                    <input type="submit" value="Sign in" id="signin" /><br/>
                    
                    <div className="lgnew1">
                        <Link  to="/forgetpassword" id="fp" style={{ marginLeft: "0px" }}>Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
