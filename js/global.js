//==========DECLARE ZOOM VARIABLES=================

var cnvBox = document.getElementById('cnvBox');
var cnvMain = document.getElementById('cnvMain');
var cnvBG = document.getElementById('cnvBG');
var cnvGrpPatterns = document.getElementById('cnvGrpPatterns');
var cnvGrpLayers = document.getElementById('cnvGrpLayers');

var cnvPin = document.getElementById('cnvPin');

var cnvPatterns = [];
var cnvLayers = [];
var imgCold = [];
var imgWarm = [];
var fontSelected = "Stylish";

var pinBody = [];
var pinL = [];
var pinL2 = [];
var pinTL = [];
var pinTL2 = [];
var pinT = [];
var pinT2 = [];
var pinTR = []; 
var pinTR2 = []; 
var pinR = [];
var pinR2 = [];
var pinBR = [];
var pinBR2 = [];
var pinB = [];
var pinB2 = [];
var pinBL = [];
var pinBL2 = [];

var menu = document.getElementsByClassName('menu');
var mainBox = document.getElementById('mainBox');
var workArea = document.getElementById('workArea');
var canvasBorder = document.getElementById('canvasBorder');
var exportMe = document.getElementById('toolExport');
var rngZoom = document.getElementById('rngZoom');
var txtZoom = document.getElementById('txtZoom');
var txtSizeWidth = document.getElementById('txtSizeWidth');
var txtSizeHeight = document.getElementById('txtSizeHeight');
var zoomMultiplier = Number(txtZoom.value.substr(0, txtZoom.value.length-1))/100;
var configScroll = document.getElementsByClassName('configScroll');
var pnlBox = document.getElementsByClassName('pnlBox');
var pnlBoxLayer = document.getElementsByClassName('pnlBoxLayer'); //panelbox for mix layers
var configSlider = document.getElementsByClassName('configSlider');

//==============DRAG AND DROP VARIABLES=============

var isDragging = false;
var patRank;
var tmrDrag;
var counter = 0;
var spaceX;
var spaceY;
var clientX;
var clientY;

var breaklineDrag = document.createElement('div');
breaklineDrag.classList.add('breaklineDrag');

//==============RESIZING VARIABLES=================
var resX;
var resY;
var borderW = [];
var borderH = [];
var borderL = [];
var borderT = [];
var borderR = [];
var borderCenterX;
var borderCenterY;

var AB;
var AC;
var BC;
var angle1;
var angle2;
var leadRotate;
var leadDrag;
var leadDragX;
var leadDragY;

var layerW = [];
var layerH = [];
var layerL = [];
var layerT = [];
var aRatio = [];
var adjust;
var flipToRight = false;
var flipToLeft = false;
var isResizing = false;
var isRotating = false;
var isScaling = false;

//==============RESIZING VARIABLES================

//list of elements that affects vertical sizing
var header = 46; // headerUI
var submenu = 140; //submenu x2
var footer = 4; //footer

//list of elements that affects horizontal sizing
var toolbox = 70; // toolbox
var tmenu = 280; // toolmenu
var border = 4;
var gap = 4;
var adsBox = 300;
var cnvPinW = 0;
var cnvPinH = 0;

//============ADJUST WORKAREA OVERFLOW==========

function containWorkArea() {
   
    //mainbox subtract adsbox and gap
    //mainbox includes toolbox and toolmenu
    mainBox.style.width = window.innerWidth - adsBox - gap + 'px';
    mainBox.style.maxWidth = window.innerWidth - adsBox - gap + 'px';
    
    //now from mainbox, get the workarea size
    //workarea includes submenu
    //workarea is the parent of canvasBorder and ancestor of all canvases
    //that's why we only get its width, height is unnecessary
    workArea.style.width = mainBox.clientWidth - toolbox - tmenu - border + 'px';
    workArea.style.maxWidth = mainBox.clientWidth - toolbox - tmenu - border + 'px';

    //get canvasBorder height by using workarea then subtract 2 subheaders
    var canvasBorderH = workArea.offsetHeight - 140; //140px is 2 subheaders top and bottom at 70px each

    canvasBorder.style.height = canvasBorderH + 'px';
    canvasBorder.style.maxHeight = canvasBorderH + 'px';

    //cnvPin resizing and loading
    cnvPinW = window.innerWidth - toolbox - tmenu - border - gap - adsBox;
    cnvPinH = window.innerHeight - header - submenu - footer

    cnvPin.style.width = cnvPinW + 'px';
    cnvPin.style.height = cnvPinH + 'px';

    adjustBorder(); //readjust all selected borders

    //also adjust all the config scroll height under tool menu
    for(var a= 0; a < configScroll.length; a++) {
        configScroll[a].style.height = (window.innerHeight - 160) + "px";
        configScroll[a].style.minHeight = (window.innerHeight - 160) + "px";
        configScroll[a].style.maxHeight = (window.innerHeight - 160) + "px";
    }

}
window.addEventListener('load', containWorkArea);
window.addEventListener('resize', containWorkArea);


