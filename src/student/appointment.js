import React, { useState, useEffect } from "react";
import "./appointment.css";


function StudAppoint() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Set current date
    const date = new Date();
    const month = date.getMonth() + 1;
    setCurrentDate(`${date.getFullYear()}-${month < 10 ? "0" : ""}${month}-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`);

    // Update time every second
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const timeString = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${meridiem}`;

      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Add animations on load
    const mainbody = document.querySelector('.APPmainbody');
    if (mainbody) mainbody.classList.add('animate-up');
    const header = document.querySelector('.APPheader');
    if (header) header.classList.add('slide-down');

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

//   const toggleDropdown = () => {
//     const dropdown = document.getElementById("myDropdown");
//     if (dropdown) dropdown.classList.toggle("show");
//   };

  const handleClickOutside = (event) => {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      Array.from(dropdowns).forEach((dropdown) => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="body">
      <div className="APPnonnavbar">
        <div className="APPheader">
          <div className="APPheading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="APPbi bi-clipboard2-plus"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
              <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
              <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5z" />
            </svg>
            <p style={{ fontSize: "30px", marginLeft: "10px" }}>
              Schedule a New Appointment
            </p>
          </div>
          <div className="APPdate" style={{ marginTop: "5%",margin: "0" , padding: "0" }}>
            <p id="APPdate" style={{ textAlign: "end",margin: "0" }}>
              {currentDate}
            </p>
            <p id="APPtime" style={{ margin: "0" }}>{currentTime}</p>
            <div className="APPcalendar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="APPbi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M3.5 0a.5.5 0 0 1 .5-.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
          </div>
        </div>
        <form className="appointform" action="/appointment" method="post">
          <div className="APPmainbody">
            <div className="APPSt">
              <label style={{ marginLeft: "50px", fontSize: "120%" }}>
                Schedule Date:
              </label>
              <input
                id="APPin"
                type="date"
                style={{ marginLeft: "20px", marginBottom: "0px" }}
                name="date"
              />
            </div>
            <div className="APPSt">
              <label style={{ marginLeft: "50px", fontSize: "120%" }}>
                Schedule Time:
              </label>
              <input
                id="APPin"
                type="time"
                style={{ marginLeft: "20px", marginBottom: "0px" }}
                name="time"
              />
            </div>
            <div className="APPSt">
              <label style={{ marginLeft: "50px", fontSize: "120%" }}>
                Select Field:
              </label>
              <select name="field" id="APPcolleges">
                <option value="BACKEND">BACKEND</option>
              </select>
            </div>
            <div className="APPdesc">
              <p style={{ marginLeft: "50px" }}>Description of Health Issues:</p>
            </div>
            <div className="APPin">
              <input
                type="text"
                id="APPmyInput"
                autoComplete="on"
                placeholder="Enter your text here"
                style={{
                  border: "1px solid #0A7273",
                  paddingLeft: "0px",
                  marginBottom: "0",
                }}
                name="description"
              />
            </div>
            <div className="APPbutt">
              <button id="B" type="submit" style={{ marginRight: "20%" }}>
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudAppoint;