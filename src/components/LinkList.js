import React from 'react';
import Links from './Links';

const LinkList = ({ stories }) => {
	// if (true) {						// for production
	// 	throw new Error('Noooooo!');
	// }	
	return (
		<div>
			{
				stories.map((story,i) => {
					return (
						<Links 
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

export default LinkList;

