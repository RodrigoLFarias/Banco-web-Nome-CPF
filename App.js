import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';
import {useState, useEffect} from 'react';

export default function App() {
  
  const [nome , setNome] = useState("Carregando...");
  //const [cpf , setCpf] = useState("Carregando...");

  useEffect(() => {
  function dados(){
    firebase.database().ref("Cliente").on('value', (snapshot) => {
      console.log(snapshot.val()); // Verifique os dados retornados do Firebase
      setNome(snapshot.val()[1]["Nome"]);
      //setCpf(snapshot).val()[1]["Cpf"];

    })
  }

  dados();
}, []);
  
  return (
    <View style={styles.container}>
      <Text style= {{fontSize:25}}>Olá!{nome}</Text>
      <Text style= {{fontSize:25}}>CPF:{cpf}</Text>
     
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

