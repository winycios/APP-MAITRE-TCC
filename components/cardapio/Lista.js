import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  Divider,
  TextInput,
} from 'react-native-paper';
import Itens from './Itens';

import api from '../../API/Auth';

// const itens = [
//   {
//     id: 1,
//     titulo: 'Macarrão',
//     preco: 'R$: 14,00',
//     desc: 'Macarrão a o molho com queijo ralado',
//     img: 'https://tse3.mm.bing.net/th?id=OIP.KviocUhYSe7Se1GLI2LeVAHaE8&pid=Api&P=0&w=232&h=155',
//   },
//   {
//     id: 2,
//     titulo: 'Bife com ovo',
//     preco: 'R$: 14,00',
//     desc: 'Prato com Bife, batata frita e ovo',
//     img: 'https://tse4.mm.bing.net/th?id=OIP.UOsPYdhLcMEvNYeovvuwbwHaE8&pid=Api&P=0&w=246&h=164',
//   },
//   {
//     id: 3,
//     titulo: 'Lasanha',
//     preco: 'R$: 14,00',
//     desc: 'Lasanha a o molho vermelho',
//     img: 'https://tse4.mm.bing.net/th?id=OIP.T-Td6vFuxXq6czVmh1PHaQHaFj&pid=Api&P=0&w=225&h=168',
//   },
//   {
//     id: 3,
//     titulo: 'Lasanha',
//     preco: 'R$: 14,00',
//     desc: 'Lasanha a o molho vermelho',
//     img: 'https://tse4.mm.bing.net/th?id=OIP.T-Td6vFuxXq6czVmh1PHaQHaFj&pid=Api&P=0&w=225&h=168',
//   },
// ];

headerComponent = () => {
  return <Text style={styles.listHeaderLine}>Pratos</Text>;
};

itemSeparator = () => {
  return <View style={styles.separator} />;
};

export default function Lista() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);


    const [itens, setItens] = useState();

   async function getItens() {
    api
      .get('/pratos')
      .then((response) => setItens(response.data))

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }


  useEffect(() => {
    getItens(setItens);
    
  }, []);
  console.log(itens);


  const hideDialog = () => setVisible(false);
  return (
    <FlatList
      ListHeaderComponentStyle={styles.listHeader}
      ListHeaderComponent={headerComponent}
      ItemSeparatorComponent={itemSeparator}
      data={itens}
      numColumns={1}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Itens
          titulo={item.nome}
          desc={item.descPrato}
          preco={item.valor}
          img={item.foto}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listHeaderLine: {
    color: 'orange',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
