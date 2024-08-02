import * as React from 'react';
import { Text, View } from 'react-native';
import './styles.js';
import { styles } from './styles.js';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home!</Text>
    </View>
  );
}
