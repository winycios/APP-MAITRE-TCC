import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const BackButton = styled.TouchableOpacity``;

export const Container = styled.SafeAreaView`
  margin: 0 10px
`;


export const ProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-around;
  width: 362px
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #CDC
`;

export const Info = styled.View`
`;

export const Name = styled.Text`
  color: #333;
  font-size: 22px
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #999
`;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    backgroundColor: '',
  },

  container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    backgroundColor: '',
    color: '#222',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 2,
    marginTop: 30,
  },
  inputView2: {
    width: '80%',
    backgroundColor: '',
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

  txt: {
    marginHorizontal: 5,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'orange',
  },
  txt2: {
    marginHorizontal: 5,
    marginTop: 5,
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
    color: 'black',
  },
});
