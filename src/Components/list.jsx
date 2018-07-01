import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

class List extends Component {
	constructor(props){
		super(props);

		this.state = {

			value: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);

	}	

	handleSubmit(e) {

		e.preventDefault();

		const data = this.state.value;


		this.props.onSubmit(data);

		this.setState(({
			value: "",
		}))

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
					<form className="add-input" onSubmit={ this.handleSubmit }>
						<input value={this.state.value} onChange={ e => this.handleChange(e) } type="text" />
						<input type="submit" name="add"/>
					</form>
				</section>	
				{/*render the player names below from the array in store. 
				names passed through props.*/}

				<section className="player-list">


					{ names.map((names, i) => <div key={ names.id } className="player-card" ><Player id={ names.id } names={ names } onClick={ onClick } btn={ true }/></div>)}

				</section>
				<section className="sort-btn">

					<button><Link to="/team">Sort Teams</Link></button>

				</section>
					
					
					
				
			</React.Fragment>
		);

	}
}

export default List;