
var pnlTitleLayer = document.getElementsByClassName('pnlTitleLayer');
var pnlBoxLayer = document.getElementsByClassName('pnlBoxLayer');
var btnExpandCollapseLayer = document.getElementsByClassName('btnExpandCollapseLayer');
var btnShowHideLayer = document.getElementsByClassName('btnShowHideLayer');
var txtHeaderLayer = document.getElementsByClassName('txtHeaderLayer');
var txtColorLayer = document.getElementsByClassName('txtColorLayer');
var rngLayer = document.getElementsByClassName('rngLayer');
var txtMiniLayer = document.getElementsByClassName('txtMiniLayer');
var btnShowHideLayer = document.getElementsByClassName('btnShowHideLayer');
var contentLayer = document.getElementsByClassName('contentLayer');
var btnBasicLayer = document.getElementsByClassName('btnBasicLayer');
var btnColorLayer = document.getElementsByClassName('btnColorLayer');
var btnStyleLayer = document.getElementsByClassName('btnStyleLayer');
//variables of panel components
var optLayerBlend = document.getElementsByClassName('optLayerBlend');
var txtWidthLayer = document.getElementsByClassName('txtWidthLayer'); 
var txtHeightLayer = document.getElementsByClassName('txtHeightLayer');
var txtXLayer = document.getElementsByClassName('txtXLayer');
var txtYLayer = document.getElementsByClassName('txtYLayer');
var chkFlipX = document.getElementsByClassName('chkFlipX');
var chkFlipY = document.getElementsByClassName('chkFlipY');

var txtOpacityLayer = document.getElementsByClassName('txtOpacityLayer');
var txtRotationLayer = document.getElementsByClassName('txtRotationLayer');
var txtBlurLayer = document.getElementsByClassName('txtBlurLayer');
var txtBrightnessLayer = document.getElementsByClassName('txtBrightnessLayer');
var txtContrastLayer = document.getElementsByClassName('txtContrastLayer');
var txtSaturationLayer = document.getElementsByClassName('txtSaturationLayer');
var txtTemperatureLayer = document.getElementsByClassName('txtTemperatureLayer');
//layer style
var optLayerStyle = document.getElementsByClassName('optLayerStyle');
//tab outline
var tabStyleLayer = document.getElementsByClassName('tabStyleLayer');

var tabOutlineLayer = document.getElementsByClassName('tabOutlineLayer');
var txtOutlineColor = document.getElementsByClassName('txtOutlineColor');
var thumbPickerOutline = document.getElementsByClassName('thumbPickerOutline');
var txtOutlineOpacity = document.getElementsByClassName('txtOutlineOpacity');
var txtOutlineSize = document.getElementsByClassName('txtOutlineSize');

//tab glow 
var tabGlowLayer = document.getElementsByClassName('tabGlowLayer');
var txtGlowColor = document.getElementsByClassName('txtGlowColor');
var thumbPickerGlow = document.getElementsByClassName('thumbPickerGlow');
var txtGlowOpacity = document.getElementsByClassName('txtGlowOpacity');
var txtGlowSize = document.getElementsByClassName('txtGlowSize');
var txtGlowSpread = document.getElementsByClassName('txtGlowSpread');
//tab shadow
var tabShadowLayer = document.getElementsByClassName('tabShadowLayer');
var txtShadowColor = document.getElementsByClassName('txtShadowColor');
var thumbPickerShadow = document.getElementsByClassName('thumbPickerShadow');
var txtShadowOpacity = document.getElementsByClassName('txtShadowOpacity');
var txtShadowSize = document.getElementsByClassName('txtShadowSize');
var txtShadowSpread = document.getElementsByClassName('txtShadowSpread');
var txtShadowRotation = document.getElementsByClassName('txtShadowRotation');


function adjustBorder() {

    var z = rngZoom.value/100;

    for(var e = 0; e < pinBody.length; e++) {
    
        if(pinBody[e] != null) {
            pinBody[e].style.width = cnvLayers[e].getBoundingClientRect().width * z + 'px';
            pinBody[e].style.height = cnvLayers[e].getBoundingClientRect().height * z + 'px';

            if((cnvBox.clientWidth * z + 96) > canvasBorder.clientWidth) { //96 total of 3em left and right
                pinBody[e].style.left = (cnvLayers[e].offsetLeft * z) + 48 + 'px'; // 48 total of 3em left
            }
            else {
                pinBody[e].style.left = (cnvBox.getBoundingClientRect().left * z) + (cnvLayers[e].offsetLeft * z) - 350 + 'px';
            }

            if((cnvBox.clientHeight * z + 96) > canvasBorder.clientHeight) { //96 total of 3em top and bottom
                pinBody[e].style.top = (cnvLayers[e].offsetTop * z) + 48 + 'px'; //48 total of 3em top
            }
            else {
                pinBody[e].style.top = (cnvBox.getBoundingClientRect().top * z) + (cnvLayers[e].offsetTop * z) - 116 + 'px';
            }
        }
    }
}

//===============================SCALE LAYERS==========================
function scaleBorderDown(e) {
    e.preventDefault();

    if(e.target.className == "pinTL2") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            
        })

        adjust = "pinTL2";
        isScaling = true;
        isResizing = false;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    else if(e.target.className == "pinTR2") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
        })

        adjust = "pinTR2";
        isScaling = true;
        isResizing = false;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    else if(e.target.className == "pinBR2") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
        })

        adjust = "pinBR2";
        isScaling = true;
        isResizing = false;
        isRotating = false;

        //resX = e.target.closest('.pinBody').getBoundingClientRect().left;
        //resY = e.target.closest('.pinBody').getBoundingClientRect().top;
        //resX = e.clientX;
        //resY = e.clientY;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    else if(e.target.className == "pinBL2") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
        })

        adjust = "pinBL2";
        isScaling = true;
        isResizing = false;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    resX = e.clientX;
    resY = e.clientY;

    //init all focusObj properties
    for(var a = 0; a < focusObj.length; a++) {

        if(focusObj[a] != null) {
            borderW[a] = pinBody[a].clientWidth;
            borderH[a] = pinBody[a].clientHeight;
            borderL[a] = pinBody[a].offsetLeft;
            borderT[a] = pinBody[a].offsetTop;
    
            layerW[a] = cnvLayers[a].clientWidth;
            layerH[a] = cnvLayers[a].clientHeight;
            layerL[a] = cnvLayers[a].offsetLeft;
            layerT[a] = cnvLayers[a].offsetTop;
            aRatio[a] = cnvLayers[a].clientWidth / cnvLayers[a].clientHeight;

        }
    }
}

function scaleBorderMove(e) {

    if(isScaling) {

        var z = rngZoom.value / 100;

        for(var a = 0; a < focusObj.length; a++) {

            if(focusObj[a] != null) {

                if(adjust == "pinTL2") {

                    //(e.target.className == 'pinT') ? console.log(e.target.className): console.log(e.target.className);
                    var diffX = (resX - e.clientX);
                    var diffY = (resY - e.clientY);
                    var diffZ = Math.max(diffX, diffY);

                    pinBody[a].style.width = borderW[a] + diffZ + 'px';
                    pinBody[a].style.height = pinBody[a].clientWidth / aRatio[a] + 'px';
                    pinBody[a].style.left = borderL[a] - diffZ + 'px';
                    pinBody[a].style.top = borderT[a] - diffZ / aRatio[a] + 'px';

                    cnvLayers[a].style.width = layerW[a] + diffZ / z + 'px';
                    cnvLayers[a].style.height = cnvLayers[a].clientWidth / aRatio[a] + 'px';
                    cnvLayers[a].style.left = layerL[a] - diffZ /z + 'px';
                    cnvLayers[a].style.top = layerT[a] - diffZ / aRatio[a] / z  + 'px'; //divide by aRatio divide by z
                
                }

                else if(adjust == "pinTR2") {
                    
                    var diffX = (e.clientX - resX);
                    var diffY = (resY - e.clientY);
                    var diffZ = Math.max(diffX, diffY);

                    pinBody[a].style.width = borderW[a] + diffZ + 'px';
                    pinBody[a].style.height = pinBody[a].clientWidth / aRatio[a] + 'px';
                    pinBody[a].style.top = borderT[a] - diffZ / aRatio[a] + 'px';

                    cnvLayers[a].style.width = layerW[a] + diffZ / z + 'px';
                    cnvLayers[a].style.height = cnvLayers[a].clientWidth / aRatio[a] + 'px';
                    cnvLayers[a].style.top = layerT[a] - diffZ / aRatio[a] / z  + 'px'; //divide by aRatio divide by z
                
                }

                else if(adjust == "pinBR2") {

                    var diffX = e.clientX - resX;
                    var diffY = e.clientY - resY;
                    var diffZ = Math.max(diffX, diffY);
                    //AB = Math.sqrt(((resX - resX)**2) + ((resY - e.clientY)**2));
                    //BC = Math.sqrt(((resX - e.clientX) **2) + ((e.clientY - e.clientY)**2));
                    //AC = Math.sqrt(((resX - e.clientX)**2) + ((resY - e.clientY) **2));
 
                    //var diffZ = Math.sqrt((diffX**2) + (diffY**2));

                    //if(diffX > diffY) {

                        //pinBody[a].style.width = borderW[a] + diffY/2 + diffX/2 + 'px';
                        //pinBody[a].style.height = borderH[a] + diffX/2 + diffY/2 / aRatio[a] + 'px';

                        pinBody[a].style.width = borderW[a] + diffZ + 'px';
                        pinBody[a].style.height = pinBody[a].clientWidth / aRatio[a] + 'px';
                        
                        cnvLayers[a].style.width = layerW[a] + diffZ / z + 'px';
                        cnvLayers[a].style.height = cnvLayers[a].clientWidth /aRatio[a] + 'px';
                    //}

                    
                    //else if(diffX < diffY) {

                        //pinBody[a].style.width = borderW[a] + diffY/2 + diffX/2 + 'px';
                        //pinBody[a].style.height = pinBody[a].clientWidth / aRatio[a] + 'px';

                        //pinBody[a].style.height = borderH[a] + diffY + 'px';
                        //pinBody[a].style.width = pinBody[a].clientHeight * aRatio[a] + 'px';
                        //cnvLayers[a].style.width = layerW[a] + diffY / z + 'px';
                        //cnvLayers[a].style.height = cnvLayers[a].clientWidth / aRatio[a] + 'px';

                    //}
             
                }

                else if(adjust == "pinBL2") {
                    
                    var diffX = (resX - e.clientX);
                    var diffY = (e.clientY - resY);
                    var diffZ = Math.max(diffX, diffY);

                    pinBody[a].style.width = borderW[a] + diffZ + 'px';
                    pinBody[a].style.height = pinBody[a].clientWidth / aRatio[a] + 'px';
                    pinBody[a].style.left = borderL[a] - diffZ + 'px';

                    cnvLayers[a].style.width = layerW[a] + diffZ / z + 'px';
                    cnvLayers[a].style.height = cnvLayers[a].clientWidth / aRatio[a] + 'px';
                    cnvLayers[a].style.left = layerL[a] - diffZ /z + 'px';
                    
                }

            }

        }

        adjustBasicsFromCanvas();
    }

    /*
    for(var a = 0; a < pinBody.length; a++) {
        if(pinBody[a] != null) {
   
            if(adjust == "pinTL2") {

                //change cursor
                cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

                var inputs = cnvPin.querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
                })
            }

            else if(adjust == "pinTR2") {

                //change cursor
                cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

                var inputs = cnvPin.querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
                })

            }

            else if(adjust == "pinBR2") {

                //change cursor
                cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

                var inputs = cnvPin.querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
                })
            }

            else if(adjust == "pinBL2") {

                //change cursor
                cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

                var inputs = cnvPin.querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
                })

            }
        }
    
    }
    */
    
}

