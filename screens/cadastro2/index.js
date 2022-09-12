import React, { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Slider,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { Title, Button, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DefaultTheme, TextInput } from 'react-native-paper';

/*css */
import styles from './styles';

import api from '../../API/Auth';

/*telas */
import { Cadastro } from '../Cadastro/index';
import { Login } from '../Login/index';

function cadastro2({route, navigation }) {

  const { id, nome, cpf, fone, foto } = route.params;

  console.log(fone)

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCIdade] = useState('');
  const [numero, setNumero] = useState('');

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
    },
  };

async function getCEP() {

    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then(function (data) {
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

async function cadastraCliente(){
  if(cep != ''){
      await api
      .post('/clientes',{
          nome: nome,
          fone: fone,
          foto: foto,
          cpf: cpf,
          estado: estado,
          cidade: cidade,
          bairro: bairro,
          endereco: endereco,
          numero: numero,
          cep: cep,
          user_id: id
      })

      .then((response) =>{
        console.log(response)
        if(response.status == 201){
          navigation.navigate('Login')
        }else{
          console.log('deu erro')
        }
      })
  }else{
    console.log('deu bosta')
  }


}
  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <View style={styles.container2}>
        <ImageBackground
          source={require('../../assets/maitre.png')}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
        />

        <View style={styles.inputView}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(cep) => setCEP(cep)}
            onBlur={() => getCEP()}
            value={cep}
            placeholder="CEP"
          />
        </View>

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(estado) => setEstado(estado)}
            placeholder="Estado"
            value={cidade}
          />
        </View>
        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(cidade) => setCidade(cidade)}
            placeholder="Cidade"
            value={cidade}
          />
        </View>

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(bairro) => setBairro(bairro)}
            placeholder="Bairro"
            value={bairro}
          />
        </View>
        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(endereco) => setEndereco(endereco)}
            placeholder="endereco"
            value={endereco}
          />
        </View>

        

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(numero) => setNumero(numero)}
            placeholder="Número"
            value={numero}
          />
        </View>

        <Text
          style={styles.txt}
          onPress={() => cadastraCliente()}>
          Cadastrar
          <MaterialCommunityIcons
            // onPress={() => navigation.navigate('Cadastro2')}
            name="arrow-right"
            size={18}
          />
        </Text>
      </View>
    </ScrollView>
  );
}

export function Cadastro2({route}) {

  const { id, nome, cpf, fone, foto } = route.params;
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cadastro"
        component={cadastro2}
        initialParams={{ 
          id: id,
          fone: fone,
          nome: nome,
          cpf: cpf,
          foto: foto,
        }}
        options={{
          title: 'CADASTRO',
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
      <Stack.Screen name="cadastro1" component={Cadastro} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
