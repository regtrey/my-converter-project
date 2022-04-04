import React, { useState } from 'react';
import classes from './Temp.module.css';
import calc from '../functions/calc';
import Formula from './Formula';

const Temp = () => {
  const [fromUnit, setFromUnit] = useState('C');
  const [toUnit, setToUnit] = useState('C');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const convertHandler = (e) => {
    e.preventDefault();

    const res = calc('temp', fromValue, fromUnit, toUnit);
    setToValue(res);
  };

  return (
    <div className={classes.tempContainer}>
      <h1 className={classes.title}>Temperature</h1>
      <div className={classes.tempConverterContainer}>
        <form>
          <div className={classes.fromContainer}>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
              <option value="K">Kelvin</option>
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            ></input>
          </div>

          <div className={classes.toContainer}>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
              <option value="K">Kelvin</option>
            </select>
            <input type="number" value={toValue} disabled="disabled"></input>
          </div>

          <button onClick={convertHandler}>Convert</button>
        </form>
      </div>

      <Formula type="temp" fromUnit={fromUnit} toUnit={toUnit} />
    </div>
  );
};

export default Temp;
