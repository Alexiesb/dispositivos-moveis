import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Image} from 'react-native';
import Filme from './Componentes/Filme'; 
import Serie from './Componentes/Serie';


export default function App() {
  const listaFilmes = [
    {
    "nome": "A Doce Vida",
    "ano": 1960,
    "diretor": "Federico Fellini",
    "tipo": "Drama",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
    "nome": "Psicose",
    "ano": 1960,
    "diretor": "Alfred Hitchcock",
    "tipo": "Terror",
    "capa": "https://s2-globo-play.glbimg.com/jYqsRvkzo3IZU0l8CMDNON2faUU=/362x536/https://s2-globo-play.glbimg.com/mNKWjeSUFHy9fthgDLmpYd9NDnM=/https://s2.glbimg.com/8goPAWNsJlBxbw54bvTH4CxR1Fc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/m/q/B8m3BsS1qk7xkxKbXX0g/2727478-poster.jpg"
    },
    {
    "nome": "O Beijo da Mulher Aranha",
    "ano": 1985,
    "diretor": "Hector Babenco",
    "tipo": "Drama",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
    "nome": "Poltergeist - O Fenômeno",
    "ano": 1982,
    "diretor": "Tobe Hooper",
    "tipo": "Terror",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Poltergeist_%281982%29_-_poster.png/200px-Poltergeist_%281982%29_-_poster.png"
    }
    
    ];
    const listaSeries = [
    {
    "nome": "Buffy, a Caça-Vampiros",
    "ano": 1997,
    "diretor": "Joss Whedon",
    "temporadas": 7,
    "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
    },
    {
    "nome": "Desperate Housewives",
    "ano": 2004,
    "diretor": "Marc Cherry",
    "temporadas": 8,
    "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
    },
    {
    "nome": "Sons of Anarchy",
    "ano": 2008,
    "diretor": "Kurt Sutter",
    "temporadas": 7,
    "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    }
  ]; 
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          listaFilmes.map(
            filme => {
              return(
                <Filme
                  nome = {filme.nome}
                  ano = {filme.ano}
                  diretor = {filme.diretor}
                  tipo = {filme.tipo}
                  capa = {filme.capa}
                />
              )
            }
          )
        }

        {
          listaSeries.map(
            serie => {
              return(
                <Serie
                  nome = {serie.nome}
                  ano = {serie.ano}
                  diretor = {serie.diretor}
                  temporadas = {serie.temporadas}
                  capa = {serie.capa}
                />
              )
            }
          )
        }
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
