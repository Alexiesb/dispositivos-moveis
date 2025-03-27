import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {
    const ListaCarros = ["Gol", "Palio", "Celta", "Uno", "Byd", "Civc"]

  return (
    <View style={styles.container}>
      {ListaCarros.map(
        (carro) => <Text>{carro}</Text>
        )
        }
      {
        ListaCarros.map(
            (carro) => {
                return(
                    <View style={styles.containeramarerlo}>
                        <Text>{carro}</Text>
                    </View>    
                )
            } 
        )
      }  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 10
    },
    containeramarerlo: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        padding: 10

    }
})