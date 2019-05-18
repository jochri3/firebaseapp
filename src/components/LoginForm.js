import React,{ Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  onButtonPress(){
    const { email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
