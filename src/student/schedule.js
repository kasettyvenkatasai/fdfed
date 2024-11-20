import React, { useEffect, useState } from "react";
import "./schedule.css";


function StudSch() {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Effect to handle date and time updates
    useEffect(() => {
        // Set the current date
        const date = new Date();
        const month = date.getMonth() + 1;
        const formattedDate= `${date.getFullYear()}-${month < 10 ? "0" : ""}${month}-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;

        setCurrentDate(formattedDate);

        // Set the current time
        const displayTime = () => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            const timeString = `${hours}.${minutes}.${seconds} ${meridiem}`;
            setCurrentTime(timeString);
        };

        displayTime();
        const timeInterval = setInterval(displayTime, 1000);

        return () => clearInterval(timeInterval); // Cleanup interval on component unmount
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.dropbtn')) {
                setIsDropdownVisible(false);
            }
        };
        
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div >
           

            <div className="SCHsecondpart">
                <div className="SCHheader">
                    <div className="SCHheading" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="SCHbi bi-clipboard-pulse" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2m6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128z"/>
                        </svg>
                        <p style={{fontSize: "30px", marginTop: "0%" , marginLeft: "15px" , marginBottom:"0px"}}>My History</p>
                    </div>
                    
                    <div className="SCHdate" style={{marginTop: "5%" , margin: "0" , padding: "0"}}>
                        <p id="SCHdate" style={{textAlign: "end", margin: "0",marginRight:"40px" }}>{currentDate}</p>
                        <p id="SCHtime" style={{ margin: "0",marginRight:"40px" }}>{currentTime}</p>
                        <div className="SCHcalendar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="SCHbi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Example History section */}
                <div className="SCHmainbody" style={{ marginTop: "105px"}}>
                    <div className="SCHfirstpart">
                        <div className="SCHtextpart1">
                            <p id="SCH">Booking Date: 2024-11-19</p>
                            <p id="SCH">Session No: 1</p>
                            <p id="SCH">Scheduled at: 2024-11-20</p>
                        </div>
                        <div className="SCHtextpart2">
                            <p id="SCH">Status: <span id="SCHstatus">Completed</span></p>
                        </div>
                    </div>
                    <div className="SCHsecondpart2">
                        <div className="SCHdescription1">
                            <p style={{fontSize:"15px",marginBottom:"0",marginTop:"0"}}>Description by student:</p>
                            <p style={{color: '#777',marginBottom: '0', marginTop:"0",fontSize: '32px',fontWeight: '300'}}>Patient experiencing severe headache.</p>
                        </div>
                        <div className="SCHdescription2">
                            <div className="SCHpbd">
                                <p id="SCH">Prescription by Doctor:</p>
                                <p id="SCH">Paracetamol 500mg</p>
                            </div>
                            <div className="SCHmt">
                                <p id="SCH">Medication timing</p>
                                <p id="SCH">Every 6 hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More history items can be added here */}

                <div className="SCHmarginpart">
                    <pre style={{marginTop: "40px"}}>   </pre>
                </div>
            </div>
        </div>
    );
}

export default StudSch;
