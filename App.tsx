import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import SignIn from '@screens/SignIn'
import SignUp from '@screens/SignUp'

const Stack = createStackNavigator()

type StackNavigation = {
  SignIn: undefined
  SignUp: undefined
}

export type StackTypes = StackNavigationProp<StackNavigation>

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
