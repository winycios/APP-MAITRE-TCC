import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const LeftHeader = styled.View``;

export const DrinkHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 25px;
  background: #EEE;
  padding: 25px
`;

export const Message = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold
`;

export const SubMessage = styled.Text`
  color: #999
`;

export const DrinkTitle = styled.Text`
  font-size: 15px
`;

export const Warning = styled.View`
  background: orange;
  padding: 3px;
  border-radius: 2px
`;

export const WarningText = styled.Text`
  font-size: 13px;
  color: #FFF
`;

export default StyleSheet.create({
  car1: {
    backgroundColor: 'orange',
    fontSize: 18,
    color: 'white',
    paddingVertical: '2%',
  },

  car2: {
    padding: 10,
    fontWeight: 'arial',
  },

  containerCardapio: {
    backgroundColor: '#fff',
  },

  cardCardapio: {
    border: '0.5px solid #000',
  },

  btnCardapio: {
    float: 'right',
  },
});
