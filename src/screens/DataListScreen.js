import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const img1 = require('../assets/image/img1.png');
const img2 = require('../assets/image/img2.png');
const img3 = require('../assets/image/img3.png');
const img4 = require('../assets/image/img4.png');
const qr = require('../assets/icon/qr.png');

const eventData = [
  {
    id: '1',
    image: img1,
    title: 'Indonesia Anime Convention 2024',
    date: '30 October 2024',
  },
  {
    id: '2',
    image: img2,
    title: 'Comic Frontier 2024',
    date: '31 October 2024',
  },
  {
    id: '3',
    image: img3,
    title: 'Indonesia Comic Convention 2024',
    date: '1 November 2024',
  },
  {
    id: '4',
    image: img4,
    title: 'Citra Semasa Piknik 2024',
    date: '2 November 2024',
  },
];

const EventCard = ({event, onPress}) => (
  <TouchableOpacity onPress={() => onPress(event.id)} style={styles.card}>
    <Image source={event.image} style={styles.image} />
    <Text style={styles.title}>{event.title}</Text>
    <Text style={styles.date}>{event.date}</Text>
  </TouchableOpacity>
);

const DataListScreen = () => {
  const navigation = useNavigation();

  const handleEventPress = eventId => {
    navigation.navigate('Detail', {eventId});
  };

  const renderItem = ({item}) => (
    <EventCard event={item} onPress={handleEventPress} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>HOME OF EVENT</Text>
            <TouchableOpacity onPress={() => navigation.navigate('QRScanner')}>
              <Image source={qr} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={eventData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row', // Ensures horizontal alignment of children
    justifyContent: 'space-between', // Spaces children evenly within the container
    alignItems: 'center', // Vertically centers the content
    paddingHorizontal: 16, // Horizontal padding for consistent layout
    paddingVertical: 12, // Vertical padding for adequate touch area
    shadowColor: '#000000', // Subtle shadow color for a modern look
    shadowOffset: {width: 0, height: 2}, // Minimal shadow offset for a light shadow effect
    shadowOpacity: 0.1, // Low opacity for a less intense shadow
    shadowRadius: 10, // Moderate radius to keep the shadow soft
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    padding: 16,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default DataListScreen;
