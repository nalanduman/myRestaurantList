import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, ActivityIndicator, Item} from 'react-native';

import { MySearch } from './components/MySearch';

const Main = () => {

  const [originalList, setOriginalList] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    var response = require('./components/data/data.json')
    setList(response.data)
    setOriginalList(response.data)
    setLoading(false)
  }

  const renderList = ({item}) => {
    return(
      <Item data={item}/>
    )
  }  

  const searchList = (text) => {
    let filteredList = originalList.filter(function(item) {
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })

    setList(filteredList)

  }

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>

          <MySearch onSearch={searchList} />

          { 
          loading ?
            <View style = {{flex:1, justifyContent: 'center'}}>
                <ActivityIndicator/>
            </View>
            :
            <FlatList
              refreshing={loading}
              onRefresh={fetchData}
              keyExtractor={(item,index) => index.toString()}
              data={list}
              renderItem={renderList}
            />
          }

        </View>
      </SafeAreaView>
  )
}


export default Main