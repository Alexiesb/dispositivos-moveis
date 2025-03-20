import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text>TESTE</Text>
      </View>
  )
}  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E66E2',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
