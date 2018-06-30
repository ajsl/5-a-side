import React, { Component } from "react";

class Player extends Component {
	constructor(props){
		super(props);

	}

	// render the  player card with button to delete. 
	render () {

		const { name } = this.props;

		return (

			<React.Fragment>

				<aside> 

					<h4>{name}</h4>
					<button>X</button>

				</aside>

			</React.Fragment> 


		);
	}
}

export default Player;