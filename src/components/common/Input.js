import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
        label,
        value,
        onChangeText,
        placeholder,
        securedState
    }) => {
    const { textInputStyles, labelStyles, containerStyles } = styles;
    return (
        <View style={ containerStyles }>
            <Text style={ labelStyles }>{ label }</Text>
            <TextInput
                secureTextEntry={ securedState }
                value={ value } 
                onChangeText={ onChangeText }
                style={ textInputStyles }
                autoCorrect={ false }//Eviter la suggestion des email
                placeholder={ placeholder }
            />
        </View>
    )
};

//flex : Nous avons un conteneur <View> qui a 2 enfant
// label => flex : 1 
// input => flex :2
//Ca vaut dire que l'on aloue au parent : 3 grilles,dont:
//->2/3 vont chez "input"
//->1/3 va chez "label"
const styles={
    textInputStyles:{
        height:20,
        width:100,
        color:'#000',
        fontSize:18,
        paddingRight:5,
        paddingLeft:5,
        lineHeight:23,//How much space is between each line of text
        flex:2
    },
    labelStyles:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyles:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {
    Input
};