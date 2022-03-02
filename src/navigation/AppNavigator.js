import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../assets/theme/colors';
import SpendLimit from '../screens/SpendLimit'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen name="SpendLimit" component={SpendLimit} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
  },
});
