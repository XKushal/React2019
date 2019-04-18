class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1> Hello there </h1>
				<h1> this is next wrapped line in return</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
