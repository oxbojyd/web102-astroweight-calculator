
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
        option.value = i;
        planetDropdown.appendChild(option);
    }


function calculateWeight(userWeight, planetIndex) { 
    let weight = planets[planetIndex][1];
    console.log(weight);
    console.log(userWeight);
    return userWeight * weight;
}

function handleClickEvent() {
    let userWeight = parseFloat(document.getElementById('user-weight').value);
    let planetIndex = parseInt(document.getElementById('planets').value);
    let result = calculateWeight(userWeight, planetIndex);

document.querySelector('#output').innerHTML = `If you were on ${planets[planetIndex][0]}, you would weigh ${result.toFixed(2)}lbs!`;
  
}

document.querySelector('#calculate-button').addEventListener('click', handleClickEvent);



 
