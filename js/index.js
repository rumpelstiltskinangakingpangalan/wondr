
//============CREATE DEFAULT WHITE CANVAS==========

const cnvMain = document.getElementById('mainCanvas');
const ctxMain = cnvMain.getContext('2d');
ctxMain.fillStyle = "white";
ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);


//=============TOOLBOX CONTROLS===============

var tool = document.getElementsByClassName('tool');


function hoverTool() {
    document.getElementById(this.id).children[0].style.filter = "saturate(0.8) brightness(1.5)";
}

function leaveTool() {
    document.getElementById(this.id).children[0].style.filter = "none";
}

function clickTool() {
    
    addControlTool();
    for(var a=0; a< tool.length; a++) {
       tool[a].style.backgroundColor = "transparent";
       tool[a].children[0].style.filter = "none";
    }

    document.getElementById(this.id).style.backgroundColor = "#394257";
    document.getElementById(this.id).children[0].style.filter = "saturate(0.8) brightness(1.5)";
    document.getElementById(this.id).removeEventListener('mouseover', hoverTool);
    document.getElementById(this.id).removeEventListener('mouseleave', leaveTool);

    showToolMenu()
}

function addControlTool() {
    for(var a=0; a< tool.length; a++) {
        tool[a].addEventListener('click', clickTool)
        tool[a].addEventListener('mouseover', hoverTool)
        tool[a].addEventListener('mouseleave', leaveTool)
    }
}
addControlTool()


//=============TOOLMENU CONTROLS==============

const toolmenu = document.getElementById('toolmenu');

function hideToolMenu() {
    //readd controls to tool
    addControlTool()

    //reset the tools color to default
    for(var a=0; a< tool.length; a++) {
        tool[a].style.backgroundColor = "transparent";
        tool[a].children[0].style.filter = "none";
     }

    //hide toolmenu
    toolmenu.style.visibility = "none";
    toolmenu.style.transform = `translateX(${(toolmenu.offsetWidth /2) * -1}px)`;
}
hideToolMenu()

function showToolMenu() {
    toolmenu.style.visibility = "visible";
    toolmenu.style.transform = `translateX(${0}px)`;
}


//============DROPDOWN SELECTION===========
var dropDown = document.getElementsByClassName('dropdown');

function showOptionBackground() {
    
    if(this.children[2].style.display == "none") {
        
        this.children[2].style.display = "block";
        this.children[2].style.left = `${this.offsetLeft}px`;
        this.children[2].style.top = `${this.offsetHeight + this.offsetTop + 1}px`;
    }
    else {
        this.children[2].style.display = "none";
    }

}

//add event listeners to all dropdowns
for(var i = 0; i < dropDown.length; i++) {

    dropDown[i].children[2].style.display = "none";
    dropDown[i].addEventListener('click', showOptionBackground);

}

//===========DROPDOWN BACKGROUND=============

var optBG = document.getElementsByClassName('optBG');

var dropBackground = document.getElementById('dropBackground');

function chooseBackground(){
    dropBackground.children[0].innerText = this.innerText;

    if(dropBackground.children[0].innerText == "Solid Color") {
       
        document.getElementById('configBackground').innerHTML = 
        `<div id="contSolid">
            <div id="pnlSolidColor" class="pnlEntry">
                <h2>Color</h2>
                <input type="text" class="textbox" id="txtSolidColor" value="#FFFFFF">
                <div id="pckSolidColor" class="thumbPicker"></div>
            </div>
        </div>`;

        chooseSolidColor();
    }

    else if(dropBackground.children[0].innerText == "Gradient Color") {

        document.getElementById('configBackground').innerHTML = 
        `<div id="contGradient">
            <div id="pnlGradient1" class="pnlEntry">
                <h2>Color 1</h2>
                <input type="text" class="textbox" id="txtGradient1" value="#FFFFFF">
                <div id="pckGradient1" class="thumbPicker"></div>
            </div>

            <div id="pckSwap"><img src="buttons/btnSwap.svg"></div>
        
            <div id="pnlGradient2" class="pnlEntry">
                <h2>Color 2</h2>
                <input type="text" class="textbox" id="txtGradient2" value="#A9AEFF">
                <div id="pckGradient2" class="thumbPicker"></div>
            </div>

            <div id="pnlGradientRotation" class="pnlEntry">
                <h2>Rotation</h2>
                <input type="range" min="0" max="180" value="0" class="slider" id="rngGradientRotation" step="15">
                <input type="text" id="txtGradientRotation" class="textboxMini" value="0" readonly>
            </div>

            <div id="pnlGradientScale" class="pnlEntry">
                <h2>Scale</h2>
                <input type="range" min="0" max="100" value="0" class="slider" id="rngGradientScale">
                <input type="text" id="txtGradientScale" class="textboxMini" value="0" readonly>
            </div>
        </div>`;

        chooseGradientColors();
    }

    else if(dropBackground.children[0].innerText == "Upload Image") {
        document.getElementById('configBackground').innerHTML =
        `<div id="contUploadBG">
            <div id="pnlUploadBG" class="pnlEntry">
                <input type="file" id="fileUploadBG" style="display:none; visibility: hidden;" accept="image/png, image/jpeg">
                <div id="pathUploadBG" class="textboxLong"><h2></h2></div>
                <input type="button" value="Browse.." id="btnUploadBG">
            </div>
        </div>`;

        document.getElementById('btnUploadBG').addEventListener('click', chooseUploadBG);
    }
}

