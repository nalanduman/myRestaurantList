import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native';

import { Item } from './components';
import dataJson from './data/data.json';

const Main = () => {
  const data = dataJson

  const renderList = ({item}) => {
    return(
      <Item data={item}/>
    )
  }  

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>

          <FlatList
            keyExtractor={(_,index) => index.toString()}
            data={data}
            renderItem={renderList}
          />

        </View>
      </SafeAreaView>
  )
}


export default Main