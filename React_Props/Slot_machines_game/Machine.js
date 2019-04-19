// function findResult(x, y, z) {
// 	if (x.equals(y).equals(y)) {
// 		return <h1>you win</h1>;
// 	} else {
// 		return <h1>YOu lose</h1>;
// 	}
// }

class Machine extends React.Component {
	render() {
		// this is one way to initilize strings
		// let s1 = this.props.s1;
		// let s2 = this.props.s2;
		// let s3 = this.props.s3;
		const { s1, s2, s3 } = this.props;
		const winner = s1 === s2 && s2 === s3;
		const colors = { fontSize: '50px', backgroundColor: 'green' };
		return (
			<div className="Machine">
				{/* this is the another way to give css components  */}
				{/* <h1 style={{ fontSize: '50px', backgroundColor: 'green' }}> */}
				<h1 style={colors}>
					{s1}
					{s2}
					{s3}
				</h1>
				<h1 className={winner ? 'win' : 'lose'}>{winner ? 'You Win!' : 'You Lose'}</h1>
			</div>
		);
	}
}
