var focusObj = [];
var focusPanel = [];
var inFocus;

//=============CHECK DOCUMENT CLICKS TO HIDE DROPDOWN MENUS ===========

function checkClicks(e) { //hide all dropdowns

    var clicked = e.target;
    var dropdown = document.getElementsByClassName('dropdown');
    var searchbox = document.getElementsByClassName('searchbox');
    var dropdownZoom = document.getElementsByClassName('dropdownZoom');

    hideAllOptions()

    for(var a = 0; a < dropdown.length; a++) { //generic loop for all dropdown classes

        if(clicked === dropdown[a] || clicked.parentElement === dropdown[a]) {
            
            if(dropdown[a].dataset.on == "false") {
                
                dropdown[a].parentElement.children[1].style.display = "block";
                dropdown[a].dataset.on = "true";
            }

            else if(dropdown[a].dataset.on == "true") {
                dropdown[a].dataset.on = "false";
            }
            
        }

        else {
            dropdown[a].dataset.on = "false";
        }

    }

    for(var a = 0; a < searchbox.length; a++) { //loop for txtSearch classes

         if(clicked === searchbox[a] || clicked === searchbox[a].children[0] || clicked === searchbox[a].children[1]) {

            if(searchbox[a].dataset.on == "false") {
            
                searchbox[a].closest('.pnlDropHeader').children[1].style.display = "block";
                searchbox[a].dataset.on = "true";
            }

            else if(searchbox[a].dataset.on == "true") {
                searchbox[a].dataset.on = "false";
            }
        }
        else {
            searchbox[a].dataset.on = "false";
        }
    }

    for(var a = 0; a < dropdownZoom.length; a++) {

        if(clicked.closest('.dropdownZoom') || clicked === dropdownZoom[a]) {
            
            if(dropdownZoom[a].dataset.on == "false") {
                dropdownZoom[a].closest('#contZoom').children[1].style.display = "block";
                dropdownZoom[a].dataset.on = "true";
            }

            else if(dropdownZoom[a].dataset.on == "true") {
                dropdownZoom[a].dataset.on = "false";
            }

        }

        else {
            dropdownZoom[a].dataset.on = "false";
        }
    }
}
document.addEventListener('click', checkClicks);

//================CHECK PNLBOXPATTERN FOCUS==============================

function addPnlBoxPatternFocus(key, panel) {

    var e = Number(panel.dataset.layer);

    if(key == null) {

        var b = 0; //variable check focusObj count

        for(var c = 0; c < focusPanel.length; c++) {
            if(focusPanel[c] != null) {
                b++;
            }
        }

        if(b <= 1) { // if there's more than 

            //remove first all pnlboxpattern focus
            for(var a = 0; a < pnlBoxPattern.length; a++) {
                
                pnlBoxPattern[a].style.borderColor = "#3F4961";
                focusPanel[a] = null;
                
            }

            //remove then all pnlboxlayer focus
            for(var a = 0; a < pnlBoxLayer.length; a++) {
                
                pnlBoxLayer[a].style.borderColor = "#3F4961";
                focusPanel[a] = null;
                
            }

            //remove also all cnvLayers focus

            for(var a = 0; a < cnvLayers.length; a++) {
                
                if(cnvLayers[a] != null || pinBody[a] != null) {
                    var inputs = pinBody[a].querySelectorAll('div');

                    inputs.forEach(function(input) {
                        input.style.visibility = "hidden";
                    })

                    focusObj[a] = null;
                }
                
            }

            //add focus now to pnlboxlayer
            focusPanel[e] = panel;
            focusPanel[e].style.borderColor = "#6885CC";

        }

        else {

            focusPanel[e] = configScroll[1].querySelector(`[data-layer="${e}"]`);
            focusPanel[e].style.borderColor = "#6885CC";

            chooseLeadDrag(e);
            
        }
  
    }

    else if(key == 'ctrl') {
        if(panel == focusPanel[e]) {
            
            panel.style.borderColor = "#3F4961"; //remove highlight
            focusPanel[e] = null;
        }
        else {

            //remove also all cnvLayers focus

            for(var a = 0; a < cnvLayers.length; a++) {
                
                var inputs = pinBody[a].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[a] = null;
                
            }

            panel.style.borderColor = "#6885CC"; //highlight
            focusPanel[e] = panel;
        }
    }

    else if(key == 'shift') {

        if(panel == focusPanel[e]) {
            
            panel.style.borderColor = "#3F4961"; //remove highlight
            focusPanel[e] = null;
        }

        else {

            //remove first all pnlboxlayer focus if there is focusObj

            var b = 0;

            //check if there's active focusObj
            for(var a = 0; a < focusObj.length; a++) {
                if(focusObj[a] != null) {
                    b++;
                }
            }

            if(b > 0) {
                for(var a = 0; a < pnlBoxPattern.length; a++) {
                
                    pnlBoxPattern[a].style.borderColor = "#3F4961";
                    focusPanel[a] = null;
                    
                }
            }

            //remove also all cnvLayers focus

            for(var a = 0; a < cnvLayers.length; a++) {
                
                var inputs = pinBody[a].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[a] = null;
                
            }

            var a = 0; //init the first focus
            var z = 0; //init the last focus

            panel.style.borderColor = "#6885CC"; //highlight the chosen focus
            focusPanel[e] = panel;

            //first loop to get actual first focus
            for(var c = 0; c < focusPanel.length; c++) {
                if(focusPanel[c] != null) {
                    a = c;
                    break;
                }
            }

            //next loop to get actual last focus
            for(var c = 0; c < focusPanel.length ; c++) {
                if(focusPanel[c] != null) {
                    z = c;
                   
                }
            }

            //finally, focus all in between
            for(var c = a; c < z; c++) {
                var newPanel = configScroll[1].querySelector(`[data-layer="${c}"]`)
                
                newPanel.style.borderColor = "#6885CC";
                focusPanel[c] = newPanel;

            }

        }
    }

    //console.clear();
    //for(var a = 0; a < focusPanel.length; a++) {
        
    //    console.log(focusPanel[a]);
    //}
}

//================CHECK PNLBOXTHUMB FOCUS==============================

function addPnlBoxThumbFocus(key, panel) {

    var e = Number(panel.dataset.thumbno); 
    // get the data layer of the panel selected

    if(key == null) {

        //if no key is pressed, remove all border first
        for(var a = 0; a < pnlBoxThumb.length; a++) {
            pnlBoxThumb[a].style.borderColor = "#3F4961";
            pnlBoxThumb[a].style.borderWidth = "1px";
        }

        for(var a = 0; a < focusPanel.length; a++) {
            focusPanel[a] = null;
        }

        panel.style.borderColor = "#6885CC"; //highlight
        panel.style.borderWidth = "2px"; //highlight

        focusPanel[e] = panel;
        
    }

    else if(key == 'ctrl') {

        
        if(focusPanel[e] == panel) {

            //remove first all pnlboxlayer focus
           if(focusPanel[e]!= null) {
               focusPanel[e].style.borderColor = "#3F4961";
               focusPanel[e].style.borderWidth = "1px";
               focusPanel[e] = null;
           }
           
       }

       else {

            //remove all focus object
            for(var a = 0; a < cnvLayers.length; a++) {
                    
                var inputs = pinBody[a].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[a] = null;
                
            }
        
           focusPanel[e] = configScroll[2].querySelector(`[data-thumbno="${e}"]`);
           focusPanel[e].style.borderColor = "#6885CC";
           focusPanel[e].style.borderWidth = "2px";

       }
    }

    else if(key == 'shift') {

        if(panel == focusPanel[e]) {
            
            panel.style.borderColor = "#3F4961"; //remove highlight
            panel.style.borderWidth = "1px";
            focusPanel[e] = null;
        }

        else {

            //remove first all pnlboxlayer focus if there is focusObj

            var b = 0;

            //check if there's active focusObj
            for(var a = 0; a < focusObj.length; a++) {
                if(focusObj[a] != null) {
                    b++;
                }
            }

            if(b > 0) {
                for(var a = 0; a < pnlBoxThumb.length; a++) {
                
                    pnlBoxThumb[a].style.borderColor = "#3F4961";
                    pnlBoxThumb[a].style.borderWidth = "1px";
                    focusPanel[a] = null;
                    
                }
            }

            //remove also all cnvLayers focus

            for(var a = 0; a < cnvLayers.length; a++) {
                
                var inputs = pinBody[a].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[a] = null;
                
            }

            var a = 0; //init the first focus
            var z = 0; //init the last focus

            panel.style.borderColor = "#6885CC"; //highlight the chosen focus
            panel.style.borderWidth = "2px";
            focusPanel[e] = panel;

            //first loop to get actual first focus
            for(var c = 0; c < focusPanel.length; c++) {
                if(focusPanel[c] != null) {
                    a = c;
                    break;
                }
            }

            //next loop to get actual last focus
            for(var c = 0; c < focusPanel.length ; c++) {
                if(focusPanel[c] != null) {
                    z = c;
                   
                }
            }

            //finally, focus all in between
            for(var c = a; c < z; c++) {
                var newPanel = configScroll[2].querySelector(`[data-thumbno="${c}"]`)
                
                newPanel.style.borderColor = "#6885CC";
                newPanel.style.borderWidth = "2px";
                focusPanel[c] = newPanel;

            }

        }
    }
    
}

