import React from 'react';
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
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function ItensFinalizadas(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable onPress={''}>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={45}
            color="#333"
          />
          <View>
          
            <Text style={styles.nome}>{props.dia} </Text>
            <Text style={styles.nome}>{props.hora} </Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
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
    fontSize: 16,
    marginLeft: 13,
  },
});
