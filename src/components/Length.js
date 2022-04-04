import React, { useState } from 'react';
import classes from './Length.module.css';
import calc from '../functions/calc';
import Formula from './Formula';

const Length = () => {
  const [fromUnit, setFromUnit] = useState('cm');
  const [toUnit, setToUnit] = useState('cm');
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const convertHandler = (e) => {
    e.preventDefault();

    const res = calc('length', fromValue, fromUnit, toUnit);
    setToValue(res);
  };

  return (
    <div className={classes.lengthContainer}>
      <h1 className={classes.title}>Length</h1>
      <div className={classes.lengthConverterContainer}>
        <form>
          <div className={classes.fromContainer}>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="cm">Centimeter</option>
              <option value="in">Inch</option>
              <option value="ft">Feet</option>
              <option value="m">Meter</option>
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            ></input>
          </div>

          <div className={classes.toContainer}>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              <option value="cm">Centimeter</option>
              <option value="in">Inch</option>
              <option value="ft">Feet</option>
              <option value="m">Meter</option>
            </select>
            <input type="number" value={toValue} disabled="disabled"></input>
          </div>

          <button onClick={convertHandler}>Convert</button>
        </form>
      </div>

      <Formula type="length" fromUnit={fromUnit} toUnit={toUnit} />
    </div>
  );
};

export default Length;
