import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; //as it is in the same folder

const App =() => {
	return (
		<div className="ui container comments">
			<CommentDetail 
				image={faker.image.avatar()} 
				author = "arpa" 
				timeAgo="Today at 5:33pm" 
				content="nice photo" 
			/>
			<CommentDetail 
				image={faker.image.avatar()} 
				author = "sam" 
				timeAgo="yesterday at 5:02pm" 
				content="nice click" 
			/>
			<CommentDetail 
				image={faker.image.avatar()} 
				author = "adil" 
				timeAgo="Today at 3:33pm" 
				content="good" 
			/>
		</div>
		);
};

ReactDOM.render(<App />, document.querySelector('#root'));