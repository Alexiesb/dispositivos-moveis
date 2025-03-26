import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Primeiro Componente</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: '20',
    fontFamily: 'arial'
  }
});
