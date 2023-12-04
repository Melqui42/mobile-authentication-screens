import { useState } from 'react'
import { Alert, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Field from '@components/Field'
import Form from '@components/Form'
import { useNavigation } from '@react-navigation/native'

import { Formik } from 'formik'

import * as Yup from 'yup'

import { StackTypes } from 'App'

import * as C from './styled'

const { height, width } = Dimensions.get('window')

interface FormValuesProps {
  name: string
  email: string
  password: string
}

const SignUp = () => {
  const [security, setSecurity] = useState<boolean>(false)
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

  const navigation = useNavigation<StackTypes>()

  const initialValues: FormValuesProps = {
    name: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Nome requerido'),
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
          <C.Title>Mais de 600 mil boosters já estão conectados.</C.Title>
          <C.Description>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos
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
              <Form.Title>CRIE SUA CONTA</Form.Title>
            </Form.Header>
            <Form.Content>
              <Field.Root style={{ marginBottom: Math.floor(height * 0.04) }}>
                {touched.name && errors.name && (
                  <Field.ErrorMessage>{errors.name}</Field.ErrorMessage>
                )}
                <Field.Label>Nome</Field.Label>
                <Field.Input
                  style={{ width: '100%' }}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="Digite seu nome"
                />
              </Field.Root>
              <Field.Root style={{ marginBottom: Math.floor(height * 0.04) }}>
                {touched.email && errors.email && (
                  <Field.ErrorMessage>{errors.email}</Field.ErrorMessage>
                )}
                <Field.Label>E-mail</Field.Label>
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
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Coloque sua senha"
                />
                <Field.Action
                  onPress={() => setSecurity(!security)}
                  security={security}
                />
              </Field.Root>
            </Form.Content>
            <Form.Row>
              <C.AcceptTerms>
                <C.CheckBox
                  checkColor={acceptTerms}
                  onPress={() => setAcceptTerms(!acceptTerms)}
                >
                  {acceptTerms ? (
                    <FontAwesome name="check" size={16} color="white" />
                  ) : (
                    ''
                  )}
                </C.CheckBox>
                <C.Label>
                  Estou de acordo com{' '}
                  <Text
                    style={{
                      color: '#664fff',
                      textDecorationLine: 'underline',
                    }}
                  >
                    termos e Condições
                  </Text>{' '}
                  e{' '}
                  <Text
                    style={{
                      color: '#664fff',
                      textDecorationLine: 'underline',
                    }}
                  >
                    política de Privacidade
                  </Text>
                </C.Label>
              </C.AcceptTerms>
            </Form.Row>
            <Form.Action
              onPress={() => handleSubmit}
              disabled={
                !isValid ||
                !acceptTerms ||
                !values.name ||
                !values.email ||
                !values.password
              }
              status={
                !acceptTerms ||
                !values.name ||
                !values.email ||
                !values.password
              }
            >
              CONTINUAR
            </Form.Action>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#b8b7bc',
                }}
              >
                Já tem uma conta?
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: Math.floor(width * 0.01),
                }}
                onPress={() => navigation.navigate('signIn')}
              >
                <Text
                  style={{ color: '#7065ff', textDecorationLine: 'underline' }}
                >
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
          </Form.Root>
        )}
      </Formik>
    </Form.Container>
  )
}

export default SignUp