function scaleBorderUp(e) {
    e.preventDefault();
    isResizing = false;
    isScaling = false;
    isRotating = false;
    resX = null;
    resY = null;
    adjust = null;

    //reset cursors
    cnvPin.style.cursor = "default";

    for(var a = 0; a < pinBody.length; a++) {
        if(pinBody[a] != null) {
            pinBody[a].style.cursor = "default";

            pinTL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinTR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

            pinTL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinTR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
        }
        
    }
}

//===============================RESIZE LAYERS============================

function resizeBorderDown(e) {
    e.preventDefault();
   
    if(e.target.closest('.pinL')) {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            
        })

        adjust = "pinL"
        isScaling = false;
        isResizing = true;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    else if(e.target.closest('.pinT')) {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor =  `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            
        })

        adjust = "pinT";
        isScaling = false;
        isResizing = true;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

   else if(e.target.closest('.pinR')) {

        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            
        })

        adjust = "pinR";
        isScaling = false;
        isResizing = true;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    else if(e.target.closest('.pinB')) {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    
        var inputs = cnvPin.querySelectorAll('div');
    
        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            
        })
    
        adjust = "pinB";
        isScaling = false;
        isResizing = true;
        isRotating = false;

        chooseLeadDrag(Number(e.target.closest('.pinBody').dataset.layer));
    }

    resX = e.clientX;
    resY = e.clientY;

    //init all focusObj properties
    for(var a = 0; a < focusObj.length; a++) {

        if(focusObj[a] != null) {
            borderW[a] = pinBody[a].clientWidth;
            borderH[a] = pinBody[a].clientHeight;
            borderL[a] = pinBody[a].offsetLeft;
            borderT[a] = pinBody[a].offsetTop;
    
            layerW[a] = cnvLayers[a].clientWidth;
            layerH[a] = cnvLayers[a].clientHeight;
            layerL[a] = cnvLayers[a].offsetLeft;
            layerT[a] = cnvLayers[a].offsetTop;
            aRatio[a] = cnvLayers[a].clientWidth / cnvLayers[a].clientHeight;

        }
    }
}

function resizeBorderMove(e) {

    if(isResizing) {

        var z = rngZoom.value / 100;

        for(var a = 0; a < focusObj.length; a++) { 

            if(focusObj[a] != null) {

                if(adjust == "pinL") {

                    var diffX;

                    if(e.clientX < pinR[a].getBoundingClientRect().left && e.target.className != 'pinR2') {

                        diffX = resX - e.clientX;

                        pinBody[a].style.width = borderW[a] + diffX + 'px';
                        cnvLayers[a].style.width = layerW[a] + diffX / z + 'px';
                        

                        pinBody[a].style.left = borderL[a] - diffX + 'px';
                        cnvLayers[a].style.left = layerL[a] - diffX /z + 'px'; 
                    

                    }
                }

                else if(adjust == "pinT") {

                    var diffY;

                    if(e.clientY < pinB[a].getBoundingClientRect().top && e.target.className != 'pinB2') {

                        diffY = resY - e.clientY;

                        pinBody[a].style.height = borderH[a] + diffY + 'px';
                        pinBody[a].style.top = borderT[a] - diffY + 'px';

                        cnvLayers[a].style.height = layerH[a] + diffY / z + 'px';
                        cnvLayers[a].style.top = layerT[a] - diffY / z + 'px';
                        
                    }
                }

                else if(adjust == "pinR") {

                    var diffX;

                    if(e.clientX > pinL[a].getBoundingClientRect().right && e.target.className != 'pinL2') {

                        diffX = e.clientX - resX;
                        pinBody[a].style.width = borderW[a] + diffX + 'px';

                        cnvLayers[a].style.width = layerW[a] + diffX / z + 'px';

                    }

                }

                else if(adjust == "pinB") {

                    var diffY;

                    if(e.clientY > pinT[a].getBoundingClientRect().bottom && e.target.className != 'pinT2') {

                        diffY = (e.clientY - resY);

                        pinBody[a].style.height = borderH[a] + diffY + 'px';

                        cnvLayers[a].style.height = layerH[a] + diffY / z + 'px';

                    }

                }

            }

        }

        adjustBasicsFromCanvas();
    }

}

function resizeBorderUp(e) {
    e.preventDefault();

    isResizing = false;
    isScaling = false;
    isRotating = false;
    resX = null;
    resY = null;
    adjust = null;

    //reset cursors
    cnvPin.style.cursor = "default";

    for(var a = 0; a < pinBody.length; a++) {
        if(pinBody[a] != null) {
            pinBody[a].style.cursor = "default";

            pinTL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinTR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

            pinTL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinTR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
        
        }
    }
}

//===============================ROTATE LAYERS=============================

function rotateBorderDown(e) {

    e.preventDefault();

    resX = e.clientX;
    resY = e.clientY;

    if(e.target.closest('.pinBody')) {

        leadRotate = e.target.closest('.pinBody');

        borderCenterX = leadRotate.getBoundingClientRect().left + (leadRotate.clientWidth/2);
        borderCenterY = leadRotate.getBoundingClientRect().top + (leadRotate.clientHeight/2);
        
        
        if(resX < borderCenterX && resY < borderCenterY) { // if quadrant 1
            
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((borderCenterX - resX) ** 2) + ((resY - resY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - resX) ** 2) + ((borderCenterY - resY) ** 2));
            angle1 = Math.asin(AC/BC) * 180 / Math.PI;
        }

        else if(resX < borderCenterX && resY > borderCenterY) { // if quadrant 2
       
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((resX - resX) ** 2) + ((borderCenterY - resY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - resX) ** 2) + ((borderCenterY - resY) ** 2));
            angle1 = Math.asin(AC/BC) * 180 / Math.PI + 90;
        }

        else if(resX > borderCenterX && resY > borderCenterY) { // if quadrant 3
       
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((borderCenterX - resX) ** 2) + ((resY - resY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - resX) ** 2) + ((borderCenterY - resY) ** 2));
            angle1 = Math.asin(AC/BC) * 180 / Math.PI + 180;
        }

        else if(resX > borderCenterX && resY < borderCenterY) { // if quadrant 4
            
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((resX - resX) ** 2) + ((borderCenterY - resY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - resX) ** 2) + ((borderCenterY - resY) ** 2));
            angle1 = Math.asin(AC/BC) * 180 / Math.PI + 270;
        }

        for(var a = 0; a < focusObj.length; a ++) {

            if(focusObj[a] != null) {

                borderR[a] = Number(focusObj[a].dataset.rotation);
            
            }
        
        }
        
    }

    if(e.target.className == "pinTL") {
        
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
        })

        adjust = "pinTL";
        isRotating = true;
        isScaling = false;
        isResizing = false;

        chooseLeadDrag(Number(leadRotate.dataset.layer));

    } 

    else if(e.target.className == "pinTR") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
        })

        adjust = "pinTR";
        isScaling = false;
        isRotating = true;
        isResizing = false; 

        chooseLeadDrag(Number(leadRotate.dataset.layer));

    } 

    else if(e.target.className == "pinBR") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
        })

        adjust = "pinBR";
        isScaling = false;
        isRotating = true;
        isResizing = false; 

        chooseLeadDrag(Number(leadRotate.dataset.layer));

    } 

    else if(e.target.className == "pinBL") {

        //change cursor
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

        var inputs = cnvPin.querySelectorAll('div');

        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(e.target.closest('.pinBody').dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
        })

        adjust = "pinBL";
        isScaling = false;
        isRotating = true;
        isResizing = false; 

        chooseLeadDrag(Number(leadRotate.dataset.layer));

    } 

}

function rotateBorderMove(e) {

    if(isRotating) {

        if(e.clientX < borderCenterX && e.clientY < borderCenterY) { // if quadrant 1
            
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((e.clientY - e.clientY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2));
            angle2 = Math.asin(AC/BC) * 180 / Math.PI;
        }

        else if(e.clientX < borderCenterX && e.clientY > borderCenterY) { // if quadrant 2
       
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((e.clientX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2));
            angle2 = Math.asin(AC/BC) * 180 / Math.PI + 90;
        }

        else if(e.clientX > borderCenterX && e.clientY > borderCenterY) { // if quadrant 3
       
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((e.clientY - e.clientY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2));
            angle2 = Math.asin(AC/BC) * 180 / Math.PI + 180;
        }

        else if(e.clientX > borderCenterX && e.clientY < borderCenterY) { // if quadrant 4
            
            //if vertical distance is > than horizontal distance
            AC = Math.sqrt(((e.clientX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2)); //x-x is 0, y-y is borderCenterY[a] squared and rooted
            BC = Math.sqrt(((borderCenterX - e.clientX) ** 2) + ((borderCenterY - e.clientY) ** 2));
            angle2 = Math.asin(AC/BC) * 180 / Math.PI + 270;

        }

        var angle3;

        if(angle1 >= angle2) {
            angle3 = angle1 - angle2;
        }
        else {
            angle3 = 360 - (angle2 - angle1);
        }

        for(var a = 0; a < focusObj.length; a++) {
            if(focusObj[a] != null) {

                
                pinBody[a].dataset.rotation = borderR[a] + angle3;
                cnvLayers[a].dataset.rotation = borderR[a] + angle3;

                //if rotation exceeds 360
                if(borderR[a] + angle3 >= 359) {
                    pinBody[a].dataset.rotation -= 359;
                    cnvLayers[a].dataset.rotation -= 359;
                }

                pinBody[a].style.rotate = pinBody[a].dataset.rotation + 'deg';
                cnvLayers[a].style.rotate = cnvLayers[a].dataset.rotation + 'deg';

            }
        }
    
        adjustBasicsFromCanvas();
    }

    if(adjust == "pinTL") {

        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        
        var inputs = cnvPin.querySelectorAll('div');
        
        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        })
    }

    else if(adjust == "pinTR") {
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        
        var inputs = cnvPin.querySelectorAll('div');
        
        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        })
    }

    else if(adjust == "pinBR") {
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        
        var inputs = cnvPin.querySelectorAll('div');
        
        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        })
    }

    else if(adjust == "pinBL") {
        cnvPin.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        
        var inputs = cnvPin.querySelectorAll('div');
        
        inputs.forEach(function(input) {
            input.style.cursor = `url("data:image/svg+xml,%3Csvg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(leadRotate.dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='12 12'%3E%3Cpath d='M14.8421 4.14067L15.2997 4.10173V3.64247V1.78947C15.2997 1.55853 15.5497 1.4142 15.7497 1.52967L22.3497 5.34018C22.5497 5.45565 22.5497 5.74432 22.3497 5.85979L15.7497 9.67031C15.5497 9.78578 15.2997 9.64144 15.2997 9.4105V7.66939V7.09506L14.7308 7.17415C10.8228 7.71752 7.71204 11.1546 7.18059 14.7264L7.09525 15.2999H7.67515H9.4105C9.64144 15.2999 9.78578 15.5499 9.67031 15.7499L5.85979 22.3499C5.74432 22.5499 5.45565 22.5499 5.34018 22.3499L1.52967 15.7499C1.4142 15.5499 1.55853 15.2999 1.78947 15.2999H3.64243H4.10169L4.14063 14.8423C4.6176 9.23676 9.23655 4.61773 14.8421 4.14067Z' fill='white' stroke='%236885CC'/%3E%3C/g%3E%3C/svg%3E%0A") 12 12, auto`;
        })
    }

}

function rotateBorderUp(e) {
    e.preventDefault();

    isRotating = false;
    isResizing = false;
    isScaling = false;
    resX = null;
    resY = null;
    adjust = null;

    AB = null;
    AC = null;
    angle1 = null;
    angle2 = null;
    leadRotate = null;
    borderCenterX = null;
    borderCenterY = null;

    //console.log(pinBody[0].clientWidth, pinBody[0].clientHeight)

    //reset cursors
    cnvPin.style.cursor = "default";

    for(var a = 0; a < pinBody.length; a++) {
        if(pinBody[a] != null) {
            pinBody[a].style.cursor = "default";

            pinTL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinTR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
            pinBL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;

            pinTL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinTR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinBL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

            pinL2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinT2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
            pinR2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
            pinB2[a].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[a].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;

        }
        
    }
}

//=============================LAYER DRAG AND DROP========================

function countdownLayer() {
    if(counter < 50) {
        counter+=50;
    }
    else {
        isDragging = true; //set boolean to true

        clearInterval(tmrDrag);
        counter = 0;
    }
}

function dragBorderDown(e) {

  if(!e.shiftKey) {
    
    if(e.target != cnvPin && e.target.className == "pinBody") {
        e.preventDefault();

        //remove other pattern focus
        for(var a = 0; a < pnlBoxPattern.length; a++) {
            pnlBoxPattern[a].style.borderColor = "#3F4961";
        }

        //remove other pnlboxthumb focus
        for(var a = 0; a < pnlBoxThumb.length; a++) {
            pnlBoxThumb[a].style.borderColor = "#3F4961";
            pnlBoxThumb[a].style.borderWidth = "1px";
          
        }

        tmrDrag = setInterval(countdownLayer, 10);

        leadDrag = e.target.closest('.pinBody');

        e.target.style.cursor = "move";

        //pinbody movement
        clientX = Math.round(e.clientX - cnvPin.getBoundingClientRect().left);
        clientY = Math.round(e.clientY - cnvPin.getBoundingClientRect().top);

        //get the percentage of cursor inside the leaddrag
        spaceX = (clientX - leadDrag.offsetLeft) / leadDrag.clientWidth;
        spaceY = (clientY - leadDrag.offsetTop) / leadDrag.clientHeight;
        
        leadDragX = leadDrag.offsetLeft;
        leadDragY = leadDrag.offsetTop;

        for(var a = 0; a < focusObj.length; a++) {
            if(focusObj[a] != null) {

                //var d = Number(focusObj[a].dataset.layer);

                borderL[a] = pinBody[a].offsetLeft;
                borderT[a] = pinBody[a].offsetTop;
                //console.log(a, pinBody[a].clientWidth, pinBody[a].clientHeight)
            }
            
        }
    }
    
  }
}

function dragBorderMove(e) {

    e.preventDefault();

    if(isDragging) {
        
        var z = rngZoom.value / 100;

        e.target.style.cursor = "move";

        //pinbody movement
        clientX = Math.round(e.clientX - cnvPin.getBoundingClientRect().left);
        clientY = Math.round(e.clientY - cnvPin.getBoundingClientRect().top);

        leadDrag.style.left =  clientX - (spaceX * leadDrag.clientWidth) + 'px';
        leadDrag.style.top =  clientY - (spaceY * leadDrag.clientHeight) + 'px';

        var l = Number(leadDrag.dataset.layer);

        cnvLayers[l].style.left = (leadDrag.offsetLeft - (cnvBox.offsetLeft * z))/z + 'px';
        cnvLayers[l].style.top =  (leadDrag.offsetTop - (cnvBox.offsetTop * z))/z + 'px';

        

        for(var a = 0; a < focusObj.length; a++) {
         
            if(focusObj[a] != null) {

                if(pinBody[a] != leadDrag) {
                    pinBody[a].style.left = borderL[a] + (leadDrag.offsetLeft - leadDragX) + 'px';
                    pinBody[a].style.top = borderT[a] + (leadDrag.offsetTop - leadDragY) + 'px';

                    cnvLayers[a].style.left = (pinBody[a].offsetLeft - (cnvBox.offsetLeft * z))/z + 'px';
                    cnvLayers[a].style.top =  (pinBody[a].offsetTop - (cnvBox.offsetTop * z))/z + 'px';

                    
                }
            }
        }

        adjustBasicsFromCanvas();

    }
}

function dragBorderUp(e) {
    e.preventDefault();

    if(isDragging) {
        e.target.style.cursor = "default";
        isDragging = false;
    }

    
    counter = 0;
    clientX = null;
    clientY = null;
    spaceX = null;
    spaceY = null;

    for(var a = 0; a < focusObj.length; a++) {
      
        borderL[a] = null;
        borderT[a] = null;
    }
    clearInterval(tmrDrag);
}


//========================CREATE BOUNDING BOX FOR LAYERS===================
function addBorderLayer(layer, e) {

    var z = rngZoom.value/100;

    //create pinBody
    pinBody[e] = document.createElement('div');
    pinBody[e].style.width = layer.clientWidth * z + 'px';
    pinBody[e].style.height = layer.clientHeight * z + 'px';
    pinBody[e].dataset.layer = e;
    pinBody[e].dataset.rotation = 0;
    pinBody[e].classList.add('pinBody');
    cnvPin.appendChild(pinBody[e]);
    adjustBorder();

    //append left
    pinL[e] = document.createElement('div');
    pinL[e].classList.add('pinL');
    pinBody[e].appendChild(pinL[e]);
    pinL[e].addEventListener('pointerover', function() {
        pinL[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
    })

    pinL2[e] = document.createElement('div');
    pinL2[e].classList.add('pinL2');
    pinL[e].appendChild(pinL2[e]);
    pinL2[e].addEventListener('pointerover', function() {
        pinL2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
    })

    //append top
    pinT[e] = document.createElement('div');
    pinT[e].classList.add('pinT');
    pinBody[e].appendChild(pinT[e]);
    pinT[e].addEventListener('pointerover', function() {
        pinT[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    pinT2[e] = document.createElement('div');
    pinT2[e].classList.add('pinT2');
    pinT[e].appendChild(pinT2[e]);
    pinT2[e].addEventListener('pointerover', function() {
        pinT2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    //append right
    pinR[e] = document.createElement('div');
    pinR[e].classList.add('pinR');
    pinBody[e].appendChild(pinR[e]);
    pinR[e].addEventListener('pointerover', function() {
        pinR[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
    })

    pinR2[e] = document.createElement('div');
    pinR2[e].classList.add('pinR2');
    pinR[e].appendChild(pinR2[e]);
    pinR2[e].addEventListener('pointerover', function() {
        pinR2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M0.400005 13.6928C-0.133329 13.3848 -0.133329 12.615 0.400005 12.3071L7 8.49661C7.53334 8.18869 8.2 8.57359 8.2 9.18943V16.8105C8.2 17.4263 7.53334 17.8112 7 17.5033L0.400005 13.6928Z' fill='%236885CC'/%3E%3Cpath d='M1.21432 13.1733C1.08099 13.0964 1.08099 12.9039 1.21432 12.8269L7.04289 9.4618C7.17623 9.38482 7.34289 9.48105 7.34289 9.63501L7.34289 16.3653C7.34289 16.5192 7.17623 16.6154 7.04289 16.5385L1.21432 13.1733Z' fill='white'/%3E%3Cpath d='M25.6 12.3071C26.1333 12.615 26.1333 13.3848 25.6 13.6928L19 17.5033C18.4666 17.8112 17.8 17.4263 17.8 16.8104L17.8 9.18943C17.8 8.57359 18.4666 8.18868 19 8.4966L25.6 12.3071Z' fill='%236885CC'/%3E%3Cpath d='M24.7857 12.8265C24.919 12.9035 24.919 13.096 24.7857 13.1729L18.9571 16.5381C18.8238 16.6151 18.6571 16.5188 18.6571 16.3649L18.6571 9.63462C18.6571 9.48066 18.8238 9.38443 18.9571 9.46141L24.7857 12.8265Z' fill='white'/%3E%3Cpath d='M7.99993 14.9999V10.9999L17.9999 10.9999V14.9999L7.99993 14.9999Z' fill='%236885CC'/%3E%3Cpath d='M6.99993 13.9999V11.9999L18.9999 11.9999V13.9999L6.99993 13.9999Z' fill='white'/%3E%3C/g%3E%3C/svg%3E") 13 13, auto`;
    })

    //append bottom
    pinB[e] = document.createElement('div');
    pinB[e].classList.add('pinB');
    pinBody[e].appendChild(pinB[e]);
    pinB[e].addEventListener('pointerover', function() {
        pinB[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    pinB2[e] = document.createElement('div');
    pinB2[e].classList.add('pinB2');
    pinB[e].appendChild(pinB2[e]);
    pinB2[e].addEventListener('pointerover', function() {
        pinB2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M12.3072 0.399759C12.6151 -0.133575 13.3849 -0.133575 13.6928 0.399759L17.5033 6.99976C17.8113 7.53309 17.4263 8.19976 16.8105 8.19976H9.18949C8.57365 8.19976 8.18875 7.53309 8.49667 6.99976L12.3072 0.399759Z' fill='%236885CC'/%3E%3Cpath d='M12.8266 1.21408C12.9036 1.08074 13.096 1.08074 13.173 1.21408L16.5381 7.04265C16.6151 7.17598 16.5189 7.34265 16.3649 7.34265H9.63468C9.48072 7.34265 9.38449 7.17598 9.46147 7.04265L12.8266 1.21408Z' fill='white'/%3E%3Cpath d='M13.6928 25.5997C13.3849 26.133 12.6151 26.133 12.3072 25.5997L8.49667 18.9997C8.18875 18.4663 8.57365 17.7997 9.18949 17.7997H16.8105C17.4264 17.7997 17.8113 18.4663 17.5033 18.9997L13.6928 25.5997Z' fill='%236885CC'/%3E%3Cpath d='M13.1734 24.7854C13.0964 24.9187 12.904 24.9187 12.827 24.7854L9.46186 18.9568C9.38488 18.8235 9.48111 18.6568 9.63507 18.6568H16.3653C16.5193 18.6568 16.6155 18.8235 16.5385 18.9568L13.1734 24.7854Z' fill='white'/%3E%3Cpath d='M11 7.99968H15V17.9997H11V7.99968Z' fill='%236885CC'/%3E%3Cpath d='M12 6.99968H14V18.9997H12V6.99968Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    //append top left
    pinTL[e] = document.createElement('div');
    pinTL[e].classList.add('pinTL');
    pinBody[e].appendChild(pinTL[e]);
    pinTL[e].addEventListener('pointerover', function() {
        pinTL[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
    })

    pinTL2[e] = document.createElement('div');
    pinTL2[e].classList.add('pinTL2');
    pinTL[e].appendChild(pinTL2[e]);
    pinTL2[e].addEventListener('pointerenter', function() {
        pinTL2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    //append to top right
    pinTR[e] = document.createElement('div');
    pinTR[e].classList.add('pinTR');
    pinBody[e].appendChild(pinTR[e]);
    pinTR[e].addEventListener('pointerover', function() {
        pinTR[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(-0.9 0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
    })


    pinTR2[e] = document.createElement('div');
    pinTR2[e].classList.add('pinTR2');
    pinTR[e].appendChild(pinTR2[e]);
    pinTR2[e].addEventListener('pointerenter', function() {
        pinTR2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })

    //append to bottom right
    pinBR[e] = document.createElement('div');
    pinBR[e].classList.add('pinBR');
    pinBody[e].appendChild(pinBR[e]);
    pinBR[e].addEventListener('pointerover', function() {
        pinBR[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(-0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
    })

    pinBR2[e] = document.createElement('div');
    pinBR2[e].classList.add('pinBR2');
    pinBR[e].appendChild(pinBR2[e]);
    pinBR2[e].addEventListener('pointerover', function() {
        pinBR2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M2.89321 3.87335C2.73382 3.27849 3.27815 2.73416 3.87301 2.89355L11.2343 4.86602C11.8292 5.02541 12.0284 5.76898 11.593 6.20445L6.2041 11.5933C5.76864 12.0288 5.02507 11.8295 4.86568 11.2347L2.89321 3.87335Z' fill='%236885CC'/%3E%3Cpath d='M3.83631 4.08187C3.79646 3.93316 3.93254 3.79708 4.08126 3.83692L10.5822 5.57884C10.7309 5.61869 10.7807 5.80458 10.6718 5.91345L5.91283 10.6725C5.80397 10.7813 5.61807 10.7315 5.57823 10.5828L3.83631 4.08187Z' fill='white'/%3E%3Cpath d='M23.1063 22.1265C23.2657 22.7213 22.7214 23.2656 22.1265 23.1063L14.7652 21.1338C14.1703 20.9744 13.9711 20.2308 14.4065 19.7954L19.7954 14.4065C20.2309 13.971 20.9744 14.1703 21.1338 14.7651L23.1063 22.1265Z' fill='%236885CC'/%3E%3Cpath d='M22.1632 21.9179C22.2031 22.0666 22.067 22.2027 21.9183 22.1629L15.4173 20.421C15.2686 20.3811 15.2188 20.1952 15.3277 20.0864L20.0867 15.3274C20.1955 15.2185 20.3814 15.2683 20.4213 15.417L22.1632 21.9179Z' fill='white'/%3E%3Cpath d='M7.34285 10.1716L10.1713 7.34318L18.6566 15.8285L15.8281 18.6569L7.34285 10.1716Z' fill='%236885CC'/%3E%3Cpath d='M7.34285 8.7574L8.75706 7.34318L18.6566 17.2427L17.2423 18.6569L7.34285 8.7574Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })
    //pinBR2[e].addEventListener('pointerdown', function(e) {
    //    pinBR2[e].setPointerCapture(e.pointerId);
    //})

    //append to bottom left
    pinBL[e] = document.createElement('div');
    pinBL[e].classList.add('pinBL');
    pinBody[e].appendChild(pinBL[e]);
    pinBL[e].addEventListener('pointerover', function() {
        pinBL[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 -0.9)' transform-origin='11 11'%3E%3Cpath d='M5.22599 21.661C4.96521 22.1127 4.31328 22.1127 4.05251 21.661L0.0920152 14.8013C-0.168758 14.3496 0.157209 13.785 0.678755 13.785H8.59974C9.12128 13.785 9.44725 14.3496 9.18648 14.8013L5.22599 21.661Z' fill='%236885CC'/%3E%3Cpath d='M4.81984 20.7294C4.75465 20.8424 4.59166 20.8424 4.52647 20.7294L1.15272 14.886C1.08752 14.7731 1.16902 14.6319 1.2994 14.6319L8.04691 14.6319C8.17729 14.6319 8.25879 14.7731 8.19359 14.886L4.81984 20.7294Z' fill='white'/%3E%3Cpath d='M21.6615 4.05199C22.1132 4.31276 22.1132 4.96469 21.6615 5.22546L14.8017 9.18591C14.35 9.44668 13.7854 9.12072 13.7854 8.59918V0.678268C13.7854 0.156727 14.35 -0.169236 14.8017 0.0915348L21.6615 4.05199Z' fill='%236885CC'/%3E%3Cpath d='M20.7299 4.49204C20.8428 4.55723 20.8428 4.72021 20.7299 4.78541L14.8864 8.15913C14.7735 8.22432 14.6323 8.14283 14.6323 8.01244V1.265C14.6323 1.13462 14.7735 1.05313 14.8864 1.11832L20.7299 4.49204Z' fill='white'/%3E%3Cpath d='M14.3784 2.52153C8.76577 2.52153 2.52203 8.5957 2.52203 14.2083H6.75657C6.75657 10.8208 10.5674 6.75592 14.3784 6.75592V2.52153Z' fill='%236885CC'/%3E%3Cpath d='M14.8019 3.36841C8.87367 3.36841 3.36892 8.87311 3.36892 14.8013H5.90957C5.90957 9.71999 10.5673 5.90904 14.8019 5.90904V3.36841Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 11 11, auto`;
    })

    pinBL2[e]= document.createElement('div');
    pinBL2[e].classList.add('pinBL2');
    pinBL[e].appendChild(pinBL2[e]);
    pinBL2[e].addEventListener('pointerenter', function() {
        pinBL2[e].style.cursor = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(${Number(pinBody[e].dataset.rotation)} 0 0) scale(0.9 0.9)' transform-origin='13 13'%3E%3Cpath d='M22.1267 2.89348C22.7216 2.73409 23.2659 3.27842 23.1065 3.87328L21.1341 11.2346C20.9747 11.8295 20.2311 12.0287 19.7956 11.5933L14.4068 6.20437C13.9713 5.76891 14.1705 5.02534 14.7654 4.86595L22.1267 2.89348Z' fill='%236885CC'/%3E%3Cpath d='M21.9182 3.83658C22.0669 3.79673 22.203 3.93281 22.1632 4.08153L20.4213 10.5825C20.3814 10.7312 20.1955 10.781 20.0866 10.6721L15.3276 5.9131C15.2188 5.80424 15.2686 5.61834 15.4173 5.5785L21.9182 3.83658Z' fill='white'/%3E%3Cpath d='M3.87326 23.1066C3.2784 23.266 2.73407 22.7216 2.89346 22.1268L4.86593 14.7654C5.02532 14.1706 5.76889 13.9713 6.20435 14.4068L11.5932 19.7957C12.0287 20.2311 11.8295 20.9747 11.2346 21.1341L3.87326 23.1066Z' fill='%236885CC'/%3E%3Cpath d='M4.08178 22.1635C3.93307 22.2033 3.79698 22.0672 3.83683 21.9185L5.57875 15.4176C5.6186 15.2689 5.80449 15.2191 5.91336 15.3279L10.6724 20.0869C10.7812 20.1958 10.7314 20.3817 10.5827 20.4216L4.08178 22.1635Z' fill='white'/%3E%3Cpath d='M15.8285 7.34313L18.6569 10.1716L10.1716 18.6568L7.34319 15.8284L15.8285 7.34313Z' fill='%236885CC'/%3E%3Cpath d='M17.2427 7.34313L18.6569 8.75734L8.7574 18.6568L7.34319 17.2426L17.2427 7.34313Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A") 13 13, auto`;
    })
}

function adjustBasicsFromCanvas() {

    var z = rngZoom.value;

    for(var a = 0; a < pnlBoxLayer.length; a++) {
        var e = Number(pnlBoxLayer[a].dataset.layer);

        txtWidthLayer[a].value = Math.round(cnvLayers[e].clientWidth);
        txtHeightLayer[a].value = Math.round(cnvLayers[e].clientHeight);

        txtXLayer[a].value = Math.round(cnvLayers[e].offsetLeft);
        txtYLayer[a].value = Math.round(cnvLayers[e].offsetTop);

        txtRotationLayer[a].value = Math.round(cnvLayers[e].dataset.rotation);
        txtRotationLayer[a].previousElementSibling.value = txtRotationLayer[a].value;
    }
}

function createImgTemp(e) {

    //add canvas temperature
    var cnvTemp = document.createElement('canvas');
    cnvTemp.width = cnvLayers[e].clientWidth;
    cnvTemp.height = cnvLayers[e].clientHeight;
    var ctxTemp = cnvTemp.getContext('2d');
   

    //draw image on canvas
    ctxTemp.drawImage(cnvLayers[e].children[0], 0, 0, cnvTemp.width, cnvTemp.height);

    const imageData = ctxTemp.getImageData(0, 0, cnvTemp.width, cnvTemp.height);
    const data = imageData.data;

    // Loop through each pixel in the image data
    for (let i = 0; i < data.length; i += 4) {

        data[i] = 0;
        data[i + 1] = 87;
        data[i + 2] = 255;
        
    }

    ctxTemp.putImageData(imageData, 0, 0);

    imgCold[e] = new Image();
    imgCold[e].src = cnvTemp.toDataURL('image/png');
    imgCold[e].onload = function() {
        cnvLayers[e].append(imgCold[e]);
        imgCold[e].style.opacity = 0 + '%';
        imgCold[e].style.mixBlendMode = "soft-light";
    }

    //const imageData = ctxTemp[e].getImageData(0, 0, cnvTemp[e].width, cnvTemp[e].height);
    //const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {

        data[i] = 255;
        data[i + 1] = 153;
        data[i + 2] = 0;
    }

    ctxTemp.putImageData(imageData, 0, 0);

    imgWarm[e] = new Image();
    imgWarm[e].src = cnvTemp.toDataURL('image/png');
    imgWarm[e].onload = function() {
        cnvLayers[e].append(imgWarm[e]);
        imgWarm[e].style.opacity = 0 + '%';
        imgWarm[e].style.mixBlendMode = "soft-light";
    }

}
//=============================CREATE CANVAS FOR LAYERS=====================
function createCanvasLayer(e, n) {
    
    cnvLayers[e] = document.createElement('div');
    cnvLayers[e].style.visibility = "visible";
    cnvLayers[e].classList.add('cnvLayers');
    cnvLayers[e].dataset.rotation = 0;
    cnvLayers[e].dataset.layer = e;
    cnvLayers[e].dataset.thumbno = n;
    focusObj[e] = cnvLayers[e];

    //add first image  so we can adjust the left and right of the cnvlayer
    //use [e] to get pnlBoxLayer dataset of thumbNo 
    //index it back to pnlBoxThumb and get children[0] which is img and get src

    var img = new Image();
    img.src = configScroll[2].querySelector(`[data-thumbno="${n}"]`).children[0].src;
    img.onload = function() { 
        //when image is loaded, append img to cnvlayer
        cnvLayers[e].appendChild(img); 

        //then append cnvlayer to cnvmain
        cnvGrpLayers.appendChild(cnvLayers[e]);
        
        //get which is smaller if canvas width or canvas height

        if(Number(txtSizeWidth.value) > Number(txtSizeHeight.value)) {
            var aspectRatio = img.naturalWidth / img.naturalHeight;
            cnvLayers[e].style.height = `${Math.round(txtSizeHeight.value * 0.5)}px`;
            cnvLayers[e].style.width =  `${Math.round(cnvLayers[e].clientHeight * aspectRatio)}px`;

        }
        else if(Number(txtSizeWidth.value) < Number(txtSizeHeight.value)) {
            var aspectRatio = img.naturalHeight / img.naturalWidth;
            //console.log('height')
            cnvLayers[e].style.width = `${Math.round(txtSizeWidth.value * 0.5)}px`;
            cnvLayers[e].style.height = `${Math.round(cnvLayers[e].clientWidth * aspectRatio)}px`;
        }

        else if(Number(txtSizeWidth.value) == Number(txtSizeHeight.value)) {
            
            var aspectRatio = img.naturalHeight / img.naturalWidth;

            cnvLayers[e].style.width = `${Math.round(txtSizeWidth.value * 0.5)}px`;
            cnvLayers[e].style.height = `${Math.round(cnvLayers[e].clientWidth * aspectRatio)}px`;
        }

        //position cnvlayer to center
        cnvLayers[e].style.left = `${(txtSizeWidth.value / 2) - (cnvLayers[e].clientWidth/2)}px`;
        cnvLayers[e].style.top = `${(txtSizeHeight.value / 2) - (cnvLayers[e].clientHeight/2)}px`;

        createImgTemp(e)

        //add border
        addBorderLayer(cnvLayers[e], e)

        //adjust textbox width
        adjustBasicsFromCanvas();
    }

}

//==============================ADD CNVPIN EVENT LISTENERS=========================

cnvPin.addEventListener('pointerdown', scaleBorderDown);
cnvPin.addEventListener('pointermove', scaleBorderMove);
cnvPin.addEventListener('pointerup', scaleBorderUp);

cnvPin.addEventListener('pointerdown', resizeBorderDown);
cnvPin.addEventListener('pointermove', resizeBorderMove);
cnvPin.addEventListener('pointerup', resizeBorderUp);

cnvPin.addEventListener('pointerdown', rotateBorderDown);
cnvPin.addEventListener('pointermove', rotateBorderMove);
cnvPin.addEventListener('pointerup', rotateBorderUp);

cnvPin.addEventListener('pointerdown', dragBorderDown);
cnvPin.addEventListener('pointermove', dragBorderMove);
cnvPin.addEventListener('pointerup', dragBorderUp);


//=============================DRAG AND DROP PNLBOX LAYERS=========================

function countdownPanelLayer() {

    if(counter < 300) {
        counter+=100;
    }
    else {
        isDragging = true; //set boolean to true

        clearInterval(tmrDrag);
        tmrDrag = null;
        counter = 0;
    }
}   

function pointerDownLayer(e) {

    if((this != e.target) && (e.target.closest('.pnlTitleLayer'))) {
        e.preventDefault(); //remove the highlighting on texts
        
        clientY = e.clientY;

        for(var a = 0; a < focusPanel.length; a++) {
            if(focusPanel[a] != null) {
                if(focusPanel[a] == e.target.closest('.pnlBoxLayer')) {
                    tmrDrag = setInterval(countdownPanelLayer, 100);
                    break;
                }
           
            }
        }
    }

}
configScroll[5].addEventListener('pointerdown', pointerDownLayer);

function pointerMoveLayer(e) {

    e.preventDefault();

    if(isDragging) {
 
        //this.scrollTop = e.clientY;

        for(var a = 0; a < pnlBoxLayer.length; a++) {
           
            if(e.clientY < pnlBoxLayer[a].getBoundingClientRect().top + (pnlBoxLayer[a].clientHeight/2)) {
                
                patRank = a;

                breaklineDrag.style.display = "block";

                this.insertBefore(breaklineDrag, pnlBoxLayer[patRank]);
           
                break;
            }
            
            else if(e.clientY > pnlBoxLayer[pnlBoxLayer.length-1].getBoundingClientRect().top + (pnlBoxLayer[pnlBoxLayer.length-1].clientHeight /2)) {

                this.appendChild(breaklineDrag);

                break;

            }
            
        }
        
    }

}
configScroll[5].addEventListener('pointermove', pointerMoveLayer);
configScroll[5].addEventListener('contextmenu', function(e){
    e.preventDefault();
})

function pointerUpLayer(e) {

    e.preventDefault();

    if(isDragging) {

        isDragging = false;

        for(var a = focusPanel.length-1; a >= 0; a--) {
            if(focusPanel[a] != null) {
                this.insertBefore(focusPanel[a], breaklineDrag);
            }
            
        }

        breaklineDrag.style.display = "none";
        
        patRank = null;

        rearrangeCanvasLayers()
    }

    counter = 0;
    clientY = null;
    clearInterval(tmrDrag);
    
}
configScroll[5].addEventListener('pointerup', pointerUpLayer);

//================REARRANGE CANVAS DEPENDING ON THE LAYER ARRANGEMENT=======

function rearrangeCanvasLayers() {

    //first rearrange all cnvPatterns
    for(var a = 0; a < pnlBoxLayer.length; a++) {
        
        var e = pnlBoxLayer[a].dataset.layer; 
        
        cnvGrpLayers.prepend(cnvLayers[e]);
        cnvPin.prepend(pinBody[e]);
    }
    
}






















//===========================START LAYER CONTROLS======================

//this will format the pnlBoxPatterns header name to avoid duplicate
var newLayerHeader = null;

function autoIncrementLayer(name) {

    var counter = 1;
    var arrName = null;

    for(var a = 0; a < txtHeaderLayer.length; a++) {
        arrName = txtHeaderLayer[a].value.split(" ");
        if(arrName[0] == name) {
            if(Number(arrName[1]) >= counter ) {
                counter = Number(arrName[1]) + 1;
            }
        }
    }
    
    return newLayerHeader = name + " " + counter;
}

//function to hide and show cnvPattern
function showHideLayers() {

    var e = this.closest('.pnlBoxLayer').dataset.layer;

    if(cnvLayers[e].style.visibility == "visible") {
        cnvLayers[e].style.visibility = "hidden";
        this.style.opacity = .2;
    }
    else if(cnvLayers[e].style.visibility == "hidden") {
        cnvLayers[e].style.visibility = "visible";
        this.style.opacity = 1;
    }
}

function showBasicLayer(){

    this.closest('.pnlBoxLayer').querySelector('.tabSliderLayer').style.translate = "0%"; //slide tab
    this.closest('.pnlBoxLayer').querySelector('.pnlBottomLayerThumb').style.translate = "0%"; //slide scroll thumb
}

function showColorLayer() {
    
    this.closest('.pnlBoxLayer').querySelector('.tabSliderLayer').style.translate = "-100%"; //slide tab to left
    this.closest('.pnlBoxLayer').querySelector('.pnlBottomLayerThumb').style.translate = "100%"; //slide thumb to right
}

function showStyleLayer() {
    
    this.closest('.pnlBoxLayer').querySelector('.tabSliderLayer').style.translate = "-200%"; //slide tab to left
    this.closest('.pnlBoxLayer').querySelector('.pnlBottomLayerThumb').style.translate = "200%"; //slide thumb to right

}

function chooseLayerBlend() {
    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {

            //change dropoptionverti text
            
            focusPanel[a].querySelector('.dropdown').children[0].innerText = this.innerText;
            
            var e = Number(focusPanel[a].dataset.layer);
            cnvLayers[e].style.mixBlendMode = this.innerText;
        } 
    }
}

function adjustLayerWidth() {

    var z = rngZoom.value / 100;
    
    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with width
            var initWidth = cnvLayers[e].clientWidth;
            cnvLayers[e].style.width = this.value + 'px';
            focusPanel[a].querySelector('.txtWidthLayer').value = cnvLayers[e].clientWidth;

            //also move the x axis
            var newX = ((initWidth - cnvLayers[e].clientWidth) * z);
            cnvLayers[e].style.left = cnvLayers[e].offsetLeft + newX + "px";

            focusPanel[a].querySelector('.txtXLayer').value = cnvLayers[e].offsetLeft;
        }
 
    }

    adjustBorder();
}

function adjustLayerHeight() {

    var z = rngZoom.value / 100;
    
    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with width
            var initHeight = cnvLayers[e].clientHeight;
            cnvLayers[e].style.height = this.value + 'px';
            focusPanel[a].querySelector('.txtHeightLayer').value = cnvLayers[e].clientHeight;

            //also move the x axis
            var newY = ((initHeight - cnvLayers[e].clientHeight) * z);
            cnvLayers[e].style.top = cnvLayers[e].offsetTop + newY + "px";

            focusPanel[a].querySelector('.txtYLayer').value = cnvLayers[e].offsetTop;
        }
 
    }

    adjustBorder();
}

function adjustLayerX() {

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with left
            cnvLayers[e].style.left = this.value + 'px';
            focusPanel[a].querySelector('.txtXLayer').value = cnvLayers[e].offsetLeft;

        }

    }

    adjustBorder();

}

function adjustLayerY() {

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with top
            cnvLayers[e].style.top = this.value + 'px';
            focusPanel[a].querySelector('.txtYLayer').value = cnvLayers[e].offsetTop;

        }

    }

    adjustBorder();

}

function adjustFlipX(e) {

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

    if(leadFlip.dataset.value == "true") {

        cnvLayers[l].style.transform = "scale(-1, 1)";
    }

    else if(this.dataset.value == "false") { 

        cnvLayers[l].style.transform = "scale(1, 1)";

        leadFlip.removeEventListener('mouseover', chkBoxHover);
    }
    
    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null ) {

            var e = Number(focusPanel[a].dataset.layer);

            if(leadFlip.dataset.value == "true") {

                cnvLayers[e].style.transform = "scale(-1, 1)";
            }
        
            else if(leadFlip.dataset.value == "false") { 

                cnvLayers[e].style.transform = "scale(1, 1)";
            }
        
        }
    }
}

