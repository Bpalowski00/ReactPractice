import React from 'react';


function Card2(props) {
	const comcpletedStyle = {
		fontStyle: 'italic',
		color: "dodgerblue",
		textDecoration: "line-through"
	}
	const componentDidMountColorTest = {
		fontStyle: 'bold',
		color: "red",

	}

	return (
		<div>
			<hr />
			<br />
			<input type="checkbox"
				checked={props.stuff.completed}
				onChange={() => props.handelChange(props.stuff.id)} />
			<h1 style={{ color: "green" }}>Card2 Method: {props.count}</h1>
			<h2 style={props.is ? componentDidMountColorTest : null}>ComponentDidMount:Test</h2>
			<p style={props.stuff.completed ? null : comcpletedStyle}>Question:{props.stuff.question}</p>
			<p>Star Wars API:{props.api.name}</p>



			<button onClick={props.countIt2} ></button>
		</div >
	)
}
export default Card2;