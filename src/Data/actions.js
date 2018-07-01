
let lastID = 0;

export const addName = (name) => {
	lastID += 1
	return {
		type: "setName",
		name: name,
		id: lastID,
		
	};
};

export const deletePlayer = (id) => {
	return {
		type: "removePlayer",
		id: id,
	};
};