function adjustFlipY(e) {

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

    if(leadFlip.dataset.value == "true") {

        cnvLayers[l].style.transform = "scale(1, -1)";
    }

    else if(this.dataset.value == "false") { 

        cnvLayers[l].style.transform = "scale(1, 1)";

        leadFlip.removeEventListener('mouseover', chkBoxHover);

    }
    
    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null ) {

            var e = Number(focusPanel[a].dataset.layer);

            if(leadFlip.dataset.value == "true") {

                cnvLayers[e].style.transform = "scale(1, -1)";
            }
        
            else if(leadFlip.dataset.value == "false") { 
        
                cnvLayers[e].style.transform = "scale(1, 1)";
            }
        
        }
    }
}

function chooseLayerOpacity(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with left
            cnvLayers[e].style.opacity = this.value + '%';
            focusPanel[a].querySelector('.txtOpacityLayer').value = this.value;
            focusPanel[a].querySelector('.txtOpacityLayer').previousElementSibling.value = this.value;
        }

    }
}

function chooseLayerRotation(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //deal with top
            pinBody[e].style.rotate = this.value + 'deg';
            pinBody[e].dataset.rotation = this.value;

            cnvLayers[e].style.rotate = this.value + 'deg';
            cnvLayers[e].dataset.rotation = this.value;

            focusPanel[a].querySelector('.txtRotationLayer').value = this.value;
            focusPanel[a].querySelector('.txtRotationLayer').previousElementSibling.value = this.value;
        }
    }
}

