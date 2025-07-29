import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, List } from 'react-native-paper';

export default function PerfilUsuario() {
  return (
    <ScrollView style={{ backgroundColor: '#f9f8ff' }}>
      <View style={styles.container}>

        {/* Avatar */}
        <Image
          source={require('../assets/star.jpg')}
          style={styles.avatar}
        />

        {/* Correo */}
        <Text style={styles.email}>nikolheredia73@gmail.com</Text>

        {/* Opciones */}
        <List.Section style={styles.listSection}>

          <List.Item
            title="Editar perfil"
            titleStyle={styles.itemTitle}
            left={props => <List.Icon {...props} icon="account-edit" color="#80CBED" />}
            style={styles.listItem}
            onPress={() => {}}
          />

          <List.Item
            title="Notificaciones"
            titleStyle={styles.itemTitle}
            left={props => <List.Icon {...props} icon="bell" color="#86ABD1" />}
            style={styles.listItem}
            onPress={() => {}}
          />

          <List.Item
            title="Configuración"
            titleStyle={styles.itemTitle}
            left={props => <List.Icon {...props} icon="cog" color="#1D5A75" />}
            style={styles.listItem}
            onPress={() => {}}
          />

          <List.Item
            title="Ayuda"
            titleStyle={styles.itemTitle}
            left={props => <List.Icon {...props} icon="help-circle" color="#858383" />}
            style={styles.listItem}
            onPress={() => {}}
          />

        </List.Section>

        {/* Texto: Cerrar sesión */}
        <Text style={styles.logoutText}>Cerrar sesión</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  listSection: {
    width: '100%',
  },
  listItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    paddingVertical: 12,
  },
  itemTitle: {
    fontSize: 18,
  },
  logoutText: {
    fontSize: 18,
    color: '#5E2676',
    textAlign: 'center',
    marginTop: 40,
  },
});
