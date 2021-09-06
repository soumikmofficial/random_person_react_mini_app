import "./App.css";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

function App() {
  const url = "https://randomuser.me/api/";

  const handleEvent = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <div className="container">
        <div className="info-container">
          <div className="top">
            <div className="img-outer">
              <div className="img-inner">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="details">
              <p>
                My <span>name</span> is
              </p>
              <h3>Some Name</h3>
            </div>
            <div className="buttons">
              <button data-label="name" onMouseOver={handleEvent}>
                <PersonIcon className="icon" />
              </button>
              <button data-label="email" onMouseOver={handleEvent}>
                <EmailIcon className="icon" />
              </button>
              <button data-label="phone" onMouseOver={handleEvent}>
                <PhoneIcon className="icon" />
              </button>
              <button data-label="password" onMouseOver={handleEvent}>
                <LockOpenIcon className="icon" />
              </button>
              <button data-label="age" onMouseOver={handleEvent}>
                <PermContactCalendarIcon className="icon" />
              </button>
              <button data-label="location" onMouseOver={handleEvent}>
                <NotListedLocationIcon className="icon" />
              </button>
            </div>
            <div className="fetch-button">
              <button>Get Person</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
