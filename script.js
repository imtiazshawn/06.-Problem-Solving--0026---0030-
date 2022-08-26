// Return Something to Me!

function giveMeSomething(str) {
	let result = 'something ' + str;
	return result;
}

console.log(giveMeSomething('is better than nothing'));



// squared

function squared(b) {
    const a = b * b;
	return a;
}

console.log(squared(100))




// convert any number into Binary

function binary(a){
    return a.toString(2);
}

console.log(binary(12));



// Add up the Numbers from a Single Number

function addUp(num) {
	let sum = 0;
    for (let i = 0; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(addUp(5));




//Matchstick Houses

function matchHouses(step) {
	if(step == 0){
        return 0;
    }
    return step * 5 + 1;
}

console.log(matchHouses(4));