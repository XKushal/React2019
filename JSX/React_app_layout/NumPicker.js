function pickNum() {
	return Math.floor(Math.random() * 10) + 1;
}
// class getName extends React.Component{

// }
class NumPicker extends React.Component {
	render() {
		const num = pickNum();
		let msg;
		if (num === 7) {
			// msg = 'GOOD!';
			msg = (
				<div>
					<h2>CONGRATES YOU WIN!</h2>
					<img src="https://media.giphy.com/media/11J8lEFfvHLipi/giphy.gif" />
				</div>
			);
		} else {
			// msg = 'BAD!';
			msg = <h1>SORRY, TRY AGAIN!</h1>;
		}
		return (
			<div>
				<h1>Your number is: {num}</h1>
				{/* <p>{num === 7 ? 'Congrates!' : 'Try Again!!'}</p> */ msg}
				{/* {num === 7 && <img src="https://media.giphy.com/media/11J8lEFfvHLipi/giphy.gif" />} */}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
