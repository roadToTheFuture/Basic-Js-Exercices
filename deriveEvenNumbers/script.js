'use strict';

let numberIn = prompt('How many even number you want to see?','0');
let quantity = 0;

for(let i = 1; ; i++){
	if (quantity != numberIn){
		if(i % 2 == 0){
			console.log(i);
			quantity++;
		}
	}else if (quantity == numberIn) break;
}



alert('Great! Now look into the console')