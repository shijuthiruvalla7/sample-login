import { Button, StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


export default function Buttoncus({ text,onPress }){
    return(

        <TouchableOpacity onPress={onPress}>
            <View style={styles.main}>
            <Text style={styles.text}>{text}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    main:{
        borderRadius:5,
        paddingHorizontal:"4%",
        paddingVertical:"4%",
        backgroundColor:"#7F00FF"
    


    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        color:"white"


    }
})
