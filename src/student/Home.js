import React, { useState, useEffect } from "react";
import "./home.css";

function StudHome() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Set current date
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    setDate(`${currentDate.getFullYear()}-${month}-${currentDate.getDate()}`);

    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert to 12-hour format
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${meridiem}`;
      setTime(formattedTime);
    }, 1000);

    // Fetch medication and appointments data
    fetch("/getmedication")
      .then((response) => response.json())
      .then((data) => {
        setPrescriptions(data.prescriptions || []);
        setAppointments(data.appointments || []);
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="body">
      <div className="SHnonnavbar">
        <div className="SHhornav" style={{ width: "90%" }}>
          <div className="SHhome">
            <p style={{ marginLeft: "37.5%", fontSize: "1.5rem" }}>Home</p>
          </div>
          <div className="SHdates">
            <div className="SHtext">
              <div className="SHdate" style={{margin: "0" , padding: "0"}}>
                <p id="SHdate" style={{ margin: "0",textAlign: "end" }}>
                  {date}
                </p>
                <p id="SHtime" style={{margin: "0"}}>{time}</p>
              </div>
              <div className="SHicon" style={{ marginLeft: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="SHbi bi-calendar-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="SHwelcome">
          <p>
            <span style={{ fontSize: "2rem" }}>Welcome back</span> <br /> Student{" "}
            <br /> Track your past and future appointment history
          </p>
        </div>
        <div className="SHdashboard">
          <p style={{ fontSize: "20px" }}>Dashboard</p>
          <div className="SHschedule">
            <table>
              <thead>
                <tr>
                  <th>Medicine Name</th>
                  <th>Time Intake</th>
                  <th style={{ borderRadius: "0px 50px 0px 0px" }}>
                    Dose Intake
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="main1">{prescriptions[0] ? "No.1" : "NA"}</td>
                  <td id="main2">
                    {prescriptions[0]?.timings1 || "NA"}
                  </td>
                  <td id="main3">
                    {prescriptions[0]?.medication1 || "NA"}
                  </td>
                </tr>
                <tr>
                  <td style={{ borderRadius: "0px 0px 0px 50px" }} id="main4">
                    {prescriptions[1] ? "No.2" : "NA"}
                  </td>
                  <td id="main5">
                    {prescriptions[1]?.timings2 || "NA"}
                  </td>
                  <td
                    style={{ borderRadius: "0px 0px 50px 0px" }}
                    id="main6"
                  >
                    {prescriptions[1]?.medication2 || "NA"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="SHnofi">
          <div className="SHsessions">
            <div className="SHtextpart1">
              <div className="SHtextdiv"  style={{margin: "0" , padding: "0"}}>
                <p style={{ fontSize: "20px",margin: "0" }} id="main7">
                  {appointments.length}
                </p>
                <p style={{ fontSize: "20px",margin: "0" }}>Upcoming sessions</p>
              </div>
              <div className="SHimgdiv">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="SHbi bi-clipboard-pulse"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2m6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <table>
            <caption style={{ fontSize: "15px",margin: "10px"}}>
              Appointment tracking

              </caption>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th style={{ borderRadius: "0px 50px 0px 0px" }}>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.date || "NA"}</td>
                    <td>{appointment.time || "NA"}</td>
                    <td>{appointment.doctor || "NA"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No upcoming appointments
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudHome;