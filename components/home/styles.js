import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerTop: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  texto: {
    color: 'white',
    fontSize: 30,
  },
  starStyle: {
    width: 90,
    height: 15,
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 15,
  },

  img: {
    display: 'flex',
    width: 120,
    height: 120,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
    borderRadius: 15,
  },

  info: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: 'white',
  },

  preco: {
    fontSize: 14,
    color: 'orange',
  },
  
});
