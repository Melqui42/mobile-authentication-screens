import { StatusBar, Dimensions } from 'react-native'

import styled from 'styled-components/native'

const StatusBarHeight = StatusBar.currentHeight || 0

const { height } = Dimensions.get('window')

export const StyledStatusBar = styled(StatusBar).attrs({
  barStyle: 'light-content',
  translucent: true,
  backgroundColor: '#664fff',
})``

export const Screen = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #664fff;
  padding-top: ${StatusBarHeight}px;
`
export const Content = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`
export const Center = styled.View`
  width: 90%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: ${Math.floor(height * 0.045)}px;
`
export const Description = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: ${Math.floor(height * 0.025)}px;
  margin-top: ${Math.floor(height * 0.015)}px;
`
export const AcceptTerms = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const CheckBox = styled.TouchableOpacity<{ checkColor: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.checkColor ? '#0075FF' : 'transparent'};
  border: 2px solid ${(props) => (props.checkColor ? '#0075FF' : '#a5a0a4')};
`
export const Label = styled.Text`
  color: #b8b7bc;
  margin-left: 5px;
`
export const SocialMedia = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const Text = styled.Text`
  color: #b8b7bc;
  margin-left: 5px;
`
export const List = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
export const Item = styled.TouchableOpacity``
export const Image = styled.Image`
  width: 30px;
  height: 30px;
`
