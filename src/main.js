import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { User } from './project.js';
import { GalacticAges } from './project.js';
import { GalacticYearsLeft2Live } from './project.js';

// function displayResults() {
//   $("#earth-age").text(newUser.ageEarth);
//   $("#earth-yl").text(newUser.earthYearsLeft2Live);
//   $("#mercury-age").text(newGalacticAge.agemercury);
//   $("#mercury-yl").text(newGalacticYearsLeft2Live.mercuryYearsLeft2Live);
//   $("#venus-age").text(newGalacticAge.ageVenus);
//   $("#venus-yl").text(newGalacticYearsLeft2Live.venusYearsLeft2Live);
//   $("#mars-age").text(newGalacticAge.ageMars);
//   $("#mars-yl").text(newGalacticYearsLeft2Live.marsYearsLeft2Live);
//   $("#jupiter-age").text(newGalacticAge.ageJupiter);
//   $("#jupiter-yl").text(newGalacticYearsLeft2Live.jupiterYearsLeft2Live);
//   $("#input-panel").hide();
//   $("#output-panel").show();
// }

$(document).ready(function(){
  $("#submit-info").submit(function(event){
    console.log("tacos");
    event.preventDefault();
    $("#idiot").hide();
    let inputtedAge = $("#age").val();
    let inputtedLE = $("#life-expectancy").val();
    let newUser = new User(inputtedAge, inputtedLE);
    let newGalacticAge = new GalacticAges(inputtedAge);
    let newGalacticYearsLeft2Live = new GalacticYearsLeft2Live();
    const ageReal = newUser.realAge()
    if (ageReal == true) {
      newUser.earthYearsLeft();
      newGalacticYearsLeft2Live.earthYearsLeft2Live = newUser.earthYearsLeft2Live;
      newGalacticAge.mercuryAge();
      newGalacticAge.venusAge();
      newGalacticAge.marsAge();
      newGalacticAge.jupiterAge();
      newGalacticYearsLeft2Live.mercuryYearsLeft();
      newGalacticYearsLeft2Live.venusYearsLeft();
      newGalacticYearsLeft2Live.marsYearsLeft();
      newGalacticYearsLeft2Live.jupiterYearsLeft();
      console.log(newGalacticYearsLeft2Live.earthYearsLeft2Live);
      console.log(newGalacticYearsLeft2Live.jupiterYearsLeft());
      console.log(newGalacticYearsLeft2Live.jupiterYearsLeft2Live)

      $("#earth-age").text(newUser.ageEarth);
      $("#earth-yl").text(newUser.earthYearsLeft2Live);
      $("#mercury-age").text(newGalacticAge.ageMercury);
      $("#mercury-yl").text(newGalacticYearsLeft2Live.mercuryYearsLeft2Live);
      $("#venus-age").text(newGalacticAge.ageVenus);
      $("#venus-yl").text(newGalacticYearsLeft2Live.venusYearsLeft2Live);
      $("#mars-age").text(newGalacticAge.ageMars);
      $("#mars-yl").text(newGalacticYearsLeft2Live.marsYearsLeft2Live);
      $("#jupiter-age").text(newGalacticAge.ageJupiter);
      $("#jupiter-yl").text(newGalacticYearsLeft2Live.jupiterYearsLeft2Live);
      $("#input-panel").hide();
      $("#output-panel").show();
    } else {
      $("#idiot").show();
      newUser.ageEarth = [];
      newUser.lifeExpectancy = [];
    }

  });
});
