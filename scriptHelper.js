require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

let listedPlanets;

async function setListedPlanets() {
    try {
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        const listedPlanetsResponse = await myFetch();
        listedPlanets = listedPlanetsResponse;
    } catch (error) {
        console.log('Error fetching planets:', error);
    }
}

function validateInput(testInput) {
    return testInput !== "" && !isNaN(testInput);
}

async function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    await setListedPlanets(); // Wait for the planets data to be fetched and stored in listedPlanets
    // The same implementation as before, no changes needed
}

async function myFetch() {
    try {
        const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
        return await response.json();
    } catch (error) {
        console.log('Error fetching planets:', error);
        throw error;
    }
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
