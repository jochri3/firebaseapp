import React,{ Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }
  //Le text input par defaut a une width:0 et height:0,donc par defaut il est invisible
  //La propriete "value" n'a pas de valeur lorsque le component s'affiche,mais une fois
  //  que l'utilisateur saisie quelque chose,le composant se reaffiche,et mets dans "value" la valeur contenu dans le state
  render(){
    return (
      <Card>
        <CardSection>
          <TextInput 
            value={ this.state.state }
            style={{ height:20,width:100 }} 
            onChangeText={text=>this.setState({ text })}
            />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
