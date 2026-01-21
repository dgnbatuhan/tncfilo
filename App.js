import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Sayfalarımızı birazdan oluşturacağız
import LoginScreen from './screens/LoginScreen';
// App.js içinde
import AddServiceScreen from './screens/AddServiceScreen';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Araç Listesi' }} />
        <Stack.Screen name="AddService" component={AddServiceScreen} options={{ title: 'Servis Ekle' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Araç Detayı' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}