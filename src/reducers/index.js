import { combineReducers } from 'redux';

import products from './products';
import posts from './posts';

export default combineReducers({
	products,
	posts
});
