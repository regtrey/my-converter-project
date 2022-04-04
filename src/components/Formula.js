import React, { useState, useEffect } from 'react';
import classes from './Formula.module.css';
import formulas from '../functions/formulas';

const Formula = ({ type, fromUnit, toUnit }) => {
  const [formula, setFormula] = useState('');

  useEffect(() => {
    const formulaText = formulas(type, fromUnit, toUnit);
    setFormula(formulaText);
  }, [type, fromUnit, toUnit]);

  return (
    <div className={classes.formulaContainer}>
      <div className={classes.formulaTitle}>Formula</div>
      <p className={classes.formula}>{formula}</p>
    </div>
  );
};

export default Formula;
