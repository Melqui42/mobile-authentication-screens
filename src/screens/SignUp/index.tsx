import { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Field from '@components/Field'
import Form from '@components/Form'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from 'App'

import * as C from './styled'

const { height } = Dimensions.get('window')
const SignUp = () => {
  const [security, setSecurity] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const navigation = useNavigation<StackTypes>()

  return (
    <C.Screen>
      <C.StyledStatusBar />
      <C.Content>
        <C.Center>
          <C.Top>
            <C.Title>Hey There!</C.Title>
            <C.Description>Are you new here?</C.Description>
            <C.Description>
              You are just one step away to your feed.
            </C.Description>
          </C.Top>
          <C.CreateAccount>
            <C.Text
              style={{
                marginBottom: Math.floor(height * 0.02),
                marginTop: Math.floor(height * 0.02),
              }}
            >
              Already have an account?
            </C.Text>
            <C.SignUpButton onPress={() => navigation.navigate('SignIn')}>
              <C.SignUpButtonText>SIGN IN</C.SignUpButtonText>
            </C.SignUpButton>
          </C.CreateAccount>
        </C.Center>
      </C.Content>
      <Form.Root>
        <Form.Header>
          <Form.Title>SIGN UP</Form.Title>
        </Form.Header>
        <Form.Content>
          <Field.Root style={{ marginBottom: Math.floor(height * 0.04) }}>
            <Field.Label>Name</Field.Label>
            <Field.Input
              style={{ width: '100%' }}
              placeholder="Enter your name"
            />
          </Field.Root>
          <Field.Root style={{ marginBottom: Math.floor(height * 0.04) }}>
            <Field.Label>Email</Field.Label>
            <Field.Input
              style={{ width: '100%' }}
              placeholder="Enter your email"
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Field.Input
              secureTextEntry={!security}
              style={{ width: '90%' }}
              placeholder="Enter your password"
            />
            <Field.Action
              onPress={() => setSecurity(!security)}
              security={security}
            />
          </Field.Root>
        </Form.Content>
        <Form.Row>
          <C.RememberMe>
            <C.CheckBox
              checkColor={rememberMe}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <FontAwesome name="check" size={16} color="white" />
              ) : (
                ''
              )}
            </C.CheckBox>
            <C.Label>
              I agree to the{' '}
              <Text
                style={{ color: '#664fff', textDecorationLine: 'underline' }}
              >
                terms & conditions
              </Text>{' '}
              and{' '}
              <Text
                style={{ color: '#664fff', textDecorationLine: 'underline' }}
              >
                privacy policy
              </Text>
            </C.Label>
          </C.RememberMe>
        </Form.Row>
        <Form.Action>CONTINUE</Form.Action>
      </Form.Root>
    </C.Screen>
  )
}

export default SignUp
