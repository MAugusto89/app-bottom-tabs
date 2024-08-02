import * as React from 'react';
import { Text, View } from 'react-native';
import './styles.js';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings!</Text>
    </View>
  );
}