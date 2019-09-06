import { User } from './../src/project.js';
import { GalacticAges } from './../src/project.js';

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
