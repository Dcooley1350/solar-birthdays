import { User } from './../src/project.js';


describe( 'RealAge', function() {

  it('should test if number entered is a real age', function() {
    const userAge = 10
    console.log(userAge)
    let newUser = new User(userAge)
    expect(newUser.realAge()).toEqual(true);
  });
});
