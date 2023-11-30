import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const option = ["Pomodo", "Short Break", "Long Break"]

const Header = ({ isTime }) => {
    return (
        <View style={styles.container__header}>
            <Text style={styles.item} >{isTime}</Text>
            {
                option.map((item, index) =>
                    <TouchableOpacity>
                        <Text index={index} style={styles.item} >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container__header: {
        flexDirection: "row",
        gap: 20,
    },
    item: {
        fontSize: 20,
    }
})

export default Header