import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, PaperProvider, Paragraph, Title, Text, Button, Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-web';



export default function App() {
  const ListaCards = [
    {
      titulo: "Card1",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card2",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card3",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card4",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    }
  ]
  return (
    <PaperProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
            <FlatList
              data={ListaCards}
              renderItem={({item}) => (
                <Card style={{marginBottom: 10}}>
                  <Card.Content>
                    <Title>{item.titulo}</Title>
                    <Paragraph>{item.descricao}</Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: item.imagem}}/>
                </Card>  
              )}
            /> 
        </View>
    </PaperProvider>
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
