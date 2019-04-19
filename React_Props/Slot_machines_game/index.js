class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machines with some styles</h1>
				<Machine s1="x" s2="y" s3="z" />
				<Machine s1="x" s2="y" s3="y" />
				<Machine s1="y" s2="y" s3="y" />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
