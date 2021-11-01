import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function Button({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.buttom}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttomText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttom: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttomText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    }

})