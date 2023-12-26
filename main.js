
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

    var planetDropdown = document.getElementById('planets');
    for (let i = planets.length - 1; i >= 0; i--) {
        let option = document.createElement('option');
        option.textContent = planets[i][0];
        option.value = planets[i][0];
        planetDropdown.appendChild(option);
    }


function calculateWeight(userWeight, planet) { 
     for (let i = 0; i < planets.length; i++) {
        if (planet==planets[i][0]){ 
            return (userWeight/2.31) * planets[i][1];

        } 
   }
}

function handleClickEvent() {
    let userWeight = parseFloat(document.getElementById('user-weight').value);
    let planet = document.getElementById('planets').value;
    let result = calculateWeight(userWeight, planet);

document.querySelector('#output').innerHTML = `If you were on ${planet}, you would weigh ${Number(result.toFixed(2))} Delicious liters of Nutritious Mountain Dew!`;
  
}

document.querySelector('#calculate-button').addEventListener('click', handleClickEvent);