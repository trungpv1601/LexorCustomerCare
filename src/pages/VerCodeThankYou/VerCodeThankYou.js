import React, { Component } from 'react';
import { Text } from 'react-native';
import { LayoutMessage } from '../../layouts';
import GlobalStyles from '../../constants/GlobalStyles';

export default class VerCodeThankYou extends Component {
	render() {
		return (
			<LayoutMessage>
				<Text style={[GlobalStyles.text, styles.text]}>
					Thank you! In a few minutes, you will recieve a verification code.
				</Text>
			</LayoutMessage>
		);
	}
}

const styles = {
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	}
};
