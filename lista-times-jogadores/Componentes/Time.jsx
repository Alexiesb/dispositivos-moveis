import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Time(props) {
    const {nome, anoFundacao, mascote, imagem, jogadores} = props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Ano de Fundação: {anoFundacao}</Text>
      <Text style={styles.texto}>Mascote: {mascote}</Text>
      <Text style={styles.texto}>Jogadores: {jogadores}</Text>
      <Image
      source= {{
        uri: imagem
      }}
      />

      <StatusBar style="auto" />
    </View>
  );
}