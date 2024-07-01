var btnUploadImg = document.getElementById('btnUploadImg');
var pnlBoxThumb = document.getElementsByClassName('pnlBoxThumb');

function uploadImg() {
    var inputFile = document.createElement('input');
    inputFile.type = "file";
    inputFile.accept ="image/*";
    inputFile.click();

    inputFile.onchange = function() { //once selected a file

        var fileExt = inputFile.files[0].name.split('.'); // get file extension if SVG or raster

        if(fileExt[fileExt.length-1].toLowerCase() != "svg") { //if image file is raster
            var reader = new FileReader(); //create a file reader to read the format
            reader.readAsDataURL(inputFile.files[0]); //read the file to dataURL for raster output

            reader.onload = function() { //if filereader loads it

                //use pnlBoxThumb.length as it will always default to existing count
                //it will help to skip [0] index

                var append = `<div class="pnlBoxThumb" data-thumbno=${pnlBoxThumb.length}><img src = "${reader.result}"></div>`;
                configScroll[2].children[0].insertAdjacentHTML('afterbegin', append);

                //add event listeners to pnlBoxThumbs
                //index [0] as we use prepend so all new thumbs are [0]
                pnlBoxThumb[0].addEventListener('dblclick', function() {

                    //remove focus border on thumb
                    this.style.borderColor = "#3F4961";
                    this.style.borderWidth = "1px";
               
                    //create pnlBoxImage
                    createPnlBoxImage(this.dataset.thumbno);
                });
            }
        }

        else {

            var reader = new FileReader(); //create a file reader to read the format
            reader.readAsText(inputFile.files[0]); //read svg as text file

            reader.onload = function() { //if filereader loads it

                var append = `<div class="pnlBoxThumb">${reader.result}</div>`;
                configScroll[2].children[0].insertAdjacentHTML('afterbegin', append);
  
                //add event listeners to pnlBoxThumbs
                //index [0] as we use prepend so all new thumbs are [0]
                pnlBoxThumb[0].addEventListener('dblclick', function() {
                    createPnlBoxImage(reader.result)
                });
                
            }
        }
    }

}
btnUploadImg.addEventListener('click', uploadImg);


