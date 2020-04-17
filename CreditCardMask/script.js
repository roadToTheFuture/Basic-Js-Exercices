'use strict';

function maskify(result){
	let y = "";
	for(let x = 1; x <= result.length; x++){
		if(x <= result.length - 4){
		 y += "#";
		}
	}
	 y += result.slice(-4);
	 return y;
}

let result = prompt('Введите пароль',' ');

alert('Пароль принят ! ' + maskify(result));
