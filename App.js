import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ListeObjectifs from './components/listeObjectif';
import AjouterObjectif from './components/ajouterObjectif';

function App() {
  const [objectifs, setObjectifs] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>Ma To Do List</Text>
      <AjouterObjectif setObjectifs={setObjectifs} />
      <ListeObjectifs objectifs={objectifs} setObjectifs={setObjectifs} />
    </View>
  );
}

export default App;