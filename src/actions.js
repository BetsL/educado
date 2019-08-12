import { apiCall } from './api/api';
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_STORIES_PENDING,
	REQUEST_STORIES_SUCCESS,
	REQUEST_STORIES_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
		type: CHANGE_SEARCH_FIELD,
		payload: text
}) 

export const requestStories = () => (dispatch) => {
	dispatch({ type: REQUEST_STORIES_PENDING });
	// fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1249344000,created_at_i%3C1533340800&hitsPerPage=50')
	// 	.then(response => response.json())
	//  .then(data => this.setState({ stories: data.hits }));
	apiCall('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1249344000,created_at_i%3C1533340800&hitsPerPage=50')
		.then(data => dispatch({ type: REQUEST_STORIES_SUCCESS, payload: data.hits }))
		.catch(error => dispatch({ type: REQUEST_STORIES_FAILED, payload: error }))
}