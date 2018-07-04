export const validate = (value => {
	if (value.length < 1 || value.length > 20 ){
		return false
	}else{
		return true
	};

});	

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
export const midPoint = (array => Math.ceil(array.length / 2));
// export const repeat = (name => {
// 	if (name === {this.props.names.forEach(obj => obj.name)}){
// 		return false
// 	}else{
// 		return true
// 	}
// });
