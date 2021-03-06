import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchTab from './SearchTab';
import SearchList from './SearchList';
const Stack = createStackNavigator();
const TestSearchTab = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="SearchPreferences"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SearchPreferences" component={SearchTab} />
        <Stack.Screen name="SearchList" component={SearchList} />
      </Stack.Navigator>
    </>
  );
};

export default TestSearchTab;
