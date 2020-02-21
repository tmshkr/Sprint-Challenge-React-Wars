import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [currentPage, setPage] = useState(1);
  const [data, setData] = useState({});

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const url = `https://swapi.co/api/people/?page=${currentPage}&format=json`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, [currentPage]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
