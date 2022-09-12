import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Pressable,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

/*telas*/
import Itens from './ItensHome';
import Carrosel from '../Carrosel/index';

/*css*/
import style from './styles';

/*api*/
import api from '../../API/Auth';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const { width } = Dimensions.get('window');

function renderItem({ item }) {
  return (
    <Itens
      id={item.id}
      nome={item.nome}
      foto={item.foto}
      estrela={item.estrelas}
      km={3}
    />
  );
}

function renderCarrosel({ item }) {
  return (
    <Carrosel
      id={item.id}
      nome={item.nome}
      foto={item.foto}
      estrela={item.estrelas}
    />
  );
}

export default function ListaHome() {
  const [itens, setItens] = useState();
  const [premium, setPremium] = useState();

  const navigation = useNavigation();
  ('');

  async function getItens() {
    api
      .get('/restaurantes')
      .then((response) => setItens(response.data.restaurantes))

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  async function getPremium() {
    api
      .get('/premium')
      .then((response) => setPremium(response.data.restaurantes))

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }
  useEffect(() => {
    getItens(setItens);
    getPremium(setPremium);
  }, []);
  console.log(itens);
  console.log(premium);

  return (
    <View>
      <FlatList
        data={premium}
        keyExtractor={(item) => String(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={{ marginTop: 20 }}
        renderItem={renderCarrosel}
      />

      <FlatList
        data={itens}
        numColumns={2}
        keyExtractor={(item, index) => item}
        renderItem={renderItem}
      />
    </View>
  );
}
