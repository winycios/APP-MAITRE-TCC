import { View,Text,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
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
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #CDC
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

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  container3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'orange',
    marginBottom: 40,
  },

  inputView: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    color: '#222',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 2,
    marginTop: 50,
  },
  inputView2: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    color: '#222',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 2,
  },

  inputView3: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    color: '#222',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 10,
    padding: 2,
  },

  inputText2: {
    height: 50,
    padding: 10,
    fontWeight: 'bold',
  },

  forgot: {
    color: 'black',
    fontSize: 15,
  },

  loginBtn: {
    width: '80%',
    backgroundColor: 'orange',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  loginText: {
    color: 'black',
    marginTop: 10,
  },
   centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
    width: 300,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'end',
    fontSize: 20,
  },

  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
