import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  Divider,
  TextInput,
} from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import ItensConcluidas from './ItensConcluidas';

export default function ListaConcluidas() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const data = [
    {
      id: 1,
      dia: '28/04/2022',
      hora: '22:00:00',
      status: 'Concluido',
      restaurante: 'Fogão a lenha',
    },
  ];

  const reservaConcluida = ({ item }) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={''}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="calendar-month"
              size={50}
              color="orange"
            />
            <View>
              <Text style={styles.nome}>Restaurante: {item.restaurante}</Text>
              <Text style={styles.nome}>{item.dia} </Text>
              <Text style={styles.nome}>{item.hora} </Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ItemSeparatorComponent={itemSeparator}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Itens dia={item.dia} hora={item.hora} />}
      />

      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        data={data}
        renderItem={reservaConcluida}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'orange',
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
    flex: 1,
  },
  nome: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 13,
  },
  status: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 13,
    color: '#32CD32',
  },
});
