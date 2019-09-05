import React, { useState } from 'react';
import './App.css';
import Display from './Display.js';
import Controls from './Dashboard.js';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);


  const scoreStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes+1);
    }
  };
  const scoreBall = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls+1);
    }
  };