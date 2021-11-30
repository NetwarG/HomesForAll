import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import searchScreenReducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const Stack = createStackNavigator();


const store = createStore(
    searchScreenReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);
const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AuthScreen"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);

export default App;