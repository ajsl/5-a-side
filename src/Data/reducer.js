
const setName = (state, {name, id, skill}) => {

	const player = {name: name, id: id, skill: skill}
	return {
		...state, 
		names: state.names.concat(player)
	}
}

const removePlayer = (state, { id }) => {
	return {
		...state,
		names: state.names.filter( obj => obj.id !== id )
	}
}


const reducer = (state, action) => {
	switch (action.type) {
		case "setName": return setName(state, action);
		case "removePlayer": return removePlayer(state, action);
		default: return state;
	}
}

export default reducer;