import {
    createStackNavigator,
} from 'react-navigation';


import InspectionNavigator from './InspectionTabNavigator';
import HistoryInspection from './HistoryInscpection';
import ListInspection from './ListInspection';
import BuatInspeksi from './BuatInspeksi'
import KondisiBarisMain from './KondisiBarisMain'

const routes = createStackNavigator({
    InspectionNavigator : {screen: InspectionNavigator},
    HistoryInspection : {screen: HistoryInspection},
    ListInspection: {screen: ListInspection},
    BuatInspeksi : {screen: BuatInspeksi}

}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'InspectionNavigator',
    navigationOptions: {
        //headerStyle: styles.header
    },
    // Disable animation
    transitionConfig: () => ({ screenInterpolator: () => null }),
});

export default routes;