import {createStackNavigator} from 'react-navigation';
import SplashScreen from '../Screen/SplashScreen';
import Login from '../Screen/LoginScreen'
import MainMenu from '../Screen/Home/MainTabNavigator'


const main = createStackNavigator({
    SplashScreen : {screen: SplashScreen},
    Login: {screen: Login},
    MainMenu: {screen: MainMenu}
},{
    headerMode:'none',
    initialRouteName: 'SplashScreen',
    navigationOptions:{

    },
    // Disable animation
    transitionConfig: () => ({ screenInterpolator: () => null }),
});

export default main;