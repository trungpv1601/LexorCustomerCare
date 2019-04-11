import RegisterPhone from './RegisterPhone';
import { connect } from 'react-redux';
import { setIsBack } from './actions';

const mapStateToProps = ({ register }) => {
	const { isBack } = register;
	return {
		isBack
	};
};

export default connect(
	mapStateToProps,
	{ setIsBack }
)(RegisterPhone);
