class App extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Loops Demo</h1>
				<Friend name="Kushal" hobbies={[ 'Cricket', 'Soccer', 'Coding', 'Sleeping' ]} />
				<Friend name="Singh" hobbies={[ 'Painting', 'Fighting', 'Writing', 'irritating' ]} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
