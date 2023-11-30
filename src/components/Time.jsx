import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Time = ({isTime}) => {
  const formattedTime = `${Math.floor(isTime / 60).toString().padStart(2,"0")}:${(isTime % 60).toString().padStart(2,"0")} `

  return (
    <View style={styles.container__timer} >
        <Text style={styles.title}> {formattedTime} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container__timer: {
        flex: 0.35,
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
    }
})

export default Time