import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

let validate = (value => {
	if (value.length < 1 || value.length > 12 ){
		return false
	}else{
		return true
	}

});



class List extends Component {
	constructor(props){
		super(props);

		this.state = {

			value: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);

	}	

	handleSubmit(e) {

		let error = document.getElementById("errorContainer")
		let p = document.createElement("p");
		let errorChild = document.getElementById("error-p")

		p.textContent = "Error - name must be between 1 and 12 cherecters long!";
		e.preventDefault();

		const data = this.state.value;

		if (validate(data)){ 
			this.props.onSubmit(data)


		 	this.setState(({
			value: "",
			 }))

		 	

			}else{
				error.appendChild(p);

				p.setAttribute("id", "error-p")

				this.setState(({
				value: "",

			 }))

			}
			
		// 	this.setState(({
		// 		value: "",

		// if (data.length > 0){
		// 	this.props.onSubmit(data);

		// 	this.setState(({
		// 		value: "",
		// }))


		// }else{

		// 	error.appendChild(p);


		// }
		

		
	}

	handleChange(e) {

		this.setState({value: e.target.value});
		
		

	}







	render() {
		const { names, onClick  } = this.props 
		//const names = ["James", "Peter", "Charlotte", "Olivia", "Emma", "Alex", "Alice", "Emily", "John"];
		
		return (

			<React.Fragment>
				<section className="form-section">
					<div className="error-container" id="errorContainer">
					</div>
					<form className="add-input" onSubmit={ this.handleSubmit }>
						<input value={this.state.value} onChange={ e => this.handleChange(e) } type="text" />
						<input type="submit" value="add"/>
					</form>
				</section>	
				{/*render the player names below from the array in store. 
				names passed through props.*/}

				<section className="player-list">


					{ names.map((names, i) => <div key={ names.id } className="player-card" ><Player id={ names.id } names={ names } onClick={ onClick } btn={ true }/></div>)}

				</section>
				<section className="sort-btn">

					<Link  to="/team"><button disabled={ names.length !== 10 ? true : false } >Sort Teams</button></Link>

				</section>
					
					
					
				
			</React.Fragment>
		);

	}
}

export default List;