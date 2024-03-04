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



//============DROPDOWN SELECTION==============
var dropPattern = document.getElementById('dropPattern');

function hideOptionPattern(e) {

    if(e.target.id !== dropPattern.children[2].id || e.target.id === dropPattern) {
        dropPattern.children[2].style.display = "none";
    }

}

function showOptionPattern() {
    
    if(dropPattern.children[2].style.display == "none") {
        
        dropPattern.children[2].style.display = "flex";
        dropPattern.children[2].style.left = `${dropPattern.offsetLeft}px`;
        dropPattern.children[2].style.top = `${dropPattern.offsetHeight + dropPattern.offsetTop + 1}px`;

        document.addEventListener('click', hideOptionPattern);
        
    }
    else {
        dropPattern.children[2].style.display = "none";
    }

}

dropPattern.children[2].style.display = "none";
dropPattern.addEventListener('click', showOptionPattern);
