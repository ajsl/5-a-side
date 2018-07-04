import React, { Component } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
import { shuffle, midPoint } from "../Data/dataFunctions";





class Skill extends Component {
	constructor(props){
		super(props);

		//store the shuffled array of names in state. 
		this.state = {
			value1: "",
			value2: "", 
			displayTeam1: true,
			displayTeam2: true,
			names: shuffle(this.props.names),
			
		}
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSubmit1 = this.handleSubmit1.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.clicked2 = this.clicked2.bind(this);
		this.clicked1 = this.clicked1.bind(this);
	}

	handleChange1(e) {
	 	this.setState(({
	 		value1: e.target.value,
	 	}))
	 	
	}
	handleChange2(e) {
	 	this.setState(({
	 		value2: e.target.value,
	 	}))
	 	
	}
	
	handleSubmit1(e) {
		e.preventDefault();
		this.setState(({
			displayTeam1: false,
		}))

	}

	handleSubmit2(e) {
		e.preventDefault();
		this.setState(({
			displayTeam2: false,
		}))
	}

	clicked1(e) {
		e.preventDefault();
		this.setState(({
			displayTeam1: true,
		}))

	}
	clicked2(e) {
		e.preventDefault();
		this.setState(({
			displayTeam2: true,
		}))

	}
	
	render() {
	
		const { displayTeam1, displayTeam2, names, value1, value2 } = this.state;
			//split the names array into 2 separate arrays one with odd id's and the other even
		const names1 = (this.state.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))).filter((name, i ) => i % 2 === 0 );
		const names2 = (this.state.names.sort((a, b) => parseFloat(a.skill) - parseFloat(b.skill))).filter((name, i ) => i % 2 !== 0 );
		

		let reserve = {};

		if (names1.length > names2.length ) {
			reserve = names1.pop();
		}else if(names2.length > names1.length) {
			reserve = names2.pop();
		}
		
		return (
			
			<React.Fragment>
				{ names.length < 1 
				? 
					<div className="no-player"><h1>No players found</h1><Link to="/"><h2>Click here to add players</h2></Link></div>
				:
				null
				}	
				<section className="team-list">

					<div className="team-card team1">
						{ displayTeam1 
							? 
							names.length 
							? 
								<form onSubmit={this.handleSubmit1} className="team-input1">
									<input className="name-input team-input"  placeholder="Enter Team Name" type="text" value={ value1 } id="team1" onChange={this.handleChange1} />
									<input className="submit-btn btn team-btn"type="submit"/>
								</form>
							:
								null
							 
						:

						<div className="team-edit-container">
							<h3>{value1}</h3>
							<button className="btn edit-btn" onClick={ this.clicked1 }>edit</button>
						</div>	
						} 

						{ names1.map((name, i ) => <div key={ name.id }  ><Player id={ name.id } names={ name } /></div>)}

					</div>

					{ reserve.id ?
					<div className="team-card">
						<h4 className="team-title">Reserve</h4>
						 <Player id={ reserve.id } names={ reserve }/> 
					</div>
					: <div></div>}


					<div className="team-card team2"> 

						{ displayTeam2 
							? 
							names.length 
							? 
								<form onSubmit={this.handleSubmit2} className="team-input1">
									<input className="name-input team-input" placeholder="Enter Team Name" type="text" value={ value2 } id="team2" onChange={this.handleChange2} />
									<input className="submit-btn btn team-btn" type="submit"/>
								</form>
							:
								null
							 
						:
							<div className="team-edit-container">
								<h3>{value2}</h3>
								<button className="btn edit-btn" onClick={ this.clicked2 }>edit</button> 
							</div>
						} 

						{ names2.map((names, i) => <div key={ names.id } ><Player id={ names.id } names={ names }  /></div>)}
						

					</div> 
				</section>	
			</React.Fragment>
				
				

		);

	}
}

export default Skill;