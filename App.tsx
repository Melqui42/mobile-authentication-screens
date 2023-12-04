import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import SignIn from '@screens/SignIn'
import SignUp from '@screens/SignUp'

const Stack = createStackNavigator()

type StackNavigation = {
  signIn: undefined
  signUp: undefined
}

export type StackTypes = StackNavigationProp<StackNavigation>

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signIn">
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signUp"
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
