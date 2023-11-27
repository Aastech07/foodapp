import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
const Screen1 = () => {
  const navigation = useNavigation()
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const imageUrl1 = 'https://cdn3.vectorstock.com/i/1000x1000/98/52/logo-for-fast-food-vector-23019852.jpg';

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <><View style={styles.container}>
     
      <View style={{
        backgroundColor: '#rgb(75 35 14)', flex: 1,
      
      }}>
      
        <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={{ uri: imageUrl1 }}
          style={styles.image} />
      </Animated.View>
          <Text style={styles.text}>Welcome To...</Text>
    
          <Text style={styles.text2}> ...Your Fast Food App.</Text>


        <View style={{ top: 450,position:'absolute',left:responsiveWidth(40) }}>
          <Text style={styles.text1}>...Find Veg or Non-Veg Food.</Text>
        </View>

        <View style={{ alignContent: 'center', alignItems: 'center', top: responsiveHeight(45) }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Screen2')}
            style={styles.loginBtn}>
            <Text style={{ color: 'white' }}>Get Stated</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: 400,
    height: 200,
    top:40,
    alignSelf: 'center',
    bottom: 7, borderBottomLeftRadius: 60, borderBottomRightRadius: 60,borderTopRightRadius:30,borderTopLeftRadius:30
  },
  text: {
    fontSize: 30,
    position: 'absolute', marginTop: 300, color: 'white',fontWeight:'bold',left:20,
  }, text1: {
    fontSize: 20,
    position: 'absolute', alignSelf: 'center', marginTop: 100, color: 'white'
  },text2:{
    fontSize: 20,
    position: 'absolute', alignSelf: 'center', marginTop: responsiveHeight(17), color: 'white',top:300
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "rgb(81 121 42)",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    top: responsiveHeight(13),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.00,
    elevation: 10,
  },
});

export default Screen1;
