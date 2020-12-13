import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import {MaterialIcons} from '@expo/vector-icons';

let DATA: any[] = require('../../data/dummy-data.js')

const ShopHomeScreen = ({ navigation } : any) =>{
    const products = useSelector((state : any) => state.products.availableProducts);

    const renderScreen = (
        <FlatList
            data={products}
            renderItem={(itemData: any) => (
                <View style={styles.card}>
                    <TouchableNativeFeedback useForeground>
                        <View style={{height:'100%'}}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri : itemData.item.imageUrl }}></Image>
                            </View>
                            <View style={{flex:3}}>
                                <Text style={{textAlign:"center", fontFamily:"open-sans", fontSize: 19, fontWeight:"bold", margin: 5}}>{itemData.item.title}</Text>
                                <Text style={{textAlign:"center"}}>{itemData.item.price}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableNativeFeedback useForeground>
                                <MaterialIcons name="edit" 
                                    size={25} 
                                    color={"red"}
                                    style={styles.button}
                                    onPress={() =>{
                                        navigation.navigate('DetailScreen', 
                                        {   
                                            id: itemData.item.id,
                                            ownerId: itemData.item.ownerId,
                                            title: itemData.item.title,
                                            imageUrl: itemData.item.imageUrl,
                                            description: itemData.item.description,
                                            price: itemData.item.price,
                                        })
                                    }}>
                                </MaterialIcons>
                                </TouchableNativeFeedback>

                                <MaterialIcons name="delete" 
                                    size={25} 
                                    color={"red"}
                                    style={styles.button}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>)
            }
            keyExtractor={item => item.id}
        />
    );

    return renderScreen;
};

const styles = StyleSheet.create({
    card: {
        height: 250,
        margin: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 10,
        width: '100%',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2
    },
    button: {
        height: 30,
        margin: 20
    }
});

export default ShopHomeScreen;