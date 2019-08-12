import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='tc pa3 ba b--pink bg-lightest-blue'
				type='search'
				placeholder='Search News'
				onChange={ searchChange }
			/>
		</div>
	);
}

export default SearchBox;