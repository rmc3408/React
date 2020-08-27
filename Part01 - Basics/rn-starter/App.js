import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CompScreen from './src/screens/Component';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: CompScreen
  },
  {
    initialRouteName: 'Component',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
