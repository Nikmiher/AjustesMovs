import { View, ScrollView } from 'react-native';
import { router, Stack } from 'expo-router';
import { List } from 'react-native-paper';


export default function App() {


  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f9f8ff',
        },
      }} />

      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            
            title="Autor"
            left={props => <List.Icon {...props} icon="account" color='#E33419' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("autor")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Inicio de sesión"
            left={props => <List.Icon {...props} icon="lock" color='#F2BF49' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("inicio-sesion")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Pantalla principal"
            left={props => <List.Icon {...props} icon="cloud" color='#D67E9B' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("pantalla-principal")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Conocimientos previos"
            left={props => <List.Icon {...props} icon="home" color='#E9EB6A' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("conocimientos")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Lista de elementos"
            left={props => <List.Icon {...props} icon="format-list-bulleted" color='#45ED42' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-elementos")}
          />
          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Detalle de elemento"
            left={props => <List.Icon {...props} icon="information" color='#9FC1E3' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("detalle-elemento")}
          />
          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Formulario de registro"
            left={props => <List.Icon {...props} icon="account-plus" color='#4093E5' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("formulario-registro")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Configuración"
            left={props => <List.Icon {...props} icon="cog" color='#B19DE3' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("configuracion")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Perfil de usuario"
            left={props => <List.Icon {...props} icon="account-circle" color='#6F40E5' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("perfil-usuario")}
          />

          <List.Item
            style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}
            title="Lista de servicios"
            left={props => <List.Icon {...props} icon="briefcase" color='#858383' />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => router.push("lista-servicios")}
          />

      

        </View>
      </ScrollView>
    </>
  );

}
