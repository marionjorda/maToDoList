import React, { useState } from 'react';
import { Alert, View, Button, TextInput } from 'react-native';

export default function AjouterObjectif({ setObjectifs }) {
  const [nouvelObjectif, setNouvelObjectif] = useState('');

  const ajouterObjectif = () => {
    Alert.alert(
        'Confirmation',
        'Voulez-vous vraiment ajouter cet objectif ?',
        [
          {
            text: 'Annuler',
            style: 'cancel',
          },
          {
            text: 'Confirmer',
            onPress: () => {
              setObjectifs((objectifsPrecedents) => [...objectifsPrecedents, nouvelObjectif]);
              setNouvelObjectif('');
            },
          },
        ],
        { cancelable: false },
      );
  };

  return (
    <View style={{ flexDirection: 'row', gap:15,	 paddingTop: 50, alignItems: 'center' }}>
      <TextInput
        value={nouvelObjectif}
        onChangeText={setNouvelObjectif}
        placeholder="Nouvel objectif"
      />
      <Button title="Ajouter objectif" onPress={ajouterObjectif} />
    </View>
  );
}
