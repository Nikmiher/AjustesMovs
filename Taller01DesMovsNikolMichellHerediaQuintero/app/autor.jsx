
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function Autor() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca del Autor</Text>

      <Image
        source={require('../assets/avatar.jpg')} // Asegúrate de que este archivo exista
        style={styles.image}
      />

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.name}>Nikol Michell Heredia Quintero</Text>
          <Text style={styles.description}>
            Soy estudiante de Ingeniería, apasionada por la tecnología y el desarrollo de aplicaciones móviles.
            Me gusta aprender, crear soluciones funcionales e innovadoras, y trabajar en proyectos que integren diseño, experiencia de usuario y funcionalidad.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#6F40E5',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#f9f8ff',
    padding: 10,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
});