//================CHECK BOTH PNLBOXLAYER AND CNVLAYER====================

function unlinkPanelandCanvasLayer() {

    for(var a = 0; a < pnlBoxLayer.length; a++) {

        if(pinBody[a] != null) {
            
            pnlBoxLayer[a].style.borderColor = "#3F4961";
            focusPanel[a] = null;
        
            var inputs = pinBody[a].querySelectorAll('div');
    
            inputs.forEach(function(input) {
                input.style.visibility = "hidden";
            })

            focusObj[a] = null;
        }  

    }
}

function linkPanelandCanvasLayer(key, panel) {

    var e = Number(panel.dataset.layer);

    if(key == null) {

        var b = 0; //variable check focusObj count

        for(var c = 0; c < focusObj.length; c++) {
            if(focusObj[c] != null) {
                b++;
            }
        }

        
        if(b <= 1) { // if there's more than 

            //remove first all pnlboxlayer focus
            for(var a = 0; a < pnlBoxLayer.length; a++) {
                pnlBoxLayer[a].style.borderColor = "#3F4961";
                focusPanel[a] = null;
            }

            //remove first all cnvlayer focus
            for(var a = 0; a < cnvLayers.length; a++) {
                if(pinBody[a] != null) {

                    var inputs = pinBody[a].querySelectorAll('div');

                    inputs.forEach(function(input) {
                        input.style.visibility = "hidden";
                    })

                    focusObj[a] = null;
                }
                
            }

            //add focus now to pnlboxlayer
            focusPanel[e] = configScroll[5].querySelector(`[data-layer="${e}"]`);
            focusPanel[e].style.borderColor = "#6885CC";

            //add focus now to cnvlayer
            var inputs = pinBody[e].querySelectorAll('div');

            inputs.forEach(function(input) {
                input.style.visibility = "visible";
            })

            focusObj[e] = cnvLayers[e];
            chooseLeadDrag(e);
        }

        else {

            //add focus now to pnlboxlayer
            focusPanel[e] = configScroll[5].querySelector(`[data-layer="${e}"]`);
            focusPanel[e].style.borderColor = "#6885CC"

            //add focus now to cnvlayer
            var inputs = pinBody[e].querySelectorAll('div');

            inputs.forEach(function(input) {
                input.style.visibility = "visible";
            })

            focusObj[e] = cnvLayers[e];

            chooseLeadDrag(e);
            
        }

    }

    else if(key == 'ctrl') {

        if(focusPanel[e] == panel) {

            //remove first all pnlboxlayer focus
            if(focusPanel[e]!= null) {
                focusPanel[e].style.borderColor = "#3F4961";
                focusPanel[e] = null;
            }
            
            //remove first all cnvlayer focus
            if(focusObj[e] != null) {

                var inputs = pinBody[e].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[e] = null;
            }
        }

        else {

            //remove other pattern focus
            for(var a = 0; a < pnlBoxPattern.length; a++) {
                pnlBoxPattern[a].style.borderColor = "#3F4961";
            }
            
            //remove other pnlboxthumb focus
            for(var a = 0; a < pnlBoxThumb.length; a++) {
                pnlBoxThumb[a].style.borderColor = "#3F4961";
                pnlBoxThumb[a].style.borderWidth = "1px";
            }

            focusPanel[e] = configScroll[5].querySelector(`[data-layer="${e}"]`);
            focusPanel[e].style.borderColor = "#6885CC";

            var inputs = pinBody[e].querySelectorAll('div');

            inputs.forEach(function(input) {
                input.style.visibility = "visible";
            })

            focusObj[e] = cnvLayers[e];
            
            chooseLeadDrag(e)
        
        }

    }

    else if(key == 'shift') {
        if(panel == focusPanel[e]) {
            
            panel.style.borderColor = "#3F4961"; //remove highlight
            focusPanel[e] = null;

        }

        else {
            
            for(var a = 0; a < pnlBoxPattern.length; a++) {
                pnlBoxPattern[a].style.borderColor = "#3F4961";
                //focusPanel[a] = null;
            }
            
            //remove other pnlboxthumb focus
            for(var a = 0; a < pnlBoxThumb.length; a++) {
                pnlBoxThumb[a].style.borderColor = "#3F4961";
                pnlBoxThumb[a].style.borderWidth = "1px";
                //focusPanel[a] = null;
            }

            var a = 0; //init the first focus
            var z = 0; //init the last focus

            panel.style.borderColor = "#6885CC"; //highlight the chosen focus
            focusPanel[e] = panel;

            //first loop to get actual first focus
            for(var c = 0; c < focusPanel.length; c++) {
                if(focusPanel[c] != null) {
                    a = c;
                    break;
                }
            }

            //next loop to get actual last focus
            for(var c = 0; c < focusPanel.length ; c++) {
                if(focusPanel[c] != null) {
                    z = c;
                    
                }
            }

            //finally, focus all in between
            for(var c = a; c < z; c++) {
                var newPanel = configScroll[5].querySelector(`[data-layer="${c}"]`)
                
                newPanel.style.borderColor = "#6885CC";
                focusPanel[c] = newPanel;

                var inputs = pinBody[c].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "visible";
                })

                focusObj[c] = cnvLayers[c];
            }

            for(var c = z; c > a; c--) {
                var newPanel = configScroll[5].querySelector(`[data-layer="${c}"]`)
                
                newPanel.style.borderColor = "#6885CC";
                focusPanel[c] = newPanel;

                var inputs = pinBody[c].querySelectorAll('div');

                inputs.forEach(function(input) {
                    input.style.visibility = "visible";
                })

                focusObj[c] = cnvLayers[c];
            }

            chooseLeadDrag(e)

        }
    }
    //console.clear();
    //for(var a = 0; a < focusPanel.length; a++) {
        
    //    console.log(focusPanel[a]);
    //}
}

