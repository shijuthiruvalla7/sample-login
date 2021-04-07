import { Button, StyleSheet, TextInput, Text, View } from 'react-native';
import React from 'react';
import Buttoncus from '../components/button'

export default function Register({ navigation }){

    const handleRegister=()=>{
        navigation.navigate("Info")
    }
    return(
        <View style={styles.main}>
            <Text style={{fontFamily:'popins-bold',fontSize:40,paddingLeft:"3%"}} >Create account</Text>
            <Text style={{fontFamily:'popins-regular',fontSize:20,paddingLeft:"8%",}} >sign up and get start</Text>

            <View style={styles.textbox1}>
                <Text style={{fontFamily:'popins-regular',paddingLeft:"2%"}} >name</Text>
                <TextInput 
                    style={styles.textinput}
                />
            </View>
            <View style={styles.textbox2}>
                <Text style={{fontFamily:'popins-regular',paddingLeft:"2%"}} >email</Text>
                <TextInput 
                    style={styles.textinput}
                />
            </View>

            <View style={styles.textbox2}>
                <Text style={{fontFamily:'popins-regular',paddingLeft:"2%"}} >password</Text>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textinput}
                />
            </View>
            <View style={styles.button}>
                <Buttoncus text="Register" onPress={handleRegister} />
            </View>
                <Text style={styles.text}>i am already here <Text onPress={()=>{navigation.navigate("Login")}} style={{color:"#7F00FF"}}> Login </Text></Text>
            

        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        marginHorizontal:"3%",
        paddingTop:"12%"
    },
    textbox1:{
        marginTop:"30%"
    },

    textbox2:{
        marginTop:"10%"
    },
    button:{
        marginTop:"5%"
        
        
    },
    text:{
        marginTop:"25%",
        textAlign:'center',
        fontSize:20,
        
        
    },
    textinput:{
        borderWidth:1,
        height:50,
        borderColor:"#E100FF",
        borderRadius:5,
        paddingLeft:10
    }




})