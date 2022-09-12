import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import Star from 'react-native-star-view';
import { useNavigation } from '@react-navigation/native';

/*css*/

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const { width } = Dimensions.get('window');


export default function Carrosel(props) {
  const navigation = useNavigation();

  return (
    <>
     <Pressable
        onPress={() =>
          navigation.navigate('Restaurante', {
            restauranteId: props.id,
          })
        }>
        <View style={styles.container}>
  
        <Image
          source={{ uri: props.foto }}
          style={{
          
            height: width / 2.6,
            width: ITEM_WIDTH,
            borderRadius: 10,
          }}
        />
        <Text style={styles.header}>{props.nome}</Text>
        <Star score={props.estrela}  />
        
      </View>
    </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    borderRadius: 8,
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    paddingBottom: 5,
    shadowColor: '#000',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,

    elevation: 1,
  },

  header: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  
});
