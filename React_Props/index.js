class App extends React.Component {
	render() {
		return (
			<div>
				<h1>welcome to Props and Default Props</h1>
				<Hello
					to="Kushal"
					from="Retard Bran"
					bangs={4}
					// isFunny={true}
					// img="https://images.unsplash.com/photo-1503278501277-e50457741130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
				/>
				{/* <Hello to="kushal" from="Bran" bangs={8} isFunny={true} /> */}
				<Hello to="GOD" />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
