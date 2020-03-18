import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import screens from '../screens'

const AppNavigator = createStackNavigator({
  Home: {
    screen: screens.HomeScreen,
    navigationOptions: () => {
      return {
        header: null,
      }
    },
  },
  MasonryListScreen: {
    screen: screens.MasonryListScreen,
    navigationOptions: () => {
      return {
        header: null,
      }
    },
  },
})

export default createAppContainer(AppNavigator)