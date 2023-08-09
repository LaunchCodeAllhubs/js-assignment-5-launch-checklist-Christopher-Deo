// Write your JavaScript code here!
//const { myFetch } = require("./scriptHelper");
window.addEventListener("load", function () {


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        let name = selectedPlanet.name;
        let diameter = selectedPlanet.diameter;
        let star = selectedPlanet.star;
        let distance = selectedPlanet.distance;
        let moons = selectedPlanet.moons;
        let imageUrl = selectedPlanet.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        list.style.visibility = "hidden";

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});