import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkyList from '../components/LinkyList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestStories } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchStories.searchField,
		stories: state.requestStories.stories,
		isPending: state.requestStories.isPending,
		error: state.requestStories.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestStories: () => dispatch(requestStories())
	}
}

class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		storyList: [],
	// 	}
	// }

	componentDidMount() {
		// through actions ...
		// fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1249344000,created_at_i%3C1533340800&hitsPerPage=10')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({ stories: data.hits }));
		this.props.onRequestStories();
	}

	// coming down as props, don't need to declare it as a method of app
	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// }

	render() {
		const { stories } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredStories = stories.filter(story => {
				return story.title.toLowerCase().includes(searchField.toLowerCase());
				// console.log(story.title.toLowerCase());
		})
			return !stories.length ?
			<h1>Loading ...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Some Awesome News</h1>
					<SearchBox searchChange={ onSearchChange }/>
					<Scroll>
						<ErrorBoundary>
							<LinkyList stories={ filteredStories }/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

