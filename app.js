// import functions and grab DOM elements
const input1 = document.getElementById('ingWord-1');
const input2 = document.getElementById('ingWord-2');
//console.log(input1);
// initialize state
const result1 = document.getElementById('results-1');
const result2 = document.getElementById('results-2');
// set event listeners to update state and DOM 

const button = document.getElementById('submitButton');
//console.log(button);

button.addEventListener('click', () => {
  //console.log('yes');

    const userInput1 = input1.value;
    const userInput2 = input2.value;

    result1.textContent = userInput1;
    result2.textContent = userInput2;
    
    let p = document.getElementById('whatever');
    p.removeAttribute('hidden');

    // ^ added hidden feature with <p> tag on html with id: "whatever"

  //console.log(userInput);

});