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

function showOptionPattern() {
    
    if(this.children[2].style.display == "none") {
        
        this.children[2].style.display = "flex";
        this.children[2].style.left = `${this.offsetLeft}px`;
        this.children[2].style.top = `${this.offsetHeight + this.offsetTop + 1}px`;

        document.onclick = function(e) {

            console.log(this.children[2])

            //if(e.target.id !== this.children[2].id) {
            //    this.children[2].style.display = "none";
            //}
        }
    }
    else {
        this.children[2].style.display = "none";
    }

}

dropPattern.children[2].style.display = "none";
dropPattern.addEventListener('click', showOptionPattern);
