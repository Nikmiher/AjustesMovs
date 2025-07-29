import React from 'react';
import { View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { Text, Avatar, IconButton } from 'react-native-paper';

const localAvatars = {
  tu: require('../assets/avatar.jpg'),
  ana: require('../assets/tatto.jpg'),
  leo: require('../assets/plata.jpg'),
  sofi: require('../assets/star.jpg'),
};

const localPosts = {
  post1: require('../assets/desayuno.jpg'),
  post2: require('../assets/fanfit.jpg'),
};

const stories = [
  { id: '1', name: 'Tú', img: localAvatars.tu },
  { id: '2', name: 'Nikmiher', img: localAvatars.ana },
  { id: '3', name: 'Nicky', img: localAvatars.leo },
  { id: '4', name: 'Nicki Mich', img: localAvatars.sofi },
];

const posts = [
  {
    id: '1',
    user: 'Nikmiher',
    avatar: localAvatars.ana,
    image: localPosts.post1,
    description: 'Breakfast for morning 🥞🍽',
  },
  {
    id: '2',
    user: 'Honeymoon',
    avatar: localAvatars.leo,
    image: localPosts.post2,
    description: 'Disfrutando del atardecer 🌇',
  },
];

export default function PantallaPrincipal() {
  const renderStories = () => (
    <View>
      <Text style={styles.header}>MiRed</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
        {stories.map((story) => (
          <View key={story.id} style={styles.storyItem}>
            <Avatar.Image source={story.img} size={60} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={posts}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderStories}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Avatar.Image source={item.avatar} size={40} />
            <Text style={styles.username}>{item.user}</Text>
          </View>
          <Image source={item.image} style={styles.postImage} />
          <View style={styles.actions}>
            <IconButton icon="heart-outline" />
            <IconButton icon="comment-outline" />
            <IconButton icon="share-outline" />
          </View>
          <Text style={styles.description}>
            <Text style={{ fontWeight: 'bold' }}>{item.user}</Text> {item.description}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 15 },
  stories: { paddingHorizontal: 10, marginBottom: 15 },
  storyItem: { alignItems: 'center', marginRight: 15 },
  storyName: { fontSize: 12, marginTop: 5 },
  post: { marginBottom: 25 },
  postHeader: { flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10 },
  postImage: { width: '100%', height: 300 },
  actions: { flexDirection: 'row', paddingHorizontal: 5 },
  username: { fontWeight: 'bold', fontSize: 15, marginLeft: 10 },
  description: { paddingHorizontal: 15, marginTop: 5 },
});