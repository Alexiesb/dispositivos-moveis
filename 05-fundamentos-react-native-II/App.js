import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavaScriptComponente from './Componentes/JavaScriptComponente';
import ListaComponente from './Componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaComponente/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
