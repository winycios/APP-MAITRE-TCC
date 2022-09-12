import React, { useState } from 'react';

import { Slider, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { ProfileButton, Avatar } from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { Title, Button, DefaultTheme, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

/*css */
import styles from './styles';
import BackButton from './styles';
import Login from '../Login/index';


import api from '../../API/Auth'




function cadastro({ navigation }) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  const [image, setImage] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


  const [user, setUser] = useState('');

  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

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

  const { colors } = useTheme();


  async function cadastraUser(){
    if(nome != '' && cpf != '' && fone != '' && email != '' && senha != '' && senhaConf != ''){
      console.log('oi')
      if(senha == senhaConf){
        await api
        .post('/register', {
              name: nome,
              email: email,
              password: senha,
              password_confirmation: senhaConf,
        })
        .then((response) => {
          console.log(response.data.user)
          console.log(response.data.user.id)

          if(response.status == 201){
            navigation.navigate('Cadastro2', {
              id:  response.data.user.id,
              fone: fone,
              nome: nome,
              cpf: cpf, 
              foto: image,
            })
          }
        })
      }else{
        console.log('senhas diferentes')
      }
    }else{
      console.log('insira os dados')
    }
  }


  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <View style={styles.container2}>
        <View style={{ marginTop: 15, alignItems: 'center' }}>
          <ProfileButton onPress={pickImage}>
            {user.foto ? (
              <Avatar source={{ uri: user.foto }} />
            ) : (
              <Avatar source={{ uri: user.profile_photo_url }} />
            )}
          </ProfileButton>

        </View>

        <View style={styles.inputView}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(nome) => setNome(nome)}
            placeholder="Digite o seu nome"
          />
        </View>

       <View style={styles.inputView}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(cpf) => setCPF(cpf)}
            placeholder="Digite o seu CPF"
          />
        </View>

      <View style={styles.inputView}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(fone) => setFone(fone)}
            placeholder="Digite o seu telefone"
          />
        </View>

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(email) => setEmail(email)}
            placeholder="Email"
          />
        </View>

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(senha) => setSenha(senha)}
            placeholder="senha"
          />
        </View>

        <View style={styles.inputView2}>
          <TextInput
            theme={theme}
            style={styles.inputText}
            onChangeText={(senhaConf) => setSenhaConf(senhaConf)}
            placeholder="Confirmar senha"
          />
        </View>

        <Text
          style={styles.txt}
          onPress={() => cadastraUser()}>
          Próximo
          <MaterialCommunityIcons
            // onPress={() => navigation.navigate('Cadastro2')}
            name="arrow-right"
            size={18}
          />
        </Text>

        <Text style={styles.txt2} onPress={() => navigation.goBack()}>
          Já tem conta? faça o login
        </Text>
      </View>
    </ScrollView>
  );
}

export function Cadastro() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
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
      }}>
      <Stack.Screen name="cadastro" component={cadastro} />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
