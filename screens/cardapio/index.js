import React from 'react';

import { Slider, Text, View } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  LeftHeader,
  DrinkHeader,
  Message,
  SubMessage,
  Warning,
  WarningText,
} from './style';
/*css */
import estilo from './style';

/*telas */
import { PratosEspeciais } from '../pratosEspeciais/index';
import Lista from '../../components/cardapio/Lista';

function cardapio({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable onPress={() => navigation.navigate('Pratos Especiais')}>
        <DrinkHeader>
          <LeftHeader>
            <Message>Pratos Especias</Message>
            <SubMessage>Outras opções de pratos</SubMessage>
          </LeftHeader>
          <Warning>
            <WarningText>OPCIONAL</WarningText>
          </Warning>
        </DrinkHeader>
      </Pressable>

      <Lista />
    </ScrollView>
  );
}

export function Cardapio() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={cardapio}
        options={{
          title: 'CARDAPIO',
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

      <Stack.Screen
        name="Pratos Especiais"
        component={PratosEspeciais}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
