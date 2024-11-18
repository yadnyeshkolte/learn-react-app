import React from "react";
import { useState } from "react";

const PeopleContainer = (props) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <div>
        <img src={props.imageUrl} alt="people-image"></img>
      </div>
      <div>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};

export default PeopleContainer;
