// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

// window.addEventListener("load", function() {
//     //task 3 only
//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     });
// });

window.addEventListener('load', function() {  
    let list = this.document.getElementById('faultyItems');
    let form = document.querySelector('form');
        form.addEventListener('submit', function() {
        let pilot = document.querySelector('input[name=pilotName]');
        let copilot = document.querySelector('input[name=copilotName]');
        let fuelLevel = document.querySelector('input[name=fuelLevel]');
        let cargoLevel = document.querySelector('input[name=cargoLevel]');
    
        
        // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        // event.preventDefault()
        });
     });

    
    // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    //declare each element
    //call formSubmission
