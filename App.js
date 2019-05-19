import React,{ Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner,CardSection } from './src/components/common/';
import LoginForm from "./src/components/LoginForm";
import { CONFIG } from './src/config';


class App extends Component{
  state={
    // loggedIn:false : avec ceci,on pretend savoir l'etat "signin" de l'utilisateur,alors qu'en realite,on en sait rien
    loggedIn:null
  }

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

      //This fat arrow function will be called whenever user signs in or signs out from firebase
      //this "user" argument will we a object when the use is signed in,and will be "null" when is not
      firebase.auth().onAuthStateChanged((user)=>{
        //We've putted this logic here so that the <App /> component which is the parent component can use "loggedIn" ou "loggedOut" state
        //  to decides whetheer it should show or not the  Loggin form
        if(user){
          this.setState({loggedIn:true});
        }else{
          this.setState({loggedIn:false});
        }
      });
  }

  // onButtonPress(){
  //   this.setState({loggedIn:false});
  // }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <CardSection>
            <Button onPress={()=>firebase.auth().signOut()}>
            Log Out
        </Button>
          </CardSection>
        );

      case false:
        return <LoginForm /> ;

      default:
          return <Spinner spinnerSize={"large"} / >
    }
    
     
    
  }

  render(){
    return (
      <View>
        <Header title="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}


export default App;
