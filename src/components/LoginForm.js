import React,{ Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      error:''
    }
  }

  onButtonPress(){
    const { email, password} = this.state;

    //Vider le message d'erreur,parce que la on suppose que l'issue de la requete n'est pas encore connue
    this.setState({ error:"" });
    
    //authentification
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(()=>{
      //On a mis ce code ici,car dans notre cas,il n'y a pas de formulaire de signin
      //Donc,si l'authentification echoue,alors on utilise les memes identifiants,mais pour creer un nouveau compte
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(err=>{
        console.log(err);
        this.setState({error:'Authentication failed'});
      });
    });
  }

  //Le text input par defaut a une width:0 et height:0,donc par defaut il est invisible
  //La propriete "value" n'a pas de valeur lorsque le component s'affiche,mais une fois
  //  que l'utilisateur saisie quelque chose,le composant se reaffiche,et mets dans "value" la valeur contenu dans le state
  render(){
    return (
      <Card>
        <CardSection>
          <Input
          //Ici on ne place pas securedState,et donc JSX va envoyer "undefined" qui est "falsey" ce qui mettra la valeur se "secureTextEntry" pour lui a "false"
          label={ "Email" } 
          placeholder={ "user@gmail.com" } 
          value={ this.state.email }
          onChangeText = {
            inputText => this.setState({
              email: inputText
            })
          }
          />
        </CardSection>
          
        <CardSection>
          <Input
          securedState={ true }
          placeholder = "password"
          label = "Password"
          value = {
            this.state.password
          }
          onChangeText = {
            inputText => this.setState({
              password: inputText
            })
          }
          />
        </CardSection>

        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles={
  errorTextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
}

export default LoginForm;
