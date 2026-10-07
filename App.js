import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TripListScreen from './screens/TripListScreen';

export default function App() {
  return <TripListScreen />;
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#1fcc98bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#FFFFFF" }, 
  subtitle: { fontSize: 16, color: "#ffffff", marginTop: 8 },
});

