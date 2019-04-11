import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { ButtonIcon, LineFlat, LineUp, Footer } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

export default class RequestConfirm extends Component {
	onButtonPressHome = () => {
		this.props.homeWithProfile();
	};

	onButtonPressProfile = () => {
		this.props.customerProfile();
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={Colors.BACKGROUND} barStyle="light-content" />
				<View style={styles.header}>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						Your request is confirm.
					</Text>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						Thank you for your cooperation.
					</Text>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						An assign customer care representative
					</Text>
					<Text style={[GlobalStyles.text, styles.headerText]}>
						will contact you within 24 hrs.
					</Text>
					<Text style={[GlobalStyles.text, styles.headerText]} />
					<Text style={[GlobalStyles.text, styles.headerText]} />
					<Text style={[GlobalStyles.text, styles.headerText]}>Your case number is:</Text>
					<Text style={[GlobalStyles.text, styles.headerText]}>60325647</Text>
					<Text style={[GlobalStyles.text, styles.headerText]} />
					<Text style={[GlobalStyles.text, styles.headerText]} />
					<Text style={[GlobalStyles.text, styles.headerText]}>
						Your case number is save in your profile.
					</Text>
				</View>
				<View style={styles.content}>
					<Grid style={styles.viewActions}>
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="ios-home" onPress={this.onButtonPressHome}>
								Home
							</ButtonIcon>
						</Col>
						<LineUp />
						<Col style={{ height: 130 }}>
							<ButtonIcon icon="md-person" onPress={this.onButtonPressProfile}>
								Profile
							</ButtonIcon>
						</Col>
					</Grid>
				</View>
				<Footer />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	header: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 36
	},
	headerText: {
		fontSize: GlobalStyles.getAdjustedFontSize(20)
	},
	content: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	viewActions: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	}
};
