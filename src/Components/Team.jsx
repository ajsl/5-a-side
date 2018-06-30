import React, { Component } from "react";
import Player from "./Player";

class Team extends Component {
	constructor(props){
		super(props);

	}

	render() {

		return (

			

			<React.Fragment>

				<div className="team1">

					<h4>Team 1</h4>

					<Player />

				</div>


				<div className="team2"> 

					<h4>Team 2</h4>

					<Player />

				</div> 

			</React.Fragment>
				
				

		);

	}
}

export default Team;