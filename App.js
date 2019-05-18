import React,{ Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/';
import LoginForm from "./src/components/LoginForm";
import { CONFIG } from './src/config';


class App extends Component{
  componentWillMount(){
    const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = CONFIG;
    firebase.initializeApp(
          {
              apiKey:apiKey,
              authDomain,
              databaseURL,
              projectId,
              storageBucket,
              messagingSenderId
          }
      );
  }

  render(){
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
