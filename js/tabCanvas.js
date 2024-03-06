
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

    showToolMenu() //will show tool menu (empty)
    appendMenu(this.id); //will append actual menu elements based on ID
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

function appendMenu(id) {
    id = id.substring(4);

    var menu = document.querySelectorAll('.menu');

    for(var a = 0; a < menu.length; a++) {
        menu[a].style.display = "none";
    }
    
    document.getElementById('menu' + id).style.display = "block";
}

//=============HIDE ALL DROPDOWN SELECTIONS=============

function hideAllOptions() {
    var dropOptionVerti = document.querySelectorAll('.dropOptionVerti');
    var dropOptionHori = document.querySelectorAll('.dropOptionHori');

    for(var a = 0; a < dropOptionVerti.length; a++) {
        dropOptionVerti[a].style.display = "none";
    }

    for(var a = 0; a < dropOptionHori.length; a++) {
        dropOptionHori[a].style.display = "none";
    }
}

//===========DROPDOWN BACKGROUND=============

var optBG = document.getElementsByClassName('optBG');
var dropBackground = document.getElementById('dropBackground');

function hideContent() { //hide first content options
    var content = document.querySelectorAll('.content');

    for(var i = 0;  i < content.length; i++) {
        content[i].style.display = "none";
    }
}

function chooseBackground(){

    hideContent();

    dropBackground.children[0].innerText = this.innerText;

    if(dropBackground.children[0].innerText == "Solid Color") {
       
        document.getElementById('contSolid').style.display = "block";
        chooseSolidColor();
    }

    else if(dropBackground.children[0].innerText == "Gradient Color") {

        document.getElementById('contGradient').style.display = "block";
        chooseGradientColors();
    }

    else if(dropBackground.children[0].innerText == "Upload Image") {

        document.getElementById('contUploadBG').style.display = "block";
        document.getElementById('btnUploadBG').addEventListener('click', chooseUploadBG);

        ctxMain.fillStyle = "white"; //reset canvas to white
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height); //paint white
    }
} 

for(var i = 0; i < optBG.length; i++) { //dropdown background option
    optBG[i].addEventListener('click', chooseBackground);
}

function selectAll() { //auto highlight when clicked
    this.select();
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
    txtSolidColor.addEventListener('change', changeSolidColorBG);
    txtSolidColor.addEventListener('focus', selectAll);

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
    
    var txtGradientRotation =  document.getElementById('txtGradientRotation'); //get textbox rotation
    var txtGradientScale =  document.getElementById('txtGradientScale'); //get textbox scale

    var rngGradientRotation = document.getElementById('rngGradientRotation');
    var rngGradientScale = document.getElementById('rngGradientScale');

    function createGradient() { //create canvas gradient
        
        var angle = Math.round(Number(document.getElementById('txtGradientRotation').value));
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

        scaleMin = Number(document.getElementById('txtGradientScale').value) * 0.005;
        scaleMax = 1 - (Number(document.getElementById('txtGradientScale').value) * 0.005);

        newGradient = ctxMain.createLinearGradient(x1, y1, x2, y2); //create gradient canvas
        newGradient.addColorStop(scaleMin, document.getElementById('txtGradient1').value); // get color1 from textbox1
        newGradient.addColorStop(scaleMax, document.getElementById('txtGradient2').value); // get color2 from textbox2
        
        ctxMain.fillStyle = newGradient;
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);
        

        document.getElementById('rngGradientRotation').value = document.getElementById('txtGradientRotation').value; // change slider value from textbox
        document.getElementById('rngGradientScale').value = document.getElementById('txtGradientScale').value; // change slider value from textbox

        document.getElementById('pckGradient1').style.backgroundColor = document.getElementById('txtGradient1').value;
        document.getElementById('pckGradient2').style.backgroundColor = document.getElementById('txtGradient2').value;

    }

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

    function changeScale() {
        document.getElementById('txtGradientScale').value = document.getElementById('rngGradientScale').value; // change text scale
    }
    rngGradientScale.addEventListener('input', changeScale);

    function changeRotation() {
        document.getElementById('txtGradientRotation').value = document.getElementById('rngGradientRotation').value; // change text scale
    }
    rngGradientRotation.addEventListener('input', changeRotation);

    function validateRotation() {
        if(Number(document.getElementById('txtGradientRotation').value) < 0) {
            document.getElementById('txtGradientRotation').value = "0";
            document.getElementById('rngGradientRotation').value = "0";
            createGradient();
        }
        else if(Number(document.getElementById('txtGradientRotation').value) > 180) {
            document.getElementById('txtGradientRotation').value = "180";
            document.getElementById('rngGradientRotation').value = "180";
            createGradient();
        }
    }

    function validateScale() {
        if(Number(document.getElementById('txtGradientScale').value) < 1) {
            document.getElementById('txtGradientScale').value = "1";
            document.getElementById('rngGradientScale').value = "1";
            createGradient();
        }
        else if(Number(document.getElementById('txtGradientScale').value) > 100) {
            document.getElementById('txtGradientScale').value = "100";
            document.getElementById('rngGradientScale').value = "100";
            createGradient();
        }
    }


    createGradient();

    txtGradient1.addEventListener('change', createGradient); //when change hex code via textbox, create gradient
    txtGradient2.addEventListener('change', createGradient); //when change hex code via textbox, create gradient

    txtGradient1.addEventListener('focus', selectAll); ////when textbox focus, highlight everything
    txtGradient2.addEventListener('focus', selectAll); ////when textbox focus, highlight everything

    txtGradientRotation.addEventListener('focus', selectAll); //when textbox focus, highlight everything
    txtGradientScale.addEventListener('focus', selectAll); //when textbox focus, highlight everything

    txtGradientRotation.addEventListener('input', createGradient); //when textbox change, change slider value
    txtGradientScale.addEventListener('input', createGradient); //when textbox change, change slider value

    txtGradientRotation.addEventListener('input', validateRotation); //validate textbox value
    txtGradientScale.addEventListener('input', validateScale); //validate textbox value

    
    rngGradientRotation.addEventListener('input', createGradient); //slider input, call creategradient
    rngGradientScale.addEventListener('input', createGradient); //slider input, call creategradient
}

