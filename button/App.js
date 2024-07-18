import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReusableButton   from './components/ReusableButton';
import ButtonPage from './components/ButtonPage';


export default function App() {
  return (
    <View style={styles.container}>
      <ButtonPage/>
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