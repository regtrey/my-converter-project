import React, { useState } from 'react';
import classes from './Speed.module.css';
import calc from '../functions/calc';
import Formula from './Formula';

const Speed = () => {
  const [fromUnit, setFromUnit] = useState('kph');
  const [toUnit, setToUnit] = useState('kph');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const convertHandler = (e) => {
    e.preventDefault();

    const res = calc('speed', fromValue, fromUnit, toUnit);
    setToValue(res);
  };

  return (
    <div className={classes.tempContainer}>
      <h1 className={classes.title}>Speed</h1>
      <div className={classes.tempConverterContainer}>
        <form>
          <div className={classes.fromContainer}>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="kph">Kilometer per hour</option>
              <option value="knot">Knot</option>
              <option value="mph">Miles per hour</option>
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            ></input>
          </div>

          <div className={classes.toContainer}>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              <option value="kph">Kilometer per hour</option>
              <option value="knot">Knot</option>
              <option value="mph">Miles per hour</option>
            </select>
            <input type="number" value={toValue} disabled="disabled"></input>
          </div>

          <button onClick={convertHandler}>Convert</button>
        </form>
      </div>

      <Formula type="speed" fromUnit={fromUnit} toUnit={toUnit} />
    </div>
  );
};

export default Speed;
