import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import styles from './styles';
import Itens from './itensRest';

import api from '../../API/Auth';

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

export default function Lista() {
  const [itens, setItens] = useState('');
  const [search, setSearch] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  async function getItens() {
    await api
      .get('/restaurantes')
      .then((response) => setItens(response.data.restaurantes))

      .catch((err) => {
        console.error('ops! ocorreu um erro restaurantes' + err);
      });
  }

  useEffect(() => {
    if (search === '') {
      getItens(setItens);
    } else {
      setItens(
        itens.filter((item) => {
          if (item.nome.toLowerCase().indexOf(search) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [search]);

  const { colors } = useTheme();

  return (
    <>
      <View style={{ alignItems: 'center', marginTop: 10, shadowOpacity: 0 }}>
        <Searchbar
          placeholder="Pesquise aqui ..."
          style={{ color: colors.text }}
          value={search}
          onChangeText={(t) => setSearch(t)}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 25,
            marginHorizontal: 7,
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.text,
          }}>
          Lojas{' '}
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <FlatList
          data={itens}
          numColumns={1}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}
