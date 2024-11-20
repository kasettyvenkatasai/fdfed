import React, { useEffect, useState } from "react";
import "./docsetting.css";


function Docsetting() {
    const [showReportInput, setShowReportInput] = useState(false);
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        // Set Date
        const date = new Date();
        const month = date.getMonth() + 1;
        setCurrentDate(`${date.getFullYear()}-${month}-${date.getDate()}`);

        // Update Time Every Second
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            setCurrentTime(`${String(hours).padStart(2, '0')}.${minutes}.${seconds} ${meridiem}`);
        };
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    // Handlers
    const handleReportClick = () => {
        setShowReportInput(!showReportInput);
    };

    const handleChangePasswordClick = () => {
        window.location.href = '/changepassword1';
    };

    return (
        <div>
           
            <div className="dsetnonnavbar" style={{ marginLeft: "0%", zIndex: "-20" }}>
                <div className="dsetheader">
                    <div className="dsetheading" style={{ marginTop: "0%"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                        <p style={{ margin: "0",fontSize: "30px", marginLeft: "0px" }}>Settings</p>
                    </div>

                    <div className="dsetdate" style={{margin: "0" , padding: "0"}}>
                        <p style={{margin: "0" ,marginRight:"40px", textAlign: "end" , fontSize:"20px"}}>{currentDate}</p>
                        <p style={{margin: "0",marginRight:"40px" ,fontSize:"20px"}}>{currentTime}</p>
                        <div className="dsetcalendar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="dsetbody">
                    <div className="dsetdiv1" id="cp" onClick={handleChangePasswordClick}>
                        <p id="dset">Change Password</p>
                    </div>

                    <div className="dsetdiv3" id="rap" onClick={handleReportClick}>
                        <p id="dset">Report a Problem</p>
                    </div>
                    <div className="dseti" style={{ width: "90%" }}>
                        {showReportInput && (
                            <form style={{ height:"30%", width:"87%",marginLeft:"38px"}} id="dsetform" method="post" action="/report1">
                                <input
                                    type="text"
                                    style={{ width: "100%", height: "30px", fontSize: "15px",marginTop:"-30px"}}
                                    name="content"
                                    placeholder="Describe the problem"
                                />
                                <button id="send" type="submit">Send</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Docsetting;