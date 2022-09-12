import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Title,
  StyleSheet,
  Pressable,
} from 'react-native';
import Star from 'react-native-star-view';

import { useNavigation, useTheme } from '@react-navigation/native';

//css
import styles from './styles';

export default function Itens(props) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <>
      <ScrollView>
        <Pressable
          onPress={() =>
            navigation.navigate('Restaurante', {
              restauranteId: props.id,
            })
          }>
          <View style={styl.content}>
            <Image style={styles.img} source={{ uri: props.foto }}></Image>
            <View>
              <Text style={{ color: colors.text }}>
                {props.nome}
              </Text>
              <Star
                score={props.estrela}
                style={[styl.starStyle, { color: colors.text }]}
              />
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styl = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
    flex: 1,
  },
  itemImageStyle: {
    width: 70,
    height: 70,
    marginRight: 16,
    borderRadius: 15,
  },

  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: '195%',
  },

  starStyle: {
    marginTop: 3,
    width: 90,
    height: 15,
  },
  txtEmailStyle:{
    marginTop:3
  }
});
