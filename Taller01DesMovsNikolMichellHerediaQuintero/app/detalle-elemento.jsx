
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

export default function DetalleElemento() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalle del Elemento</Text>

      {/* Contenedor de imagen */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/desayuno.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Contenedor de texto*/}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.elementTitle}>Desayuno Saludable</Text>
          <Text style={styles.description}>
            Este desayuno incluye huevos, pan integral, frutas frescas y una bebida caliente.
            Ideal para empezar el día con energía y buena nutrición.
          </Text>
        </Card.Content>
      </Card>

     
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Acción ejecutada')}
        >
          Realizar acción
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6F40E5',
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  card: {
    backgroundColor: '#f9f8ff',
    borderRadius: 15,
    marginBottom: 30,
  },
  elementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#555',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#101D24',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 6,
  },
  
});
