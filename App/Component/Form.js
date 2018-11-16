import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  KeyboardAvoidingView,
  Keyboard, Alert, Image
} from 'react-native';
import PropTypes from 'prop-types';

class Form extends Component{

    // Prop type warnings
    static propTypes = {
		onBtnClick: PropTypes.func,
	};

	// Defaults for props
	static defaultProps = {
		onBtnClick: () => {},
	};

    constructor(){
        super();
        this.state={
            strEmail: '',
			strPassword: '',
        }
    }

    makeAlert(msg) {
		Alert.alert('Peringatan', msg, [
			{
				text: 'OK'
			}], { cancelable: false })
    }
    
    onBtnClick(props){
        Keyboard.dismiss();
        switch(true){
            case this.state.strEmail === '':
                this.makeAlert('Email tidak boleh kosong');
                break;
            case this.state.strPassword === '':
                this.makeAlert('Password tidak boleh kosong');
            default:
                props.onBtnClick({
                    ...this.state
                });
                // this.setState({
                //     strEmail:'',
                //     strPassword:''
                // });
            break;
        }
    }

    render(){
        
		const props = this.props;
        return(
            <View style={styles.container}>

                <Text style={[styles.tapText,{marginLeft:20, marginRight:20}]}>PT TRIPUTRA ARGO PERSADA</Text>
                <Text style={[styles.appText, {marginLeft:20, marginRight:20}]}>Mobile Inspection</Text>

                <View style={styles.sectionInput}>
                    <Image source={require('../Images/icon/ic_login.png')} style={styles.iconInput} />
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#068D0D"
                        selectionColor="#068D0D"
                        keyboardType="email-address"
                        onChangeText={(strEmail) => { this.setState({ strEmail: strEmail }) }}
                        value={this.state.strEmail}
                        onSubmitEditing={() => this.password.focus()} />
                </View>

                <View style={styles.sectionInput}>
                    <Image source={require('../Images/icon/ic_password.png')} style={styles.iconInput} />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#068D0D"
                        onChangeText={(strPassword) => { this.setState({ strPassword: strPassword }) }}
                        value={this.state.strPassword}
                        ref={(input) => this.password = input} />
                </View>
                
                <TouchableOpacity style={[styles.button,{marginTop:20}]}
                    onPress={() => this.onBtnClick(props)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>     
            </View>
            
        );
    }
}

export default Form

const styles = StyleSheet.create({

    container: {
        flexGrow: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
    },
    tapText: {
        height: 41,
        fontSize: 20,
        color: '#FFFFFF'
    },
    appText: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#FFFFFF',
    },
    sectionInput: {
        width: 280,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.67,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        marginVertical: 10
    },
    iconInput: {
        padding: 10,
        marginLeft: 80,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    inputBox: {
        width: 320,
        height: 42,
        fontSize: 16,
        color: '#068D0D',
        textAlign: "left",
        paddingVertical: 10,

    },
    button: {
        width: 280,
        height: 48,
        backgroundColor: '#068D0D',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});