//=============IMAGE BG PICKER==================
var percentHori = null;
var percentVerti = null;
var rngMultiplier = null;

function drawBGImage(percentHori) {
    
    var imgBG = document.getElementById('imgBG');
    var rngBGScale = document.getElementById('rngBGScale');
    var txtBGScale = document.getElementById('txtBGScale');
    var pathUploadBG = document.getElementById('pathUploadBG');
    var rngBGHori = document.getElementById('rngBGHori');
    var txtBGHori = document.getElementById('txtBGHori');
    var rngBGVerti = document.getElementById('rngBGVerti');
    var txtBGVerti = document.getElementById('txtBGVerti');
    var pnlUploadBGHori = document.getElementById('pnlUploadBGHori');
    var pnlUploadBGVerti = document.getElementById('pnlUploadBGVerti');
    var pnlUploadBGScale = document.getElementById('pnlUploadBGScale');

    var reader = new FileReader();

    function loadReader() { //loading the image

        imgBG.onload = function() {

             // get first scale of image compared to canvas, then get the smaller value
            var scaleX = cnvMain.width / imgBG.width;
            var scaleY = cnvMain.height / imgBG.height;
            var oldScale = Math.min(scaleX, scaleY);
            var scaleMultiplier = Number(document.getElementById('txtBGScale').value);
            
            var scale = (Math.round(oldScale*100 + scaleMultiplier))/100; // round to the nearest hundred

             // use the new scale to resize the image
            var newWidth = Math.round(imgBG.width * scale);
            var newHeight = Math.round(imgBG.height * scale);

            //get the new horizontal min and max
            var bgHoriMin = Math.round((cnvMain.width - newWidth)/2);
            var bgHoriMax = Math.round((newWidth - cnvMain.width)/2);
            var bgVertiMax = Math.abs(Math.round((cnvMain.height - newHeight)/2));
            var bgVertiMin = Math.abs(Math.round((newHeight - cnvMain.height)/2)) * -1;

            document.getElementById('txtBGHori').setAttribute('min', bgHoriMin); //change the min for hori
            document.getElementById('txtBGHori').setAttribute('max', bgHoriMax); //change the max for hori
            
            document.getElementById('rngBGHori').setAttribute('min', bgHoriMin); //change the min for hori
            document.getElementById('rngBGHori').setAttribute('max', bgHoriMax); //change the max for hori

            document.getElementById('txtBGVerti').setAttribute('min', bgVertiMin); //change the min for verti
            document.getElementById('txtBGVerti').setAttribute('max', bgVertiMax); //change the max for verti
            
            document.getElementById('rngBGVerti').setAttribute('min', bgVertiMin); //change the min for verti
            document.getElementById('rngBGVerti').setAttribute('max', bgVertiMax); //change the max for verti

            var newRNGHori = Number(document.getElementById('rngBGHori').value); // get slider horizontal value
            var newRNGVerti = Number(document.getElementById('rngBGVerti').value); // get slider vertical value


            //compute horizontal place
            if(newRNGHori > 0) {
                percentHori = newRNGHori / bgHoriMax;
            }
            else if(newRNGHori < 0) {
                percentHori = newRNGHori / bgHoriMin;
            }
            else if(newRNGHori == 0) {
                percentHori = 0;
            }

            //adjust vertical text
            document.getElementById('txtBGHori').value = Math.round(newRNGHori * percentHori);
            
            //compute vertical place
            if(newRNGVerti > 0) {
                percentVerti = newRNGVerti / bgVertiMax;
            }
            else if(newRNGVerti < 0) {
                percentVerti = newRNGVerti / bgVertiMin;
            }
            else if(newRNGVerti == 0) {
                percentVerti = 0;
            }

            document.getElementById('txtBGVerti').value = Math.round(newRNGVerti * percentVerti);
            document.getElementById('txtBGHori').value = Math.round(newRNGHori * percentHori);

             //get the new origin coordinates
            var x = ((cnvMain.width - newWidth) / 2) + Number(document.getElementById('rngBGHori').value);
            var y = (cnvMain.height - newHeight) / 2 + Number(document.getElementById('txtBGVerti').value);

            ctxMain.fillStyle = "white";
            ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);
            ctxMain.drawImage(document.getElementById('imgBG'), x, y, newWidth, newHeight);

        }

        imgBG.src = reader.result;
        
    }


    function changeScale() {  //scale slider change textbox content
        document.getElementById('txtBGScale').value = this.value;
        loadReader();
    }
    rngBGScale.addEventListener('input', changeScale);

    function validateScale(){
        if(this.value > 100) {
            document.getElementById('txtBGScale').value = "100";
            document.getElementById('rngBGScale').value = "100";
            loadReader();
        }
        else if(this.value < 0) {
            document.getElementById('txtBGScale').value = "0";
            document.getElementById('rngBGScale').value = "0";
            loadReader();
        }
    }
    txtBGScale.addEventListener('input', validateScale); //validate max scale
    txtBGScale.addEventListener('input',loadReader); // textbox input redraw image
    txtBGScale.addEventListener('focus',selectAll); // highlight textbox when clicked
    
    function changeHorizontal() { //slide horizontal value
        document.getElementById('txtBGHori').value = rngBGHori.value;
        loadReader();
    }
    rngBGHori.addEventListener('input', changeHorizontal);

    function validateHorizontal(){
        if(Number(this.value) > Number(document.getElementById('rngBGHori').max)) {
            this.value = document.getElementById('rngBGHori').max;
        }
        else if(Number(this.value) < Number(document.getElementById('rngBGHori').min)) {
            this.value = document.getElementById('rngBGHori').min;
        }
    }
    txtBGHori.addEventListener('focus', selectAll); // load reader everytime txtBGHori value changes
    txtBGHori.addEventListener('input', loadReader); // load reader everytime txtBGHori value changes
    txtBGHori.addEventListener('input', validateHorizontal); // load reader everytime txtBGHori value changes

    function changeVertical() { //slide horizontal value
        document.getElementById('txtBGVerti').value = rngBGVerti.value;
        loadReader();
    }
    rngBGVerti.addEventListener('input', changeVertical);

    function validateVertical(){
        if(Number(this.value) > Number(document.getElementById('rngBGVerti').max)) {
            this.value = document.getElementById('rngBGVerti').max;
        }
        else if(Number(this.value) < Number(document.getElementById('rngBGVerti').min)) {
            this.value = document.getElementById('rngBGVerti').min;
        }
    }
    txtBGVerti.addEventListener('focus', selectAll); // load reader everytime txtBGHori value changes
    txtBGVerti.addEventListener('input', loadReader); // load reader everytime txtBGHori value changes
    txtBGVerti.addEventListener('input', validateVertical); // load reader everytime txtBGHori value changes

    //validate if the target file exist or cancelled
    if(this.files[0] != null) {
        reader.readAsDataURL(this.files[0]); // load the first file
        reader.addEventListener('load', loadReader); // load the fileReader
        pathUploadBG.children[0].innerText  = "Change" ; // copy fakepath to h2

        pnlUploadBGScale.style.visibility = "visible"; //show scale options
        pnlUploadBGScale.style.display = "flex"; //show scale options
        pnlUploadBGHori.style.visibility = "visible"; //show horizontal options
        pnlUploadBGHori.style.display = "flex"; //show horizontal options

        pnlUploadBGVerti.style.visibility = "visible"; //show vertical options
        pnlUploadBGVerti.style.display = "flex"; //show horizontal options

    }
    else {
        ctxMain.fillStyle = "white";
        ctxMain.fillRect(0, 0, cnvMain.width, cnvMain.height);

        pnlUploadBGScale.style.visibility = "hidden"; //show scale options
        pnlUploadBGScale.style.display = "none"; //show scale options
        pnlUploadBGHori.style.visibility = "hidden"; //show horizontal options
        pnlUploadBGHori.style.display = "none"; //show horizontal options

        pnlUploadBGVerti.style.visibility = "hidden"; //show vertical options
        pnlUploadBGVerti.style.display = "none"; //show horizontal options

        pathUploadBG.children[0].innerText  = "" ; // copy fakepath to h2

        txtBGHori.value = "0";
        txtBGHori.setAttribute('min', '-10');
        txtBGHori.setAttribute('max', '10');

        txtBGScale.value = "0";
        txtBGScale.setAttribute('min', '0');
        txtBGScale.setAttribute('max', '100');

        rngBGHori.value = "0";
        rngBGHori.setAttribute('min', '-10');
        rngBGHori.setAttribute('max', '10');

        rngBGScale.value = "0";
        rngBGScale.setAttribute('min', '0');
        rngBGScale.setAttribute('max', '100');
    
    }
    
}