//================CHECK PNLBOXLAYER FOCUS==============================

function checkPnlBoxFocus(e) {

    var p = e.target;
    var key = null;

    if(e.ctrlKey) { //ctrl key is pressed
        key = 'ctrl';
    }

    else if(e.shiftKey) { //shift key is pressed
        key = 'shift';
    }

    if(p.closest('.pnlBox')) { 
        //no need for ctrl and shift option

        //remove all border first
        for(var a = 0; a < pnlBox.length; a++) {
            pnlBox[a].style.borderColor = "#3F4961";
        }
        p.closest('.pnlBox').style.borderColor = "#6885CC"; //highlight
  
    }

    else if(p.closest('.pnlBoxPattern')) { 
      
        addPnlBoxPatternFocus(key, p.closest('.pnlBoxPattern'));
    }

    else if(p.closest('.pnlBoxThumb')) {

        addPnlBoxThumbFocus(key, p.closest('.pnlBoxThumb'));

    }

    else if(p.closest('.pnlBoxLayer') || p.className == 'pinBody') { //check if closes is pnlBoxPatterns

        if(p.closest('.pnlBoxLayer') != null) {
            linkPanelandCanvasLayer(key, p.closest('.pnlBoxLayer'))
        }
    }

    else if(p.closest('.pinBody')) {
        //empty condition just for pins
    }

    else if(p.closest('#cnvPin')) {

        //remove all input focus
        var checkInputs = document.querySelectorAll('input[type="text"], input[type="number"]');
        checkInputs.forEach(function(input) {
            input.blur();
        })
       
    }

    else {

        unlinkPanelandCanvasLayer();

        //disable focus on canvas panelbox
        for(var a = 0; a < pnlBox.length; a++) {
            pnlBox[a].style.borderColor = "#3F4961";
        }

        //disable focus on pattern panelbox
        for(var a = 0; a < pnlBoxPattern.length; a++) {
            pnlBoxPattern[a].style.borderColor = "#3F4961";
        }

        for(var a = 0; a < pnlBoxThumb.length; a++) {
            pnlBoxThumb[a].style.borderColor = "#3F4961";
            pnlBoxThumb[a].style.borderWidth = "1px";
        }

         //reset focus, focuspanel
         inFocus = false;
        
        
         for(var a = 0; a < focusPanel.length; a++) {
             focusPanel[a] = null;
         }

         for(var a = 0; a < focusObj.length; a++) {
            focusObj[a] = null;
        }

        resetLeadDrag();
        
    }

}
document.addEventListener('click', checkPnlBoxFocus);

