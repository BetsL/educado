import React from 'react';

const Links = ({ url, title, author }) => {
	return (
		<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5' style={{ border: '1px solid #a9a9a9' }}>
			<a href={ url }>{ title }</a>
			<p>{ author }</p>
		</div>
	);
}

export default Links;