//==============ZOOM CONTROLS====================
function rangeZoomFormat() { //reformatting txtZoom removing %
    var getPercent = Math.round((Number(rngZoom.value) / Number(rngZoom.max))*100);
    rngZoom.style.background = `linear-gradient(to right, #2E3646 ${getPercent-4}%, transparent ${4}%)`;
    txtZoom.value = rngZoom.value + "%";

}
rangeZoomFormat()
rngZoom.addEventListener('input', rangeZoomFormat) //change format of slider

//===============ZOOM CANVAS====================
function zoomMainCanvas() {

    var z = rngZoom.value / 100;

    cnvBox.style.zoom = txtZoom.value;
    txtZoom.style.color = "white";

    //center the scrollbars
    
    var actualCnvBoxH = cnvBox.clientHeight * (rngZoom.value/100) + 96;
    var scrollH = (actualCnvBoxH - canvasBorder.offsetHeight) / 2;
    var actualCnvBoxW = cnvBox.clientWidth * (rngZoom.value/100) + 96;
    var scrollW = (actualCnvBoxW - canvasBorder.offsetWidth) / 2;

    canvasBorder.scrollTop = scrollH;
    canvasBorder.scrollLeft = scrollW;
    
    //if else statement for cnvPin resizing
    if((cnvBox.clientHeight * z + 96) > canvasBorder.clientHeight) {
        cnvPin.style.height = cnvPinH + (canvasBorder.scrollHeight - cnvPinH)  + 'px'; 
        //for some reasons the height works when multiplied by 2
    }
    else {
        cnvPin.style.height = cnvPinH + 'px';
    }
    if((cnvBox.clientWidth * z + 96) > canvasBorder.clientWidth) {
        cnvPin.style.width = cnvPinW + (canvasBorder.scrollWidth - cnvPinW)  + 'px';
        //for some reasons the width works when multiplied by 2
    }
    else {
        cnvPin.style.width = cnvPinW + 'px';
    }

    adjustBorder(); //readjust all selected borders

}
cnvBox.style.zoom = txtZoom.value;
rngZoom.addEventListener('input', zoomMainCanvas); //resize canvas using rngzoom

//===============OUT OF ZOOM====================

function blurZoomMainCanvas() {
    txtZoom.style.color = "#647499";
    var getPercent = Math.round((Number(rngZoom.value) / Number(rngZoom.max))*100);
    rngZoom.style.background = `linear-gradient(to right, #2E3646 ${getPercent-4}%, transparent ${4}%)`;
}
rngZoom.addEventListener('change', blurZoomMainCanvas); //resize canvas using rngzoom

//change zoom text and range via dropdown

function changeTextZoom() {
    rngZoom.value = Number(this.innerText.substr(0, this.innerText.length-1))
    rangeZoomFormat(); //change slider value too
    zoomMainCanvas();
}

//add event listener for all optZooms
var optZoom = document.querySelectorAll('.optZoom');
for(var a = 0; a < optZoom.length; a++) {
    optZoom[a].addEventListener('click', changeTextZoom);
}

//=============SELECT ALL TEXTS========================

function selectAll() { //auto highlight when clicked
    this.select();
}

//=============HIDE ALL DROPDOWN SELECTIONS=============

//declare zoom dropdown
var dropOptionZoom = document.querySelector('.dropOptionZoom');

function hideAllOptions() { // hide all verti options
    
    var dropOptionVerti = document.getElementsByClassName('dropOptionVerti');
    var dropOptionHeader = document.getElementsByClassName('dropOptionHeader');

    for(var a = 0; a < dropOptionVerti.length; a++) {
        
        dropOptionVerti[a].style.display = "none";
    }

    for(var a = 0; a < dropOptionHeader.length; a++) {
        
        dropOptionHeader[a].style.display = "none";
    }

    dropOptionZoom.style.display = "none";
} 
hideAllOptions()

//===============VALIDATE THE HEX IN TEXTBOX============
function testHexCode(hex) {

    hex = hex.toUpperCase();
    var regex = /^#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

    return regex.test(hex);
}

//================DISABLE TAB ON ALL INPUT=============
function disableTab(e) {
    if(e.key == "Tab") {
        e.preventDefault();
    }
}
document.addEventListener('keydown', disableTab);