//=================CHOOSE LEADDRAG===================================

function chooseLeadDrag(e) {

    var b = 0; //variable check focusObj count

    for(var c = 0; c < focusObj.length; c++) {
        if(focusObj[c] != null) {
            b++;
        }
    }

    if(b > 1) {
        //this function will reset which should be on top
        for(var a = 0; a < pinBody.length; a++) {
            pinBody[a].style.zIndex = "0";
            pinTL2[a].style.backgroundColor = "white";
            pinTR2[a].style.backgroundColor = "white";
            pinBR2[a].style.backgroundColor = "white";
            pinBL2[a].style.backgroundColor = "white";
        }

        pinBody[e].style.zIndex = "1";
        pinTL2[e].style.backgroundColor = "#6885CC";
        pinTR2[e].style.backgroundColor = "#6885CC";
        pinBR2[e].style.backgroundColor = "#6885CC";
        pinBL2[e].style.backgroundColor = "#6885CC";
    }

    else if ( b == 0 || b == 1) {
        for(var a = 0; a < pinBody.length; a++) {
            if(pinBody[a] != null) {
                pinBody[a].style.zIndex = "0";
            }
            
        }
        pinBody[e].style.zIndex = "1";
    }

}

function resetLeadDrag() {
    for(var a = 0; a < pinBody.length; a++) {
        if(pinBody[a] != null) {
            pinBody[a].style.zIndex = "0";
            pinTL2[a].style.backgroundColor = "white";
            pinTR2[a].style.backgroundColor = "white";
            pinBR2[a].style.backgroundColor = "white";
            pinBL2[a].style.backgroundColor = "white";
        }
    }
}

//=================CHECK CNVLAYER FOCUS=================================

function checkCnvLayerFocus(e) {

    var key = null;
    var p = e.target;
    //var c = e.target.closest('.pnlBoxLayer');

    if(e.ctrlKey) { //ctrl key is pressed
        key = 'ctrl';
    }

    else if(e.shiftKey) { //shift key is pressed
        key = 'shift';
    }

    if(p.className == "pinBody") {
    
        //linkObjToPanel(key, p);    
        linkPanelandCanvasLayer(key, p)
    }

    else if(p.closest('.pinBody')) {
        //empty condition just for pins
    }

    else if(p.closest('.pnlBox')) {
        //empty condition only for pnlBox
    }

    else if(p.closest('.pnlBoxThumb')) {
        //addPnlBoxThumbFocus(key, p.closest('.pnlBoxThumb'))
        for(var a = 0; a < focusObj.length; a++) {
            if(focusObj[a] != null) {

                pnlBoxLayer[a].style.borderColor = "#3F4961";
                focusPanel[a] = null;
                
                var inputs = pinBody[a].querySelectorAll('div');
        
                inputs.forEach(function(input) {
                    input.style.visibility = "hidden";
                })

                focusObj[a] = null;
            }
        }
    }

    else if(p.closest('.pnlBoxPattern')) {
        //empty condition only for pnlBoxPattern
    }

    else if(p.closest('.pnlBoxLayer')) {
        //empty condition only for pnlBoxLayer
    }

    else {

        unlinkPanelandCanvasLayer();
        
         //disable focus on canvas panelbox
        for(var a = 0; a < pnlBox.length; a++) {
            pnlBox[a].style.borderColor = "#3F4961";
        }

        //disable focus on pattern panelbox
        for(var a = 0; a < pnlBoxPattern.length; a++) {
            pnlBoxPattern[a].style.borderColor = "#3F4961";
        }

        for(var a = 0; a < pnlBoxThumb.length; a++) {
            pnlBoxThumb[a].style.borderColor = "#3F4961";
            pnlBoxThumb[a].style.borderWidth = "1px";
        }

         //reset focus, focuspanel
         inFocus = false;
        
        
         for(var a = 0; a < focusPanel.length; a++) {
             focusPanel[a] = null;
         }

         for(var a = 0; a < focusObj.length; a++) {
            focusObj[a] = null;
        }

        resetLeadDrag()
    }
    
}
document.addEventListener('pointerdown', checkCnvLayerFocus)

