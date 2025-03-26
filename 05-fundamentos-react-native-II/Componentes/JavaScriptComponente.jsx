import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function JavaScriptComponente() {
  const nome = "Alexandre"
  const idade = 18

  function checarMaiordeIdade(){
    if (idade >= 18){
        return "Maior de idade"
    }
    else {
        return "Menor de idade"
    }
  }

  function alerta(){
    alert("clicou no botão")
  }

  return(
    <View style={styles.container}>
        <Text>-----------------------</Text>
        <Text>Nome: {nome}</Text>
        <Text>Nome: {idade}</Text>
        <Text>Ano de nascimento: {2025 - idade}</Text>
        <Text>18+ {checarMaiordeIdade()}</Text>
        <Text>-----------------------</Text>

        <Button title='enviar' onPress={alerta}></Button>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth: 5,
    padding: 10
  },
  texto: {
    fontSize: 20,
    fontFamily: 'arial'
  }
});
