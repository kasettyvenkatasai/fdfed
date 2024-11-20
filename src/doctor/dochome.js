import React from "react";
import "./dochome.css";


function Dochome(){

    return(
        <div>
            


<div className="DHnonnavbar" style={{marginLeft:"0",borderLeftWidth:"200px",zIndex: "-20" }}>
      <div className="DHhornav">
        <div className="DHhome">
          <p style={{ marginLeft: "37.5%", fontSize: "1.7rem" }}>Home</p>
        </div>

        <div className="DHdates">
          <div className="DHtext">
            <div className="DHdate" style={{margin: "0" , padding: "0"}}>
              <p id="DHdate" style={{ textAlign: "end",margin: "0" }}></p>
              <p id="DHtime"style={{margin: "0"}}></p>
            </div>
            <div className="DHicon" style={{ marginLeft: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="DHwelcome"
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}
      >
        <p id="DH"style={{fontSize:"20px"}}>
          <span style={{ fontSize: "2.5rem" }}>Welcome back</span> <br />
          Doctor <br />
          Track your appointments and patient's history
        </p >
        <button id="DHappointment" style={{ fontSize:"10px",width: "20%", padding: "10px 10px", marginLeft: "4%",marginTop:"-2%" }}>
          View my appointment
        </button>
      </div>

      <div className="DHnofi">
        <p id="DH">Dashboard</p>
        <div className="DHsessions">
          <div className="DHtextpart1">
            <div className="DHtextdiv" style={{margin: "0" , padding: "0"}}>
              <p style={{ margin: "0" ,fontSize: "20px" }} id="DH">BACKEND</p>
              <p  id="DH" style={{ margin: "0",fontSize: "20px" }}>new bookings</p>
            </div>
            <div className="DHimgdiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bookmark-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="DHsessions" style={{ marginTop: "2%" }}>
          <div className="DHtextpart1">
            <div className="DHtextdiv" style={{margin: "0" , padding: "0"}}>
              <p style={{ margin: "0",fontSize: "20px" }} id="DH">BACKEND</p>
              <p id="DH" style={{ margin: "0",fontSize: "20px" }}>Today sessions</p>
            </div>
            <div className="DHimgdiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard2-pulse-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="DHdashboard" style={{ marginLeft: "59%" }}>
        <p id="DH">My upcoming bookings</p>
        <table style={{ marginTop: "0%", width: "100%", marginLeft: "0%" }} className="dhtable">
          <thead>
            <tr>
              <th>Session No</th>
              <th>Date</th>
              <th style={{ borderRadius: "0px 50px 0px 0px" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>NA</td>{/*BACKEND */}
              <td>NA</td>{/*BACKEND */}
            </tr>
            <tr>
              <td style={{ borderRadius: "0px 0px 0px 50px" }}>2</td>
              <td>NA</td>{/*BACKEND */}
              <td style={{ borderRadius: "0px 0px 50px 0px" }}>NA</td>{/*BACKEND */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        </div>
    )
}

export default Dochome