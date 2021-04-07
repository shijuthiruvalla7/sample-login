import { Button, StyleSheet, TextInput, Text, View, TouchableOpacity,Alert } from 'react-native';
import React,{useState} from 'react';
import Buttoncus from '../components/button'
import{useDispatch,useSelector}from'react-redux'


export default function Login({ navigation }){
    const dispatch=useDispatch();
    const email=useSelector(state=>state.email)
    const password=useSelector(state=>state.password)

    const[checkmail,setCheckMail]=useState("")
    const[checkpass,setPass]=useState("")

    const signValidator=()=>{
        if(email==checkmail && password==checkpass){
            console.log("here")
            navigation.navigate("Info")
        } else{
            Alert.alert(
                "Login Failed",
                "Please check your username and password",[
                    {
                        text:"Ok",
                        onPress:()=>console.log('ok pressed')
                    }
                ]
            )
        }
    }

    return(
        <View style={styles.main}>
            <Text style={{fontFamily:'popins-bold',fontSize:40,paddingLeft:"3%"}}>Welcome</Text>
            <Text style={{fontFamily:'popins-regular',fontSize:20,paddingLeft:"8%",}}>sign in to continue</Text>

            <View style={styles.textbox1}>
                <Text style={{fontFamily:'popins-regular',paddingLeft:"2%"}}>email</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(val)=>{setCheckMail(val)}}
                />
            </View>
            <View style={styles.textbox2}>
                <Text style={{fontFamily:'popins-regular',paddingLeft:"2%"}}>password</Text>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textinput}
                    onChangeText={(val)=>{setPass(val)}}
                    
                />
            </View>
            <View style={styles.button}>
                <Buttoncus text="Login" onPress={signValidator} />
            </View>
                <Text style={styles.text}>i am new <Text onPress={()=>{navigation.navigate("Register")}} style={{color:"#7F00FF"}}> Sign up </Text></Text>
            

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
        marginTop:"10%",
        textAlign:'center',
        fontFamily:'popins-regular',
        fontSize:20

        
    },
    textinput:{
        borderWidth:1,
        height:50,
        borderColor:"#E100FF",
        borderRadius:5,
        paddingLeft:10
    }




})