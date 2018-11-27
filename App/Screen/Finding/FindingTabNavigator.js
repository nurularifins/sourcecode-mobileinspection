
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import HistoryFinding from './HistoryFinding';
import ListFinding from './ListFinding';
import BuatInspeksi from '../Inspeksi/BuatInspeksi'

const indicator = e => {
  return (
    <View
      style={{
        width: 30,
        backgroundColor: "#2db92d",
        top: 0,
        height: 1
      }}
    />
  );
};

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
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#51A977',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopColor: "transparent",
        elevation: 0,
        marginTop: -20
      },
      indicatorStyle: {
        backgroundColor: '#2db92d',
        width: 15,
        maxWidth: 15,
        marginStart: '23%'
      },
      showIcon: true,
    }
  });


export default createStackNavigator({ FindingTabs, BuatInspeksi: { screen: BuatInspeksi } }, { headerMode: "none" });


