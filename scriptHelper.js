// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return "Empty"
    };
    if (!isNaN(testInput)) {
        return "Is a Number"
    };
    if (isNaN(testInput)){
        return "Not a Number"
    };

 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let input = document.querySelectorAll('input');
       
    for (let i = 0; i < input.length; i++) {
        if (validateInput(input.value[i]) === 'Empty'){
            alert('All Fields are Required')
        }
    }
    if ((validateInput(pilot.value)) || (validateInput(copilot.value)) === 'Is a Number') {
        alert('Please enter a name')
    } else {
        document.getElementById("pilotStatus").innerHTML += pilot;
        document.getElementById("copilotStatus").innerHTML += copilot;
    } 

  
    
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;