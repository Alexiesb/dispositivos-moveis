import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>U neymá</Text>
      <Image 
      source={{
        uri:'https://media1.tenor.com/m/fyzB1ihZTpIAAAAC/meme-an%C3%A3o.gif'}}

      style={{
        height: 400,
        width: 200
        }}
      />
    </View>
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
