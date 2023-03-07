import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>More</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10
    },
    container:{
        padding:10,
        flex:1,
        marginHorizontal:8
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardElevated:{
        backgroundColor:"#E21717",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4,
        shadowRadius:2
    }
})