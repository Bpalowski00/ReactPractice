import React from 'react';

function Card3(props) {
	return (
		<div>
			<hr />
			<br />
			<h1 style={{ color: "brown" }}>Card 3</h1>
			s
			{/* form onSubmit={this.blalcl} */}
			<form >
				<h1>{props.test.firstName} {props.test.lastName}</h1>
				<h2>{props.test.answer}</h2>
				<h2>{props.test.favColor}</h2>
				<button ></button>
				<input
					type="text"
					value={props.test.firstName}
					name="firstName"
					placeholder="FirstName"
					onChange={props.formChange}
				/>
				<input
					type="text"
					value={props.test.lastName}
					name="lastName"
					placeholder="LastName"
					onChange={props.formChange}
				/>



				<textarea value={"default value"} onChange={props.formChange} />
				<br />
				<input type="checkbox" checked={props.test.isTest} onChange={props.formChange} name="isTest" />
				<br />
				<input type="radio" checked={props.test.answer === "yes"} onChange={props.formChange} name="answer" value="yes" />yes
				<input type="radio" checked={props.test.answer === "no"} onChange={props.formChange} name="answer" value="no" />no
				<br />
				<br />
				<select value={props.test.favColor} onChange={props.formChange} name="favColor">
					<option value="grey">Grey</option>
					<option value="blue">Blue</option>
					<option value="red">Red</option>
				</select>
			</form>

		</div>
	)
}

export default Card3;