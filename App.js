import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SearchScreen from './src/screen/SearchScreen';
import DetailScreen from './src/screen/DetailScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Business Screen" component={SearchScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;