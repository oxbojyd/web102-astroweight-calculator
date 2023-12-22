
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


// planets.reverse(planets).forEach((planet) => {
//     const options = document.createElement('option'); 
//     options.textContent = planet[0];
//     document.getElementById('planets').appendChild(options);
// });
    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 

    // document.addEventListener('DOMContentLoaded', function(){
    //     var planets = require('C:\Users\oxboj_4c9bpag\project_calc\web102-astroweight-calculator\test\expected-planets.js');
    //     let planetDropdown = document.getElementById('planets');
    //     planets.forEach((planet, index) => {
    //         let option = document.createElement('option');
    //         option.textContent=planet[0];
    //         option.value=index;
    //         planetDropdown.appendChild(option);
    //     });

    // })


// function calculateWeight(weight, planetName) { 
//     // 2. Write the code to return the correct weight
//     let weight = planets[1]
//     let planetName= planets[0]
//     for (let i = 0; i>=weight.length; i++) 
//     {
//        let addedWeight = weight *= document.getElementById('user-weight');
//     }
// } 
// function handleClickEvent(e) {
    // 3. Declare a variable called userWeight and assign the value of the user's weight. 

    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 

    // 5. Declare a variable called result and assign the value of the new calculated weight. 

    // 6. Write code to display the message shown in the screenshot. 

// } 

    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.