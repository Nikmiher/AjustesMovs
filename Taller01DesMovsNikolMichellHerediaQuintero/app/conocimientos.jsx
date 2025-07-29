import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Conocimientos() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      
      <View style={styles.tabContainer}>
        <Text style={styles.tabSelected}>Inicio</Text>
        <Text style={styles.tab}>Buscar</Text>
      </View>

      <Image
        source={require('../assets/conocimientos.jpg')} 
        style={styles.image}
      /> 
      
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {[1, 2].map(i => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>Card title</Text>
            <Text style={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <TouchableOpacity>
              <Text style={styles.link}>Ver más</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#3a0f0aff',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5E2C8',
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 10,
  },
  tabSelected: {
    backgroundColor: '#4E342E',
    color: '#F5E2C8',
    paddingHorizontal: 50,
    paddingVertical: 9,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#555',
  },
  tab: {
    backgroundColor: 'white',
    color: '#222',
    paddingHorizontal: 50,
    paddingVertical: 9,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#555',
  },
  cardContainer: {
    gap: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: 'white', 
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
    color: '#222', 
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#',
  },
  link: {
    color: '#2E0606',
    fontWeight: '500',
  },
  image: {
    width: 280,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
