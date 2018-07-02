export const validate = (value => {
	if (value.length < 1 || value.length > 12 ){
		return false
	}else{
		return true
	};
});	


// export const repeat = (name => {
// 	if (name === {this.props.names.forEach(obj => obj.name)}){
// 		return false
// 	}else{
// 		return true
// 	}
// });
