import { useEffect, useState } from 'react';
import './Patientsadmins.css';
import { useNavigate } from 'react-router-dom';


function Doctorsadmin() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Doctor/signup');
  };

  return (
    <div className="nonnavbar340" style={{ overflowY: 'auto' }}>
      <div className="hornav340">
        <div className="sessions340" style={{ marginTop: '2%' }}>
          <div className="textpart1340">
            <div className="textdiv40">
              <p style={{ fontSize: '30px' }}>Doctors List</p>
            </div>
            <div className="imgdiv340">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="dates40">
          <div className="text340">
            <div className="date340" style={{ textAlign: 'end',  margin:'0' , padding:'0'}}>
              <p id="date" style={{margin:'0'}}>{date}</p>
              <p id="time" style={{margin:'0'}}>{time}</p>
            </div>
            <div className="icon40">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button
          id="addpatient"
          type="submit"
          style={{
            marginTop: '50px',
            width: '10%',
            backgroundColor: '#0A7273',
            color: 'white',
            marginLeft: '300px',
          }}
        >
          Add Doctor
        </button>
      </form>
      <form method="post" encType="multipart/form-data" style={{ display: 'flex', justifyContent: 'center',alignItems:'center',  }}>
        <input
          type="file"
          name="json1"
          style={{ marginLeft: '30%',  }}
        />
        <button
          id="addpatient140"
          type="submit"
          style={{
            width: 'auto',
            backgroundColor: '#0A7273',
            color: 'white',
            marginRight:'30%'
          }}
        >
          Upload JSON File
        </button>
      </form>
      <div class="mainbody1240">
        <div class="userdet1240">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <p> doctors[i].gmail.split('.')[0] </p>
        </div>
        <div class="ug40">
          <p> doctors[i].gmail </p>
        </div>
        <div class="history40">
          <form action="/deletepatients" method="post">
            <input type="hidden" name="userId" value="<%= patients[i]._id %>" />
            <button id="delete" type="submit" style={{ width: '150%', backgroundColor: '#0A7273', color: 'white' }}>Delete</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Doctorsadmin;