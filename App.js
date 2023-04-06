import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Eu sou o Renan e esse é o meu primeiro projeto em Js</Text>
      <Text style={styles.texto}>Eu espero gostar bastante desse conteudo</Text>
      <Text style={styles.socorro}>Agora um pouco de depressão</Text>
      <Text style={styles.socorro}>Meu Deus meu senhor, me ajudaa, por favor!</Text>
      <Text style={styles.linha}>--------------------------------------------------------</Text>
      <Text style={styles.texto}>Hello, i´m Renan and this is my first project in Js</Text>
      <Text style={styles.texto}>I hope like this content</Text>
      <Text style={styles.socorro}>Now some kind of depression</Text>
      <Text style={styles.socorro}>My God, my Lord, help me, please</Text>
      <Text style={styles.linha}>--------------------------------------------------------</Text>
      <Text style={styles.socorro}>Socoroooooooooooo</Text>
      <Text style={styles.texto}>Helpppppppppppppp</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  texto: {
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  socorro: {
    backgroundColor: '#12FF08',
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  linha: {
    color: '#FFF',
  }
});
