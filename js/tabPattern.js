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

    var a = this;
    
    if(a.children[2].style.display == "none") {
        
        a.children[2].style.display = "flex";
        a.children[2].style.left = `${a.offsetLeft}px`;
        a.children[2].style.top = `${a.offsetHeight + this.offsetTop + 1}px`;

        document.onclick = function(e) {

            console.log(a.children[2])

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
