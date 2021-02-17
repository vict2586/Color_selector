"use strict";

//I dont know how to Improved the code more

window.addEventListener("DOMContentLoaded", start);

//Calls the first function
function start() {

  getColor();

};


//Get color value from colorwheel
function getColor() {

    colorSelector.addEventListener("input", colorTheBox);

};


//Show color in box
function colorTheBox(event) {

  let hexValue = (document.querySelector(".showColor").style.backgroundColor = event.target.value);

  //console.log(hexValue);

  showHex(hexValue);

};


//Show HEX
function showHex(hexValue) {

document.getElementById("hex").innerHTML = "HEX: " + hexValue;

HexToRgb(hexValue);
};


//From HEX to RGB
function HexToRgb(hexValue) {

//Substring of hex color
const r = hexValue.substring(1, 3);
const g = hexValue.substring(3, 5);
const b = hexValue.substring(5, 7);


//Convert hex with parseint to numbers
const convertedR = parseInt(r, 16);
const convertedG = parseInt(g, 16);
const convertedB = parseInt(b, 16);


getHslValue(convertedR, convertedG, convertedB);

showRgb(convertedR, convertedG, convertedB);

};


//Show RGB
function showRgb(convertedR, convertedG, convertedB) {

document.getElementById("rgb").innerHTML = `RGB: (${convertedR}, ${convertedG}, ${convertedB})`;

};


//From RGB to HSL --> black box
function getHslValue(r, g, b) {

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
 
  if( max === min ) {
    h = 0;
  } else
  if (max === r) {
    h = 60 * (0 + (g - b) / (max - min) );
  } else
  if (max === g) {
    h = 60 * (2 + (b - r) / (max - min) );
  } else
  if (max === b) {
    h = 60 * (4 + (r - g) / (max - min) );
  }
 
  if (h < 0) {h = h + 360; }
 
  l = (min + max) / 2;
 
  if (max === 0 || min === 1 ) {
    s = 0;
  } else {
    s = (max - l) / ( Math.min(l,1-l));
  }

  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //console.log("hsl(%f,%f%,%f%)", h, s, l);

  showHsl(h, s, l);

};


//Show HSL
function showHsl(h, s, l) {

document.getElementById("hsl").innerHTML = `HSL: ${h.toFixed(0)}%, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;

};