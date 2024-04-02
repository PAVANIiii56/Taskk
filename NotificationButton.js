import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const NotificationButton = () => {
  const handleNotificationClick = async () => {
    alert("notification sent")
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow" style={{ height: "500px", width: "300px", backgroundColor: "black", border: "5px solid orange" }}>
            <div style={{ height: "15px", width: "100%", backgroundColor: "white" }}></div>
            <div className="text-center mb-4">
              <h1 style={{ color: "white" }}>Welcome</h1>
              <h4 style={{ color: "white" }}>This is Notification</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="icon-container border border-3 border-orange rounded-circle d-flex justify-content-center align-items-center text-white" style={{height:"200px",
      width: "200px",
      border:"3px solid orange",borderRadius:"100%",color:"white"}}>
                <AccessAlarmIcon style={{ color: "orange", fontSize: "150px", marginTop: "25px" }} />
              </div>
              <br/><br/>
            </div>
            <div className="text-center">
              <button onClick={handleNotificationClick} style={{ height: "40px", borderRadius: "25%", width: "50%", border: "3px solid white", backgroundColor: "orange", color: "white",fontSize:"15px" }}>Send Notification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationButton;
