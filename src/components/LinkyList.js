import React from 'react';
import Linkies from './Linkies';

const LinkyList = ({ stories }) => {
	// if (true) {						// for production
	// 	throw new Error('Noooooo!');
	// }	
	return (
		<div>
			{
				stories.map((story,i) => {
					return (
						<Linkies 
							key={ i } 
							id={ story.id } 
							url={ story.url } 
							title={ story.title }
							author={ story.author } 
						/>
					);
				})
			}
		</div>
	);
}

export default LinkyList;

