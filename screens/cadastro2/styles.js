import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
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
    backgroundColor: '',
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
  txt: {
    marginHorizontal: 5,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 15,
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
