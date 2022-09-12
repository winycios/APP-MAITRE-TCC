import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import Star from 'react-native-star-view';
import { useNavigation } from '@react-navigation/native';

/*css*/
import styles from './styles';

export default function Itens(props) {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 22 }}>
        <Pressable
          onPress={() =>
            navigation.navigate('Restaurante', {
              restauranteId: props.id,
            })
          }>
          <View>
            <View style={styles.info}>
              <Image style={styles.img} source={{ uri: props.foto }}></Image>
              <Text>{props.nome}</Text>
              <Star score={props.estrela} style={styl.starStyle} />
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styl = StyleSheet.create({
  starStyle: {
    width: 90,
    height: 15,
  },
});
