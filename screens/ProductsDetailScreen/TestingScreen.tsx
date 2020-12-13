import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Product from "../../models/Product";

let DATA: any[] = require('../../data/dummy-data.js')


const TestingScreen = (props: any) =>{
    const products = useSelector((state : any) => state.products.availableProducts);

    const renderScreen = (
        <FlatList
            data={products}
            renderItem={(itemData: any) => (
                <View style={styles.card}>
                    <TouchableNativeFeedback >
                        <View >
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri : itemData.item.imageUrl }}></Image>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.button}>BCDSDS</Text>
                                <Text style={styles.button}>BCDSDS</Text>
                                <Text style={styles.button}>BCDSDS</Text>
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
        height: 220,
        margin: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        height: '80%',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'purple',
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    }
});

export default TestingScreen;