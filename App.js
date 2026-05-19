import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './screens/Auth';
import Home from './screens/Home';
import CreatePost from './screens/CreatePost';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ title: 'New Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}