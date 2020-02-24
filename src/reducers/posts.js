function posts(state = [], action) {
	if (action.type === 'ADD_POST') {
		return [
			...state,
			action.payload
		];
	}
	return state;
}

export default posts;