function adjustBlur(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            cnvLayers[e].style.filter = `blur(${this.value}px)`;

            focusPanel[a].querySelector('.txtBlurLayer').value = this.value;
            focusPanel[a].querySelector('.txtBlurLayer').previousElementSibling.value = this.value;
        }

    }
}

function adjustBrightness(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            cnvLayers[e].style.filter = `brightness(${this.value}%)`;

            focusPanel[a].querySelector('.txtBrightnessLayer').value = this.value;
            focusPanel[a].querySelector('.txtBrightnessLayer').previousElementSibling.value = this.value;
        }

    }
}

function adjustContrast(e) {
    
    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            cnvLayers[e].style.filter = `contrast(${this.value}%)`;

            focusPanel[a].querySelector('.txtContrastLayer').value = this.value;
            focusPanel[a].querySelector('.txtContrastLayer').previousElementSibling.value = this.value;
        }

    }
}

function adjustSaturation(e) {
    
    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            cnvLayers[e].style.filter = `saturate(${this.value}%)`;

            focusPanel[a].querySelector('.txtSaturationLayer').value = this.value;
            focusPanel[a].querySelector('.txtSaturationLayer').previousElementSibling.value = this.value;
        }

    }
}

function adjustTemperature(e) {

    var o;

    //get opacity
    o = Math.abs(this.value) * 0.5;

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {
            var e = Number(focusPanel[a].dataset.layer);

            //get color
            if(this.value < 0) {
                imgWarm[e].style.opacity = '0%';
                imgCold[e].style.opacity = o + '%';
            }
            else if(this.value > 0) {
                imgCold[e].style.opacity = '0%';
                imgWarm[e].style.opacity = o + '%';
            }
            else {
                imgCold[e].style.opacity = '0%';
                imgWarm[e].style.opacity = '0%';
            }

            focusPanel[a].querySelector('.txtTemperatureLayer').value = this.value;
            focusPanel[a].querySelector('.txtTemperatureLayer').previousElementSibling.value = this.value;
        }
    }
}

