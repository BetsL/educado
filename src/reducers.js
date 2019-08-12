import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_STORIES_PENDING,
	REQUEST_STORIES_SUCCESS,
	REQUEST_STORIES_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchStories = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD: 
			// cleaner - { ...state, searchField:action.payload }
			return Object.assign({}, state, { searchField:action.payload })
		default: 
			return state;
	}
}

const initialStateStories = {
	isPending: false,
	stories: [],
	error: ''
}

export const requestStories = (state=initialStateStories, action={}) => {
	switch(action.type) {
		case REQUEST_STORIES_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_STORIES_SUCCESS:
			return Object.assign({}, state, { stories: action.payload, isPending: false })
		case REQUEST_STORIES_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default: 
			return state;
	}
}












