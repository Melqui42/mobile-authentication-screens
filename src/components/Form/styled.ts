import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const { height } = Dimensions.get('window')

export const Root = styled.View`
  width: 100%;
  height: 577px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50px 50px 0px 0px;
`
export const Center = styled.View`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const Header = styled.View`
  margin-bottom: ${Math.floor(height * 0.04)};
`
export const Title = styled.Text`
  color: #7065ff;
  font-size: 22px;
  font-weight: bold;
`
export const Content = styled.View``
export const Row = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: ${Math.floor(height * 0.02)};
  margin-bottom: ${Math.floor(height * 0.02)};
  justify-content: space-between;
`
export const Action = styled.TouchableOpacity`
  width: 100%;
  color: #ffffff;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #7065ff;
  height: ${Math.floor(height * 0.08)};
  margin-top: ${Math.floor(height * 0.02)};
  margin-bottom: ${Math.floor(height * 0.02)};
`
export const ActionText = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
`
