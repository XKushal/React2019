function myMood() {
	const moods = [ 'Angry', 'Happy', 'Sad', 'Quiet', 'Irritated', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1> My bed (wrapped component returnin jsx demo)</h1>
				<h1>My number is: {2 * 2} (embaded js)</h1>
				<h1> my mood is: {myMood()}</h1>
				<img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1939&q=80" />
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
