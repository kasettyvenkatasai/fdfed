import React, { useEffect, useState } from 'react';
import './Admins.css';
import {useNavigate}from 'react-router-dom';

const AdminList = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();
  const handleAddAdmin = (e) => {
    e.preventDefault();
    navigate('/admin/signup');
  };
  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString());
      setCurrentTime(date.toLocaleTimeString());
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="nonnavbar1" >
      <div className="hornav1">
        <div className="sessions1" style={{ marginTop: '2%' }}>
          <div className="textpart12">
            <div className="textdiv1">
              <p style={{ fontSize: '30px' }}>Admins list</p>
            </div>

            <div className="imgdiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="dates1">
          <div className="text1">
            <div className="date1">
              <p id="date" style={{ textAlign: 'end' }}>{currentDate}</p>
              <p id="time">{currentTime}</p>
            </div>
            <div className="icon1">
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
      <form action="/addadmin" method="get">
      <button
      id="addCollege"
      onClick={handleAddAdmin}
      style={{
        marginTop: '50px',
        width: '10%',
        backgroundColor: '#0A7273',
        color: 'white',
        marginLeft:'300px'
      }}
    >
      Add Admin
    </button></form>
    <div class="mainbody1">
                    <div class="userdet1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <p> patients[i].gmail.split('.')[0] </p>
                    </div>
                    <div className="ug1">
                        <p> patients[i].gmail </p>
                    </div>
                    <div className="ug1">
                            <p>Created on:</p>  
                        </div>
                    <div class="history1">
                        <form action="/deletepatients" method="post">
                            <input type="hidden" name="userId" value="<%= patients[i]._id %>"/>
                            <button id="delete" type="submit" style={{width:'150%',backgroundColor:'#0A7273',color: 'white'}}>Delete</button>
                        </form>
                    </div>
    </div>
    </div>
  );
};

export default AdminList;
