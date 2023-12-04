import { useState } from 'react'
import { Alert, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'

import Field from '@components/Field'
import Form from '@components/Form'
import { useNavigation } from '@react-navigation/native'

import { Formik } from 'formik'

import * as Yup from 'yup'

import { StackTypes } from 'App'

import * as C from './styled'

const { height, width } = Dimensions.get('window')

interface FormValuesProps {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const [security, setSecurity] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const navigation = useNavigation<StackTypes>()

  const initialValues: FormValuesProps = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Endereço de email invalido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('Senha requerida'),
  })

  const handleSubmitting = (values: FormValuesProps) => {
    Alert.alert(JSON.stringify(values))
  }

  return (
    <Form.Container>
      <C.Content>
        <C.Center>
          <C.Title>Bem vindo de volta!</C.Title>
          <C.Description>
            Você está a apenas um passo do seu feed.
          </C.Description>
        </C.Center>
      </C.Content>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitting}
      >
        {({
          values,
          errors,
          isValid,
          handleSubmit,
          handleChange,
          setFieldTouched,
          touched,
        }) => (
          <Form.Root>
            <Form.Header>
              <Form.Title>ENTRAR</Form.Title>
            </Form.Header>
            <Form.Content>
              <Field.Root style={{ marginBottom: Math.floor(height * 0.04) }}>
                {touched.email && errors.email && (
                  <Field.ErrorMessage>{errors.email}</Field.ErrorMessage>
                )}
                <Field.Label>Email</Field.Label>
                <Field.Input
                  style={{ width: '100%' }}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder="Digite seu e-mail"
                />
              </Field.Root>
              <Field.Root>
                {touched.password && errors.password && (
                  <Field.ErrorMessage>{errors.password}</Field.ErrorMessage>
                )}
                <Field.Label>Senha</Field.Label>
                <Field.Input
                  secureTextEntry={!security}
                  style={{ width: '90%' }}
                  placeholder="Coloque sua senha"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
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
                <Text style={{ marginLeft: 10, color: '#b8b7bc' }}>
                  Mantenha-me conectado
                </Text>
              </C.RememberMe>
              <TouchableOpacity>
                <Text style={{ fontWeight: 'bold', color: '#ff9400' }}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>
            </Form.Row>
            <Form.Action
              onPress={() => handleSubmit}
              disabled={!isValid || !values.email || !values.password}
              status={!values.email || !values.password}
            >
              ENTRAR
            </Form.Action>
            <C.SocialMedia>
              <C.Text style={{ marginBottom: Math.floor(height * 0.02) }}>
                Ou use a mídia social para fazer login
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
                  <FontAwesome5Brands
                    name="facebook"
                    color="#3165a3"
                    size={26}
                  />
                </C.Item>
              </C.List>
            </C.SocialMedia>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: Math.floor(height * 0.04),
              }}
            >
              <Text
                style={{
                  color: '#b8b7bc',
                }}
              >
                Não tem uma conta?
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: Math.floor(width * 0.01),
                }}
                onPress={() => navigation.navigate('signUp')}
              >
                <Text
                  style={{ color: '#7065ff', textDecorationLine: 'underline' }}
                >
                  Registre-se
                </Text>
              </TouchableOpacity>
            </View>
          </Form.Root>
        )}
      </Formik>
    </Form.Container>
  )
}

export default SignIn
