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



class Skill extends Component {
	constructor(props){
		super(props);

		//store the shuffled array of names in state. 
		this.state = {
			//use sort to re-arrange the array into skill order
			names: (this.props.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))),
			
		}
	}
	
	

	
	render() {

		//split the names array into 2 separate arrays one with odd id's and the other even
		const names1 = shuffle(this.state.names.filter((name, i ) => i % 2 === 0 ));
		const names2 = shuffle(this.state.names.filter((name, i ) => i % 2 !== 0 ));
		console.log(this.state.names)
		return (

			<React.Fragment>
				<section className="team-list">

					<div className="team-card team1">

						<h4 className ="team-title">Team 1</h4>

						{ names1.map((name, i ) => <div key={ name.id } className="player-card" ><Player id={ name.id } names={ name } /></div>)}

					</div>


					<div className="team-card team2"> 

						<h4 className ="team-title">Team 2</h4>

						{ names2.map((names, i) => <div key={ names.id } className="player-card" ><Player id={ names.id } names={ names }  /></div>)}
						

					</div> 
				</section>	
			</React.Fragment>
				
				

		);

	}
}

export default Skill;