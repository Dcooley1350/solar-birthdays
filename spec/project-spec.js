import { User } from './../src/project.js';
import { GalacticAges } from './../src/project.js';
import { GalacticYearsLeft2Live } from './../src/project.js';

describe( 'RealAge', function() {

  it('should test if number entered is a real age', function() {
    const userAge = 21
    let newUser = new User(userAge)
    expect(newUser.realAge()).toEqual(true);
  });
});

describe( 'MercuryAge', function() {

  it('should test if the number returned is /0.24 the number entered', function(){
    const userAgeEarth = 21;
    let newGalacticAges = new GalacticAges(userAgeEarth);
    expect(newGalacticAges.mercuryAge()).toEqual(87.50);
  });
});

describe( 'VenusAge', function() {

  it('should test if the number returned is /0.62 the number entered', function(){
    const userAgeEarth = 21;
    let newGalacticAges = new GalacticAges(userAgeEarth);
    expect(newGalacticAges.venusAge()).toEqual(33.87);
  });
});

describe( 'MarsAge', function() {
  it('should test if the number returned is /1.88 the number entered', function () {
    const userAgeEarth = 21;
    let newGalacticAges = new GalacticAges(userAgeEarth);
    expect(newGalacticAges.marsAge()).toEqual(11.17);
  });
});

describe( 'JupiterAge', function() {

  it('should test if the number returned is /11.86 the number entered', function () {
    const userAgeEarth = 21;
    let newGalacticAges = new GalacticAges(userAgeEarth);
    expect(newGalacticAges.jupiterAge()).toEqual(1.77);
  });
});

describe( 'EarthYearsLeft', function() {

  it('should calculate the difference between age and life expectancy', function () {
    const userAgeEarth = 21;
    const userLifeExpectancy = 76;
    let newUser = new User(userAgeEarth,userLifeExpectancy);
    expect(newUser.earthYearsLeft()).toEqual(55);
  });
});

describe( 'MercuryYearsLeft', function(){

  it('should calculate the years the user has left on Mercury', function() {
    const earthYearsLeft = 55;
    let newYearsLeft = new GalacticYearsLeft2Live(earthYearsLeft);
    expect(newYearsLeft.mercuryYearsLeft()).toEqual(229.17);
  });
});

describe( 'VenusYearsLeft', function() {

  it('should calculate the years a user has left on Venus', function(){
    const earthYearsLeft = 55;
    let newYearsLeft = new GalacticYearsLeft2Live(earthYearsLeft);
    expect(newYearsLeft.venusYearsLeft()).toEqual(88.71);
  });
});

describe( 'MarsYearsLeft', function() {

  it('should calculate the years a user has left on Mars', function(){
    const earthYearsLeft = 55;
    let newYearsLeft = new GalacticYearsLeft2Live(earthYearsLeft);
    expect(newYearsLeft.marsYearsLeft()).toEqual(29.26);
  });
});

describe( 'MarsYearsLeft', function() {

  it('should calculate the years a user has left on Mars', function(){
    expect(true).toEqual(false);
  });
});
