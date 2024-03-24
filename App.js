import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListeObjectifs from './components/listeObjectif';
import AjouterObjectif from './components/ajouterObjectif';

export default function App() {
  const [objectifs, setObjectifs] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma To Do List</Text>
      <AjouterObjectif setObjectifs={setObjectifs} />
      <ListeObjectifs objectifs={objectifs} setObjectifs={setObjectifs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 50,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
  },
});