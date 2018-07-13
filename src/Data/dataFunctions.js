export const validate = (value => {
	if (value.length < 1 || value.length > 30 || value === " " ){
		return false
	}else{
		return true
	}

});	

//check the name is unique - 2 arguments the first it the current value the secind is the array in state. 
export const repeat = ((input, array) => (!array.some(obj => obj.name === input)))

	//input !== array.forEach(obj => obj.name || array === []));

// function to shuffle the array. 
export const shuffle = (array => {
	let length = array.length, temp, index;

	while (length > 0) {
		index = Math.floor(Math.random() * length);

		length -= 1;

		temp = array[length];
		array[length] = array[index];
		array[index] = temp 
	}

	return array;
}) 

//function to get the halfway point of an array
export  const midPoint = (array => Math.ceil(array.length / 2));