//=================EXPAND AND COLLAPSE PANEL============

//function to expand and collapse pnlBoxProperties
function expandCollapseControls() {

    //var baseHeight = 378;
    var e = this.parentElement.parentElement;
    
    if(this.dataset.show == "more") {
        e.style.height = "40px"; //the panelboxPattern height itself
        e.children[1].style.opacity = "0"; //hide the breakline
        e.children[0].children[0].style.rotate = "-90deg";
        this.dataset.show = "less";
    }
    else {
        e.style.height = "auto"; //the panelboxPattern height itself
        e.children[1].style.opacity = "1"; //hide the breakline
        e.children[0].children[0].style.rotate = "0deg";
        this.dataset.show = "more";
    }
}

//================RENAMING PANEL HEADERS================
var renameDefault = null;
//function to rename txtHeader
function renameTxtHeaderPattern() {
    renameDefault = this.value;
    this.removeAttribute('readOnly');
    this.select();
    this.style.border= "1px solid #647499";
}

function blurTxtHeaderPattern() {
    this.blur();
}

//function to  save header's name
function saveTxtHeaderPattern() {
    if(this.value == "") {
        this.value = renameDefault;
    }
    //this.setAttribute("readonly", "readonly");
    this.style.border= "1px solid transparent";
}

//===============CHECKBOXES BUTTONS LISTENERS============

function chkBoxHover() {

    this.style.borderColor = "#647499";
    this.children[0].style.backgroundColor = "white";
        
}

function chkBoxLeave(e) {
    
    if(this.dataset.value == "false") {
        this.style.borderColor = "#3F4961";
        this.children[0].style.backgroundColor = "#647499";
    }
    
    else if(this.dataset.value == "true") {
        this.children[0].style.backgroundColor = "white";
    }
    
    this.addEventListener('mouseover', chkBoxHover)
}

function chkBoxClick(e) {
    var b = 0;
    var key = null;
    var leadFlip = this;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    var l = Number(leadPanel.dataset.layer)
    
    
    if(e.ctrlKey) {
        key = 'ctrl';
    }

    else if(e.shiftKey) {
        key = 'shift';
    }
    
    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            b++;
        }
        if(focusPanel[a] == leadPanel) {
            imFocus = true;
        }
    }

    if(b > 0 && key == null && imFocus == false) {
        //remove first all pnlboxlayer focus
        for(var a = 0; a < pnlBoxLayer.length; a++) {
            pnlBoxLayer[a].style.borderColor = "#3F4961";
            focusPanel[a] = null;
        }
    }
    
    if(leadFlip.dataset.value == "false") {
        
        leadFlip.dataset.value = "true";
        leadFlip.style.borderColor = "transparent";
        leadFlip.style.backgroundColor = "#6885CC";
        leadFlip.children[0].style.translate = "12px";
        leadFlip.children[0].style.backgroundColor = "white";
    }

    else if(this.dataset.value == "true") { 

        leadFlip.dataset.value = "false";
        leadFlip.style.borderColor = "#647499";
        leadFlip.style.backgroundColor = "transparent";
        leadFlip.children[0].style.translate = "0px";
        leadFlip.children[0].style.backgroundColor = "white";

        leadFlip.removeEventListener('mouseover', chkBoxHover);
    }

    
    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null ) {

            var e = Number(focusPanel[a].dataset.layer);
            var newPanel = configScroll[5].querySelector(`[data-layer="${e}"]`);
            var leadFlipClass = leadFlip.className;
            var newFlip = newPanel.querySelector(`.${leadFlipClass}`);
        
            if(leadFlip.dataset.value == "true") {
                newFlip.dataset.value = "true";
                newFlip.style.borderColor = "transparent";
                newFlip.style.backgroundColor = "#6885CC";
                newFlip.children[0].style.translate = "12px";
                newFlip.children[0].style.backgroundColor = "white";
            }
        
            else if(leadFlip.dataset.value == "false") { 
        
                newFlip.dataset.value = "false";
                newFlip.style.borderColor = "#3F4961";
                newFlip.style.backgroundColor = "transparent";
                newFlip.children[0].style.translate = "0px";
                newFlip.children[0].style.backgroundColor = "#647499";
            }
        
        }
    }

    
}

//===============PANEL BOTTOM BUTTONS LISTENERS==========
function btnBottomClick(){

    //don't change to 'this.closer' because it needs closer 'pattern' and closer 'layer'
    for(var b = 0; b < this.parentElement.parentElement.childElementCount; b++) {
        this.parentElement.parentElement.children[b].children[0].children[0].style.filter = "none";
    }
    this.children[0].style.filter = "saturate(0) brightness(2)";
}