function convertHexToRGB() {
    var z = [];
    var s = [];
    var append = "";

    if(testHexCode(txtHexValue.value)){

        if(txtHexValue.value.substring(0,1) != '#') {
            txtHexValue.value = '#' + txtHexValue.value;
        }

        for(var a=0; a < 7; a++) {

            z[a] = txtHexValue.value.substring(a, a+1);

            if(z[a] != '#') {

                var NAN = Number(z[a]);
                
                if(isNaN(NAN)) {

                    s[a] = z[a].toUpperCase();
                    z[a] = hexaToDecimal(z[a])
                }
                else {
                    s[a] = z[a];
                    z[a] = Number(z[a]);
                }
                
                append += s[a];
            }
        }
        
        red = (z[1] * 16) + z[2];
        green = (z[3] * 16) + z[4];
        blue = (z[5] * 16) + z[6];

        txtRedValue.value = red;
        txtGreenValue.value = green;
        txtBlueValue.value = blue;

        hexcode = append.toUpperCase();
        
    }
    else {
        txtHexValue.value = "#FFFFFF";
    }
}

//====================================OUTLINE==============================
function adjustOutlineColor() {

    var me = this.closest('.pnlBoxLayer');
    var e = Number(me.dataset.layer);
    var color = me.querySelector('.txtOutlineColor').value;
    var opacity = me.querySelector('.txtOutlineOpacity').value / 100;

    txtHexValue.value = color;
    convertHexToRGB();
    cnvLayers[e].style.borderColor = `rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})`;

}

