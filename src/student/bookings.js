import React, { useEffect, useState } from "react";
import "./booking.css";


function StudBook() {
    // State for the current date and time
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    // Set current date on mount
    useEffect(() => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const formattedDate= `${date.getFullYear()}-${month < 10 ? "0" : ""}${month}-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;

        setCurrentDate(formattedDate);
        
        // Function to update time every second
        const displayTime = () => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = (hours < 10 ? "0" : "") + hours;
            minutes = (minutes < 10 ? "0" : "") + minutes;
            seconds = (seconds < 10 ? "0" : "") + seconds;
            const timeString = `${hours}.${minutes}.${seconds} ${meridiem}`;
            setCurrentTime(timeString);
        };
        
        displayTime();
        const intervalId = setInterval(displayTime, 1000);
        
        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    // Dropdown toggle function
    const toggleDropdown = () => {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    };

    useEffect(() => {
        // Attach window click event to close dropdowns
        window.onclick = (event) => {
            if (!event.target.matches(".dropbtn")) {
                toggleDropdown();
            }
        };
    }, []);

    return (
        <div >
            
            <div className="Booknonnavbar">
                <div className="Bookheader">
                    <div className="Bookheading" style={{marginTop: "0"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        <p style={{fontSize: "30px", marginTop: "0%", marginLeft: "15px", marginBottom: "0"}}>My Bookings</p>
                    </div>
                    <div className="Bookdate" style={{ marginTop: "5%" , margin: "0" , padding: "0"}}>
                        <p id="Bookdate" style={{ textAlign: "end" ,margin: "0",marginRight:"40px" }}>{currentDate}</p>
                        <p id="Booktime" style={{ margin: "0",marginRight:"40px" }}>{currentTime}</p>
                        <div className="Bookcalendar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Booking details section */}
                <form className="bookform" action="/cancelAppointment" method="post">
                    <input type="hidden" name="appointmentId" value="<%= appointments[i]._id %>" />
                    <div className="Bookmainbody">
                        <div className="Bookheader1">
                            <p id="book">Booking date :{/*%<%= appointments[i].created.getDate() + '-' + (appointments[i].created.getMonth() + 1) + '-' + appointments[i].created.getFullYear() %>*/}</p>
                        </div>
                        <div className="Bookapno">
                            <div className="Bookabc">
                                <p id="book" style={{marginLeft:"0%"}}>Accepted By :{/*<%= appointments[i].acceptedby%>*/}</p>
                            </div>
                            <div className="Bookabc">
                                <p id="book" style={{marginLeft:"0%"}}>Scheduled Date : {/*<%= appointments[i].date.getDate() + '-' + (appointments[i].date.getMonth() + 1) + '-' + appointments[i].date.getFullYear() %>*/}</p>
                            </div>
                        </div>
                        <div className="BookSt">
                            <p id="book"style={{marginLeft:"8%"}}>Schedule Time :{/*<%= appointments[i].time %>*/}</p>
                            <p id="book" style={{marginRight: "8%"}}>Status : Not Completed </p>
                        </div>
                        <div className="Bookbutt">
                            <button type="submit">Cancel Appointment</button>
                        </div>
                    </div>
                </form>

                <div className="Bookmainbod" style={{ marginTop: "200px", marginLeft: "500px", color: "#0A7273" }}>
                    <h1>No upcoming bookings</h1>
                </div>
            </div>
        </div>
    );
}

export default StudBook;