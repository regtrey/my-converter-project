import React, { useState } from 'react';
import classes from './Converter.module.css';
import { NavLink } from 'react-router-dom';
import Length from '../components/Length';
import Mass from '../components/Mass';
import Temp from '../components/Temp';
import Speed from '../components/Speed';

const Converter = () => {
  const [active, setActive] = useState('length');

  const lengthHandler = (e) => {
    e.preventDefault();
    setActive('length');
  };

  const massHandler = (e) => {
    e.preventDefault();
    setActive('mass');
  };

  const speedHandler = (e) => {
    e.preventDefault();
    setActive('speed');
  };

  const tempHandler = (e) => {
    e.preventDefault();
    setActive('temp');
  };

  return (
    <div className={classes.container}>
      <div className={classes.typesContainer}>
        <ul>
          <li>
            <NavLink
              to="/length"
              className={active === 'length' ? classes.active : ''}
              onClick={lengthHandler}
            >
              Length
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mass"
              className={active === 'mass' ? classes.active : ''}
              onClick={massHandler}
            >
              Mass
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/speed"
              className={active === 'speed' ? classes.active : ''}
              onClick={speedHandler}
            >
              Speed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/temperature"
              className={active === 'temp' ? classes.active : ''}
              onClick={tempHandler}
            >
              Temperature
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.converterContainer}>
        {active === 'length' ? (
          <Length />
        ) : active === 'mass' ? (
          <Mass />
        ) : active === 'speed' ? (
          <Speed />
        ) : active === 'temp' ? (
          <Temp />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Converter;
