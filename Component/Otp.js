import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp = () => {
    const navigation = useNavigation()
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const imageUrl1 = 'https://cdn3.vectorstock.com/i/1000x1000/98/52/logo-for-fast-food-vector-23019852.jpg';

    const [otp, setOtp] = useState('')
    const [data, setData] = useState('');


    const loginUser = async () => {
        const request = new XMLHttpRequest();
        const url = 'https://v.bluapps.in/api/apk_otp.php';
        const data1 = `mobile=${data}&otp=${otp}`

        request.onreadystatechange = async e => {

            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                try {
                    const response = JSON.parse(request.responseText);
                    if (response.status == "success") {
                        navigation.navigate('Screen3')
                    } else {
                        Alert.alert('Enter Valid Otp')
                    }
                } catch (error) {
                    console.log(error)
                }

            } else {
                console.log('Error');
            }
        };
        request.open('POST', url, true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(data1);
    };




    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('key');
            if (value !== null) {
                console.log('Data retrieved successfully:', value);
                setData(value)
            }
            else {
                console.log('Data not found');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

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
        <><SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 300 }} style={{ flex: 1, backgroundColor: '#rgb(75 35 14)' }} >


                <View style={{
                    backgroundColor: '#rgb(75 35 14)', flex: 1,
                }}>

                    <Animated.View style={{ opacity: fadeAnim }}>
                        <Image
                            source={{ uri: imageUrl1 }}
                            style={styles.image} />
                    </Animated.View>
                    <Text style={styles.text}>Otp Varification...</Text>

                    <View style={{ top: responsiveHeight(10) }} >
                        <View style={{ bottom: 25 }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Enter Otp"
                                    placeholderTextColor="black"
                                    onChangeText={text => setOtp(text)}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignContent: 'center', alignItems: 'center', top: responsiveHeight(23) }}>
                        <TouchableOpacity
                            onPress={() => loginUser()}
                            style={styles.loginBtn}>
                            <Text style={{ color: 'white' }}>Login...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

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
        top: 40,
        alignSelf: 'center',
        bottom: 7, borderBottomLeftRadius: 60, borderBottomRightRadius: 60, borderTopRightRadius: 30, borderTopLeftRadius: 30
    },
    text: {
        fontSize: 30,
        position: 'absolute', marginTop: 260, color: 'white', fontWeight: 'bold', left: 20,
    }, text1: {
        fontSize: 17,
        position: 'absolute', left: 20, marginTop: responsiveHeight(25), color: 'white', fontWeight: '600'
    },
    loginBtn: {
        width: "90%",
        backgroundColor: "rgb(81 121 42)",
        borderRadius: 5,
        height: 45,
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

    inputText: {
        height: 50,
        color: "black"
    },inputView: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        borderWidth: 1,
        top: responsiveHeight(30),
        alignSelf:'center'
      },

});

export default Otp;
