class Friend extends React.Component {
	render() {
		const { name, hobbies } = this.props;
		return (
			<div>
				<h1>{name}</h1>
				<ul>{hobbies.map((list) => <li> {list} </li>)}</ul>
			</div>
		);
	}
}
