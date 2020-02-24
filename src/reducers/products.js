const initialState = [{
	id: 1,
	slug: 'book_1',
	title: 'Book 1'
}, {
	id: 2,
	slug: 'book_2',
	title: 'Book 2'
}, {
	id: 3,
	slug: 'book_3',
	title: 'Book 3'
}];

function products(state = initialState, action) {
	if (action.type === 'ADD_PRODUCT') {
		return [
			...state,
			action.payload
		];
	} else if (action.type === 'SHOW_ALL_PRODUCTS') {
		return state;
	}
	return state;
}

export default products;
