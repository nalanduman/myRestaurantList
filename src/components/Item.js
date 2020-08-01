import React from 'react'
import {View, Image, Text} from 'react-native'

import styles from '../styles'

        // "id": 15333482,
        // "name": "Pago Restaurant",
        // "image": "https://media-cdn.tripadvisor.com/media/photo-o/15/7a/f4/02/pago-balcony.jpg",
        // "location": "Shanghai/Çin",
        // "likes": 122,
        // "isPopular": false,
        // "isOpenNow": true

const Item = props => {
    return(
        <View style={styles.item.container}>

            <Image
                style={styles.item.image}
                source={{uri: props.data.image}}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.item.restaurantName}>{props.data.name}</Text>
                    <Text>{props.data.location}</Text>
                </View>   
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/heart.png')} style={styles.item.heart}/>
                    <Text style={styles.item.like}>{props.data.likes}</Text>                      
                </View>
           
            </View>



        </View>
    )
}

export {Item}