function retainFocus(e) {
    e.preventDefault();

    if(e.target.getAttribute('id') == 'cnvPin') {

        for(var a = 0; a < focusObj.length; a++) {
            if(focusObj[a] != null) {
                
                //var d = Number(focusObj[a].dataset.layer);
                focusPanel[a].style.borderColor = "#6885CC";
    
                pinBody[a].style.visibility = "visible";
    
                var inputs = pinBody[a].querySelectorAll('div');
    
                inputs.forEach(function(input) {
                    input.style.visibility = "visible";
                    
                })
            }
        }
        
    }
    
}
document.addEventListener('pointerup', retainFocus)

//=======================DELETE AN OBJECT===============================

function checkInputFocus() {

    inFocus = false;

    for(var a=0; a <= focusPanel.length; a++) {
        
        if(focusPanel[a] != null) {
            var checkInputs = focusPanel[a].querySelectorAll('input[type="text"], input[type="number"]');
            
            for(var b = 0; b < checkInputs.length; b++) { //go thru each input type

                if(checkInputs[b] == document.activeElement) { //check if the focused element is one of the input children
                    inFocus = true; //return true if there's atleast one
                    return inFocus;  
                } 
            }
        }
    }   

    return inFocus;
}

function deleteObject(e) {

    if(e.key == "Delete" || e.keyCode == 46) {

        if(!checkInputFocus()) {

            //delete if pnlBoxPattern
            for(var a = 0; a < focusPanel.length; a++) { // run until focuspanel length

                if(focusPanel[a] != null || focusObj[a] != null) { // if focus panel has not skipped or null

                    if(focusPanel[a].className == "pnlBoxPattern") { //pnlboxpattern
                        var e = focusPanel[a].dataset.layer;
                        cnvPatterns[e].remove();
                        cnvPatterns[e] = null;

                        focusPanel[a].remove();
                        focusPanel[a] = null;
                    }

                    else if(focusPanel[a].className == "pnlBoxThumb") { //pnlboxthumb

                        var n = focusPanel[a].dataset.thumbno;

                        //remove first all pnlBoxLayer with thumbno 'n'
                        var chkPanel = configScroll[5].querySelectorAll(`[data-thumbno="${n}"]`);

                        chkPanel.forEach(function(input) {

                            input.remove();
                            input = null;

                        })

                        //next, remove all cnvLayer with thumbno 'n'
                        var chkLayer = cnvMain.querySelectorAll(`[data-thumbno="${n}"]`);

                        chkLayer.forEach(function(input) {

                            var e = input.dataset.layer;

                            borderW[e] = null;
                            borderH[e] = null;
                            borderL[e] = null;
                            borderT[e] = null;
                            borderR[e] = null;
                    
                            layerW[e] = null;
                            layerH[e] = null;
                            layerL[e] = null;
                            layerT[e] = null;
                            aRatio[e] = null;

                            pinBody[e].remove();
                            pinBody[e] = null;

                            focusObj[e] = null;

                            cnvLayers[e].remove();
                            cnvLayers[e] = null;

                            input.remove()
                            input = null;

                        })

                        //finally delete the thumb itself
                        focusPanel[a].remove();
                        focusPanel[a] = null;
                        
                    }

                    else if(focusPanel[a].className == "pnlBoxLayer") { //pnlboxlayer
                        var e = focusPanel[a].dataset.layer;

                        borderW[e] = null;
                        borderH[e] = null;
                        borderL[e] = null;
                        borderT[e] = null;
                        borderR[e] = null;
                
                        layerW[e] = null;
                        layerH[e] = null;
                        layerL[e] = null;
                        layerT[e] = null;
                    
                        aRatio[e] = null;

                        //remove cnvLayer
                        cnvLayers[e].remove();
                        cnvLayers[e] = null;
                        //remove pinBody
                        
                        pinBody[e].remove();
                        //console.log(pinBody[e])
                        pinBody[e] = null;
                        focusObj[e] = null;

                        //remove pnlLayer
                        configScroll[5].querySelector(`[data-layer="${e}"]`).remove();
                        //configScroll[5].querySelector(`[data-layer="${e}"]`) = null;

                        focusPanel[a].remove();
                        focusPanel[a] = null;
        
                    }
                }
            }
        }

        resetLeadDrag();

        //this block is for checking memory leaks
        /*
        for(var a = 0; a < 5; a++) {
            var chk = document.body.querySelectorAll(`[data-layer='${a}']`);

            chk.forEach(function(input) {
                console.log(input);
            })

            console.log('focusObj', a, focusObj[a])
            console.log('focusPanel', a, focusPanel[a])
        }
        */
    
    }

}
document.addEventListener('keydown', deleteObject);
