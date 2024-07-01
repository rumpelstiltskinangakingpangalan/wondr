
var tabSliderFont = document.getElementById('tabSliderFont');
var tabStylish = document.getElementById('tabStylish');
var tabSansSerif = document.getElementById('tabSansSerif');
var tabSerif = document.getElementById('tabSerif');
var breaklineThumbFonts = document.getElementById('breaklineThumbFonts');
var fontSelect = document.getElementsByClassName('fontSelect');

function fontSelectHover() {
    if(fontSelected != this.children[0].innerText) {
        this.children[0].style.color = "#9DAFDB";
    }
}

function fontSelectLeave() {
    if(fontSelected != this.children[0].innerText) {
        this.children[0].style.color = "#647499";
    }
}

function fontSelectClick() {
    for(var a = 0; a < fontSelect.length; a++) {
        fontSelect[a].children[0].style.color = "#647499";
    }
    this.children[0].style.color = "white";
    fontSelected = this.children[0].innerText;

    if(fontSelected == "Stylish") {
        breaklineThumbFonts.style.translate = "0%";
        tabSliderFont.style.translate = "0%";
    }
    else if(fontSelected == "Sans Serif") {
        breaklineThumbFonts.style.translate = "100%"
        tabSliderFont.style.translate = "-100%";
    }
    else if(fontSelected == "Serif") {
        breaklineThumbFonts.style.translate = "200%";
        tabSliderFont.style.translate = "-200%";
        showSerif();
    }
}

for(var a = 0; a < fontSelect.length; a++) {
    fontSelect[a].addEventListener('mouseover', fontSelectHover);
    fontSelect[a].addEventListener('mouseleave', fontSelectLeave);
    fontSelect[a].addEventListener('click', fontSelectClick);
}


function showSerif() {
    if(tabSerif.childElementCount == 0) {

        //append all popular first
        var append = 
        `<div class="fontPopular">
            <h2>Most popular</h2>
        </div>`;

        for(var a = 0; a < serif.length; a++) {
            if(serif[a] != null) {

                var tags = serif[a].tags.split(', ');
                for(var b = 0; b < tags.length; b++) {
                    if(tags[b] == "popular") {
                        var font;

                        if(serif[a].type == "variable") {
                            
                            //create the font
                            font = new FontFace(`${serif[a].name}`, `url(fonts/serif/${serif[a].name}-var.woff2), url(fonts/serif/${serif[a].name}-var-i.woff2)`)
                            
                            //add the font
                            document.fonts.add(font);

                            //when the font loaded
                            font.load().then(function() {
                                //console.log(loadedFont)
                                append += `<div class="pnlBoxFont" data-font="${serif[a].name}"><h2 style="font-family: ${serif[a].name}">${serif[a].name}</h2></div>`
                            })
                            .catch(function(error) {
                                console.log('Failed to load: ' + serif[a].name + ' Error: ' + error.code)
                            })
                            
                        }
                        /*
                        else if(serif[a].type == "static") {
                            var normal = serif[a].normal.split(', ').toLowerCase();

                            
                        }
                        */
                        
                    }
                }
                tabSerif.innerHTML = append;
            }
        }
    }
}
