export class User {
  constructor(name, activityLevel, smoke, country, weight, ageEarth,) {
    this.name = name;
    this.activityLevel = activityLevel;
    this.smoke = smoke;
    this.country = country;
    this.weight = weight;
    this.ageEarth = ageEarth;
  }
  RealAge() {
    if(120>this.ageEarth> 0){
      return true;
    } else {
      return false;
    };
  }
}





 export class GalacticAges {
   constructor(ageMercury, ageVenus, ageMars, ageJupiter)
