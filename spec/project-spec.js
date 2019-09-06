import { User } from './../src/project.js';
import { GalacticAges}

describe( 'RealAge', function() {

  it('should test if number entered is a real age', function() {
    const userAge = 10
    let newUser = new User(userAge)
    expect(newUser.realAge()).toEqual(true);
  });
});

describe( 'MercuryAge', function() {

  it('should test if the number returned is 0.24* the number entered', function(){
    expect(true).toEqual(false)
  }
})
