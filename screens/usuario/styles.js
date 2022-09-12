import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  /* padding: 0 20px */
`;

export const ProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 25px 0px;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  marginHorizontal: 18;

`;

export const Info = styled.ScrollView`
  margin-left: 20px
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #CDC
`;

export const BackButton = styled.TouchableOpacity``;

export const Panel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 40px 0
`;

export const Name = styled.Text`
  color: #333;
  font-size: 22px
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #999
`;

export const OptionsList = styled.ScrollView``;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px 20px;
`;
