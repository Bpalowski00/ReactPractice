import React from 'react';


function Card(props) {
	return (
		<div >
			<h1>Card1</h1>
			<input type="checkbox" onClick onChange={() => alert('changed')} />
			<h1>Count {props.count}</h1>
			<h1>Question: {props.stuff.question} </h1>
			<p> Answer: {props.stuff.answer}</p>
			<button onClick={props.countIt}></button>
		</div >
	)
}
export default Card;