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

}

function showOptionPattern() {
    
    if(dropPattern.children[2].style.display == "none") {
        
        dropPattern.children[2].style.display = "flex";
        dropPattern.children[2].style.left = `${dropPattern.offsetLeft}px`;
        dropPattern.children[2].style.top = `${dropPattern.offsetHeight + dropPattern.offsetTop + 1}px`;

        document.onclick = function(e) {

            console.log(e.target.id, dropPattern.children[2].id)

            if(e.target.id !== dropPattern.children[2].id) {
                dropPattern.children[2].style.display = "none";
            }
        }
    }
    else {
        dropPattern.children[2].style.display = "none";
    }

}

dropPattern.children[2].style.display = "none";
dropPattern.addEventListener('click', showOptionPattern);