function chooseUploadBG() {

    var fileUploadBG = document.getElementById('fileUploadBG'); // declare file upload input
    fileUploadBG.click(); //simulate file input click event

    fileUploadBG.addEventListener('change', drawBGImage); //call draw image
}   


//=============CHECK DOCUMENT CLICKS TO HIDE ===========

function checkClicks(e) {

    var clicked = e.target;
    var dropBackground = document.getElementById('dropBackground');
    var dropPattern = document.getElementById('dropPattern');

    if (clicked.id === "dropBackground" || clicked.parentElement.id === "dropBackground") {
        
        if(dropBackground.children[2].style.display == "none") {
        
            dropBackground.children[2].style.display = "block";
            dropBackground.children[2].style.left = `${dropBackground.offsetLeft}px`;
            dropBackground.children[2].style.top = `${dropBackground.offsetHeight + dropBackground.offsetTop + 1}px`;
        }
        else {
            hideAllOptions();
        }
    }

    else if (clicked.id === "dropPattern" || clicked.parentElement.id === "dropPattern") {

        if(dropPattern.children[2].style.display == "none") {
        
            dropPattern.children[2].style.display = "flex";
            dropPattern.children[2].style.left = `${dropPattern.offsetLeft}px`;
            dropPattern.children[2].style.top = `${dropPattern.offsetHeight + dropPattern.offsetTop + 1}px`;
        }
        else {
            hideAllOptions();
        }
    
    }

    else {
        hideAllOptions();
    }

}
document.addEventListener('click', checkClicks);









 //var hueRotation = (color.toHSVA()[0]);
    //var saturate = color.toHSVA()[1];
    //var lightness = color.toHSVA()[2];
    //console.log(hueRotation, saturate, lightness);
    //document.getElementById('toolCanvas').children[0].style.filter = `hue-rotate(${hueRotation}deg) saturate(${saturate}) invert(100%) brightness(${lightness}%)`;