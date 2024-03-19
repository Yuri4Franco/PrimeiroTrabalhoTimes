import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home/Home';
import TelaTime from './src/TelasTime/TelaTime';

const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>

        <Stack.Screen component={Home} name="Home"/>
        <Stack.Screen component={TelaTime} name="TelaTime"/>
    
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
