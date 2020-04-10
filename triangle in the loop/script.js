'use strict';
// alert('look in the console');
let triangleStar = ' ';

// for (let x = 1; x <= 7; x++){
// 		while(triangleStar.length == x){
// 			triangleStar += '*';
// 		}
// 		document.write(triangleStar);
// 		document.write('</br>');
// 		console.log(triangleStar);
// }

for (triangleStar = '*'; triangleStar.length <= 7; triangleStar += '*'){
	document.write(triangleStar);
	document.write('</br>');
}
	console.log(triangleStar);
