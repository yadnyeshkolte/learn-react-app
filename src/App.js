import React, { useState, useEffect } from "react";
import PeopleContainer from "./People-Container";
import "./App.css";

const App = () => {
  const title = "My new react app";

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      <div>
        <h1> Presenting {title} </h1>
      </div>
      <div>
        {results.map((result, index) => {
          return (
            <PeopleContainer
              key={index}
              imageUrl={result.picture.medium}
              name={result.name.first}
              email={result.email}
              age={result.dob.age}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};
export default App;
