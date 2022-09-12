import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const BackButton = styled.TouchableOpacity``;

export const Panel = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 40px 0
`;

export const Options = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false
})`
`;

export const Option = styled.TouchableOpacity`
  margin: 5px;
  width: 250px;
  height: 300px;
  padding: 5px;
  border-radius: 4px;
  justify-content: space-around
`;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    flexDirection: "row",
    display: "flex",

  },

  title1: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 10

  },
  contIcon: {
    marginLeft: '90%'

  },
});
