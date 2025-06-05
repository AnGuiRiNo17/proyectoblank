import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Screens
import ScreenLogin from './login/ScreenLogin';
import ScreenCrearCuenta from './login/ScreenCrearCuenta';
import ScreenHome from './screen/home/ScreenHome';
import ScreenAcercaDe from './screen/about/ScreenAcercaDe';
import ScreenSetting from './screen/setting/ScreenSetting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs que solo se muestran si ya se inició sesión
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={ScreenHome}
        options={{
          title: 'Menú',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="about"
        component={ScreenAcercaDe}
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={ScreenSetting}
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack principal con lógica de login
export default function Navegacion() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLogged ? (
        <>
          <Stack.Screen name="Login">
            {() => <ScreenLogin onLogin={() => setIsLogged(true)} />}
          </Stack.Screen>
          <Stack.Screen name="CrearCuenta">
            {() => <ScreenCrearCuenta onRegister={() => setIsLogged(true)} />}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name="Tabs" component={Tabs} />
      )}
    </Stack.Navigator>
  );
}
