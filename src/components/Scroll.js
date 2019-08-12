import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid #5d6063', borderRadius: '3px', height: '250px', width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
			{ props.children }
		</div>
	);
}

export default Scroll;