
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import HistoryFinding from './HistoryFinding';
import ListFinding from './ListFinding';

const FindingTabs = createMaterialTopTabNavigator({

  Riwayat: {
    screen: HistoryFinding,
    headerMode: 'none',
    navigationOptions: {
      headerMode: 'none',
      tabBarLabel: 'Riwayat'
    }
  },
  DaftarInspeksi: {
    headerMode: 'none',
    screen: ListFinding,
    navigationOptions: {
      headerMode: 'none',
      tabBarLabel: 'Daftar Finding'
    }
  }
}, {
    headerMode: "none",
    initialRouteName: 'DaftarInspeksi',
    order: ['DaftarInspeksi', 'Riwayat'],
    // tabBarPosition:'bottom',
    swipeEnabled: false,
    // Optional: Override the `navigationOptions` for the screen
    tabBarOptions: {
      activeTintColor: '#51A977',
      inactiveTintColor: 'grey',
      style: { backgroundColor: 'white' },
      indicatorStyle: {
        backgroundColor: '#2db92d',
      },
      showIcon: true,
    }
  });

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ FindingTabs }, { headerMode: "none" });

// const RiwayatStack = createStackNavigator({
//   Riwayat: HistoryInspection,
// });

// RiwayatStack.navigationOptions = {
//   tabBarLabel: 'Riwayat'
// };

// const DaftarInspeksiStack = createStackNavigator({
//   DaftarInspeksi: ListInspection,
// });

// DaftarInspeksiStack.navigationOptions = {
//   tabBarLabel: 'Daftar Inspeksi'
// };

// export default (
//   InspectionTabNavigator = createMaterialTopTabNavigator({
//     DaftarInspeksiStack,
//     RiwayatStack,
//   }, {
//       headerMode: 'none',
//       tabBarOptions: {
//         activeTintColor: '#51A977',
//         inactiveTintColor: 'grey',
//         style: { backgroundColor: 'white' },
//         indicatorStyle: {
//           backgroundColor: '#2db92d',
//         }
//       }
//     }
//   ));

