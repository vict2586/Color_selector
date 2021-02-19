"use strict";

window.addEventListener("DOMContentLoaded", getColor);





//Get color value from colorwheel
function getColor() {

    colorpicker.addEventListener("input", colorRead);

};





//Show color in box
function colorRead(event) {

  const hexValue = document.querySelector(".colorbox").style.backgroundColor = event.target.value;

  console.log(hexValue);

  const rgbObject = hexToRgb(hexValue);

  const hslObject = rgbToHsl(rgbObject.r, rgbObject.g, rgbObject.b);

  readHarmony(hslObject);
};





//Read which one that the user has chosen
function readHarmony(hslObject) {
    const harmony = document.querySelector("#harmony").value;
  
    if (harmony == "analo") {
      calculateAnalo(hslObject);

    } else if (harmony == "mono") {
      calculateMono(hslObject);

    } else if (harmony == "tri") {
      calculateTri(hslObject);

    } else if (harmony == "compl") {
      calculateCompl(hslObject);

    } else if (harmony == "comp") {
      calculateComp(hslObject);

    } else if (harmony == "shad") {
      calculateShad(hslObject);
    }
};





//Tells what should happen to the colors
function calculateAnalo(hslObject) {
    
    let ten = 10;
    let newH = hslObject.h + ten;
    let newS = hslObject.s;
    let newL = hslObject.l;

    //console.log(newH);

    const analocolorinfo1 = { h: newH, s: newS, l: newL };
    
    newH = newH + ten;

    const analocolorinfo2 = { h: newH, s: newS, l: newL };

    //console.log(newH);
    
    newH = newH + ten;

    const analocolorinfo4 = { h: newH, s: newS, l: newL };

    //console.log(newH);
    
    newH = newH + ten;

    const analocolorinfo5 = { h: newH, s: newS, l: newL };

    //console.log(newH);
    
    hslHarmonyToRgb(analocolorinfo1, "a");
    hslHarmonyToRgb(analocolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(analocolorinfo4, "d");
    hslHarmonyToRgb(analocolorinfo5, "e");
};





//Tells what should happen to the colors
function calculateMono(hslObject) {
    
    let ten = 10;
    let newH = hslObject.h;
    let newLessS = hslObject.s - ten;
    let newMoreS = hslObject.s + ten;
    let newLessL = hslObject.l - ten;
    let newMoreL = hslObject.l + ten;
    let newL = hslObject.l;
    let newS = hslObject.s;

    //less S
    const monocolorinfo1 = { h: newH, s: newLessS, l: newL };
    
    //more S
    const monocolorinfo2 = { h: newH, s: newMoreS, l: newL };

    //console.log(newH);
    
    //less L
    const monocolorinfo4 = { h: newH, s: newS, l: newLessL };

    //console.log(newH);
    
    //more L
    const monocolorinfo5 = { h: newH, s: newS, l: newMoreL };

    //console.log(newH);
    
    hslHarmonyToRgb(monocolorinfo1, "a");
    hslHarmonyToRgb(monocolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(monocolorinfo4, "d");
    hslHarmonyToRgb(monocolorinfo5, "e");
}





//Tells what should happen to the colors
function calculateTri(hslObject) {
    
    let shifted60 = hslObject.h + 60;
    let shifted120 = hslObject.h + 120;
    let moreL = hslObject.l + 10;
    let lessL = hslObject.l - 10;
    let newL = hslObject.l;
    let newS = hslObject.s;
  
    //shifted 60
    const tricolorinfo1 = { h: shifted60, s: newS, l: newL };
    
    //shifted 120
    const tricolorinfo2 = { h: shifted120, s: newS, l: newL };

    //console.log(newH);
    
    //shifted 60 more L
    const tricolorinfo4 = { h: shifted60, s: newS, l: moreL };

    //console.log(newH);
    
    //shfted 120 less L
    const tricolorinfo5 = { h: shifted120, s: newS, l: lessL };

    //console.log(newH);
    
    hslHarmonyToRgb(tricolorinfo1, "a");
    hslHarmonyToRgb(tricolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(tricolorinfo4, "d");
    hslHarmonyToRgb(tricolorinfo5, "e");
}





//Tells what should happen to the colors
function calculateCompl(hslObject) {
    
    let shifted180 = hslObject.h + 180;
    let shifted120 = hslObject.h + 120;
    let moreL = hslObject.l + 10;
    let lessL = hslObject.l - 10;
    let newL = hslObject.l;
    let newS = hslObject.s;
  
    //shifted 180
    const complcolorinfo1 = { h: shifted180, s: newS, l: newL };

    //shifted 120
    const complcolorinfo2 = { h: shifted120, s: newS, l: newL };

    //console.log(newH);
    
    //shifted 180 more L
    const complcolorinfo4 = { h: shifted180, s: newS, l: moreL };

    //console.log(newH);

    //shfted 120 less L
    const complcolorinfo5 = { h: shifted120, s: newS, l: lessL };

    //console.log(newH);
    
    hslHarmonyToRgb(complcolorinfo1, "a");
    hslHarmonyToRgb(complcolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(complcolorinfo4, "d");
    hslHarmonyToRgb(complcolorinfo5, "e");
}
  




//Tells what should happen to the colors
function calculateComp(hslObject) {
    
    let ten = 10;
    let newH = hslObject.h + ten;
    let newS = hslObject.s;
    let newL = hslObject.l;
    let shifted180 = hslObject.h + 180;
    let moreL = hslObject.l + 10;

    //10 added to h
    const compcolorinfo1 = { h: newH, s: newS, l: newL };

    //10 more added to new h
    newH = newH + ten;

    const compcolorinfo2 = { h: newH, s: newS, l: newL };

    //shifted 180
    const compcolorinfo4 = { h: shifted180, s: newS, l: newL };

    //shifted 180 more L
    const compcolorinfo5 = { h: shifted180, s: newS, l: moreL };
  
    hslHarmonyToRgb(compcolorinfo1, "a");
    hslHarmonyToRgb(compcolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(compcolorinfo4, "d");
    hslHarmonyToRgb(compcolorinfo5, "e");
};






//Tells what should happen to the colors
function calculateShad(hslObject) {
    
    let twenty = 20;
    let newH = hslObject.h;
    let newS = hslObject.s;
    let newL = hslObject.l + twenty;

    //console.log(newH);

    const shadcolorinfo1 = { h: newH, s: newS, l: newL };
    
    //console.log(analocolor_a);

    newL = newL + twenty;

    const shadcolorinfo2 = { h: newH, s: newS, l: newL };

    //console.log(newH);
    
    newL = newL + twenty;

    const shadcolorinfo4 = { h: newH, s: newS, l: newL };

    //console.log(newH);
    
    newL = newL + twenty;

    const shadcolorinfo5 = { h: newH, s: newS, l: newL };

    //console.log(newH);

    
    hslHarmonyToRgb(shadcolorinfo1, "a");
    hslHarmonyToRgb(shadcolorinfo2, "b");
    hslHarmonyToRgb(hslObject, "c");
    hslHarmonyToRgb(shadcolorinfo4, "d");
    hslHarmonyToRgb(shadcolorinfo5, "e");
};





//From HEX to RGB
function HexToRgb(hexValue) {

const r = parseInt(hexValue.substring(1, 3), 16);
const g = parseInt(hexValue.substring(3, 5), 16);
const b = parseInt(hexValue.substring(5, 7), 16);

return { r, g, b };

};





//From RGB to HEX
function rgbToHex( rgb ) {

    const hexR = rgb.r.toString(16).padStart(2, "0");
    const hexG = rgb.g.toString(16).padStart(2, "0");
    const hexB = rgb.b.toString(16).padStart(2, "0");
  
    const hex = "#" + hexR + hexG + hexB;
    console.log(hex);
  
    return hex;
}





//From RGB to HSL --> black box
function rgbToHsl( r,g,b ) {
  
    r / 256;
    g / 256;
    b / 256;
  
    let h, s, l;
  
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
  
    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }
  
    if (h < 0) {
        h = h + 360;
    }
  
    l = (min + max) / 2;
  
    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / Math.min(l, 1 - l);
    }
  
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
  
    return {h, s, l};
}





//From HSL to RGB --> black box
function hslToRgb( hsl, index ) {
  
    const h = hsl.h;
    const s = hsl.s / 100;
    const l = hsl.l / 100;
   
  let c = (1 - Math.abs(2 * l - 1)) * s,
  x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
  m = l - c / 2,
  r = 0,
  g = 0,
  b = 0;
  if (0 <= h && h < 60) {
  r = c;
  g = x;
  b = 0;
  } else if (60 <= h && h < 120) {
  r = x;
  g = c;
  b = 0;
  } else if (120 <= h && h < 180) {
  r = 0;
  g = c;
  b = x;
  } else if (180 <= h && h < 240) {
  r = 0;
  g = x;
  b = c;
  } else if (240 <= h && h < 300) {
  r = x;
  g = 0;
  b = c;
  } else if (300 <= h && h < 360) {
  r = c;
  g = 0;
  b = x;
  }
  
  r = Math.round((r + m) * 256);
  g = Math.round((g + m) * 256);
  b = Math.round((b + m) * 256);

  const rgb = {r, g, b};
  
  ShowAllColors(rgb, index);
};




//From RGB to CSS
function rgbToCss(rgb) {
    return `( ${rgb.r}, ${rgb.g}, ${rgb.b} )`;
}





function ShowAllColors(rgb, index) {

    const cssString = rgbToCss(rgb);
    const hex = rgbToHex(rgb);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    colorTheBox(hex, index);
    showHex(hex, index);
    showRgb(cssString, index);
    showHsl(hsl, index);
}





//Show Color in box
function colorTheBox(hexValue, index) {
    document.querySelector(`#color_${index} .colorbox`).style.backgroundColor = hexValue;
}





//Show HEX
function showHex(hexValue, index) {

document.querySelector(`.hex_${index} .hex .value`).innerHTML = hexValue;

};





//Show RGB
function showRgb(cssString, index) {

    document.querySelector(`.rgb_${index} .rgb .value`).innerHTML = cssString;
    
};





//Show HSL
function showHsl(hsl, index) {

    document.querySelector(`.hsl_${index} .hsl .value`).innerHTML = 

    `${hsl.h.toFixed(0)}, ${hsl.s.toFixed(0)}%, ${hsl.l.toFixed(0)}%`;      
};