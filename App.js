
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Component/Screen1';
import Screen2 from './Component/Screen2';
import Otp from './Component/Otp';
import Screen3 from './Component/Screen3';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" options={{headerShown:false}} component={Screen1} />
        <Stack.Screen name="Screen2" options={{headerShown:false}} component={Screen2} />
        <Stack.Screen name="Screen3" options={{headerShown:false}} component={Screen3} />
        <Stack.Screen name="Otp" options={{headerShown:false}} component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;