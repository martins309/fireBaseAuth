import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.container}>Bing Bong!! </Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#ffff00",
        fontSize: 100,
        
        
    }
})
