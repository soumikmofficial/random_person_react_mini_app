import "./App.css";
import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

function App() {
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("fullname");
  // const [value, setValue] = useState("random person");
  const [person, setPerson] = useState(null);
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const url = "https://randomuser.me/api/";

  const fetchPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const phone = person.phone;
    const email = person.email;
    const age = person.dob.age;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      street: { number, name },
    } = person.location;
    const location = `${number} ${name}`;
    const name = `${first} ${last}`;
    const newPerson = {
      fullname,
      location,
      phone,
      email,
      password,
      age,
      image,
    };

    setPerson(newPerson);
    setLoading(false);
    setType("fullname");
    // setValue(person[type]);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const handleEvent = (e) => {
    if (e.target.classList.contains("btn")) {
      const newVal = e.target.dataset.label;
      setType(newVal);
      // setValue(person[newVal]);
    }
  };
  return (
    <main>
      <div className="container">
        {person && (
          <div className="info-container">
            <div className="top">
              <div className="img-outer">
                <div className="img-inner">
                  <img src={person.image} alt="" />
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="details">
                <p>
                  My <span>{type}</span> is
                </p>
                <h3>{person[type]}</h3>
              </div>
              <div className="buttons">
                <button
                  data-label="fullname"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <PersonIcon className="icon" />
                </button>
                <button
                  data-label="email"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <EmailIcon className="icon" />
                </button>
                <button
                  data-label="phone"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <PhoneIcon className="icon" />
                </button>
                <button
                  data-label="password"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <LockOpenIcon className="icon" />
                </button>
                <button
                  data-label="age"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <PermContactCalendarIcon className="icon" />
                </button>
                <button
                  data-label="location"
                  onMouseOver={handleEvent}
                  className="btn"
                >
                  <NotListedLocationIcon className="icon" />
                </button>
              </div>
              <div className="fetch-button">
                <button
                  onClick={() => {
                    setLoading(true);
                    fetchPerson();
                  }}
                >
                  {loading ? "Loading..." : "Get Person"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
