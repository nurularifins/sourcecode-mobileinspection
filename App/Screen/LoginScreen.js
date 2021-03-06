import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';

import FormLogin from '../Component/FormLogin'
import { connect } from 'react-redux';
import AuthAction from '../Redux/AuthRedux';
import { ProgressDialog } from 'react-native-simple-dialogs';
import { NavigationActions, StackActions  } from 'react-navigation';
import Colors from '../Constant/Colors';
import {isNil } from 'ramda';

var Realm = require('realm'); 
let realm ;

class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fetching: false,
            user_id:'',
            user_name:'',
            token:'',
            imei: require('react-native-imei')
        }

        realm = new Realm({
            schema: [{name: 'trn_login', 
            primaryKey:'NIK',
            properties: 
            {
                NIK: 'string',
                ACCESS_TOKEN: 'string',
                JOB_CODE: 'string', 
                LOCATION_CODE: 'string',
                REFFERENCE_ROLE: 'string',
                USERNAME: 'string', 
                USER_AUTH_CODE: 'string',
                USER_ROLE: 'string', 
            }}]
        });
    }

    static navigationOptions = {
        header: null,        
    }

    // insertUser=()=>{
    //     realm.write(() => {    
    //         realm.create('trn_login', {
    //             NIK: 'string',
    //             ACCESS_TOKEN: 'string',
    //             JOB_CODE: 'string', 
    //             LOCATION_CODE: 'string',
    //             REFFERENCE_ROLE: 'string',
    //             USERNAME: 'string', 
    //             USER_AUTH_CODE: 'string',
    //             USER_ROLE: 'string', 
    //         });          
    //     });     
    //   }

    componentWillReceiveProps(newProps) {
		if (!isNil(newProps.auth)) {
			this.setState({ fetching: newProps.auth.fetching });
        }
		if (!isNil(newProps.auth.user)) {
            // console.log(newProps.auth.user);
            // console.log(newProps.auth.user.ACCESS_TOKEN);
            // this.setState({token:newProps.auth.user.ACCESS_TOKEN});
            // this.insertUser;
            this.navigateScreen('MainMenu');
            // var ID = realm.objects('trn_login').length + 1;
            // Alert.alert(ID+'');
            // console.log(ID);

		}
    }

    navigateScreen(screenName) {
        const navigation = this.props.navigation;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screenName })],
        });
        navigation.dispatch(resetAction);
	}

    onLogin(username, password) {
        Keyboard.dismiss();
		this.props.authRequest({
            username: username,
            password: password
        });
        
        // this.navigateScreen('MainMenu');
	}

    render() {
        return (
            <ImageBackground source={require('../Images/background_login.png')} style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <StatusBar hidden={true} backgroundColor={Colors.tintColor}  barStyle="light-content" />
                    {/* <FormLogin
                        onBtnClick={data => {
                            console.log(data)
                            this.props.navigation.navigate('MainTabs')
                        }} /> */}
                    <FormLogin
                        onBtnClick={data=>{this.onLogin(data.strEmail, data.strPassword)}}/>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>{'\u00A9'} 2018 Triputra Agro Persada. All Rights Reserved.</Text>
                    </View>
                    <ProgressDialog
                        visible={this.state.fetching}
                        activityIndicatorSize="large"
                        message="Loading..."
                    />
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		authRequest: obj => dispatch(AuthAction.authRequest(obj))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerView: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    footerText: {
        color: '#51a977',
        fontSize: 12,
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    }
});

