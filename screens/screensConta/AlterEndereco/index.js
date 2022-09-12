import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import { TextInput, DefaultTheme, Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CardView } from 'react-native-simple-card-view';
import { mdiAccountCircle } from '@mdi/js';

//css
import style from './style';

import api from '../../../API/Auth';

function endereco({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
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
  const [visible, setVisible] = React.useState(false);
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCIdade] = useState('');
  const [numero, setNumero] = useState('');

  const onToggleSnackBar = () => {
    setVisible(!visible);
    setCEP('');
    setEndereco('');
    setEstado('');
    setBairro('');
    setCIdade('');
    setNumero('');
  };

  const onDismissSnackBar = () => setVisible(false);

  async function getCEP() {
    console.log(cep);
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        setEndereco(data.logradouro);
        setEstado(data.uf);
        setBairro(data.bairro);
        setCIdade(data.localidade);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  }

  async function alterarEndereco() {
    await api
      .patch('/clientes/1', {
        cep: cep,
        endereco: endereco,
        estado: estado,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
      })
      .then((response) => onToggleSnackBar())

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }
  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <View style={{ marginTop: 20 }}>
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="CEP"
            onChangeText={(cep) => setCEP(cep)}
            onBlur={() => getCEP()}
            value={cep}
          />
          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Endereço"
            onChangeText={(endereco) => setEndereco(endereco)}
            value={endereco}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Estado"
            onChangeText={(estado) => setEstado(estado)}
            value={estado}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            onChangeText={(bairro) => setBairro(bairro)}
            label="Bairro"
            value={bairro}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            onChangeText={(cidade) => setCIdade(cidade)}
            label="Cidade"
            value={cidade}
          />

          <TextInput
            theme={theme}
            style={{ backgroundColor: '' }}
            label="Número"
            onChangeText={(numero) => setNumero(numero)}
            value={numero}
          />

          <Text
            style={style.button}
            mode="Outlined "
            onPress={() => alterarEndereco()}>
            Salvar
          </Text>

          <View style={style.container}>
            <Snackbar
              duration={2000}
              visible={visible}
              style={style.snack}
              onDismiss={onDismissSnackBar}
              action={{
                label: 'Fechar',
                color: 'orange',
                onPress: () => {
                  // Do something
                },
              }}>
              Endereço Atualizado com sucesso!
            </Snackbar>
          </View>

          <Text
            style={style.button2}
            mode="Outlined "
            onPress={() => console.log('Pressed')}>
            Cancelar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function AlterEndereco() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="endereco"
        component={endereco}
        options={{
          title: 'ALTERAR ENDEREÇO',
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
