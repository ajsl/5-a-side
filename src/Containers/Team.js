import Team from "../Components/Team";
import { connect } from "react-redux";




const mapStateToProps = state => {
	return {
		

		names: state.names,

	};
	
};


export default connect(mapStateToProps)(Team);