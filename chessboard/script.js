'use strict';

let boardUserSize = +prompt('What chessboard size do you need ?','');
let boardResult = '';

//Loop For

for(let x = 1; x <= boardUserSize; x++){
	for (let y = 1; y <= boardUserSize; y++){
		if ((x + y) % 2 == 0){
			boardResult += '*';
		}else{
			boardResult += ' ';
		}
	}
	boardResult += `\n`;
}

console.log (boardResult);

//Loop while
/*
let x = 1;
while(x <= boardUserSize){
	let y = 1;
	while(y <= boardUserSize){
		if((x + y) % 2 == 0){
			boardResult += "#";
		}else{
			boardResult += ` `;
		}
		y++
	}
	boardResult += `\n`;
	x++
}
console.log(boardResult)
*/
