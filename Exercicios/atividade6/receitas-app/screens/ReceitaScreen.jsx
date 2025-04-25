import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Title, Paragraph, List, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image source={{ uri: receita.imagem }} style={{ height: 200, borderRadius: 10, marginBottom: 16 }} />
      <Title>{receita.nome}</Title>
      <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <List.Section title="Ingredientes">
        {receita.ingredientes.map((item, index) => (
          <List.Item key={index} title={item} left={() => <List.Icon icon="checkbox-blank-circle-outline" />} />
        ))}
      </List.Section>

      <List.Section title="Modo de Preparo">
        {receita.modoPreparo.map((passo, index) => (
          <List.Item key={index} title={passo} left={() => <List.Icon icon="chevron-right" />} />
        ))}
      </List.Section>

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Voltar
      </Button>
    </ScrollView>
  );
}