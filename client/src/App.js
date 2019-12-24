import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [ data, setData ] = useState();

  useEffect(() => {
    fetchAsianPorn();
  }, []);

  const fetchAsianPorn = async() => {
    await Axios({
      method: 'GET',
      url: `http://localhost:4040/search?q=asian`,
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
