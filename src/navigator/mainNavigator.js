import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen72167009Navigator from '../features/BlankScreen72167009/navigator';
import BlankScreen71167008Navigator from '../features/BlankScreen71167008/navigator';
import UserProfile166998Navigator from '../features/UserProfile166998/navigator';
import Tutorial166997Navigator from '../features/Tutorial166997/navigator';
import NotificationList166969Navigator from '../features/NotificationList166969/navigator';
import Settings166968Navigator from '../features/Settings166968/navigator';
import Settings166960Navigator from '../features/Settings166960/navigator';
import UserProfile166958Navigator from '../features/UserProfile166958/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen72167009: { screen: BlankScreen72167009Navigator },
BlankScreen71167008: { screen: BlankScreen71167008Navigator },
UserProfile166998: { screen: UserProfile166998Navigator },
Tutorial166997: { screen: Tutorial166997Navigator },
NotificationList166969: { screen: NotificationList166969Navigator },
Settings166968: { screen: Settings166968Navigator },
Settings166960: { screen: Settings166960Navigator },
UserProfile166958: { screen: UserProfile166958Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
