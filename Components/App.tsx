import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCard from './ElevatedCard'
import FancyCards from './FancyCards'
import ActionCard from './ActionCard'
import Whatsapp from './Whatsapp'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCards />
        <Whatsapp />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;