import { Button, StyleSheet, TextInput, Text, View,Image } from 'react-native';
import React from 'react';
import Buttoncus from '../components/button'

export default function Info({navigation}){
    const LogoutFun=()=>{
        navigation.navigate("Login")
    }
    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../assets/smile.png')}
                />

                <Text style={{fontFamily:'popins-bold',textAlign:'center',fontSize:25}}>Logged in sucessfully</Text>
            </View>
            <Buttoncus text="Logout" onPress={LogoutFun} />
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:"3%"
        
        
    },
    main:{
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        height:150,
        width:150,
        alignSelf:'center'
    }
})