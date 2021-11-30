import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatsTab from './ChatsTab';
import ChatHistory from './ChatHistory';
const Stack = createStackNavigator();

const TestChatsTab = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="ChatsTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChatsTab" component={ChatsTab} />
        <Stack.Screen name="ChatHistory" component={ChatHistory} />
      </Stack.Navigator>
    </>
  );
};

export default TestChatsTab;
