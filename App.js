
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login'
import Register from './screens/register'
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import Info from './screens/info'
import {store} from './reducer/store'
import {Provider} from 'react-redux'

const Stack = createStackNavigator();

export default function App() {
  const[splash,setSplash]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false)
    },2000)
  },[])

  let [fontsLoaded] = useFonts({
    'popins-regular':require('./fonts/Poppins-Regular.ttf'),
    'popins-semibold':require('./fonts/Poppins-SemiBold.ttf'),
    'popins-bold':require('./fonts/Poppins-Bold.ttf')
  });

  if(fontsLoaded){

    return splash ?
    (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontFamily:'popins-bold',fontSize:40,color:"#7F00FF"}}>Demo App</Text>
    </View>):
    (  
      <Provider store={store}>
        <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss()
        }}>
          <View style={styles.container}>
            <NavigationContainer >
              <Stack.Navigator screenOptions={{headerShown:false}} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name='Info' component={Info} />
              </Stack.Navigator>
            </NavigationContainer>

          </View>
      </TouchableWithoutFeedback>
      </Provider>
    );
  }else{
    return <Apploading/>
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
