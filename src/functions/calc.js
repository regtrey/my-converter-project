const calc = (type, fromValue, fromUnit, toUnit) => {
  if (type === 'length') {
    const cm =
      toUnit === 'in'
        ? fromValue * 0.393701
        : toUnit === 'ft'
        ? fromValue * 0.0328
        : toUnit === 'm'
        ? fromValue * 0.01
        : fromValue * 1;

    const inch =
      toUnit === 'cm'
        ? fromValue * 2.54
        : toUnit === 'ft'
        ? fromValue / 12
        : toUnit === 'm'
        ? fromValue / 39.37
        : fromValue * 1;

    const ft =
      toUnit === 'cm'
        ? fromValue * 30.48
        : toUnit === 'in'
        ? fromValue * 12
        : toUnit === 'm'
        ? fromValue / 3.281
        : fromValue * 1;

    const m =
      toUnit === 'cm'
        ? fromValue * 100
        : toUnit === 'in'
        ? fromValue * 39.37
        : toUnit === 'ft'
        ? fromValue * 3.281
        : fromValue * 1;

    const result =
      fromUnit === 'cm'
        ? cm
        : fromUnit === 'in'
        ? inch
        : fromUnit === 'ft'
        ? ft
        : fromUnit === 'm'
        ? m
        : fromValue * 1;

    return result;
  }

  if (type === 'mass') {
    const g =
      toUnit === 'kg'
        ? fromValue / 1000
        : toUnit === 'mg'
        ? fromValue * 1000
        : toUnit === 't'
        ? fromValue / 1000000
        : fromValue * 1;

    const kg =
      toUnit === 'g'
        ? fromValue * 1000
        : toUnit === 'mg'
        ? fromValue * 1000000
        : toUnit === 't'
        ? fromValue / 1000
        : fromValue * 1;

    const mg =
      toUnit === 'g'
        ? fromValue / 1000
        : toUnit === 'kg'
        ? fromValue / 1000000
        : toUnit === 't'
        ? fromValue / 1000000000
        : fromValue * 1;

    const t =
      toUnit === 'g'
        ? fromValue * 1000000
        : toUnit === 'kg'
        ? fromValue * 1000
        : toUnit === 'mg'
        ? fromValue * 1000000000
        : fromValue * 1;

    const result =
      fromUnit === 'g'
        ? g
        : fromUnit === 'kg'
        ? kg
        : fromUnit === 'mg'
        ? mg
        : fromUnit === 't'
        ? t
        : fromValue * 1;

    return result;
  }

  if (type === 'temp') {
    const celsius =
      toUnit === 'F'
        ? fromValue * 1.8 + 32
        : toUnit === 'K'
        ? Number(fromValue) + 273.15
        : fromValue * 1;

    const fahrenheit =
      toUnit === 'C'
        ? ((fromValue - 32) * 5) / 9
        : toUnit === 'K'
        ? ((fromValue - 32) * 5) / 9 + 273.15
        : fromValue * 1;

    const kelvin =
      toUnit === 'C'
        ? fromValue - 273.15
        : toUnit === 'F'
        ? ((fromValue - 273.15) * 9) / 5 + 32
        : fromValue * 1;

    const result =
      fromUnit === 'C'
        ? celsius
        : fromUnit === 'F'
        ? fahrenheit
        : fromUnit === 'K'
        ? kelvin
        : fromValue * 1;

    return result;
  }

  if (type === 'speed') {
    const kph =
      toUnit === 'knot'
        ? fromValue / 1.852
        : toUnit === 'mph'
        ? fromValue / 1.609
        : fromValue * 1;

    const knot =
      toUnit === 'kph'
        ? fromValue * 1.852
        : toUnit === 'mph'
        ? fromValue * 1.151
        : fromValue * 1;

    const mph =
      toUnit === 'kph'
        ? fromValue * 1.609
        : toUnit === 'knot'
        ? fromValue / 1.151
        : fromValue * 1;

    const result =
      fromUnit === 'kph'
        ? kph
        : fromUnit === 'knot'
        ? knot
        : fromUnit === 'mph'
        ? mph
        : fromValue * 1;

    return result;
  }
};

export default calc;
