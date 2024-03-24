import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListeObjectifs({ objectifs, setObjectifs }) {
  const supprimerObjectif = (index) => {
    setObjectifs(objectifs.filter((_, i) => i !== index));
  };

  return (
    <View style={{ paddingTop: 20 }}>
      {objectifs.map((objectif, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{objectif}</Text>
          <TouchableOpacity onPress={() => supprimerObjectif(index)}>
            <Text style={{ marginLeft: 20, color: 'red', fontSize: 15, padding: 3, width: 30, height: 30, textAlign:'center', borderRadius: 15, borderWidth: 1, borderColor: 'red'}}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
