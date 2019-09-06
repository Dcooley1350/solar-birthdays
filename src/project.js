export class User {
  constructor(ageEarth, name, activityLevel, smoke, country, weight) {
    this.ageEarth = ageEarth;
    this.name = name;
    this.activityLevel = activityLevel;
    this.smoke = smoke;
    this.country = country;
    this.weight = weight;
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
  
}
