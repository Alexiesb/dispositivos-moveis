import React from "react";
import { StatusBar } from "expo-status-bar";
import {
Button,
Image,
StyleSheet,
Text,
View,
ScrollView,
} from "react-native";



export default function App() {

  function alerta(){
    alert("Gol do Neymar");
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Neymar</Text>
      
      <Text style={styles.text}>Neymar (1992) é um futebolista brasileiro, considerado um dos maiores da história. Ganhou diversos títulos jogando pelo Santos Futebol Clube, onde iniciou sua carreira aos 11 anos de idade.
      Sua posição é atacante, atuando como ponta-esquerda. Neymar jogou em diversos times. Seu mais recente contrato foi assinado com o Al-Hilal da Arábia Saudita, onde vai jogar durante dois anos.</Text>
      
      <Button title='GOL' onPress={alerta}/>
      <Image 
      source={{
        uri:'https://i.pinimg.com/736x/63/09/a1/6309a18201e9812fc3ce0deb6a55991e.jpg'}}

      style={{
        height: 400,
        width: 400
        }}
      /> 
      
      <Image 
      source={{
        uri:'https://i.pinimg.com/474x/2f/22/d3/2f22d3cfa97a841272a1e12dc0381871.jpg'}}

      style={{
        height: 400,
        width: 400,
        paddingTop: '30'
        }}
      /> 

      <Image 
            source={{
              uri:'https://i.pinimg.com/236x/60/12/cb/6012cb4b7bed94f0f9b48b21084791cb.jpg'}}

            style={{
              height: 400,
              width: 400,
              paddingTop: '30'
              }}
            /> 

      <Image 
            source={{
              uri:'https://i.pinimg.com/474x/99/e3/d4/99e3d4718f25717e050a78d1963b2d21.jpg'}}

            style={{
              height: 400,
              width: 400,
              paddingTop: '30'
              }}
            /> 

      <Image 
            source={{
              uri:'https://i.pinimg.com/474x/fa/10/f5/fa10f52785cb322523900062e724d70c.jpg'}}

            style={{
              height: 400,
              width: 400,
              paddingTop: '30'
              }}
            />        
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  
  titulo: {
    color: 'white',
    paddingTop: '100',
    fontSize: 45,
    fontWeight: 'semibold'
  },

  text: {
    color: 'white',
    margin: '20',
    fontSize: '12',
    paddingTop: '30',
    justifyContent: 'center',
    fontWeight: 'regular'
  }
});
