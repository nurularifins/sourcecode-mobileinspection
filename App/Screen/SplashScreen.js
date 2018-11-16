
import React, {Component} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {Container} from 'native-base'
import { NavigationActions, StackActions  } from 'react-navigation';
// import Realm from 'realm'

class SplashScreen extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
    }

    navigateScreen(screenName) {
        const navigation = this.props.navigation;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screenName })],
        });
        navigation.dispatch(resetAction);
	}

    componentDidMount(){
        setTimeout(() => {
            this.navigateScreen('Login');
        }, 2000)
    }
    

    render(){
        return(
            <Container>
                <StatusBar
                    hidden={true}
                    barStyle="light-content"
                />
                <ImageBackground source={require('../Images/splash.png')} style={{ flex: 1 }} />
                
            </Container>
            
        )
    }
}

export default SplashScreen;
