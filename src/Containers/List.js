import List from "../Components/List";
import { connect } from "react-redux";
import { addName } from "../Data/actions";
import { deletePlayer } from "../Data/actions";



const mapStateToProps = state => {
	return {
		

		names: state.names,

	};
	
};



const mapDispatchToProps = (dispatch) => {


	return {

		onSubmit: (data, skill) => dispatch(addName(data, skill)),
		onClick: data => dispatch(deletePlayer(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);