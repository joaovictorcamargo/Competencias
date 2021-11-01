import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttomSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttomSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 7,
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
});