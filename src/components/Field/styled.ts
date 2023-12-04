import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const { height } = Dimensions.get('window')

export const Root = styled.View`
  width: 100%;
  display: flex;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  border: 3px solid #7065ff;
  justify-content: flex-end;
`
export const Label = styled.Text`
  top: -12px;
  left: 15px;
  color: #7065ff;
  padding: 0px 5px;
  position: absolute;
  background-color: #ffffff;
`
export const ErrorContainer = styled.View`
  top: -30px;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
`
export const ErrorMessage = styled.Text`
  color: #ff0000;
  font-size: 16px;
  text-align: right;
`
export const Input = styled.TextInput`
  height: ${Math.floor(height * 0.05)};
  color: #7065ff;
`
export const Action = styled.TouchableOpacity`
  width: 10%;
  color: #7065ff;
  display: flex;
  align-items: center;
  justify-content: center;
`