function btnBottomHover() {
    if(this.children[0].style.filter != "saturate(0) brightness(2)") {
        this.children[0].style.filter = "saturate(1) brightness(1.5)";
    }
}

function btnBottomLeave() {
    if(this.children[0].style.filter != "saturate(0) brightness(2)") {
        this.children[0].style.filter = "none";
    }
}

//===============LINK TEXTBOXES TO RANGE================

function linkRangeToTextbox() {
    for(var a = 0; a < rngPattern.length; a++) {
        rngPattern[a].addEventListener('input', adjustRangeToTextbox)
    }

    for(var a = 0; a < rngLayer.length; a++) {
        rngLayer[a].addEventListener('input', adjustRangeToTextbox)
    }
}

function adjustRangeToTextbox(e) {
    this.nextElementSibling.value = this.value;
    
    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel;

    if(this.closest('.pnlBoxPattern')) {
        leadPanel = this.closest('.pnlBoxPattern');
    }

    else if(this.closest('.pnlBoxLayer')) {
        leadPanel = this.closest('.pnlBoxLayer');
    }
    
    if(e.ctrlKey) {
        key = 'ctrl';
    }

    else if(e.shiftKey) {
        key = 'shift';
    }
    
    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            b++;
        }
        if(focusPanel[a] == leadPanel) {
            imFocus = true;
        }
    }

    if(b > 0 && key == null && imFocus == false) {
        //remove first all pnlboxlayer focus
        for(var a = 0; a < pnlBoxPattern.length; a++) {
            pnlBoxPattern[a].style.borderColor = "#3F4961";
            focusPanel[a] = null;
        }

        for(var a = 0; a < pnlBoxLayer.length; a++) {
            pnlBoxLayer[a].style.borderColor = "#3F4961";
            focusPanel[a] = null;
        }
    }

    if(this.closest('.pnlBoxPattern')) {

        var e = Number(leadPanel.dataset.layer);
        
        leadPanel.style.borderColor = "#6885CC";

        focusPanel[e] = leadPanel;
        
    }
    else if (this.closest('.pnlBoxLayer')) {

        var e = Number(leadPanel.dataset.layer);
        
        leadPanel.style.borderColor = "#6885CC";

        focusPanel[e] = leadPanel;
    }
}

function validateTextboxToRange() {
    this.value = Math.round(Number(this.value));

    var max = Number(this.max);
    var min = Number(this.min);
    var me = Number(this.value);

    if(me > max && max != 0) {
        this.value = max;
        this.previousElementSibling.value = max;
    }
    else if(me < min) {

        this.value = min;
        this.previousElementSibling.value = min;
    }
    
    else {
        this.value = me;
        this.previousElementSibling.value = me;
    }

}

function enterTextbox(e) {
    if(e.key === "Enter") {
        this.blur();
        
        this.value = Math.round(Number(this.value));

        var max = Number(this.max);
        var min = Number(this.min);
        var me = Number(this.value);

        if(me > max && max != 0) {
            me = max;
            this.previousElementSibling.value = max;
        }
        else if(me < min && min != 0) {
            me = min;
            this.previousElementSibling.value = min;
        }

        
        else {

            this.previousElementSibling.value = me;
        }

    }
}

function linkTextboxToRange() {

    for(var a = 0; a < pnlBoxPattern.length; a++) {
        var inputs = pnlBoxPattern[a].querySelectorAll('input[type="number"]');
        inputs.forEach(function(input) {

            input.addEventListener('change', validateTextboxToRange);
            input.addEventListener('focus', selectAll);
            input.addEventListener('focusout', validateTextboxToRange);
            input.addEventListener('keydown', enterTextbox);
        })
    }

    
    for(var a = 0; a < pnlBoxLayer.length; a++) {
        var inputs = pnlBoxLayer[a].querySelectorAll('input[type="number"]');
        inputs.forEach(function(input) {

            input.addEventListener('change', validateTextboxToRange);
            input.addEventListener('focus', selectAll);
            input.addEventListener('focusout', validateTextboxToRange);
            input.addEventListener('keydown', enterTextbox);
        })
    }
    
}


//===============EXPORT=============================
function saveAs() {
    
    domtoimage.toPng(cnvMain, {width: txtSizeWidth.value, height: txtSizeHeight.value})
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.style.width = txtSizeWidth.value.toString() + "px";
        img.style.height = txtSizeHeight.value.toString() + "px";

        img.onload = function() {

            var a = document.createElement('a');
            a.href = img.src;
            a.download = "download.png";
            a.click();
            a.remove();

        }
 
    })
    .catch(function (error) {
        console.error('Error:', error);
    });


}
exportMe.addEventListener('click', saveAs);


