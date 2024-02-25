import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        marginTop:50,
        alignItems:'center'
    }}>
        <Image source={require('./../../../assets/images/logo.png')}
            style={styles.logoImage}  
        />
        <Image source={require('./../../../assets/images/charging-station.png')} style={styles.bgImage}/>
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your ultimate EV charging Station Finder App.</Text>
            <Text>Find EV charging station near you, plan trip and so much more in just one click.</Text>
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
  }
})
