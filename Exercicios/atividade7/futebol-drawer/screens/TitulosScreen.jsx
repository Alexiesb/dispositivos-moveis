import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { List, Title } from 'react-native-paper';

const titulos = [
  { nome: "Campeonato Brasileiro", anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020] },
  { nome: "Copa Libertadores da América", anos: [1981, 2019, 2022] },
  { nome: "Copa do Brasil", anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: "Supercopa do Brasil", anos: [2020, 2021, 2025] }
];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Title>{item.nome}</Title>
          <List.Item title={`Anos: ${item.anos.join(', ')}`} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { marginVertical: 10, marginHorizontal: 20 },
});

export default TitulosScreen;
