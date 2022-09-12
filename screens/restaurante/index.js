import React, { useState, useEffect } from 'react';
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
  Slider,
  Text,
  View,
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import BackButton from './style';
import { useNavigation } from '@react-navigation/native';

/*css*/
import style from './style';

/*api*/

import api from '../../API/Auth';

/*telas*/

import FazerReserva from '../FazerReserva/index';
import Cardapio from '../cardapio/index';

export function Restaurante({ route, navigation }) {
  const [restaurante, setRestaurante] = useState('');
  const { restauranteId } = route.params;

  async function getItens() {
    await api
      .get('/restaurantes/' + restauranteId)
      .then((response) => setRestaurante(response.data.restaurante))

      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }

  useEffect(() => {
    if (restaurante === '') {
      getItens();
    }
  }, [restaurante]);
  console.log('foto', restaurante.foto);

  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <View style={style.containerCard}>
        <Image
          style={style.itemImageStyle}
          source={{ uri: restaurante.foto }}
        />
        <View>
          <View style={style.links}>
            <Text
              style={style.txt}
              onPress={() => navigation.navigate('Cardapio')}>
              Cardapio{' '}
            </Text>
            <Text
              style={style.txt}
              onPress={() => 
                navigation.navigate('Fazer Reserva', {
                  id: restauranteId,
                })}>
              Fazer Reserva
            </Text>
          </View>
          <Text style={style.title}>
            Distancia do estabelecimento:{' '}
            <Text style={style.textAtend2}>500M</Text>
          </Text>
        </View>

        <Text style={style.title}>{restaurante.nome}</Text>
        <Text style={style.registerText}>
          O melhor restaurante de nosso app tendo um longo espaco ao ar livre e
          um cardapio recheado para qualquer gosto
        </Text>
        <Text style={style.title}>HORARIOS DE ATENDIMENTO</Text>
        <Text style={style.registerText}>Segunda a sexta: 12:00 as 18:00</Text>
        <Text style={style.registerText}>Final de semana: 08:00 as 21:00</Text>
        <Text style={style.registerText}>Feriados: 08:00 as 21:00</Text>
      </View>
    </ScrollView>
  );
}

export function restaurante({ route }) {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="restaurante" component={Restaurante} />
      <Stack.Screen name="cardapio" component={Cardapio} />
      <Stack.Screen name="Fazer Reserva" component={FazerReserva} />
    </Stack.Navigator>
  );
}
