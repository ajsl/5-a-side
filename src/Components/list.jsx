import React, { Component } from "react";
import Player from "./Player";

class List extends Component {
	constructor(props){
		super(props);

	}

	render() {

		return (

			<React.Fragment>
				<section className="form-section">
					<form className="add-input">
						<input type="text" />
						<input type="submit" name="add"/>
					</form>
				</section>	
					
					{/*render the player names below from the array in store. 
					names passed through props.*/}

				<Player name="James" />	
				
			</React.Fragment>
		);

	}
}

export default List;