import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import axios from 'axios'

import { MySearch } from './components';
import data from './components/data/data.json'

const Main = () => {

  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let response = await axios.get('./components/data/data.json')
    setList(response.data)
    setOriginalList(response.data)
    setLoading(false)
  }

  const renderList = ({item}) => <Item data={item}/>

  const searchList = (text) => {
    let filteredList = originalList.filter((item) => {

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

          <FlatList
            refreshing={loading}
            onRefresh={fetchData}
            keyExtractor={(item,index) => index.toString()}
            data={myList}
            renderItem={renderList}
          />

        </View>
      </SafeAreaView>
  )
}


export default Main