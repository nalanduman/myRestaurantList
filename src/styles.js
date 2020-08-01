import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const styles = {
    item: StyleSheet.create({
        container: {
            borderRadius: 20,
            margin: 20,
            padding: 10,
            backgroundColor: '#D6EFC7'
        },

        restaurantName: {
            fontSize: 20,
            fontWeight: 'bold'
        },

        image: {
            height: Dimensions.get("window").height/3,
            resizeMode: "contain"
        },

        like: {
            alignSelf: 'center'
        },

        heart: {
            width: 15,
            height: 15,
            alignSelf: 'center',
            margin: 5
        }
    })
}

export default styles