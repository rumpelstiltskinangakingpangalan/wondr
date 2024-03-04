// Import the variables from variables.js
import arrPatterns from '/js/libPattern.js';


//=============APPEND ALL VECTORS=============
var selectPattern = document.getElementById('selectPattern');

for(let a = 0; a < arrPatterns.length; a++) {
    selectPattern.innerHTML += 
    `<div class="optPattern">
        ${arrPatterns[a]}                        
    </div>`;
}


//============DROPDOWN SELECTION===========
var dropPattern = document.getElementById('dropPattern');

function showOptionPattern() {
    
    if(this.children[2].style.display == "none") {
        
        this.children[2].style.display = "flex";
        this.children[2].style.left = `${this.offsetLeft}px`;
        this.children[2].style.top = `${this.offsetHeight + this.offsetTop + 1}px`;
    }
    else {
        this.children[2].style.display = "none";
    }

}

dropPattern.children[2].style.display = "none";
dropPattern.addEventListener('click', showOptionPattern);


//============PATTERN CHANGE COLOR========
var refPattern = document.querySelectorAll('.refPattern');

for (let a=0; a < refPattern.length; a++) {
    refPattern[a].children[0].setAttribute('fill', 'white');
}
