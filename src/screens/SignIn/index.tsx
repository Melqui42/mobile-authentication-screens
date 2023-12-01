import { useState } from 'react'
import { Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'

import Field from '@components/Field'
import Form from '@components/Form'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from 'App'

import * as C from './styled'

const { height, width } = Dimensions.get('window')

const SignIn: React.FC = () => {
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
            <C.Description>Welcome Back.</C.Description>
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
              Don&apos;t have on account?
            </C.Text>
            <C.SignUpButton onPress={() => navigation.navigate('SignUp')}>
              <C.SignUpButtonText>SIGN UP</C.SignUpButtonText>
            </C.SignUpButton>
          </C.CreateAccount>
        </C.Center>
      </C.Content>
      <Form.Root>
        <Form.Header>
          <Form.Title>SIGN IN</Form.Title>
        </Form.Header>
        <Form.Content>
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
            <C.Label>Keep me logged in</C.Label>
          </C.RememberMe>
          <C.ForgotPassword>
            <C.ForgotPasswordText>Forgot password?</C.ForgotPasswordText>
          </C.ForgotPassword>
        </Form.Row>
        <Form.Action>LOGIN</Form.Action>
        <C.SocialMedia>
          <C.Text style={{ marginBottom: Math.floor(height * 0.02) }}>
            Or, Use socil media to sign in
          </C.Text>
          <C.List>
            <C.Item>
              <C.Image source={require('@assets/google-icon.png')} />
            </C.Item>
            <C.Item>
              <AntDesign
                name="github"
                color="#484848"
                size={26}
                style={{
                  marginLeft: Math.floor(width * 0.06),
                  marginRight: Math.floor(width * 0.06),
                }}
              />
            </C.Item>
            <C.Item>
              <FontAwesome5Brands name="facebook" color="#3165a3" size={26} />
            </C.Item>
          </C.List>
        </C.SocialMedia>
      </Form.Root>
    </C.Screen>
  )
}

export default SignIn
