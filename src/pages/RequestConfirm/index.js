import { connect } from 'react-redux';
import RequestConfirm from './RequestConfirm';
import { homeWithProfile, customerProfile } from './actions';

const mapStateToProps = (state) => ({});

export default connect(
	null,
	{ homeWithProfile, customerProfile }
)(RequestConfirm);