function adjustOutline(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var me = this.closest('.pnlBoxLayer');
            var e = Number(focusPanel[a].dataset.layer);
            var color = me.querySelector('.txtOutlineColor').value;
            var size = me.querySelector('.txtOutlineSize').value *0.2;
            var opacity = me.querySelector('.txtOutlineOpacity').value / 100;

            txtHexValue.value = color;
            convertHexToRGB();

            cnvLayers[e].children[0].style.filter = "none";
            cnvLayers[e].style.borderWidth = `${size}px`;
            cnvLayers[e].style.borderStyle = `solid`;
            cnvLayers[e].style.borderColor = `rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})`;

            adjustBorder()
            
        }
    }

}

function showOutline() {

    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var e = Number(focusPanel[a].dataset.layer);
            var size = focusPanel[a].querySelector('.txtOutlineSize').value *0.2;
            var opacity = focusPanel[a].querySelector('.txtOutlineOpacity').value / 100;

            //remove other styles first
            cnvLayers[e].children[0].style.filter = "none";

            txtHexValue.value = focusPanel[a].querySelector('.txtOutlineColor').value;
            convertHexToRGB();

            
            cnvLayers[e].style.borderWidth = `${size}px`;
            cnvLayers[e].style.borderStyle = `solid`;
            cnvLayers[e].style.borderColor = `rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})`;

            adjustBorder()
            
        }
    }

}

