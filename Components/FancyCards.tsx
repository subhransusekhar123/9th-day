import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
        source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias autem omnis, quibusdam provident placeat architecto quaerat amet fugiat labore sed numquam accusantium. Saepe, fugit nisi aspernatur veritatis quae maxime. Fugiat.</Text>
            <Text style={styles.cardFooter}>12 mins...</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10,
        paddingVertical:10
    },
    card:{
        width:360,
        backgroundColor:"#E5D68A",
        paddingHorizontal:10,
        borderRadius:8,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center"
    },
    cardElevated:{
        elevation:8
    },
    cardImage:{
        width:360,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    cardBody:{
        // width:350,
        paddingHorizontal:10,
    },
    cardTitle:{
        fontSize:24,
        fontWeight:"bold",
        color:"#E07C24",
        marginVertical:8
    },
    cardLabel:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000000",
        marginBottom:8
    },
    cardDescription:{
        fontSize:12,
        fontWeight:"bold",
        color:"#242B2E",
        marginBottom:8
    },
    cardFooter:{
        fontSize:18,
        fontWeight:"bold",
        color:"#000000",
        marginBottom:8,
        textAlign:"right"
    }
})