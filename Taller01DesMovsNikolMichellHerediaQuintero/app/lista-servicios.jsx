import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Avatar } from 'react-native-paper';

const servicios = [
  { id: '1', titulo: 'Wi-Fi', descripcion: 'Conectarse a redes inalámbricas.', icono: 'wifi' },
  { id: '2', titulo: 'Bluetooth', descripcion: 'Emparejar dispositivos cercanos.', icono: 'bluetooth' },
  { id: '3', titulo: 'Modo oscuro', descripcion: 'Cambiar entre claro y oscuro.', icono: 'theme-light-dark' },
  { id: '4', titulo: 'Notificaciones', descripcion: 'Gestionar alertas y sonidos.', icono: 'bell-ring' },
  { id: '5', titulo: 'Ubicación', descripcion: 'Activar o desactivar GPS.', icono: 'map-marker' },
  { id: '6', titulo: 'Modo avión', descripcion: 'Desactivar conexiones inalámbricas.', icono: 'airplane' },
];

export default function ListaServicios() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Funciones del Teléfono</Text>

      {servicios.map((servicio) => (
        <Card key={servicio.id} style={styles.card}>
          <Card.Title
            title={servicio.titulo}
            subtitle={servicio.descripcion}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon={servicio.icono}
                style={{ backgroundColor: '#6F40E5' }}
              />
            )}
          />
          <Card.Actions>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => console.log(`Ajuste: ${servicio.titulo}`)}
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
    color: '#6F40E5',
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#f9f8ff',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: '#463169',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
