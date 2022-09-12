import React from 'react';
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
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*css */
import style from './style';
/*telas */

import Topo from '../../components/restaurantes/TopoRest';
import Lista from '../../components/restaurantes/ListaRest';
import { Restaurante } from '../restaurante/index';
import { FazerReserva } from '../FazerReserva/index';
import { Cardapio } from '../cardapio/index';

/*api */
import api from '../../API/Auth';

export function pesquisa({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={style.containerCard}>
          <View style={style.localizacao2}></View>
        </View>

        <Lista />
      </SafeAreaView>
    </ScrollView>
  );
}

export function Pesquisa() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={pesquisa}
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
