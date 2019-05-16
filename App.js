import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/';
import LoginForm from "./src/components/LoginForm";


class App extends Component{
  componentWillMount(){
    firebase.initializeApp(
          {
              apiKey: "AIzaSyCbuJ45V3UtHawfok5x86BHgANgeNZLXZQ",
              authDomain: "auth-9fe96.firebaseapp.com",
              databaseURL: "https://auth-9fe96.firebaseio.com",
              projectId: "auth-9fe96",
              storageBucket: "auth-9fe96.appspot.com",
              messagingSenderId: "191985610818"
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
