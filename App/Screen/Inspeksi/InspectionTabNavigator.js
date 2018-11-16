
import { createMaterialTopTabNavigator } from 'react-navigation';

import HistoryInspection from './HistoryInscpection';
import ListInspection from './ListInspection';

export default createMaterialTopTabNavigator({

  Riwayat: {
    screen: HistoryInspection,
    navigationOptions: {
      tabBarLabel: 'Riwayat'
    }
  },
  DaftarInspeksi: {
    screen: ListInspection,
    navigationOptions: {
      tabBarLabel: 'Daftar Inspeksi'
    }
  }
}, {
    navigationOptions: {
      header: {
        visible: true
      }
    },
    initialRouteName: 'DaftarInspeksi',
    order: ['DaftarInspeksi', 'Riwayat'],
    // tabBarPosition:'bottom',
    swipeEnabled: false,
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

