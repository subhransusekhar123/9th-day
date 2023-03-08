import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCard from './ElevatedCard'
import FancyCards from './FancyCards'
import ActionCard from './ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCard/>
      <FancyCards/>
      <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;