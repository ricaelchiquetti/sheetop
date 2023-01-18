import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputOrdem from './src/components/molecules/TextInputOrdem';
import TextInputOrdemNumeric from './src/components/organisms/TextInputOrdemNumeric';
import ButtonRollDice from './src/components/molecules/ButtonRollDice';


App = function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TextInputOrdem name={'TEXTO'} />
      <TextInputOrdemNumeric name={'Idade'} limit={3} />
      <ButtonRollDice diceSize={6} numberDice={6} sumDice={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    paddingLeft: 25,
    backgroundColor: '#202020',
    justifyContent: 'flex-start'
  }
});

export default App;