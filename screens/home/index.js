import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*css */
import styles from './style';
import { Option, Options } from './style';

/*telas */
import Topo from '../../components/home/TopoHome';
import Lista from '../../components/home/ListaHome';
import { Restaurante } from '../restaurante/index';
import { FazerReserva } from '../FazerReserva/index';
import { Cardapio } from '../cardapio/index';

import Carrosel from '../../components/Carrosel/index';

import api from '../../API/Auth';

function homeScreen({ navigation }) {
  const [itens, setItens] = useState();

  async function getItens() {
    api
      .get('/premium')
      .then((response) => setItens(response.data.restaurantes))

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  useEffect(() => {
    getItens(setItens);
    console.log('premium', itens);
  }, []);

  const { colors } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    
      <Text style={[styles.title1, { color: colors.text }]}>
        Restaurantes em destaques{' '}
      </Text>

      <SafeAreaView>
        <Lista />
      </SafeAreaView>
    </ScrollView>
  );
}

export function Home() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={homeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Restaurante" component={Restaurante} />
      <Stack.Screen
        name="Fazer Reserva"
        component={FazerReserva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cardapio"
        component={Cardapio}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
