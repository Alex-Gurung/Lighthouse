import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Victim from '../screens/Victim';
import Host from '../screens/Host';
// import Home from '../screens/Home';

export const Tabs = TabNavigator({
  Victim: {
    screen: Victim,
    navigationOptions: {
      tabBar: {
        label: 'Victim',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
  Host: {
    screen: Host,
    navigationOptions: {
      tabBar: {
        label: 'Host',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});