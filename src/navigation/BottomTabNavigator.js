import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Strings from '../locale';
import Theme from '../assets/theme';
import Home from '../screens/Home';
import DebitCard from '../screens/DebitCard';
import Payments from '../screens/Payments';
import Credit from '../screens/Credit';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name={Strings.home}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => renderLabel(focused, Strings.home),
          tabBarIcon: ({focused}) =>
            renderIcon(focused, require('../assets/images/icons/Home.png')),
        }}
      />
      <Tab.Screen
        name={Strings.debit_card}
        component={DebitCard}
        options={{
          tabBarLabel: ({focused}) => renderLabel(focused, Strings.debit_card),
          tabBarIcon: ({focused}) =>
            renderIcon(focused, require('../assets/images/icons/Card.png')),
        }}
      />
      <Tab.Screen
        name={Strings.payments}
        component={Payments}
        options={{
          tabBarLabel: ({focused}) => renderLabel(focused, Strings.payments),
          tabBarIcon: ({focused}) =>
            renderIcon(focused, require('../assets/images/icons/Payments.png')),
        }}
      />
      <Tab.Screen
        name={Strings.credit}
        component={Credit}
        options={{
          tabBarLabel: ({focused}) => renderLabel(focused, Strings.credit),
          tabBarIcon: ({focused}) =>
            renderIcon(focused, require('../assets/images/icons/Credit.png')),
        }}
      />
      <Tab.Screen
        name={Strings.profile}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => renderLabel(focused, Strings.profile),
          tabBarIcon: ({focused}) =>
            renderIcon(focused, require('../assets/images/icons/Account.png')),
        }}
      />
    </Tab.Navigator>
  );
};

const renderLabel = (focused, label) => {
  return (
    <View style={styles.labelContainerStyle}>
      <Text
        style={{
          color: focused ? Theme.COLORS.PRIMARY : Theme.COLORS.MUTED,
        }}>
        {label}
      </Text>
    </View>
  );
};

const renderIcon = (focused, image) => {
  return (
    <Image
      style={focused ? styles.activeTabIconStyle : styles.defaultTabIcon}
      source={image}
    />
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  defaultTabIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: Theme.COLORS.MUTED,
  },
  activeTabIconStyle: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: Theme.COLORS.PRIMARY,
  },
  labelContainerStyle: {
    borderBottomWidth: 0,
    flex: 1,
    width: 100,
    alignItems: 'center',
    borderBottomColor: 'transparent',
  },
  tabBarStyle: {
    backgroundColor: Theme.COLORS.WHITE,
    height: 70,
  },
});
