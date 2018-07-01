import React, { Component } from "react";
import Player from "./Player";

// function to shuffle the array. 
const shuffle = (array => {
	let length = array.length, temp, index;

	while (length > 0) {
		index = Math.floor(Math.random() * length);

		length -= 1;

		temp = array[length];
		array[length] = array[index];
		array[index] = temp 
	}

	return array;
}) 

//function to get the halfway point of an array
const midPoint = (array => Math.ceil(array.length / 2));


class Team extends Component {
	constructor(props){
		super(props);

		//store the shuffled array of names in state. 
		this.state = {
			names: shuffle(this.props.names),
			
		}
	}

	
	render() {

		//split the names array into 2 separate arrays. 
		const names1 = this.state.names.filter((name, i ) => i < midPoint(this.state.names));
		const names2 = this.state.names.filter((name, i ) => i >= midPoint(this.state.names));
		return (

			<React.Fragment>
				<section className="team-list">

					<div className="team1">

						<h4>Team 1</h4>

						{ names1.map((name, i ) => <div key={ name.id } className="player-card" ><Player id={ name.id } names={ name } /></div>)}

					</div>


					<div className="team2"> 

						<h4>Team 2</h4>

						{ names2.map((names, i) => <div key={ names.id } className="player-card" ><Player id={ names.id } names={ names }  /></div>)}
						

					</div> 
				</section>	
			</React.Fragment>
				
				

		);

	}
}

export default Team;