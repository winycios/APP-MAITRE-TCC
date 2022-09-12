import React, { useContext, useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import {
  Button,
  Divider,
  Title,
  DefaultTheme,
  TextInput,
  Snackbar,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//css
import styles from './style';

import api from '../../../API/Auth';

function fone({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [foneVelho, setFoneVelho] = useState('');
  const [fone, setFone] = useState('');
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //darkmode
  const { colors } = useTheme();

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };

  async function atualizarFone() {
    await api
      .patch('/atualizar/telefone/1', {
        old_fone: foneVelho,
        new_fone: fone,
      })
      .then((response) => onToggleSnackBar())

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => {
    setVisible(!visible);
    setFone('');
    setFoneVelho('');
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{ marginHorizontal: 10, fontSize: 17, color: colors.text }}>
          Insira seu número de telefone antigo com o código de país:
        </Text>

        <View style={{ marginTop: 10 }}>
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            placeholder="Número atual"
            onChangeText={(foneVelho) => setFoneVelho(foneVelho)}
            value={foneVelho}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            fontSize: 17,
            marginHorizontal: 10,
            color: colors.text,
          }}>
          Insira seu novo número de telefone com o código do país:
        </Text>

        <View style={{ marginTop: 10 }}>
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            placeholder="Novo número"
            onChangeText={(fone) => setFone(fone)}
            value={fone}
          />
        </View>

        <Button
          style={styles.button}
          mode="Outlined "
          color="#fff"
          onPress={() => atualizarFone()}>
          Salvar
        </Button>

        <View style={styles.container}>
          <Snackbar
            duration={2000}
            visible={visible}
            style={styles.snack}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Fechar',
              color: 'orange',
              onPress: () => {
                // Do something
              },
            }}>
            Número Atualizado com sucesso!
          </Snackbar>
        </View>
      </View>
    </ScrollView>
  );
}

export function AlterFone() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="telefone"
        component={fone}
        options={{
          title: 'ALTERAR TELFONE',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },

          headerTitleAlign: 'center',

          headerLeft: () => (
            <MaterialIcons
              onPress={() => navigation.goBack()}
              name="keyboard-arrow-left"
              color="orange"
              size={35}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
