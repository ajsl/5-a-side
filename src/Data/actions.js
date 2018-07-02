
let lastID = 0;

export const addName = (name, skill) => {
	lastID += 1
	return {
		type: "setName",
		name: name,
		skill: skill,
		id: lastID,
		
	};
};

export const deletePlayer = (id) => {
	return {
		type: "removePlayer",
		id: id,
	};
};