
const setName = (state, {name, id}) => {

	const player = {name: name, id: id}
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