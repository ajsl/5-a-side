import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import info from "../assets/images/info.png"
import { validate, repeat } from "../Data/dataFunctions";


class List extends Component {
	constructor(props){
		super(props);

		this.state = {

			value: "",
			skill: "1",
			instructions: true,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.hiddenClick = this.hiddenClick.bind(this);

	}	

	handleSubmit(e) {

		let errorMessage = document.getElementById("error_message")

		
		e.preventDefault();

		//added trim to remove the whitespace from names
		const data = (this.state.value).trim();
		
		const skill = this.state.skill;

		if ((validate(data))){ 
			//check if the name is unique
			if(repeat(data, this.props.names)){
				this.props.onSubmit(data, skill)
				errorMessage.textContent = "";
			 	this.setState(({
					value: "",
				}))
				}else{
					errorMessage.textContent = "Error - Names must be unique"
				}
			}else{
				errorMessage.textContent = "Error - You must enter a name between 1 and 30 characters!";
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
	hiddenClick() {
		this.setState(({
			instructions: this.state.instructions ? false : true,
		}))
	}



	render() {
		const { names, onClick  } = this.props 
		return (

			<React.Fragment>
				<section className="form-section">
					<div id="error_container" className="error-container">
						<p id="error_message" className="error-message"></p>
					</div>
					<form className="add-input" onSubmit={ this.handleSubmit }>

						<div className="input name-input-container">
							<label>Enter Player Name: </label>
							<input className="name-input" value={this.state.value} onChange={ e => this.handleChange(e) } type="text" />
						</div>	
					{ /* radio buttons to set play skill */ }
						<div className="input radio-btn-container">
							<label className="radio-label">Player Skill Level: </label>
							<div>
								<label>
									<input className="radio-btn" value={1} checked={ this.state.skill === "1" } onChange={this.handleSelect} type="radio" />
									1
								</label>
							</div>
							<div>
								<label>
									<input className="radio-btn" value={2} checked={ this.state.skill === "2" } onChange={this.handleSelect} type="radio" />
									2
								</label>
							</div>
							<div>
								<label>
									<input className="radio-btn" value={3} checked={ this.state.skill === "3" } onChange={this.handleSelect} type="radio" />
									3	
								</label>
							</div>
							<div>
								<label>
									<input className="radio-btn" value={4} checked={ this.state.skill === "4" } onChange={this.handleSelect} type="radio" />
									4
								</label>
							</div>
							<div>
								<label>
									<input className="radio-btn" value={5} checked={ this.state.skill === "5" } onChange={this.handleSelect} type="radio" />
									5
								</label>
							</div>
						</div>	
						
					
					<div className="submit-btn-container">
							<input className="input btn submit-btn" type="submit" value="Add Player"/>
					</div>
					<div className="info-btn-container">
						<a onClick={ this.hiddenClick } className="info-btn"><img className="info-img" alt="infomation icon" src={info}/></a>
					</div>	
					</form>	
				</section>	
				<section className="sort-btn">

					{names.length > 3 ? <Link  to="/skill"><button className="btn sort" disabled={ names.length < 4 ? true : false } >Sort into teams</button></Link>: ""}

				</section>
				{/*div displayed at the start with instructions and displayed when requested */}
				<section id="intro" className={this.state.instructions ? "intro-container" : "hidden"}  >
					<div className="intro">
						<button onClick={this.hiddenClick} className="close-btn">Close..</button>
						<h4 className="intro-title">Welcome to the 5-a-side team picker. </h4>
						<h5 className="intro-text">Begin by typing your player names into the field above, If you wish you can include their skill level to help make sure you have balanced teams. The app requires a minimum of 4 names. Once you've reached that number a button will appear, press it to sort the players into 2 teams. Don't worry if you have an odd number we'll help you pick a reserve</h5>
						<h5 className="intro-text">If you make a mistake just press the x next to the name and enter it again. Each name must be unique and be less than 30 characters.
						More than 10 players? don't worry we'll help you pick a team what ever the number</h5> 
					</div>
				</section>
				{ /*render the player names below from the array in store. 
				names passed through props.*/ }

				<section className="player-list">


					{ names.map((names, i) => <div key={ names.id } ><Player id={ names.id } names={ names } onClick={ onClick } btn={ true }/></div>)}

				</section>
					
				
			</React.Fragment>
		);

	}
}

export default List;