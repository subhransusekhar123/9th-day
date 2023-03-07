import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCard from './ElevatedCard'
import FancyCards from './FancyCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCard/>
      <FancyCards/>
      <FancyCards/>
      <FancyCards/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App;