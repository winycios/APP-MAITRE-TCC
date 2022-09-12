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

export default StyleSheet.create({
    containerCard: {
    flex: 1,
    width: '100%',
  },

   title: {
    color: 'black',
    marginHorizontal: 10,
    marginBottom: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 30,
  },

   textAtend2: {
    color: 'gray',
    fontWeight: 'bold',
    alignItems: 'center',
  },

    registerText: {
    marginHorizontal: 10,
    marginTop: 10,
    color: 'black',
    marginBottom: 1,
    textAlign: 'left',
  },

  itemImageStyle: {
    width: 300,
    height: 150,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 30
  },

  links: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  txt: {
    marginHorizontal: 3,
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 5
  },
});
