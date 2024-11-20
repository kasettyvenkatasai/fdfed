import React, { useEffect, useState } from "react";
import "./docbooking.css";



function Docbooking() {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        // Set current date
        const date = new Date();
        const month = date.getMonth() + 1;
        setCurrentDate(`${date.getFullYear()}-${month}-${date.getDate()}`);

        // Update time every second
        const timeInterval = setInterval(() => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const meridiem = hours >= 12 ? "PM" : "AM";

            hours = hours % 12 || 12; // Adjust hours for 12-hour format
            const formattedTime = [
                hours.toString().padStart(2, "0"),
                minutes.toString().padStart(2, "0"),
                seconds.toString().padStart(2, "0"),
            ].join(".");

            setCurrentTime(`${formattedTime} ${meridiem}`);
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.dropbtn')) {
                setDropdownVisible(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div >
            <div className="dbnonnavbar" style={{ marginLeft: "0%", zIndex: "-20" }}>
                <div className="dbhornav">
                    <div className="dbsessions" style={{ marginTop: "2%" }}>
                        <div className="dbtextpart1">
                            <div className="dbtextdiv"style={{margin: "0" , padding: "0"}} >
                                <p id="db"style={{ margin: "0",fontSize: "20px" }}>BACKEND{/* <%= appointments.length %> */}</p>
                                <p id="db"style={{margin: "0", fontSize: "20px" }}>New Appointments</p>
                            </div>
                            <div className="dbimgdiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="dbdates">
                        <div className="dbtext">
                            <div className="dbdate" style={{margin: "0" , padding: "0"}}>
                                <p id="dbdate" style={{margin: "0" , textAlign: "end" }}>{currentDate}</p>
                                <p id="dbtime" style={{margin: "0" ,marginBottom:"0",}}>{currentTime}</p>
                            </div>
                            <div className="dbicon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dbmain">
                    <form className="dbform" action="/acceptorreject" method="post">
                        <p id="db"style={{ marginLeft: "20px", paddingTop: "5px", paddingBottom: "10px" , marginBottom:"35px",marginTop:"0"}}>BACKEND{/*Name: appointment.name*/}</p>
                        <div className="dbSt">
                            <label style={{ marginLeft: "20px" }}>Schedule Date: BACKEND</label>
                        </div>
                        <div className="dbSt">
                            <label style={{ marginLeft: "20px" }}>Schedule Time: BACKEND</label>
                        </div>
                        <div className="dbdesc">
                            <p id="db"style={{ marginLeft: "20px" }}>Description of Health Issues:</p>
                        </div>
                        <div className="dbin">
                            <input type="text" id="myInput" maxLength="100" readOnly value="BACKEND Description"/>
                        </div>
                        <div className="dbbutt">
                            <button style={{ marginLeft: "0%" }} type="submit" name="action" value="accept">Accept</button>
                            <div className="dbdropdown">
                                <button type="button" className="dropbtn" onClick={toggleDropdown}>Reject</button>
                                {dropdownVisible && <div className="dropdown-content">Dropdown Content</div>}
                            </div>
                        </div>
                    </form>
                </div>

                <div className="dbmainbody1">
                    <p>No New appointments found</p>
                </div>
            </div>
        </div>
    );
}

export default Docbooking;