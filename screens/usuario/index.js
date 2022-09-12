import React, { useContext, useState, useEffect } from 'react';

import * as SecureStore from 'expo-secure-store';

/*import auxiliares*/
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {
  NavigationContainer,
  CommonActions,
  useTheme,
} from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CardView } from 'react-native-simple-card-view';

import {
  ProfileButton,
  Name,
  Message,
  Avatar,
  Container,
  OptionsList,
  Option,
  Info,
  BackButton,
  Panel,
} from './styles';

import { AuthContext } from '../../contexts/authContext';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import api from '../../API/Auth';

import { ContaScreen } from '../screensConta/Conta/index';
import { Perfil } from '../editPerfil/index';
import { Tema } from '../tema/index';

function userScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const [user, setUser] = useState('');
  const [id, setId] = useState('');


  async function getId() {
    token = await SecureStore.getItemAsync('userToken');
    console.log('token user ', token)
    var x = 'Bearer '+ token
    console.log(x)
    await api
      .get('/cliente/getId',{
        headers: { 'Authorization': x}
      })
      .then((response) =>  

       
        setId(response.data[0].user_id))
        
      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  async function getUser() {
    await api
      .get('/clientes/' + id)
      .then((response) => {
        console.log(response.data)
      })

      .catch((err) => {
        console.error('ops! ocorreu um erro home ' + err);
      });
  }

  function teste(){
    console.log(id)
    console.log(user)
  }

  useEffect(() => {


      if(user === ''){
         getId()
         getUser();
      }
    
    // const unsubscribe = navigation.addListener('focus',   () => {

    //    getUser();
     

    // });
  }, [user]);

  const { colors } = useTheme();
  return (
      <Container>
      <ScrollView>
        <View style={{ marginTop: 25 }}>
        <ProfileButton onPress={() => navigation.navigate('Editar')}>
            {user.foto ? (
              <Avatar source={{ uri: user.foto }} />
            ) : (
              <Avatar source={{ uri: user.profile_photo_url }} />
            )}

            <Info>
              <Name style={{ color: colors.text }}>{user.nome}</Name>
              <Message>Editar perfil</Message>
            </Info>
          </ProfileButton>
          

          <OptionsList>
            <Option onPress={() => {}}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="bell-outline"
                size={28}
                color="#333"
              />
              <Info>
                <Title style={{ color: colors.text }}>Notificações</Title>
              </Info>
            </Option>

            <Option onPress={() => teste()}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="heart-outline"
                size={28}
                color="#333"
              />

              <Info>
                <Title style={{ color: colors.text }}>Favoritos</Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Conta')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="account-circle-outline"
                size={28}
                color="#333"
              />
              <Info>
                <Title style={{ color: colors.text }}>Conta</Title>
              </Info>
            </Option>

            <Option onPress={() => navigation.navigate('Tema')}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="theme-light-dark"
                size={28}
                color="#333"
              />
              <Info>
                <Title style={{ color: colors.text }}>Tema</Title>
              </Info>
            </Option>

            <Option onPress={signOut}>
              <MaterialCommunityIcons
                style={{ color: colors.text }}
                name="logout-variant"
                size={28}
                color="#333"
              />
              <Info>
                <Title style={{ color: colors.text }}>Sair</Title>
              </Info>
            </Option>
          </OptionsList>
        </View>
        </ScrollView>
      </Container>
  );
}

export function Usuario() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Meu Perfil" component={userScreen} />
      <Stack.Screen name="Conta" component={ContaScreen} />
      <Stack.Screen name="Editar" component={Perfil} />
      <Stack.Screen name="Tema" component={Tema} />
    </Stack.Navigator>
  );
}
