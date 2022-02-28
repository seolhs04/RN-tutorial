import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';

import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);

  const ask = async () => {
    const {granted} = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: {latitude, longitude},
    } = await Location.getCurrentPositionAsync({
      accuracy: 5,
    });
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogleMaps: false},
    );
    setCity(location[0].city);
  };

  useEffect(() => {
    ask();
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="orange" barStyle="dark-content" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city ? city : 'Loading...'}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'orange'},
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {fontSize: 68, fontWeight: '500', color: 'black'},
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    fontSize: 158,
    marginTop: 20,
    fontWeight: '600',
    color: 'black',
  },
  description: {
    fontSize: 60,
    marginTop: -30,
    color: 'black',
  },
});
