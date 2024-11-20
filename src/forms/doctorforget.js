import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./doctorforget.css";

function Docforget() {
    const navigate = useNavigate(); // Hook for navigation

    const handleConfirmClick = (event) => {
        event.preventDefault(); // Prevent the default form submission
        navigate("forgot1.html"); // Navigate to the desired page
    };

    return (
        <div>
            <div className="doccontainer">
                <form style={{ height: "100%" }} className="forgetform">
                    <p id="forget">Enter Your Mail</p>
                    <input  id="forgetin" type="email" placeholder="Email" style={{ marginBottom: "2rem" }} name="email" /><br />
                    
                    <input type="submit" value="Confirm" id="confirm" onClick={handleConfirmClick} /><br />
                    
                    <div className="docnew1">
                        <a href="#" id="su"></a>
                        <a href="#" id="fp"></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Docforget;