//===================================GLOW==================================

function adjustGlowColor() {

    var me = this.closest('.pnlBoxLayer');
    var e = Number(me.dataset.layer);
    var color = me.querySelector('.txtGlowColor').value;
    var size = me.querySelector('.txtGlowSize').value * 0.02;
    var spread = me.querySelector('.txtGlowSpread').value / 10;
    var opacity = me.querySelector('.txtGlowOpacity').value / 100;

    cnvLayers[e].children[0].style.filter = "none";

    var append = "";

    txtHexValue.value = color;
    convertHexToRGB();

    for(var b = 0; b < 360; b+=60) {
   
        if(b == 60 || b == 120) {
            
            var coorX = .01 * Math.cos(b * (Math.PI/ 180));
            var coorY = .01 * Math.sin(b * (Math.PI / 180));
            append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
            append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
        }
        
        else {

            var coorX = .01 * Math.cos(b * (Math.PI/ 180));
            var coorY = .01 * Math.sin(b * (Math.PI / 180));
            append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
        
        }
    }

    cnvLayers[e].children[0].style.filter = append;

}

function adjustGlow(e) {

    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var me = this.closest('.pnlBoxLayer');
            var e = Number(focusPanel[a].dataset.layer);
            var size = me.querySelector('.txtGlowSize').value * 0.02;
            var spread = me.querySelector('.txtGlowSpread').value / 10;
            var opacity = me.querySelector('.txtGlowOpacity').value / 100;

            var append = "";
            cnvLayers[e].children[0].style.filter = "none";
            
            for(var b = 0; b < 360; b+=60) {
   
                if(b == 60 || b == 120) {
                    
                    var coorX = .01 * Math.cos(b * (Math.PI/ 180));
                    var coorY = .01 * Math.sin(b * (Math.PI / 180));
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                }
                
                else {

                    var coorX = .01 * Math.cos(b * (Math.PI/ 180));
                    var coorY = .01 * Math.sin(b * (Math.PI / 180));
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                
                }
            }

            cnvLayers[e].children[0].style.filter = append;

        }
    }
}

