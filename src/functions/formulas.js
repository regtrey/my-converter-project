const formulas = (type, fromUnit, toUnit) => {
  // LENGTH
  if (type === 'length') {
    if (fromUnit === 'cm') {
      const formulaText =
        toUnit === 'in'
          ? 'divide the length value by 2.54'
          : toUnit === 'ft'
          ? 'divide the length value by 30.48'
          : toUnit === 'm'
          ? 'divide the length value by 100'
          : '';
      return formulaText;
    }

    if (fromUnit === 'in') {
      const formulaText =
        toUnit === 'cm'
          ? 'multiply the length value by 2.54'
          : toUnit === 'ft'
          ? 'divide the length value by 12'
          : toUnit === 'm'
          ? 'divide the length value by 39.37'
          : '';
      return formulaText;
    }

    if (fromUnit === 'ft') {
      const formulaText =
        toUnit === 'cm'
          ? 'multiply the length value by 30.48'
          : toUnit === 'in'
          ? 'multiply the length value by 12'
          : toUnit === 'm'
          ? 'for an approximate result, divide the length value by 3.281'
          : '';
      return formulaText;
    }

    if (fromUnit === 'm') {
      const formulaText =
        toUnit === 'cm'
          ? 'multiply the length value by 100'
          : toUnit === 'in'
          ? 'multiply the length value by 39.37'
          : toUnit === 'ft'
          ? 'for an approximate result, multiply the length value by 3.281'
          : '';
      return formulaText;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // MASS
  if (type === 'mass') {
    if (fromUnit === 'g') {
      const formulaText =
        toUnit === 'kg'
          ? 'divide the mass value by 1000'
          : toUnit === 'mg'
          ? 'multiply the mass value by 1000'
          : toUnit === 't'
          ? 'divide the mass value by 1e+6'
          : '';
      return formulaText;
    }

    if (fromUnit === 'kg') {
      const formulaText =
        toUnit === 'g'
          ? 'multiply the mass value by 1000'
          : toUnit === 'mg'
          ? 'multiply the mass value by 1e+6'
          : toUnit === 't'
          ? 'divide the mass value by 1000'
          : '';
      return formulaText;
    }

    if (fromUnit === 'mg') {
      const formulaText =
        toUnit === 'g'
          ? 'divide the mass value by 1000'
          : toUnit === 'kg'
          ? 'divide the mass value by 1e+6'
          : toUnit === 't'
          ? 'divide the mass value by 1e+9'
          : '';
      return formulaText;
    }

    if (fromUnit === 't') {
      const formulaText =
        toUnit === 'g'
          ? 'multiply the mass value by 1e+6'
          : toUnit === 'kg'
          ? 'multiply the mass value by 1000'
          : toUnit === 'mg'
          ? 'multiply the mass value by 1e+9'
          : '';
      return formulaText;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // TEMPERATURE
  if (type === 'temp') {
    if (fromUnit === 'C') {
      const formulaText =
        toUnit === 'F'
          ? '(0°C × 9/5) + 32 = 32°F'
          : toUnit === 'K'
          ? '0°C + 273.15 = 273.15K'
          : '';
      return formulaText;
    }

    if (fromUnit === 'F') {
      const formulaText =
        toUnit === 'C'
          ? '(0°F − 32) × 5/9 = -17.78°C'
          : toUnit === 'K'
          ? '(0°F − 32) × 5/9 + 273.15 = 255.372K'
          : '';
      return formulaText;
    }

    if (fromUnit === 'K') {
      const formulaText =
        toUnit === 'C'
          ? '0K − 273.15 = -273.1°C'
          : toUnit === 'F'
          ? '(0K − 273.15) × 9/5 + 32 = -459.7°F'
          : '';
      return formulaText;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // SPEED
  if (type === 'speed') {
    if (fromUnit === 'kph') {
      const formulaText =
        toUnit === 'knot'
          ? 'divide the speed value by 1.852'
          : toUnit === 'mph'
          ? 'for an approximate result, divide the speed value by 1.609'
          : '';
      return formulaText;
    }

    if (fromUnit === 'knot') {
      const formulaText =
        toUnit === 'kph'
          ? 'multiply the speed value by 1.852'
          : toUnit === 'mph'
          ? 'for an approximate result, multiply the speed value by 1.151'
          : '';
      return formulaText;
    }

    if (fromUnit === 'mph') {
      const formulaText =
        toUnit === 'kph'
          ? 'for an approximate result, multiply the speed value by 1.609'
          : toUnit === 'knot'
          ? 'for an approximate result, divide the speed value by 1.151'
          : '';
      return formulaText;
    }
  }
};

export default formulas;
