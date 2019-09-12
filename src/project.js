export class User {
  constructor() {
    this.ageEarth;
    this.lifeExpectancy;
    this.earthYearsLeft2Live;
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
  constructor() {
    this.ageEarth;
    this.ageMercury;
    this.ageVenus;
    this.ageMars;
    this.ageJupiter;
  }
  mercuryAge() {
    this.ageMercury = Math.round(this.ageEarth/0.24*100)/100;
  }
  venusAge() {
    this.ageVenus = Math.round(this.ageEarth/0.62*100)/100;
  }
  marsAge() {
    this.ageMars = Math.round(this.ageEarth/1.88*100)/100;
  }
  jupiterAge() {
    this.ageJupiter = Math.round(this.ageEarth/11.86*100)/100;
  }
}

export class GalacticYearsLeft2Live {
  constructor(){
    this.earthYearsLeft2Live;
    this.mercuryYearsLeft2Live;
    this.venusYearsLeft2Live;
    this.marsYearsLeft2Live;
    this.jupiterYearsLeft2Live;
  }
  mercuryYearsLeft(){
    this.mercuryYearsLeft2Live = Math.round((this.earthYearsLeft2Live/0.24*100))/100;
  }
  venusYearsLeft(){
    this.venusYearsLeft2Live = Math.round(this.earthYearsLeft2Live/0.62*100)/100;
  }
  marsYearsLeft(){
    this.marsYearsLeft2Live = Math.round(this.earthYearsLeft2Live/1.88*100)/100;
  }
  jupiterYearsLeft(){
    this.jupiterYearsLeft2Live = Math.round(this.earthYearsLeft2Live/11.86*100)/100;
  }
}
