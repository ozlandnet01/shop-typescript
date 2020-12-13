import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Image, Text, View, StyleSheet, Button, TouchableNativeFeedback } from "react-native";
import { useSelector } from "react-redux";
import { ProductDetailScreenProp } from "../../constants/INavigationProps";
import IProductDetailScreen from "../../constants/IProductDetailScreen";


const TestingScreen = (props: ProductDetailScreenProp) =>{
    const { navigation } = props;
    const { imageUrl,
            description,
            price,
            title } 
            = props.route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: title
        });
    }, [navigation]);

    const products = useSelector((state : any) => state.products.availableProducts);

    const renderScreen = (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageUrl}} style={styles.image}></Image>
            </View>
            <View style={styles.captionDescription}>
                <View style={{justifyContent: "center", flex: 2}}>
                    <Text style={styles.priceLabel}>{price}</Text>
                </View>
                <Text style={styles.descriptionText}>{description}</Text>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableNativeFeedback style={{width: '100%', alignSelf: "center"}}>
                        <Text
                        onPress={() =>{
                            alert('abc');
                        }}
                        style={{
                            fontSize: 22,
                            textAlign: "center"
                        }}
                        >
                        Add To Cart
                        </Text>           
                </TouchableNativeFeedback>
            </View>

        </View>
    );

    return renderScreen;
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    screen: {
        height: '100%',
        justifyContent: 'space-between'
    },
    imageContainer:{
        height: '50%'
    },
    captionDescription:{
        flex: 1
    },
    buttonContainer:{
        borderWidth: 5,
        margin: 5,
        borderRadius: 5
    },
    priceLabel:{
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    descriptionText:{
        textAlign: "center",
        borderWidth: 5,
        flex: 2
    }
});

export default TestingScreen;