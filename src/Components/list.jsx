import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import { validate, repeat } from "../Data/validation";


class List extends Component {
	constructor(props){
		super(props);

		this.state = {

			value: "",
			skill: "1",
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

	}	

	handleSubmit(e) {

		let errorMessage = document.getElementById("error_message")

		
		e.preventDefault();

		const data = this.state.value;
		const skill = this.state.skill;

		if (validate(data)){ 
			this.props.onSubmit(data, skill)
			errorMessage.textContent = "";


		 	this.setState(({
			value: "",
			 }))

		 	

			}else{
				errorMessage.textContent = "Error - name must be between 1 and 12 cherecters long!";

				this.setState(({
				value: "",

			 }))

			}
		
	}

	handleChange(e) {

		this.setState({value: e.target.value});
		
		

	}

	handleSelect(e) {

		this.setState({skill: e.target.value});

	}








	render() {
		const { names, onClick  } = this.props 
		//const names = ["James", "Peter", "Charlotte", "Olivia", "Emma", "Alex", "Alice", "Emily", "John"];
		return (

			<React.Fragment>
				<section className="form-section">
					<div id="error_container" className="error-container">
						<p id="error_message" className="error-message"></p>
					</div>
					<form className="add-input" onSubmit={ this.handleSubmit }>
						<div className="name-input">
							<label>Enter Player Name: </label>
							<input value={this.state.value} onChange={ e => this.handleChange(e) } type="text" />
						</div>	

						<div className="radio-btn-container">
						<label>Player Skill Level:</label>
							<div>
								<label>
									<input value={1} checked={ this.state.skill === "1" } onChange={this.handleSelect} type="radio" />
									1
								</label>
							</div>
							<div>
								<label>
									<input value={2} checked={ this.state.skill === "2" } onChange={this.handleSelect} type="radio" />
									2
								</label>
							</div>
							<div>
								<label>
									<input value={3} checked={ this.state.skill === "3" } onChange={this.handleSelect} type="radio" />
									3	
								</label>
							</div>
							<div>
								<label>
									<input value={4} checked={ this.state.skill === "4" } onChange={this.handleSelect} type="radio" />
									4
								</label>
							</div>
							<div>
								<label>
									<input value={5} checked={ this.state.skill === "5" } onChange={this.handleSelect} type="radio" />
									5
								</label>
							</div>
						</div>	
						<input type="submit" value="add"/>
					</form>
				</section>	
				{/*render the player names below from the array in store. 
				names passed through props.*/}

				<section className="player-list">


					{ names.map((names, i) => <div key={ names.id } ><Player id={ names.id } names={ names } onClick={ onClick } btn={ true }/></div>)}

				</section>
				<section className="sort-btn">

					<Link  to="/team"><button disabled={ names.length < 4 ? true : false } >Randomly Sort Teams</button></Link>
					<Link  to="/skill"><button disabled={ names.length < 4 ? true : false } >Sort Teams by skill level</button></Link>

				</section>
					
					
					
				
			</React.Fragment>
		);

	}
}

export default List;