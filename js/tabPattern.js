// Import the variables from variables.js
import arrPatterns from '/js/libPattern.js';


//=============APPEND ALL VECTORS=============
var selectPattern = document.getElementById('selectPattern');

for(let a = 0; a < arrPatterns.length; a++) {
    selectPattern.innerHTML += 
    `<div class="optPattern">
        <div class="hoverPattern">
            ${arrPatterns[a]}
        </div>                      
    </div>`;
}




