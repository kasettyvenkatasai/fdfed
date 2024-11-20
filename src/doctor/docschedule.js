import React, { useState, useEffect } from "react";
import "./docschedule.css";
import { useNavigate } from "react-router-dom";


function Docschedule() {
    const [insVisible, setInsVisible] = useState(false);
    const navigate = useNavigate();

    // Toggle visibility of .i element
    const toggleInsVisibility = () => setInsVisible(!insVisible);

    // Handle navigation within the app
    const navigateTo = (path) => () => navigate(path);

    // Set the current date and time
    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            const formattedTime = date.toLocaleTimeString();
            document.getElementById("dsdate").textContent = formattedDate;
            document.getElementById("dstime").textContent = formattedTime;
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="dsnonnavbar" style={{ marginLeft: "0%", zIndex: "-20" }}>
                <div className="dshornav">
                    <div className="dssessions" style={{ marginTop: "2%" }}>
                        <div className="dstextpart1">
                            <div className="dstextdiv" style={{margin: "0" , padding: "0"}}>
                                <p style={{ margin: "0",fontSize: "20px" }}>BACKEND</p>
                                <p style={{ margin: "0",fontSize: "20px" }}>Scheduled sessions</p>
                            </div>
                            <div className="dsimgdiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
                                    <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                    <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="dsdates">
                        <div className="dstext">
                            <div className="dsdate" style={{margin: "0" , padding: "0"}}>
                                <p id="dsdate" style={{ margin: "0",textAlign: "end" ,fontSize:"30px"}}></p>
                                <p id="dstime" style={{ marginBottom: "0",fontSize:"30px"}}></p>
                            </div>
                            <div className="dsicon"style={{margin: "0"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dsmainbody">
                    <form className="dsform" action="/doctorcancel" method="post">
                        <div className="dsheader1">
                            <p id="ds" >Email : BACKEND</p>
                        </div>
                        <div className="dsSt">
                            <p id="ds"style={{ fontSize:"20px",marginLeft: "8%" }}>Schedule Date : BACKEND</p>
                            <p id="ds"style={{ fontSize:"20px" ,marginRight: "8%" }}>Scheduled time : BACKEND</p>
                        </div>
                        <input type="hidden" value="ID_PLACEHOLDER" name="id" />
                        <input type="hidden" value="ACCEPTEDBY_PLACEHOLDER" name="acceptedby" />
                        <div className="dsbutt">
                            <button className="mainbut" type="submit" onClick={toggleInsVisibility}>Cancel Appointment</button>
                        </div>
                    </form>
                </div>

                <p className="dstext4">No appointments available</p>

                {/* Add navigation buttons */}
                <button onClick={navigateTo('/doctor/home')}>Go to Home</button>
                <button onClick={navigateTo('/doctor/schedule')}>Go to Schedule</button>
                <button onClick={navigateTo('/doctor/settings')}>Go to Settings</button>
            </div>
        </div>
    );
}

export default Docschedule;