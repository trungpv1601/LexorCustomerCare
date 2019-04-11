import React, { Component } from 'react';
import {
	TouchableWithoutFeedback,
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	TextInput,
	KeyboardAvoidingView,
	Dimensions,
	ScrollView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Actions } from 'react-native-router-flux';
import { ButtonIcon, Link, Button, LineFlat } from '../../components';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/Colors';

const window = Dimensions.get('window');

export default class CustomerMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: ''
		};
	}

	callCustomerCare(url) {
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		});
	}

	handlePressCancel = () => {
		Actions.contactCustomerCare();
	};

	handlePressSend = () => {
		Actions.customerMessageDone();
	};

	render() {
		return (
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
				<View style={styles.container}>
					<KeyboardAvoidingView style={styles.viewContent} behavior="padding">
						<View style={styles.viewLogo}>
							<Image
								style={styles.imageLogo}
								source={require('../../images/lexor_logo_black.png')}
							/>
						</View>
						<Text style={GlobalStyles.text}>Business Name: Purely Polish Nails</Text>
						<Text style={GlobalStyles.text}>Address: 9658 Beach Blvd,</Text>
						<Text style={GlobalStyles.text}>Westminster, CA 92342</Text>
						<Text style={GlobalStyles.text}>Customer Name: Thanh Nguyen</Text>
						<Text style={GlobalStyles.text}>Business #: 714-595-6279</Text>
						<Text style={GlobalStyles.text}>Mobile #: 714-564-9865</Text>
						<Text style={GlobalStyles.text}>Email: ThanhN@PPNails.com</Text>
					</KeyboardAvoidingView>
					<KeyboardAvoidingView style={styles.viewConfirm} behavior="padding">
						<LineFlat />
						<Text style={GlobalStyles.text}>
							Describe a brief problem of your product.
						</Text>
						<Text style={GlobalStyles.text}>
							Add photos & video for better understanding.
						</Text>
						<Text style={[GlobalStyles.text, styles.textToCustomerCare]}>
							To Customer Care
						</Text>
						<LineFlat />
						<TextInput
							multiline={true}
							scrollEnabled={true}
							style={styles.multiline}
							numberOfLines={4}
							maxLength={200}
							onChangeText={(text) => {
								this.setState({ feedback: text });
							}}
							value={this.state.feedback}
						/>
						<TouchableOpacity style={styles.touchAddPhotosVideo}>
							<Icon name="ios-share" size={25} color={Colors.LINK} />
							<Text style={[GlobalStyles.text, styles.textAddPhotosVideo]}>
								Add photos & video
							</Text>
						</TouchableOpacity>
						<Grid style={styles.gridButton}>
							<Col>
								<Button onPress={this.handlePressCancel}>Cancel</Button>
							</Col>
							<Col>
								<Button onPress={this.handlePressSend}>Send</Button>
							</Col>
						</Grid>
					</KeyboardAvoidingView>
					<KeyboardSpacer />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: Colors.BACKGROUND
	},
	viewContent: {
		flex: 0.35,
		backgroundColor: '#fff'
	},
	viewConfirm: {
		flex: 0.65,
		backgroundColor: Colors.BACKGROUND
	},
	textAddPhotosVideo: {
		color: '#fff',
		marginLeft: 10,
		marginTop: 7
	},
	touchAddPhotosVideo: {
		height: 30,
		flexDirection: 'row',
		marginBottom: 10,
		alignSelf: 'flex-start',
		paddingLeft: 10
	},
	gridButton: {
		height: 35
	},
	multiline: {
		flex: 1,
		fontSize: GlobalStyles.getAdjustedFontSize(16),
		padding: 5,
		borderWidth: 1,
		borderColor: Colors.TEXT,
		backgroundColor: '#fff',
		borderRadius: 5,
		marginHorizontal: 10,
		marginVertical: 10,
		width: window.width - 20,
		maxHeight: 100,
		minHeight: 100,
		textAlignVertical: 'top'
	},
	imageLogo: {
		width: 140,
		height: 41
	},
	viewLogo: {
		padding: 10,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	textToCustomerCare: {
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: GlobalStyles.getAdjustedFontSize(18),
		marginTop: 10
	}
};
