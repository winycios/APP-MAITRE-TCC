import React from 'react';

import { Slider, Text, View } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/*css */
import style from './style';

/*API */
import Auth from '../../API/Auth';

export function FormScreen({ navigation }) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={style.container}>
          <Title style={style.textAtend}>Fazer Reserva</Title>

          <View style={style.inputViewOne}>
            <TextInput
              style={style.inputText}
              onChangeText={onChangeNumber}
              placeholder="Nome"
            />
          </View>

          <View style={style.inputView}>
            <TextInput
              style={style.inputText}
              onChangeText={onChangeNumber}
              placeholder="Horario da reserva"
            />
          </View>

          <View style={style.inputView}>
            <TextInput
              style={style.inputText}
              onChangeText={onChangeNumber}
              placeholder="Quantidade de pessoas"
            />
          </View>

          <View style={style.inputView}>
            <TextInput
              style={style.inputText}
              onChangeText={onChangeNumber}
              placeholder="Data reserva"
            />
          </View>

          <Text
            style={sti.txt}
            onPress={() => navigation.navigate('DiscoverScreen')}>
            Enviar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const sti = StyleSheet.create({
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
