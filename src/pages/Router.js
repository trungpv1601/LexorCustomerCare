import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './Home';
import ScanSerialToRegister from './ScanSerialToRegister';
import CustomerInfo from './CustomerInfo';
import ContactCustomerCare from './ContactCustomerCare';
import Register from './Register';
import RegisterPhone from './RegisterPhone';
import VerificationCode from './VerificationCode';
import VerCodeThankYou from './VerCodeThankYou';
import TypeSerialNumber from './TypeSerialNumber';
import RequestConfirm from './RequestConfirm';
import RegisterMoreInfo from './RegisterMoreInfo';
import ProfileRegistered from './ProfileRegistered';
import HomeWithProfile from './HomeWithProfile';
import NoHistory from './NoHistory';
import RegisterConfirmation from './RegisterConfirmation';
import CustomerProfile from './CustomerProfile';
import CustomerMessage from './CustomerMessage';
import CustomerMessageDone from './CustomerMessageDone';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{}} hideNavBar={true}>
			<Stack key="root" hideNavBar>
				<Scene key="home" component={Home} title="Home" />
				<Scene
					key="scanSerialToRegister"
					component={ScanSerialToRegister}
					title="ScanSerialToRegister"
				/>
				<Scene
					key="typeSerialNumber"
					component={TypeSerialNumber}
					title="Type Serial Number"
				/>
				<Scene key="requestConfirm" component={RequestConfirm} title="Request Confirm" />
				<Scene key="customerInfo" component={CustomerInfo} title="CustomerInfo" />
				<Scene
					key="contactCustomerCare"
					component={ContactCustomerCare}
					title="ContactCustomerCare"
				/>
				<Scene key="register" component={Register} title="Register" />
				<Scene key="registerPhone" component={RegisterPhone} title="Register Phone" />
				<Scene
					key="verificationCode"
					component={VerificationCode}
					title="Verification Code"
				/>
				<Scene key="verCodeThankYou" component={VerCodeThankYou} title="Thank You" />
				<Scene
					key="registerMoreInfo"
					component={RegisterMoreInfo}
					title="RegisterMoreInfo"
				/>
				<Scene
					key="profileRegistered"
					component={ProfileRegistered}
					title="ProfileRegistered"
				/>
				<Scene key="homeWithProfile" component={HomeWithProfile} title="HomeWithProfile" />
				<Scene key="noHistory" component={NoHistory} title="NoHistory" />
				<Scene
					key="registerConfirmation"
					component={RegisterConfirmation}
					title="RegisterConfirmation"
				/>
				<Scene key="customerProfile" component={CustomerProfile} title="CustomerProfile" />
				<Scene key="customerMessage" component={CustomerMessage} title="CustomerMessage" />
				<Scene
					key="customerMessageDone"
					component={CustomerMessageDone}
					title="CustomerMessageDone"
				/>
			</Stack>
		</Router>
	);
};

export default RouterComponent;
