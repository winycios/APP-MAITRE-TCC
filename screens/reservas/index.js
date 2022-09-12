import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  Card,
  Title,
  Divider,
  Provider,
  FAB,
  Portal,
  DefaultTheme,
} from 'react-native-paper';

import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
/*css */
import estilo from './style';

/*telas */
import { FazerReserva } from '../FazerReserva/index';
import ListaConcluidas from '../../components/ReservasConcluidas/ListaConcluidas';
import ListaPendente from '../../components/ReservaPendente/ListaPendente';
import ListaFinalizadas from '../../components/ReservasFinalizadas/ListaFinalizadas';
import { ReservasPendentes } from '../reservaPendente/index';
import { ReservasFinalizadas } from '../reservaFinalizada/index';
import { ReservasConcluidas } from '../reservaConcluida/index';

function reservas({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const theme = {
    ...DefaultTheme,
    roundness: 2,

    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
    },
  };

  return (
    <Provider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estilo.backgroundReser}>
          <Title style={[estilo.textAtend, { color: colors.text }]}>
            Reservas Pendentes
          </Title>
          <ListaPendente />

          <Title style={[estilo.textAtend, { color: colors.text }]}>
            Reservas Concluidas
          </Title>
          <ListaConcluidas />

          <Title style={[estilo.textAtend, { color: colors.text }]}>
            Reservas Finalizadas
          </Title>

          <ListaFinalizadas />
        </View>

        <Portal theme={{ colors: { accent: 'orange' } }}>
          <FAB.Group
            color="white"
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {
                icon: 'calendar-clock',
                color: 'orange',
                label: 'Reservas Pendentes',
                onPress: () => navigation.navigate('Pendente'),
              },
               {
                icon: 'calendar-check-outline',
                color: 'orange',
                label: 'Reservas concluídas',
                onPress: () => navigation.navigate('concluidas'),
              },
              {
                icon: 'calendar-multiple-check',
                color: 'orange',
                label: 'Reservas finalizadas',
                onPress: () => navigation.navigate('finalizada'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </ScrollView>
    </Provider>
  );
}

export function Reservas() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={reservas}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Fazer Reserva"
        component={FazerReserva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pendente"
        component={ReservasPendentes}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="concluidas"
        component={ReservasConcluidas}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="finalizada"
        component={ReservasFinalizadas}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
