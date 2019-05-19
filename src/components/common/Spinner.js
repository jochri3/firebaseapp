import React from 'react'

//Activity indicator va nous servir de spinner
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({spinnerSize}) => {
    return (
        <View style={ styles.spinnerStyle }>
            <ActivityIndicator
                // valeur1 || valeur2 : ca veut dire que si 'valeur1' n'existe pas,'valeur2' est celle qui sera passee par defaut
                size={ spinnerSize || 'large' }
            />
        </View>
    );
};


const styles={
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}

export {
    Spinner
};