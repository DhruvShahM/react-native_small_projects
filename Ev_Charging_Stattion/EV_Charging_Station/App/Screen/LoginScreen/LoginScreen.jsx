import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function LoginScreen() {
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        marginTop:20,
        alignItems:'center'
    }}>
        <Image source={require('./../../../assets/images/logo.png')}
            style={styles.logoImage}  
        />
        <Image source={require('./../../../assets/images/charging-station.png')} style={styles.bgImage}/>
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your ultimate EV charging Station Finder App.</Text>
            <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click.</Text>
            <TouchableOpacity style={styles.button}
            onPress={()=>console.log('demo')}
            >
              <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17
              }}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoImage:{
    width:200,
    height:40,
    objectFit:'contain'
  },
  bgImage:{
    width:'100%',
    height:300,
    marginTop:20,
    objectFit:'cover'
  },
  heading:{
    fontSize:25,
    fontFamily:'outfit-bold',
    textAlign:'center',
    marginTop:'20'
  },
  desc:{
    fontSize:17,
    fontFamily:'outfit',
    marginTop:15,
    color:Colors.BLACK
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:10
  }
})
