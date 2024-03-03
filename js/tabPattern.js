// Import the variables from variables.js
import arrPatterns from '/js/libPattern.js';

// Access the variables and add as options
var selectPattern = document.getElementById('selectPattern');

for(let a = 0; a < arrPatterns.length; a++) {
    selectPattern.innerHTML += 
    `<div class="optPattern">
        ${arrPatterns[a]}                        
    </div>`;
}
