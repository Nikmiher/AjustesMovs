
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Avatar } from 'react-native-paper';

const elementos = [
  { id: '1', titulo: 'Brillo', descripcion: 'Ajustar nivel de brillo de pantalla.', icono: 'brightness-6' },
  { id: '2', titulo: 'Volumen', descripcion: 'Subir o bajar volumen del dispositivo.', icono: 'volume-high' },
  { id: '3', titulo: 'Seguridad', descripcion: 'Opciones de bloqueo y huella.', icono: 'shield-lock' },
  { id: '4', titulo: 'Idioma', descripcion: 'Cambiar el idioma del sistema.', icono: 'translate' },
  { id: '5', titulo: 'Batería', descripcion: 'Estado de energía y ahorro.', icono: 'battery-charging' },
  { id: '6', titulo: 'Pantalla', descripcion: 'Configuración de resolución y tiempo de espera.', icono: 'monitor' },
];

export default function ListaElementos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ajustes Disponibles</Text>

      {elementos.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Title
            title={item.titulo}
            subtitle={item.descripcion}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon={item.icono}
                style={{ backgroundColor: '#45ED42' }}
              />
            )}
          />
          <Card.Actions>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => console.log(`Acción sobre: ${item.titulo}`)}
            >
              Acción
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f',
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#f1fdf3',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: '#3D8A45',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
