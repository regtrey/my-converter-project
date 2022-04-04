import React, { useState } from 'react';
import classes from './Mass.module.css';
import calc from '../functions/calc';
import Formula from './Formula';

const Mass = () => {
  const [fromUnit, setFromUnit] = useState('g');
  const [toUnit, setToUnit] = useState('g');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const convertHandler = (e) => {
    e.preventDefault();

    const res = calc('mass', fromValue, fromUnit, toUnit);
    setToValue(res);
  };

  return (
    <div className={classes.massContainer}>
      <h1 className={classes.title}>Mass</h1>
      <div className={classes.massConverterContainer}>
        <form>
          <div className={classes.fromContainer}>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="g">Gram</option>
              <option value="kg">Kilogram</option>
              <option value="mg">Milligram</option>
              <option value="t">Ton</option>
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            ></input>
          </div>

          <div className={classes.toContainer}>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              <option value="g">Gram</option>
              <option value="kg">Kilogram</option>
              <option value="mg">Milligram</option>
              <option value="t">Ton</option>
            </select>
            <input type="number" value={toValue} disabled="disabled"></input>
          </div>

          <button onClick={convertHandler}>Convert</button>
        </form>
      </div>

      <Formula type="mass" fromUnit={fromUnit} toUnit={toUnit} />
    </div>
  );
};

export default Mass;
