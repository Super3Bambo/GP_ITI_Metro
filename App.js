import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from './src/Components/OnBoardring';
import EditProfile from './src/Components/EditProfile';
import Register from './src/Components/Register';
import TabNavigators from './src/Navigators/TabNavigators';
import PromiseMW from 'redux-promise';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import RootReducer from './src/Redux/reducers/index';
import Login from './src/Components/Login';
import Splash from './src/Components/Splash';
import { CommonActions } from '@react-navigation/native';

const Stack = createStackNavigator();
const createStoreWithMW = applyMiddleware(PromiseMW)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMW(RootReducer)}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Splash">
          <Stack.Screen name="onBoarding" component={OnBoarding} />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNav" component={TabNavigators} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
