import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
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
import { useNavigation } from '@react-navigation/native';

export default function Itens(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);



   

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <Pressable onPress={showDialog}>
        <View style={styles.item}>
          <Image source={{ uri: props.img }} style={styles.img} />
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.nome}>{props.titulo} </Text>
            <Text style={styles.nome}>R$ {props.preco} </Text>
          </View>
        </View>
      </Pressable>

      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ flexDirection: 'row' }}>
          <Dialog.Content>
            <Image source={{ uri: props.img }} style={styles.img2} />
          </Dialog.Content>
          <Text style={styles.nome2}>{props.desc} </Text>
        </Dialog>
      </Portal>
    </Provider>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 65,
    width: 65,
    borderRadius: 100,
    padding: 45,
  },
  img2: {
    height: 70,
    width: 70,
    borderRadius: 100,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 27,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
    flex: 1,
  },
  nome: {
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 13,
    width: 230,
  },
  nome2: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 13,
    width: 230,
    alignSelf: 'center',
  },
});
