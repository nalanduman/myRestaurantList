import React from 'react'
import {View, TextInput} from 'react-native'

import styles from '../styles'

const MySearch = props => {
    return(
        <View style = {styles.searchBar.searchContainer}>
            <TextInput
                placeholder="Restoran arayın..."
                onChangeText={props.onSearch}
            />
        </View>

    )
}

export {MySearch}