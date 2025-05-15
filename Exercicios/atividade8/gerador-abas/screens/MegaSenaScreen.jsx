import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

function gerarJogo() {
  const numeros = new Set();
  while (numeros.size < 6) {
    numeros.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numeros).sort((a, b) => a - b).join(' - ');
}

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const handleGerarJogo = () => {
    const novoJogo = gerarJogo();
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleGerarJogo} style={styles.button}>
        Gerar Jogo da Mega Sena
      </Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  button: { marginBottom: 16 },
  card: { marginBottom: 8 },
});
