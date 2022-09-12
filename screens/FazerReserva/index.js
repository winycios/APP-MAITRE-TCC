import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Button,
  Platform,
  Slider,
  Text,
  View,
  Picker,
  DatePickerIOS,
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Title, DefaultTheme, TextInput } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select'
import { useNavigation } from '@react-navigation/native';

/*css */
import styles from './styles';

import api from '../../API/Auth';

/*telas */

import Pesquisa from '../pesquisa/index';

var dia;



function fazerReserva({route, navigation}) {
  const { restId } = route.params;

  
  /*date */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Escolher Dia');
  const [h, setH] = useState('');
  const [horas, setHoras] = useState([{label: 'teste'}]);
  

  const onChange = (event, selectDate) => {
    const curretDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(curretDate);

  const DiaSemana = [
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '1',

              ];
    let tempDate = new Date(curretDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime =
    setText(fDate);

    dia = DiaSemana[date.getDay()];


    getHora(restId);

    



  };

  const showMode = (curretMode) => {
    setShow(true);
    setMode(curretMode);
  };
  /*/date */

  const [onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };

  async function getHora(id) {
    await api
      .get('/horarios/' + id + '/' + dia)
      
      .then((response) => {
        console.log(response.data.horarios)
      
        setH(response.data.horarios)
      })

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
}

async function pedirReserva(id) {
    await api
      .get('/horarios/' + id + '/' + dia)
      
      .then((response) => {
        console.log(response.data.horarios)
      
        setH(response.data.horarios)
      })

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
}


useEffect(() =>{
  if(h != ''){
    var hora = [];
    var x;
    console.log(h.length)
    for(var i =0; i< h.length; i++ ){
      x ={label: h[i].horario, value: h[i].id}
      console.log(x)
      hora.push(x)
    }
    setHoras(hora)
  }

}, [h])

  return (
    <>
      <View>
        <TextInput
          theme={theme}
          style={styles.inputText}
          onChangeText={onChangeNumber}
          placeholder="QTDE. Pessoas"
        />
      </View>

        <View style={styles.container}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{text}</Text>
          <View>
            <Button
              color="orange"
              title="Selecione o dia da reserva"
              onPress={() => showMode('date')}
            />
          </View>


        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={date}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}


        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={horas}/>

          <Button
          color="orange"
          title="Confirmar"
          onPress={''}
        />
      </View>

      
    </>
  );
}

export function FazerReserva({route}) {

  const navigation = useNavigation();
  const { id } = route.params;

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={fazerReserva}
        initialParams={{ restId: id}}
        options={{
          title: 'FAZER RESERVA',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },

          headerTitleAlign: 'center',

          headerLeft: () => (
            <MaterialIcons
              onPress={() => navigation.goBack()}
              name="keyboard-arrow-left"
              color="orange"
              size={35}
            />
          ),
        }}
      />
      <Stack.Screen name="pesquisa" component={Pesquisa} />
    </Stack.Navigator>
  );
}
