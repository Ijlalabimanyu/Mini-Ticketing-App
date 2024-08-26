import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Image assets
const img1 = require('../assets/image/img1.png');
const img2 = require('../assets/image/img2.png');
const img3 = require('../assets/image/img3.png');
const img4 = require('../assets/image/img4.png');

const backIcon = require('../assets/icon/back.png');

const events = {
  1: {
    id: '1',
    image: img1,
    title: 'Indonesia Anime Convention 2024',
    date: '30 October 2024',
    details:
      'Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a enim sed. Sagittis id cursus habitant pellentesque elit placerat. Viverra commodo elementum faucibus aliquet malesuada quisque non. Blandit vitae id vel mi. Et dictumst mattis elit lectus duis imperdiet.',
  },
  2: {
    id: '2',
    image: img2,
    title: 'Comic Frontier 2024',
    date: '31 October 2024',
    details:
      'Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a enim sed. Sagittis id cursus habitant pellentesque elit placerat. Viverra commodo elementum faucibus aliquet malesuada quisque non. Blandit vitae id vel mi. Et dictumst mattis elit lectus duis imperdiet.',
  },
  3: {
    id: '3',
    image: img3,
    title: 'Indonesia Comic Convention 2024',
    date: '1 November 2024',
    details:
      'Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a enim sed. Sagittis id cursus habitant pellentesque elit placerat. Viverra commodo elementum faucibus aliquet malesuada quisque non. Blandit vitae id vel mi. Et dictumst mattis elit lectus duis imperdiet.',
  },
  4: {
    id: '4',
    image: img4,
    title: 'Citra Semasa Piknik 2024',
    date: '2 November 2024',
    details:
      'Lorem ipsum dolor sit amet consectetur. Commodo at vitae ac a enim sed. Sagittis id cursus habitant pellentesque elit placerat. Viverra commodo elementum faucibus aliquet malesuada quisque non. Blandit vitae id vel mi. Et dictumst mattis elit lectus duis imperdiet.',
  },
};

const DetailScreen = ({route}) => {
  const {eventId} = route.params;
  const navigation = useNavigation();
  const event = events[eventId];

  const otherEvents = Object.values(events).filter(e => e.id !== eventId);

  const renderOtherEventItem = ({item}) => (
    <View style={styles.otherEventItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              accessibilityLabel="Go back">
              <Image source={backIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.header}>{event.title}</Text>
          </View>
          <Image source={event.image} style={styles.eventImage} />
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>
          <Text style={styles.details}>{event.details}</Text>
          <Text style={styles.details}>Credits: </Text>
          <Text style={styles.details}>{event.details}</Text>
          <Text style={styles.details}>{event.details}</Text>
          <Text style={styles.details}>{event.details}</Text>

          <Text style={styles.sectionTitle}>Other Events</Text>
          <FlatList
            data={otherEvents}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderOtherEventItem}
            contentContainerStyle={styles.otherEventsContainer}
          />
        </View>
      </ScrollView>
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  header: {
    fontFamily: 'Comic Book',
    fontWeight: '700',
    fontSize: 22,
    color: '#020202',
    textAlign: 'center',
    flex: 1,
    lineHeight: 26,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    marginTop: 12,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#020202',
    lineHeight: 30,
  },
  date: {
    lineHeight: 17,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#959697',
    fontWeight: '500',
    marginBottom: 12,
  },
  details: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#959697',
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: '#020202',
    marginVertical: 16,
  },
  otherEventsContainer: {
    paddingVertical: 8,
  },
  otherEventItem: {
    marginRight: 16,
  },
});

export default DetailScreen;
