import Skill from "../Components/Skill";
import { connect } from "react-redux";




const mapStateToProps = state => {
	return {
		

		names: state.names,

	};
	
};


export default connect(mapStateToProps)(Skill);