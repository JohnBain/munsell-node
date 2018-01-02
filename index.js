var R = require("r-script");
const readline = require('readline');

//Utility functions
//the R munsell library expects colors in OpenGL format, so we convert from 0-255 to 0-1.0
var convertRgbToOpenGL = function(colorArray){
    return colorArray.map(function(e){return e/255});
};

//API functions
var convertRgbToMunsell = function(rgbArray){
	console.log(...rgbArray)
	var out = R("munsell-API.R")
  	//.data(2.7, 2.0, 2.0)
  	.data(...rgbArray)
  	.callSync();
  	return out;
}
  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an RGB string: ', (answer) => {
  console.log(`RGB color: ${answer}`);
  console.log(`Munsell color: ${convertRgbToMunsell(convertRgbToOpenGL(answer.split(',')))}`);
  rl.close();
});
