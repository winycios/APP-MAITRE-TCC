import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  container2:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
  inputText: {
    backgroundColor: '',
    height: 50,
    padding: 10,
  },

  inputView: {
    backgroundColor: '',
    color: '#222',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'start',
    padding: 2,
    marginTop: 20,
  },

  //date
  pickedDateContainer: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    width: 200,
    height: 70,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  txt: {
    marginHorizontal: 5,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 7,
  },
});
