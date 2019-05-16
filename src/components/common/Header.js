// 1- Import librabires for maing a component
import React from 'react';

//The "Text" tag is only for all about showing text,it doesn't know how to layout itself into the parent.
//The tag that is used for laying out elements is the 'View' tag
import { Text, View } from 'react-native';//View : used for positionning
// 2 - Make a component
const Header=({title})=>{
  const { textStyle,viewStyle }=styles;
  return (
    <View style={ viewStyle }>
      <Text style={textStyle}>{ title }</Text>
    </View>
  );
};

//Flexbox : Is a system of positionning elements within container
//->justifyContent : is used to position element in vertical(top to bottom) direction.eg : justifyContent:flex-end/center/flex-start
//->alginItems:is used to pisition element horizontaly(right to left).eg : alignItems : flex-start/center,flex-end

const styles={
  textStyle:{
    fontSize:25
  },
  viewStyle:{
    backgroundColor:'#f8f8f8',
    justifyContent:'center',
    alignItems:'center',
    height:70,
    // marginTop:25,
    paddingTop:20,
    // shadowColor:'#000',
    // shadowOffset:{//dimensions of the shadow
    //   width:0,
    //   height:20
    // },
    // shadowOpacity:0.2,
    elevation:2,
    // position:'relative'
  }
};


// 3 - Make the component accessible in another component
export {
  Header
};
