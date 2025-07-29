import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function InicioSesion() {
  return (
    <ScrollView style={{ backgroundColor: '#f9f8ff' }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

       
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          INICIO DE SESIÓN
        </Text>

        {/* Campo correo */}
        <TextInput
          label="Correo electrónico"
          mode="outlined"
          icon ='home'
          style={{ marginBottom: 20 }}
        />

        {/* Campo Contraseña */}
        <TextInput
          label="Contraseña"
          right={props => <List.Icon {...props} icon="lock" color='#F2BF49' />}
          mode="outlined"
          secureTextEntry
          style={{ marginBottom: 30 }}
        />

        
        <Button
          mode="contained"
          style={{
            borderRadius: 10,
            paddingVertical: 5,
            marginBottom: 30,
          }}
        >
          INICIAR SESIÓN
        </Button>

       
        <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>
          O inicia sesión con:
        </Text>

        {/* Botón Google */}
        <Button
          mode="outlined"
          icon="google"
          style={{ borderRadius: 10, marginBottom: 10 }}
        >
          Google
        </Button>

         {/* Botón Apple */}
        <Button
          mode="outlined"
          icon="apple"
          style={{ borderRadius: 10 }}
          contentStyle={{ flexDirection: 'row-reverse' }}
        >
          Apple
        </Button>

      </View>
    </ScrollView>
  );
}


