import { useState,useEffect } from 'react';
import './Reportsadmin.css';
function Reports(){
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
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
    const [reports, setReports] = useState([]);

     
      
          return(
              <div className="nonnavbar342" style={{ overflowY: 'auto' }}>
              <div className="hornav342">
                <div className="sessions342" style={{ marginTop: '2%' }}>
                  <div className="textpart1342">
                    <div className="textdiv42">
                      <p style={{ fontSize: '30px' }}>Reports of Bugs</p>
                    </div>
                    <div className="imgdiv342">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dates42">
                  <div className="text342">
                    <div className="date342" style={{ textAlign: 'end', margin:'0', padding:'0' }}>
                      <p id="date" style={{margin:'0' , padding:'0'}}>{date}</p>
                      <p id="time" style={{margin:'0' , padding:'0'}}>{time}</p>
                    </div>
                    <div className="icon42">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {reports.length === 0 ? (
        <div style={{ fontSize: '37px', marginLeft: '600px', marginTop: '300px', color: '#0A7273' }}>
          No Reports found
        </div>
      ) : (
        reports.map((report, index) => (
          <div className="mainbody42" key={index}>
            <div className="header142">
              <p style={{ marginLeft: '5%' }}>Created by: {report.createdby}</p>
              <p style={{ marginRight: '8%' }}>Reported On: {report.createdon}</p>
            </div>
            <div className="St42">
              <p>Issue: {report.report}</p>
            </div>
          </div>
        ))
      )}
            </div>
    );
}
export default Reports;