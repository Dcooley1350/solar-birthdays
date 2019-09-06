export class User {
  constructor(ageEarth, lifeExpectancy, earthYearsLeft2Live) {
    this.ageEarth = ageEarth;
    this.lifeExpectancy = lifeExpectancy;
    this.earthYearsLeft2Live = earthYearsLeft2Live;
  }
  realAge() {
    if(120>this.ageEarth && this.ageEarth> 0){
      return true;
    } else {
      return false;
    }
  }
  earthYearsLeft() {
    this.earthYearsLeft2Live = this.lifeExpectancy - this.ageEarth;
    return this.earthYearsLeft2Live;
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
    this.ageMercury = Math.round(this.ageEarth/0.24*100)/100;
    return this.ageMercury;
  }
  venusAge() {
    this.ageVenus = Math.round(this.ageEarth/0.62*100)/100;
    return this.ageVenus;
  }
  marsAge() {
    this.ageMars = Math.round(this.ageEarth/1.88*100)/100;
    return this.ageMars;
  }
  jupiterAge() {
    this.ageJupiter = Math.round(this.ageEarth/11.86*100)/100;
    return this.ageJupiter;
  }
}

export class GalacticYearsLeft2Live {
  constructor( earthYearsLeft2Live, mercuryYearsLeft2Live, venusYearsLeft2Live, marsYearsLeft2Live, jupiterYearsLeft2Live){
    this.earthYearsLeft2Live = earthYearsLeft2Live;
    this.mercuryYearsLeft2Live = mercuryYearsLeft2Live;
    this.venusYearsLeft2Live = venusYearsLeft2Live;
    this.marsYearsLeft2Live = marsYearsLeft2Live;
    this.jupiterYearsLeft2Live = jupiterYearsLeft2Live;
  }
  mercuryYearsLeft(){
    this.mercuryYearsLeft2Live = Math.round((this.earthYearsLeft2Live/0.24*100))/100;
    return this.mercuryYearsLeft2Live;
  }

}
