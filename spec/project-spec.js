import { User } from './../src/project.js';
import { GalacticAges } from './../src/project.js';
import { GalacticYearsLeft2Live } from './../src/project.js';

describe( 'User', function() {
  it('should test if number entered is a real age', function() {
    const userAge = 21
    let newUser = new User(userAge)
    expect(newUser.realAge()).toEqual(true);
  });

  it('should calculate the difference between age and life expectancy', function () {
    const userAgeEarth = 21;
    const userLifeExpectancy = 76;
    let newUser = new User(userAgeEarth,userLifeExpectancy);
    expect(newUser.earthYearsLeft()).toEqual(55);
  });
});

describe( 'GalacticAges', function() {
  let userAgeEarth;
  let newGalacticAges;
  beforeEach( function () {
    userAgeEarth = 21;
    newGalacticAges = new GalacticAges(userAgeEarth);
  });
  it('should test if mercuryAge returns a number /0.24 the number entered', function(){
    newGalacticAges.mercuryAge();
    expect(newGalacticAges.ageMercury).toEqual(87.50);
  });

  it('venusAge function should test if the number returned is /0.62 the number entered', function(){
    newGalacticAges.venusAge();
    expect(newGalacticAges.ageVenus).toEqual(33.87);
  });

  it('marsAge function should test if the number returned is /1.88 the number entered', function () {
    newGalacticAges.marsAge();
    expect(newGalacticAges.ageMars).toEqual(11.17);
  });

  it('jupiterAge function should test if the number returned is /11.86 the number entered', function () {
    newGalacticAges.jupiterAge();
    expect(newGalacticAges.ageJupiter).toEqual(1.77);
  });
});

describe( 'GalacticYearsLeft2Live', function(){
  var newYearsLeft;
  beforeEach(function() {
    const earthYearsLeft = 55;
    newYearsLeft = new GalacticYearsLeft2Live(earthYearsLeft);
  });

  it('should calculate the years the user has left on Mercury', function() {
    newYearsLeft.mercuryYearsLeft();
    expect(newYearsLeft.mercuryYearsLeft2Live).toEqual(229.17);
  });

  it('should calculate the years a user has left on Venus', function(){
    newYearsLeft.venusYearsLeft();
    expect(newYearsLeft.venusYearsLeft2Live).toEqual(88.71);
  });

  it('should calculate the years a user has left on Mars', function(){
    newYearsLeft.marsYearsLeft();
    expect(newYearsLeft.marsYearsLeft2Live).toEqual(29.26);
  });


  it('should calculate the years a user has left on Jupiter', function(){
    newYearsLeft.jupiterYearsLeft();
    expect(newYearsLeft.jupiterYearsLeft2Live).toEqual(4.64);
  });
});
