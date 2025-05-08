import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
        style={styles.image}
      />
      <Title>Clube de Regatas do Flamengo</Title>
      <Paragraph>Fundado: 15 de novembro de 1895</Paragraph>
      <Paragraph>Estádio: Maracanã</Paragraph>
      <Paragraph>Mascote: Urubu</Paragraph>
      <Paragraph>Cores: Vermelho e Preto</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 150, height: 150, marginBottom: 20, borderRadius: 75 },
});

export default EscudoScreen;
