import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
        styles={styles.container}
        behavior="padding">
   
            <View styles={styles.inputContainer}>
                <TextInput
                placeholder="Email"
                value={ }
                onChangeText={text =>  }
                style={styles.input}
                />

            <TextInput
                placeholder="Email"
                value={ }
                onChangeText={text =>  }
                style={styles.input}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
