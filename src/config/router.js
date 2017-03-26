import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Victim from '../screens/Victim';
import Host from '../screens/Host';
import Splash from '../components/Splash/Splash'
// import Home from '../screens/Home';

export const Tabs = TabNavigator({
    Victim: {

        screen: Victim,
        navigationOptions: {
            tabBar: {
                label: 'Guest',
                icon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
            }
        }
    },
    Host: {
        screen: Host,
        navigationOptions: {
            tabBar: {
                label: 'Host',
                icon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
            }
        }
    }
}, {
    tabBarOptions: {
        // activeTintColor: '#e91e63',
        style: {
            backgroundColor: 'black',
            height: 50,
            padding: 0,
            margin: 0,
        }
    }
});
// const MyApp = TabNavigator({
//     Home: {
//         screen: MyHomeScreen
//     },
//     Notifications: {
//         screen: MyNotificationsScreen
//     }
// }, {
//     tabBarOptions: {
//         activeTintColor: '#e91e63'
//     }
// })
export const Root = StackNavigator({
    Splash: {
        screen: Splash
    },
    Tabs: {
        screen: Tabs
    }
}, {
    mode: 'modal',
    headerMode: 'none'
});