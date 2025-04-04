import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Jogador(props) {
  const {nome, numero, imagem} = props 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Text style={styles.texto}>Nome jodador: {nome}</Text>
        <Text style={styles.texto}>Numero: {numero}</Text>
        <Image
        source = {{
            uri: imagem
        }}
        />    
    </View>
  );
}

