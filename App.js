import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'teal'}}></View>
      <View style={{flex: 1, backgroundColor: 'tomato'}}></View>
      <View style={{flex: 1, backgroundColor: 'orange'}}></View>
    </View>
  );
};

export default App;