for(var i = 0; i < optBG.length; i++) {
    optBG[i].addEventListener('click', chooseBackground);
}

//============SOLID BG COLOR PICKER===========

function chooseSolidColor() {

    var txtSolidColor = document.getElementById('txtSolidColor');

    const newSolidColor = Pickr.create({
        el: '#pckSolidColor',
        theme: 'nano',
        default: 'white',
        components: {
            hue: true,
        },
        useAsButton: true,
        transitions: false,
        closeWithKey: 'Escape'
        
    });

    newSolidColor.on('change', (color,  ) => {

        const hexColor = color.toHEXA().toString();
    
        document.getElementById('pckSolidColor').style.backgroundColor = hexColor;
        document.getElementById('txtSolidColor').value = hexColor;
        ctxMain.fillStyle = hexColor;
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);

    });

    function changeSolidColorBG(){
        newSolidColor.setColor(document.getElementById('txtSolidColor').value);
        ctxMain.fillStyle = document.getElementById('txtSolidColor').value;
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);
    }
    txtSolidColor.addEventListener('input', changeSolidColorBG)

    changeSolidColorBG();
}

//============GRADIENT BG COLOR PICKER===========

function chooseGradientColors() {

    var pnlGradient1 = document.getElementById('pnlGradient1'); //declare gradient 1
    var pnlGradient2 = document.getElementById('pnlGradient2'); //declare gradient 2

    pnlGradient1.style.display = "flex"; //show gradient 1 panel
    pnlGradient2.style.display = "flex"; //show gradient 2 panel

    var txtGradient1 = document.getElementById('txtGradient1'); //get textbox gradient1
    var txtGradient2 = document.getElementById('txtGradient2'); //get textbox gradient2

    var newGradient = null;
    var rngGradientRotation = document.getElementById('rngGradientRotation'); // gradient rotation slider
    var rngGradientScale = document.getElementById('rngGradientScale'); // gradient scale slider

    function createGradient() { //create canvas gradient
        
        var angle = Math.round(Number(rngGradientRotation.value));
        var adjacent = null;
        var radians = null;
        var x1, x2, y1, y2, scaleMin, scaleMax = null; // declare the coordinates
        var x0 = Math.round(cnvMain.width/2); // declare default originX
        var y0 = Math.round(cnvMain.height/2); // declare default originY
        
        if (angle == 0) {

            x1 = Math.round(cnvMain.width/2);
            y1 = 0;
            x2 = x1;
            y2 = Math.round(cnvMain.height);

        }

        else if (angle <= 45 && angle > 0) {

            x1 = x0;
            y1 = 0;

            radians = angle * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) + Math.abs(y1-y0)));

            x1 = x1 + adjacent;
            
            x2 = x0 - adjacent;
            y2 = Math.round(cnvMain.height);

        }

        else if(angle <= 90 && angle > 45) {

            x1 = Math.round(cnvMain.width);
            y1 = Math.round(cnvMain.height/2);

            radians = (90 - angle) * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) + Math.abs(y1-y0)));

            y1 = y1-adjacent;
            
            x2 = 0;
            y2 = y0 + adjacent;
   
        }

        else if(angle <= 135 && angle > 90) {

            x1 = Math.round(cnvMain.width);
            y1 = Math.round(cnvMain.width/2);

            radians = (angle - 90) * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) + Math.abs(y1-y0)));

            y1 = y1+adjacent;
            
            x2 = 0;
            y2 = y0 - adjacent;
   
        }

        else if(angle <= 180 && angle > 135) {

            x1 = Math.round(cnvMain.width/2);
            y1 = Math.round(cnvMain.height);

            radians = (180 - angle) * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) + Math.abs(y1-y0)));

            x1 = x1 + adjacent;
            
            x2 = x0 - adjacent;
            y2 = 0;
   
        }
        /*
        else if (angle >= -45 && angle < 0) {

            x1 = x0;
            y1 = 0;

            radians = angle * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) - Math.abs(y1-y0)));

            x1 = x1 - Math.abs(adjacent);
            
            x2 = x0 + adjacent;
            y2 = Math.round(cnvMain.height);

        }

        else if(angle >= -90 && angle < -45) {

            x1 = 0;
            y1 = Math.round(cnvMain.height/2);

            radians = (-90 - angle) * Math.PI/180;
            adjacent = Math.round(Math.tan(radians) * (Math.abs(x1-x0) - Math.abs(y1-y0)));

            y1 = y1+adjacent;
            
            x2 = Math.round(cnvMain.width);
            y2 = y0 - adjacent;
            
            console.log(adjacent)
        }
        */
        scaleMin = Number(rngGradientScale.value) * 0.005;
        scaleMax = 1 - (Number(rngGradientScale.value) * 0.005);

        newGradient = ctxMain.createLinearGradient(x1, y1, x2, y2); //create gradient canvas
        newGradient.addColorStop(scaleMin, document.getElementById('txtGradient1').value); // get color1 from textbox1
        newGradient.addColorStop(scaleMax, document.getElementById('txtGradient2').value); // get color2 from textbox2
        
        ctxMain.fillStyle = newGradient;
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);

        document.getElementById('txtGradientRotation').value = rngGradientRotation.value;
        document.getElementById('txtGradientScale').value = rngGradientScale.value;
    }

    rngGradientRotation.addEventListener('input', createGradient); // call create gradient when slider change
    rngGradientScale.addEventListener('input', createGradient); // call create gradient when slider change
    txtGradient1.addEventListener('input', createGradient); //when change hex code via textbox, create gradient
    txtGradient2.addEventListener('input', createGradient); //when change hex code via textbox, create gradient

    //create color pickr for gradient 1
    const gradient1 = Pickr.create({ 
        el: '#pckGradient1',
        theme: 'nano',
        default: 'white',
        components: {
            hue: true,
        },
        useAsButton: true,
        transitions: false,
        closeWithKey: 'Escape'
        
    });

    //gradient 1 event
    gradient1.on('change', (color,  ) => {

        const hexColor1 = color.toHEXA().toString();
        
        document.getElementById('pckGradient1').style.backgroundColor = hexColor1;
        document.getElementById('txtGradient1').value = hexColor1;

        createGradient(); // call create gradient function

    });

     //create color pickr for gradient 2
    const gradient2 = Pickr.create({ 
        el: '#pckGradient2',
        theme: 'nano',
        default: 'white',
        components: {
            hue: true,
        },
        useAsButton: true,
        transitions: false,
        closeWithKey: 'Escape'
        
    });

    //gradient 2 event
    gradient2.on('change', (color,  ) => {

        const hexColor2 = color.toHEXA().toString();
    
        document.getElementById('pckGradient2').style.backgroundColor = hexColor2;
        document.getElementById('txtGradient2').value = hexColor2;

        createGradient(); // call create gradient function
    });

    const pckSwap = document.getElementById('pckSwap');

    function swapGradient() {

        var swap1 = document.getElementById('txtGradient1').value;
        var swap2 = document.getElementById('txtGradient2').value;

        document.getElementById('txtGradient1').value = swap2;
        document.getElementById('txtGradient2').value = swap1;

        createGradient();
        
    }
    pckSwap.addEventListener('click', swapGradient)

    createGradient();
}

