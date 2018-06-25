import { createStackNavigator } from 'react-navigation'

import MainScreen from '../screens/Main'
import StateScreen from '../screens/State'
import LocalScreen from '../screens/Local';

export default NavControl = createStackNavigator({
    Main: MainScreen,
    State: StateScreen,
    Local: LocalScreen
  
  })