import React from 'react';

//TouchableOpactity ou TouchableHighlight(Boutons avec listener) : Sont des composant de feedback,parce que quand l'utilisateur cliques dessus.
//	->TouchableOpacity : Fais l'effet transparent du bouton clique
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ auClick, children }) =>{
	const { buttonStyle, textStyle }=styles;
	return (
		<TouchableOpacity onPress={ auClick } style={ buttonStyle }>
			<Text style = { textStyle }>{ children }</Text>
		</TouchableOpacity>
		);
};


const styles={
	//alignItems ou justifyContent : c'est le parent qui dit aux enfant comment se positionner
	//alignSelf : C'est l'element lui-meme qui decide de comment se positionner
	buttonStyle:{
		flex:1,//Occupe tout la largeur disponible de ton parent
		alignSelf:'stretch',
		backgroundColor:'#fff',
		borderRadius:5,
		borderWidth:1,
		borderColor:'#007aff',
		marginRight:5,
		marginLeft:5
	},

	textStyle:{
		alignSelf:'center',
		color:'#007aff',
		fontSize:16,
		fontWeight:'600',
		paddingTop:10,
		paddingBottom: 10
	}
}

//Export un objet avec comme cle Button
export {
	Button//Ceci est un ES6 trick au lieu de faire {Button : Button}
};
