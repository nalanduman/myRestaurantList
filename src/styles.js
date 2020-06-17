import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const styles = {
    item: StyleSheet.create({
        container: {
            borderRadius: 10,
            margin: 10,
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
        }
    }),

    searchBar: StyleSheet.create({
        searchContainer: {
            backgroundColor: '#EEBB4D',
            margin: 10,
            borderRadius: 10,
            width: Dimensions.get("window").width/1.05,
            justifyContent: 'center'
        }
    })
}

export default styles