function createPnlBoxImage(n) {

    var e = pnlBoxLayer.length; //get the length of pnlBoxPatterns and use it as layer count

    var newImage = 
    `<div class="pnlBoxLayer" name="Image" data-layer=${e} data-thumbno=${n}>
        <div class="pnlTitleLayer">
            <div class="btnExpandCollapseLayer" data-show="more">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669874 1.5C0.284974 0.833333 0.766099 -8.94676e-07 1.5359 -8.27378e-07L8.4641 -2.21695e-07C9.2339 -1.54397e-07 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z" fill="white"/>
                </svg>
            </div>
            <input type="text" class="txtHeaderLayer" value="${autoIncrementLayer('Image')}" readonly = "readonly">
            <div class="btnShowHideLayer">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00014 2.71429C5.57998 2.71429 4.42871 3.86555 4.42871 5.28572C4.42871 6.70588 5.57998 7.85714 7.00014 7.85714C8.4203 7.85714 9.57157 6.70588 9.57157 5.28572C9.57157 3.86555 8.4203 2.71429 7.00014 2.71429Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9119 4.87535C12.4818 1.69741 9.79075 1.19209e-07 7 0C4.20925 -1.78814e-07 1.51815 1.69741 0.0880784 4.87535C-0.0293595 5.13632 -0.0293595 5.43511 0.0880784 5.69608C1.51815 8.87402 4.20925 10.5714 7 10.5714C9.79075 10.5714 12.4818 8.87401 13.9119 5.69608C14.0294 5.4351 14.0294 5.13632 13.9119 4.87535ZM7 8.57143C5.18342 8.57143 3.27797 7.53709 2.11033 5.28572C3.27797 3.03434 5.18342 2 7 2C8.81657 2 10.722 3.03434 11.8897 5.28571C10.722 7.53708 8.81657 8.57143 7 8.57143Z" fill="white"/>
                </svg>
            </div>
        </div>

        <div class="breaklineHeader"></div>   

        <div class="contentImages">
            <div class="tabSliderLayer">
                <div class = "tabBasicLayer">

                    <div class="pnlDropLayer">
                            
                        <div class="dropdown">
                            <h2>Normal</h2>

                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#647499" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>      
                            
                        </div>

                        <div class="dropOptionVerti">
                            <div class="optLayerBlend">Normal</div>
                            <div class="breaklineVerti"></div> 
                            <div class="optLayerBlend">Lighten</div>
                            <div class="optLayerBlend">Screen</div>
                            <div class="breaklineVerti"></div> 
                            <div class="optLayerBlend">Overlay</div>
                            <div class="optLayerBlend">Soft-light</div>
                            <div class="breaklineVerti"></div> 
                            <div class="optLayerBlend">Darken</div>
                            <div class="optLayerBlend">Multiply</div>
                            <div class="breaklineVerti"></div> 
                            <div class="optLayerBlend">Difference</div>
                            <div class="optLayerBlend">Exclusion</div>
                        </div>
                            
                    </div>

                    <div class="pnlEntryFold">
                        <div class="pnlEntrySide">
                            <h2>Width</h2>
                            <input type="number" class="txtWidthLayer" min="0">
                        </div>
                        <div class="pnlEntrySide">
                            <h2>Height</h2>
                            <input type="number" class="txtHeightLayer" value="0">
                        </div>
                    </div>
                    <div class="pnlEntryFold">
                        <div class="pnlEntrySide">
                            <h2>X-axis</h2>
                            <input type="number" class="txtXLayer" value="0">
                        </div>
                        <div class="pnlEntrySide">
                            <h2>Y-axis</h2>
                            <input type="number" class="txtYLayer" value="0">
                        </div>
                    </div>

                    <div class="pnlEntryFold">
                        <div class="pnlEntrySide">
                            <h2>Flip X</h2>
                            <div class="chkFlipX" data-value="false"><div class="chkSwitch"></div></div>
                        </div>
                        <div class="pnlEntrySide">
                            <h2>Flip Y</h2>
                            <div class="chkFlipY" data-value="false"><div class="chkSwitch"></div></div>
                        </div>
                    </div>

                    <div class="breaklinePanel"></div>

                    <div class="pnlEntry">
                        <h2>Opacity</h2>
                        <input type="range" value="100" min="0" max="100" class="rngLayer">
                        <input type="number" class="txtOpacityLayer" value="100" min="0" max="100">
                    </div>

                    <div class="pnlEntry">
                        <h2>Rotation</h2>
                        <input type="range" value="0" min="0" max="359" class="rngLayer">
                        <input type="number" class="txtRotationLayer" value="0" min="0" max="359">
                    </div>
                    
                </div>

                <div class = "tabColorLayer">
                    <div class="pnlEntry">
                        <h2>Blur</h2>
                        <input type="range" value="0" min="0" max="100" class="rngLayer">
                        <input type="number" class="txtBlurLayer" value="0" min="0" max="100">
                    </div>

                    <div class="pnlEntry">
                        <h2>Brightness</h2>
                        <input type="range" value="100" min="0" max="200" class="rngLayer">
                        <input type="number" class="txtBrightnessLayer" value="100" min="0" max="200">
                    </div>
                    
                    <div class="pnlEntry">
                        <h2>Contrast</h2>
                        <input type="range" value="100" min="0" max="200" class="rngLayer">
                        <input type="number" class="txtContrastLayer" value="100" min="0" max="200">
                    </div> 

                    <div class="pnlEntry">
                        <h2>Saturation</h2>
                        <input type="range" value="100" min="0" max="200" class="rngLayer">
                        <input type="number" class="txtSaturationLayer" value="100" min="0" max="200">
                    </div>
                    <div class="pnlEntry">
                        <h2>Temperature</h2>
                        <input type="range" value="0" min="-100" max="100" class="rngLayer">
                        <input type="number" class="txtTemperatureLayer" value="0" min="-100" max="100">
                    </div>
                </div>

                <div class = "tabStyleLayer">
                    <div class="pnlDropLayer">
                                
                        <div class="dropdown">
                            <h2>Choose style</h2>

                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#647499" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>      
                            
                        </div>

                        <div class="dropOptionVerti">
                            <div class="optLayerStyle">Outline</div>
                            <div class="optLayerStyle">Glow</div>
                            <div class="optLayerStyle">Shadow</div>
                            <div class="optLayerStyle">Remove</div>
                        </div>
                            
                    </div>
                    
                    <div class="tabOutlineLayer">
                        <div class="pnlEntry">
                            <h2>Color</h2>
                            <input type="text" class="txtOutlineColor" value="#000000">
                            <div class="thumbPickerOutline"></div>
                        </div>
                        <div class="pnlEntry">
                            <h2>Opacity</h2>
                            <input type="range" value="100" min="0" max="100" class="rngLayer">
                            <input type="number" class="txtOutlineOpacity" value="100" min="0" max="100">
                        </div> 
                        
                        <div class="pnlEntry">
                            <h2>Size</h2>
                            <input type="range" value="1" min="1" max="100" class="rngLayer">
                            <input type="number" class="txtOutlineSize" value="1" min="1" max="100">
                        </div> 
                    
                    </div>

                    <div class="tabGlowLayer">
                        <div class="pnlEntry">
                            <h2>Color</h2>
                            <input type="text" class="txtGlowColor" value="#949EFF">
                            <div class="thumbPickerGlow"></div>
                        </div>
                        <div class="pnlEntry">
                            <h2>Opacity</h2>
                            <input type="range" value="100" min="0" max="100" class="rngLayer">
                            <input type="number" class="txtGlowOpacity" value="100" min="0" max="100">
                        </div> 
                        
                        <div class="pnlEntry">
                            <h2>Size</h2>
                            <input type="range" value="1" min="1" max="100" class="rngLayer">
                            <input type="number" class="txtGlowSize" value="1" min="1" max="100">
                        </div> 

                        <div class="pnlEntry">
                            <h2>Spread</h2>
                            <input type="range" value="0" min="0" max="100" class="rngLayer">
                            <input type="number" class="txtGlowSpread" value="0" min="0" max="100">
                        </div> 
                    </div>

                    <div class="tabShadowLayer">
                        <div class="pnlEntry">
                            <h2>Color</h2>
                            <input type="text" class="txtShadowColor" value="#000000">
                            <div class="thumbPickerShadow"></div>
                        </div>
                        <div class="pnlEntry">
                            <h2>Opacity</h2>
                            <input type="range" value="100" min="0" max="100" class="rngLayer">
                            <input type="number" class="txtShadowOpacity" value="100" min="0" max="100">
                        </div> 
                        
                        <div class="pnlEntry">
                            <h2>Distance</h2>
                            <input type="range" value="20" min="1" max="100" class="rngLayer">
                            <input type="number" class="txtShadowSize" value="20" min="1" max="100">
                        </div> 

                        <div class="pnlEntry">
                            <h2>Spread</h2>
                            <input type="range" value="0" min="0" max="100" class="rngLayer">
                            <input type="number" class="txtShadowSpread" value="0" min="0" max="100">
                        </div> 

                        <div class="pnlEntry">
                            <h2>Rotation</h2>
                            <input type="range" value="0" min="0" max="359" class="rngLayer">
                            <input type="number" class="txtShadowRotation" value="0" min="0" max="359">
                        </div> 
                    </div>

                </div>

            </div>
        </div> 
        <div class="pnlBottomLayerTrack">
            <div class="pnlBottomLayerThumb"></div>
        </div>
        <div class="pnlBottomLayer">
            <div class="frBottom">
                <div class="btnBasicLayer">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="2" width="11" height="2" rx="1" fill="#647499"/>
                        <rect x="13" y="2" width="5" height="2" rx="1" fill="#647499"/>
                        <rect x="9.5" y="0.5" width="5" height="5" rx="2.5" fill="#647499" stroke="#647499"/>
                        <rect width="11" height="2" rx="1" transform="matrix(-1 0 0 1 18 10)" fill="#647499"/>
                        <rect width="5" height="2" rx="1" transform="matrix(-1 0 0 1 5 10)" fill="#647499"/>
                        <rect x="0.5" y="-0.5" width="5" height="5" rx="2.5" transform="matrix(-1 0 0 1 9 9)" fill="#647499" stroke="#647499"/>
                    </svg>
                </div>
            </div>
            <div class="frBottom">
                <div class="btnColorLayer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9667 12.2238C17.2867 12.1555 17.5296 11.8979 17.6234 11.5844C17.8684 10.7658 18 9.89827 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C9.24996 18 9.49753 17.9898 9.74234 17.9698C10.6915 17.8923 10.8892 16.5812 10.4885 15.7172C10.2552 15.2142 10.125 14.6535 10.125 14.0625C10.125 11.8879 11.9995 9.43732 14.0625 10.125C14.7528 10.3551 15.0666 10.8676 15.352 11.3337C15.7085 11.9158 16.0208 12.4258 16.9667 12.2238ZM10.125 3.9375C10.125 3.00552 10.8805 2.25 11.8125 2.25C12.7445 2.25 13.5 3.00552 13.5 3.9375C13.5 4.86948 12.7445 5.625 11.8125 5.625C10.8805 5.625 10.125 4.86948 10.125 3.9375ZM6.1875 2.25C5.25552 2.25 4.5 3.00552 4.5 3.9375C4.5 4.86948 5.25552 5.625 6.1875 5.625C7.11948 5.625 7.875 4.86948 7.875 3.9375C7.875 3.00552 7.11948 2.25 6.1875 2.25ZM1.125 8.4375C1.125 7.50552 1.88052 6.75 2.8125 6.75C3.74448 6.75 4.5 7.50552 4.5 8.4375C4.5 9.36948 3.74448 10.125 2.8125 10.125C1.88052 10.125 1.125 9.36948 1.125 8.4375ZM4.5 12.375C3.87868 12.375 3.375 12.8787 3.375 13.5C3.375 14.1213 3.87868 14.625 4.5 14.625C5.12132 14.625 5.625 14.1213 5.625 13.5C5.625 12.8787 5.12132 12.375 4.5 12.375Z" fill="#647499"/>
                    </svg>
                </div>
            </div>
            <div class="frBottom">
                <div class="btnStyleLayer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6489 0.866369C12.0361 0.635613 12.5299 0.898202 12.5551 1.34822L12.8065 5.83676C12.8155 5.99777 12.889 6.14838 13.0103 6.25462L16.3926 9.21612C16.7317 9.51304 16.6345 10.0639 16.2143 10.2269L12.0232 11.853C11.8728 11.9113 11.7523 12.0277 11.6887 12.176L9.91735 16.3078C9.73975 16.7221 9.18586 16.7999 8.90096 16.4507L6.0593 12.9671C5.95736 12.8422 5.80941 12.7635 5.6488 12.7489L1.17178 12.341C0.722907 12.3001 0.477713 11.7974 0.72184 11.4185L3.15677 7.63944C3.24412 7.50388 3.27321 7.33886 3.2375 7.18159L2.24193 2.79765C2.14211 2.35811 2.54446 1.96957 2.98024 2.08467L7.32677 3.23263C7.48269 3.27381 7.64863 3.25049 7.78716 3.16793L11.6489 0.866369Z" fill="#647499"/>
                        <path d="M12.4441 12.4442C12.8346 12.0536 13.4678 12.0536 13.8583 12.4442L17.7157 16.3015C18.1062 16.6921 18.1062 17.3252 17.7157 17.7158C17.3252 18.1063 16.692 18.1063 16.3015 17.7158L12.4441 13.8584C12.0536 13.4678 12.0536 12.8347 12.4441 12.4442Z" fill="#647499"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>`;

    configScroll[5].insertAdjacentHTML('afterbegin', newImage); //add the child on top of the previous one

    addPnlBoxImageControls(e);
    
}