//=============IMAGE BG PICKER==================

function chooseUploadBG() {

    var fileUploadBG = document.getElementById('fileUploadBG');
    fileUploadBG.click();

    function getBGPath() {

        document.getElementById('pathUploadBG').children[0].innerText  = this.value; // show fakepath
        
        const reader = new FileReader();

        reader.addEventListener("load", ()=> { // draw image on canvas
            
            var imgBG = document.createElement('img');
            imgBG.src = reader.result;
            imgBG.style.display = "none";
            imgBG.style.visibility = "hidden";
            document.getElementById('workArea').appendChild(imgBG);

            // get first scale of image compared to canvas, then get the smaller value
            var scaleX = cnvMain.width / imgBG.width;
            var scaleY = cnvMain.height / imgBG.height;
            var scale = Math.min(scaleX, scaleY);

            // use the new scale to resize the image
            var newWidth = imgBG.width * scale;
            var newHeight = imgBG.height * scale;

            // get the new origin coordinates
            var x = (cnvMain.width - newWidth) / 2;
            var y = (cnvMain.height - newHeight) / 2;

            ctxMain.fillStyle = "white";
            ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);
            ctxMain.drawImage(imgBG, x, y, newWidth, newHeight);
        
        })

        reader.readAsDataURL(this.files[0]);
    }

    fileUploadBG.addEventListener('change', getBGPath);
}   







 //var hueRotation = (color.toHSVA()[0]);
    //var saturate = color.toHSVA()[1];
    //var lightness = color.toHSVA()[2];
    //console.log(hueRotation, saturate, lightness);
    //document.getElementById('toolCanvas').children[0].style.filter = `hue-rotate(${hueRotation}deg) saturate(${saturate}) invert(100%) brightness(${lightness}%)`;