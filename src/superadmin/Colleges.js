import {useState,useEffect} from 'react';
import './Colleges.css'
import { useNavigate } from 'react-router-dom';
function Colleges() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);
    const navigate = useNavigate();

  const handleAddCollege = (e) => {
    e.preventDefault();
    navigate('/college/signup');
  };
    useEffect(() => {
        function handletime() {
          const now = new Date();
          setDate(now.toLocaleDateString());
          setTime(now.toLocaleTimeString());
        }
        handletime();
        const timer = setInterval(handletime, 1000);
        return () => clearInterval(timer);
      }, []);
      const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
     
  return (
    <div className="nonnavbar1">
      <div className="hornav1">
        <div className="sessions1" style={{ marginTop: '2%' }}>
          <div className="textpart12">
            <div className="textdiv">
              <p style={{ fontSize: '30px' }}>Colleges List</p>
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

        <div className="dates">
          <div className="text1">
            <div className="date1">
              <p id="date" style={{ textAlign: 'end' }}>{date}</p>
              <p id="time">{time}</p>
            </div>
            <div className="icon">
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
      <form action="/college/signup" method="get">
      <button
      id="addCollege"
      onClick={handleAddCollege}
      style={{
        marginTop: '50px',
        width: '10%',
        backgroundColor: '#0A7273',
        color: 'white',
        marginLeft:'300px'
      }}
    >
      Add College
    </button></form>
    <div className='mm'>
    <div class="mainbody1" style={{cursor:'pointer'}}onClick={toggleCollapse}>
                    <div class="userdet1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <p> colleges[i].gmail.split('.')[0] </p>
                    </div>
                    <div class="ug1">
                        <p> patients[i].gmail </p>
                    </div>
                    <div class="history1">
                        <form action="/deletepatients" method="post">
                            <input type="hidden" name="userId" value="<%= patients[i]._id %>"/>
                            <button id="delete" type="submit" style={{width:'150%',backgroundColor:'#0A7273',color: 'white'}}>Delete</button>
                        </form>
                    </div>

    </div>
    {!isCollapsed && (
    <div className='sec1'>
    <p style={{display:'flex', alignItems:'center' , justifyContent:'space-around',fontSize:'25px' , color:'#0A7273'}}><span>no of doctors</span></p>
    <div
      className="subdiv"
      style={{
        border: '1px solid black',
        borderRadius: '120px',
        paddingLeft: '10px',
        marginTop: '10px',
        marginLeft: 'auto',
        width: '90%',
        marginRight: 'auto',
        padding: '10px',
        backgroundColor: 'whitesmoke',
        color: '#0A7273',
        boxShadow: '10px 10px 36px #bebebe, -10px -10px 36px #ffffff',
      }}
    >
      <p>Doctor Gmail:</p>
      <p>Doctor Fields:</p>
      <p>Doctor College:</p>
    </div>
    <p style={{display:'flex',alignItems:'centre',justifyContent:'space-around',fontSize:'25px',color:'#0A7273'}}><span>Number of completed appointments</span> </p>
    <div
      className="subdiv"
      style={{
        border: '1px solid black',
        borderRadius: '120px',
        paddingLeft: '10px',
        marginTop: '10px',
        marginLeft: 'auto',
        width: '90%',
        marginRight: 'auto',
        padding: '10px',
        marginBottom:'10px',
        backgroundColor: 'whitesmoke',
        color: '#0A7273',
        boxShadow: '10px 10px 36px #bebebe, -10px -10px 36px #ffffff',
      }}
    >
      <p>student  Gmail:</p>
      <p>student College:</p>
    </div>
    <p style={{display:'flex',alignItems:'center',justifyContent:'space-around',fontSize:'25px',color:'#0A7273'}}><span>No of upcoming appointments</span></p>
    <div
      className="subdiv"
      style={{
        border: '1px solid black',
        borderRadius: '120px',
        paddingLeft: '10px',
        marginTop: '10px',
        marginLeft: 'auto',
        width: '90%',
        marginRight: 'auto',
        padding: '10px',
        marginBottom:'10px',
        backgroundColor: 'whitesmoke',
        color: '#0A7273',
        boxShadow: '10px 10px 36px #bebebe, -10px -10px 36px #ffffff',
      }}
    >
      <p>appointment created by:</p>
      <p>appointment scheduled on:</p>
      <p>appointment description:</p>
    </div>

    </div>)}

    </div >
    

       
    </div>
  );
};

export default Colleges;
