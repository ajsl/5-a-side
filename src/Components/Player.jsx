import React, { Component } from "react";

class Player extends Component {
	constructor(props){
		super(props);

		this.onDelete = this.onDelete.bind(this);

	}

	onDelete() {
		const id = this.props.id;

		this.props.onClick(id)
	}

	// render the  player card with button to delete. 
	render () {

		const { names, btn } = this.props;



		return (

			<React.Fragment>

				<aside className="player-card card-1 card-2 card-3"> 

					<h4>{names.name}</h4>
					{ btn ? <button onClick={ this.onDelete } >x</button> : ""}
				</aside>

			</React.Fragment> 


		);
	}
}

export default Player;