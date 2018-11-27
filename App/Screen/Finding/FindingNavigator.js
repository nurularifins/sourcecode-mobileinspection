import { createSwitchNavigator } from 'react-navigation';

import FindingTabNavigator from './FindingTabNavigator';

export default createSwitchNavigator({
  Main: FindingTabNavigator,
});