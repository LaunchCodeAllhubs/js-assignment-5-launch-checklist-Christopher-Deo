window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    const form = document.querySelector('form[data-testid="testForm"]');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const pilotNameInput = document.querySelector('input[name="pilotName"]');
        const copilotNameInput = document.querySelector('input[name="copilotName"]');
        const fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
        const cargoMassInput = document.querySelector('input[name="cargoMass"]');

        const pilotName = pilotNameInput.value;
        const copilotName = copilotNameInput.value;
        const fuelLevel = fuelLevelInput.value;
        const cargoMass = cargoMassInput.value;

        if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
            alert("All fields are required!");
            return;
        }

        if (!isNaN(pilotName) || !isNaN(copilotName)) {
            alert("Names should be text!");
            return;
        }

        if (isNaN(fuelLevel) || isNaN(cargoMass)) {
            alert("Fuel level and cargo mass should be numbers!");
            return;
        }

        document.getElementById("pilotStatus").textContent = `Pilot ${pilotName} is ready for launch`;
        document.getElementById("copilotStatus").textContent = `Co-pilot ${copilotName} is ready for launch`;

        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
            document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "#C7254E";
            document.getElementById("faultyItems").style.visibility = "visible";
        } else {
            document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
        }

        if (cargoMass > 10000) {
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "#C7254E";
            document.getElementById("faultyItems").style.visibility = "visible";
        } else {
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
        }

        if (fuelLevel >= 10000 && cargoMass <= 10000) {
            document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "#419F6A";
            document.getElementById("faultyItems").style.visibility = "hidden";
        }
    });

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

        const randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image
        );
    }).catch(function (error) {
        console.log('Error fetching planets:', error);
    });
});
