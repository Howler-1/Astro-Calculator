// Step 1: Data for planets
var planets = [
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9]
];

// Step 1: Populate the dropdown options dynamically using JavaScript
function populateDropdown() {
    const dropdown = document.getElementById("planets");
    
    // Reverse the order for Bonus Challenge: Sun first
    planets.reverse().forEach(planet => {
        const option = document.createElement("option");
        // option.value = planet[0].toLowerCase();
        // option.textContent = planet[0];
        option.innerHTML = planet[0];
        dropdown.appendChild(option);
    });
}

// Step 2: Function to calculate the new weight based on the selected planet
function calculateWeight(weight, planetName) {
    // Find the planet data from the array
    const planet = planets.find(p => p[0].toLowerCase() === planetName.toLowerCase());
    
    if (!planet) return null;
    
    // Calculate the new weight
    return weight * planet[1];
}

// Step 3: Handle click event on the button
function handleClickEvent(e) {
    // Step 3a: Get the user's weight from the input field
    const userWeight = parseFloat(document.getElementById("user-weight").value);
    
    if (isNaN(userWeight) || userWeight <= 0) {
        document.getElementById("output").innerText = "Please enter a valid weight.";
        return;
    }

    // Step 3b: Get the selected planet from the dropdown
    const planetName = document.getElementById("planets").value;
    
    // Step 3c: Calculate the new weight
    const newWeight = calculateWeight(userWeight, planetName);

    // Step 3d: Display the result
    if (newWeight !== null) {
        // document.getElementById("output").innerText = `If you were on ${capitalizeFirstLetter(planetName)}, you would weigh ${newWeight.toFixed(2)} lbs!`;
        document.getElementById("output").innerText = `If you were on ${capitalizeFirstLetter(planetName)}, you would weigh ${newWeight}lbs!`;
    } else {
        document.getElementById("output").innerText = "Error: Planet not found.";
    }
}

// Helper function to capitalize the first letter of the planet name
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Step 4: Attach the click event handler to the button
document.getElementById("calculate-button").addEventListener("click", handleClickEvent);

// Step 1: Call populateDropdown to populate the dropdown with planet options
populateDropdown();
