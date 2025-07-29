import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper';
import { useState } from 'react';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>

        {/* Título */}
        <Text style={styles.titulo}>Ajustes</Text>

        {/* Ítem: Cuenta */}
        <View style={styles.itemWrapper}>
          <List.Item
            title="Cuenta"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={styles.item}
            titleStyle={styles.itemText}
          />
        </View>

        {/* Ítem: Notificaciones con switch */}
        <View style={styles.itemWrapper}>
          <List.Item
            title="Notificaciones"
            right={() => (
              <Switch
                value={notificaciones}
                onValueChange={() => setNotificaciones(!notificaciones)}
              />
            )}
            style={styles.item}
            titleStyle={styles.itemText}
          />
        </View>

        {/* Ítem: Privacidad */}
        <View style={styles.itemWrapper}>
          <List.Item
            title="Privacidad"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={styles.item}
            titleStyle={styles.itemText}
          />
        </View>

        {/* Ítem: Seguridad */}
        <View style={styles.itemWrapper}>
          <List.Item
            title="Seguridad"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={styles.item}
            titleStyle={styles.itemText}
          />
        </View>

        {/* Ítem: Ayuda */}
        <View style={styles.itemWrapper}>
          <List.Item
            title="Ayuda"
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={styles.item}
            titleStyle={styles.itemText}
          />
        </View>

        {/* Botón: Cerrar sesión */}
        <Button
          mode="text"
          textColor="#1e3a8a"
          style={styles.logoutButton}
          onPress={() => {}}
        >
          Cerrar sesión
        </Button>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f8ff',
  },
  inner: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  itemWrapper: {
    marginBottom: 10,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
});