function showGlow() {

    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var e = Number(focusPanel[a].dataset.layer);
            var size = focusPanel[a].querySelector('.txtGlowSize').value * 0.02;
            var spread = focusPanel[a].querySelector('.txtGlowSpread').value / 10;
            var opacity = focusPanel[a].querySelector('.txtGlowOpacity').value / 100;
            txtHexValue.value = focusPanel[a].querySelector('.txtGlowColor').value;
            convertHexToRGB();

            cnvLayers[e].style.border = "none";

            var append = "";
            
            for(var b = 0; b < 360; b+=60) {
   
                if(b == 60 || b == 120) {
                    
                    var coorX = .01 * Math.cos(b * (Math.PI/ 180));
                    var coorY = .01 * Math.sin(b * (Math.PI / 180));
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${ size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${ size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                }
                
                else {

                    var coorX = .01 * Math.cos(b * (Math.PI/ 180));
                    var coorY = .01 * Math.sin(b * (Math.PI / 180));
                    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${ size + spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity - (spread/30)})) `;
                }
            }
       
            cnvLayers[e].children[0].style.filter = append;
        }
    }
    
    
}

//===================================SHADOW==================================
function adjustShadowColor() {

    var me = this.closest('.pnlBoxLayer');
    var e = Number(me.dataset.layer);
    var size = me.querySelector('.txtShadowSize').value / 2;
    var spread = me.querySelector('.txtShadowSpread').value / 5;
    var opacity = me.querySelector('.txtShadowOpacity').value / 100;
    var rotation = Number(me.querySelector('.txtShadowRotation').value) + 90;
    txtHexValue.value = me.querySelector('.txtShadowColor').value;

    convertHexToRGB();

    cnvLayers[e].style.border = "none";

    var append = "";

    var coorX = size * Math.cos(rotation * (Math.PI/ 180));
    var coorY = size * Math.sin(rotation * (Math.PI / 180));
    append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})) `;
    
    cnvLayers[e].children[0].style.filter = append;
}

function adjustShadow(e) {
    var b = 0;
    var key = null;
    var imFocus = false;
    var leadPanel = this.closest('.pnlBoxLayer');
    
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

    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var me = this.closest('.pnlBoxLayer');
            var e = Number(focusPanel[a].dataset.layer);
            var size = me.querySelector('.txtShadowSize').value / 2;
            var spread = me.querySelector('.txtShadowSpread').value / 5;
            var opacity = me.querySelector('.txtShadowOpacity').value / 100;
            var rotation = Number(me.querySelector('.txtShadowRotation').value) + 90;
            txtHexValue.value = me.querySelector('.txtShadowColor').value;

            convertHexToRGB();

            cnvLayers[e].style.border = "none";

            var append = "";

            var coorX = size * Math.cos(rotation * (Math.PI/ 180));
            var coorY = size * Math.sin(rotation * (Math.PI / 180));
            append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})) `;
            
            cnvLayers[e].children[0].style.filter = append;

        }
    }

}

function showShadow() {
    for(var a = 0; a < focusPanel.length; a++) {

        if(focusPanel[a] != null) {

            var e = Number(focusPanel[a].dataset.layer);
            var size = focusPanel[a].querySelector('.txtShadowSize').value/2;
            var spread = focusPanel[a].querySelector('.txtShadowSpread').value / 5;
            var opacity = focusPanel[a].querySelector('.txtShadowOpacity').value / 100;
            var rotation = Number(focusPanel[a].querySelector('.txtShadowRotation').value) + 90;
            txtHexValue.value = focusPanel[a].querySelector('.txtShadowColor').value;
            convertHexToRGB();

            cnvLayers[e].style.border = "none";

            var append = "";
                    
            var coorX = size * Math.cos(rotation * (Math.PI/ 180));
            var coorY = size * Math.sin(rotation * (Math.PI / 180));
            append += `drop-shadow(${Math.round(coorX)}px ${Math.round(coorY)}px ${spread}px rgba(${txtRedValue.value}, ${txtGreenValue.value}, ${txtBlueValue.value}, ${opacity})) `;
            
                
            cnvLayers[e].children[0].style.filter = append;

        }
    }
}


function chooseLayerStyle(e) {

    for(var a = 0; a < focusPanel.length; a++) {
        if(focusPanel[a] != null) {

            //change dropoptionverti text
            var e = focusPanel[a].dataset.layer;

            var b = focusPanel[a].querySelectorAll('.dropdown');
            b[1].children[0].innerText = this.innerText;
            
            if(this.innerText == "Outline") {
                focusPanel[a].querySelector('.tabOutlineLayer').style.display = "block";
                focusPanel[a].querySelector('.tabGlowLayer').style.display = "none";
                focusPanel[a].querySelector('.tabShadowLayer').style.display = "none";
                showOutline();
                
            }
            else if(this.innerText == "Glow") {
                focusPanel[a].querySelector('.tabGlowLayer').style.display = "block";
                focusPanel[a].querySelector('.tabOutlineLayer').style.display = "none";
                focusPanel[a].querySelector('.tabShadowLayer').style.display = "none";
                showGlow();
            }
            else if(this.innerText == "Shadow") {

                focusPanel[a].querySelector('.tabShadowLayer').style.display = "block";
                focusPanel[a].querySelector('.tabOutlineLayer').style.display = "none";
                focusPanel[a].querySelector('.tabGlowLayer').style.display = "none";
                showShadow();
            }
            else {

                focusPanel[a].querySelector('.tabShadowLayer').style.display = "none";
                focusPanel[a].querySelector('.tabOutlineLayer').style.display = "none";
                focusPanel[a].querySelector('.tabGlowLayer').style.display = "none";
                focusPanel[a].querySelector('.tabStyleLayer').querySelector('.dropdown').children[0].innerText = "Choose style";
            }
        } 
    }
}

function hoverLayerStyle(e) {
    this.style.backgroundColor = "salmon";
    this.style.color = "white";
}

function outLayerStyle(e) {
    this.style.backgroundColor = "transparent";
    this.style.color = "salmon";
}






//actual function to create pnlBoxProperties
function addPnlBoxImageControls(e) {  //adding controls only for 'IMAGE' panel boxes

    for(var a = 0; a < pnlBoxLayer.length; a++) {

        if(Number(pnlBoxLayer[a].dataset.layer) == e) {
            
            //add the expand and collapse control
            btnExpandCollapseLayer[a].addEventListener('click', expandCollapseControls);

            //add the show and hide control
            btnShowHideLayer[a].addEventListener('click', showHideLayers);

            txtHeaderLayer[a].addEventListener('dblclick', renameTxtHeaderPattern);
            txtHeaderLayer[a].addEventListener('change', saveTxtHeaderPattern);
            txtHeaderLayer[a].addEventListener('click', blurTxtHeaderPattern);
            txtHeaderLayer[a].addEventListener('focusout', saveTxtHeaderPattern);

            //btnBasicLayer event listeners
            btnBasicLayer[a].addEventListener('click', btnBottomClick); //default the btnBasic to white
            btnBasicLayer[a].addEventListener('mouseover', btnBottomHover);
            btnBasicLayer[a].addEventListener('mouseleave', btnBottomLeave);
            btnBasicLayer[a].addEventListener('click', showBasicLayer);
            btnBasicLayer[a].children[0].style.filter = "saturate(0) brightness(2)";
            btnBasicLayer[a].children[0].style.transition = ".2s";

            //btnColorLayer event listeners
            btnColorLayer[a].addEventListener('click', btnBottomClick); //default the btnColor to white
            btnColorLayer[a].addEventListener('mouseover', btnBottomHover);
            btnColorLayer[a].addEventListener('mouseleave', btnBottomLeave);
            btnColorLayer[a].addEventListener('click', showColorLayer);
            btnColorLayer[a].children[0].style.transition = ".2s";

            //btnColorLayer event listeners
            btnStyleLayer[a].addEventListener('click', btnBottomClick); //default the btnStyle to white
            btnStyleLayer[a].addEventListener('mouseover', btnBottomHover);
            btnStyleLayer[a].addEventListener('mouseleave', btnBottomLeave);
            btnStyleLayer[a].addEventListener('click', showStyleLayer);
            btnColorLayer[a].children[0].style.transition = ".2s";

            //add function to all sliders to change textbox
            linkRangeToTextbox();
            
            //add function to all textbox to change slider
            linkTextboxToRange();

            //assign dropOptionVerti selection for blend mode
            for(var b = 0; b < optLayerBlend.length; b++) {
                optLayerBlend[b].addEventListener('click', chooseLayerBlend);
            }

            //width and size
            txtWidthLayer[a].addEventListener('change', adjustLayerWidth);
            txtHeightLayer[a].addEventListener('change', adjustLayerHeight);

            //x and y axis
            txtXLayer[a].addEventListener('change', adjustLayerX);
            txtYLayer[a].addEventListener('change', adjustLayerY);

            chkFlipX[a].addEventListener('click', chkBoxClick);
            chkFlipX[a].addEventListener('click', adjustFlipX);
            chkFlipX[a].addEventListener('mouseover', chkBoxHover);
            chkFlipX[a].addEventListener('mouseleave', chkBoxLeave)
            
            chkFlipY[a].addEventListener('click', chkBoxClick);
            chkFlipY[a].addEventListener('click', adjustFlipY);
            chkFlipY[a].addEventListener('mouseover', chkBoxHover);
            chkFlipY[a].addEventListener('mouseleave', chkBoxLeave)

            txtOpacityLayer[a].addEventListener('change', chooseLayerOpacity);
            txtOpacityLayer[a].previousElementSibling.addEventListener('input', chooseLayerOpacity);

            txtRotationLayer[a].addEventListener('change', chooseLayerRotation);
            txtRotationLayer[a].previousElementSibling.addEventListener('input', chooseLayerRotation);

            txtBlurLayer[a].addEventListener('change', adjustBlur);
            txtBlurLayer[a].previousElementSibling.addEventListener('input', adjustBlur);

            txtBrightnessLayer[a].addEventListener('change', adjustBrightness);
            txtBrightnessLayer[a].previousElementSibling.addEventListener('input', adjustBrightness);

            txtContrastLayer[a].addEventListener('change', adjustContrast);
            txtContrastLayer[a].previousElementSibling.addEventListener('input', adjustContrast);

            txtSaturationLayer[a].addEventListener('change', adjustSaturation);
            txtSaturationLayer[a].previousElementSibling.addEventListener('input', adjustSaturation);

            txtTemperatureLayer[a].addEventListener('change', adjustTemperature);
            txtTemperatureLayer[a].previousElementSibling.addEventListener('input', adjustTemperature);
        
            //assign dropOptionVerti selection for blend mode
            for(var b = 0; b < optLayerStyle.length; b++) {
                optLayerStyle[b].addEventListener('click', chooseLayerStyle);
                if(b == 3) {
                    optLayerStyle[b].style.color = "salmon";
                    optLayerStyle[b].addEventListener('mouseover', hoverLayerStyle)
                    optLayerStyle[b].addEventListener('mouseout', outLayerStyle)
                }
            }
            
            //outline
            txtOutlineColor[a].addEventListener('focus', selectAll);
            txtOutlineColor[a].addEventListener('change', adjustOutlineColor);
            txtOutlineColor[a].previousElementSibling.addEventListener('input', adjustOutlineColor)
            thumbPickerOutline[a].addEventListener('click', letsSummonColorPicker);

            txtOutlineOpacity[a].addEventListener('change', adjustOutline);
            txtOutlineOpacity[a].previousElementSibling.addEventListener('input', adjustOutline);

            txtOutlineSize[a].addEventListener('change', adjustOutline);
            txtOutlineSize[a].previousElementSibling.addEventListener('input', adjustOutline);
        
            //glow
            txtGlowColor[a].addEventListener('focus', selectAll);
            txtGlowColor[a].addEventListener('change', adjustGlowColor);
            txtGlowColor[a].previousElementSibling.addEventListener('input', adjustGlowColor);
            thumbPickerGlow[a].addEventListener('click', letsSummonColorPicker);

            txtGlowOpacity[a].addEventListener('change', adjustGlow);
            txtGlowOpacity[a].previousElementSibling.addEventListener('input', adjustGlow);

            txtGlowSize[a].addEventListener('change', adjustGlow);
            txtGlowSize[a].previousElementSibling.addEventListener('input', adjustGlow);

            txtGlowSpread[a].addEventListener('change', adjustGlow);
            txtGlowSpread[a].previousElementSibling.addEventListener('input', adjustGlow);

            //shadow
            txtShadowColor[a].addEventListener('focus', selectAll);
            txtShadowColor[a].addEventListener('change', adjustShadowColor);
            txtShadowColor[a].previousElementSibling.addEventListener('input', adjustShadowColor);
            thumbPickerShadow[a].addEventListener('click', letsSummonColorPicker);

            txtShadowOpacity[a].addEventListener('change', adjustShadow);
            txtShadowOpacity[a].previousElementSibling.addEventListener('input', adjustShadow);

            txtShadowSize[a].addEventListener('change', adjustShadow);
            txtShadowSize[a].previousElementSibling.addEventListener('input', adjustShadow);

            txtShadowSpread[a].addEventListener('change', adjustShadow);
            txtShadowSpread[a].previousElementSibling.addEventListener('input', adjustShadow);

            txtShadowRotation[a].addEventListener('change', adjustShadow);
            txtShadowRotation[a].previousElementSibling.addEventListener('input', adjustShadow);
        }
    }

    //after all assigned controls then create the actual pattern layer
    createCanvasLayer(Number(pnlBoxLayer[0].dataset.layer), Number(pnlBoxLayer[0].dataset.thumbno))
}



