export class User {
  constructor(ageEarth, lifeExpectancy) {
    this.ageEarth = ageEarth;
    this.lifeExpectancy = lifeExpectancy;
  }
  realAge() {
    if(120>this.ageEarth && this.ageEarth> 0){
      return true;
    } else {
      return false;
    }
  }
}


export class GalacticAges {
  constructor(ageEarth,ageMercury, ageVenus, ageMars, ageJupiter) {
    this.ageEarth = ageEarth;
    this.ageMercury = ageMercury;
    this.ageVenus = ageVenus;
    this.ageMars = ageMars;
    this.ageJupiter= ageJupiter;
  }
  mercuryAge() {
    this.ageMercury = Math.round((this.ageEarth/0.24*100))/100;
    return this.ageMercury;
  }
  venusAge() {
    this.ageVenus = Math.round((this.ageEarth/0.62*100))/100;
    return this.ageVenus;
  }
  marsAge() {
    this.ageMars = Math.round((this.ageEarth/1.88*100))/100;
    return this.ageMars;
  }
  jupiterAge() {
    this.ageJupiter = Math.round((this.ageEarth/11.86*100))/100;
    return this.ageJupiter;
  }
}
