import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={ styles.searchSection }>
            <View style={styles.searchField}></View>

            <Link href='/' asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name='options-outline' />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)


const CustomHeader = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.bike} source={require("@/assets/images/bike.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={ styles.title }>Delivery  Now</Text>
                    <View style={styles.locationName}>
                        <Text style={ styles.subTitle }>Lisbon</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>




            </View>

            <SearchBar />
        </SafeAreaView>
    );
};

const styles  = StyleSheet.create({ 
    container: {
        height: 60,
        backgroundColor: '#FFF',
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    bike: {
        width: 30,
        height: 30
    },
    titleContainer: {
        flex: 1
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50
    },
    title: {
        fontSize: 14,
        color: Colors.medium
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "700"
    },
    locationName: { 
        flexDirection: 'row', 
        alignItems: "center"
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#FFF'
        
    },
    optionButton: {

    },
    searchSection: {

    },
    searchField: {

    }
})

export default CustomHeader;
