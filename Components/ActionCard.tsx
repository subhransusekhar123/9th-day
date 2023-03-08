import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite = (websiteURL : string) => {
        Linking.openURL(websiteURL)
    }
  return (
    <View>
      <Text style={styles.cardHeadingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
            <Image
            source={{
                uri:"https://media.istockphoto.com/id/1226721220/photo/child-hugging-tree-with-heart-shape-on-it.jpg?s=612x612&w=is&k=20&c=FtuGqMVqqlpD9UJY8a_GR6TP53wgk_qNBGxGJbavR_o="
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBodyContainer}>
                <Text numberOfLines={3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias et deleniti asperiores vero ipsum voluptatem deserunt possimus? Quis odit eveniet repellat error totam? Adipisci expedita aliquam vel consequatur!
                </Text>
            </View>

            <View style={styles.cardFooterContainer}>
                <TouchableOpacity onPress={()=> {openWebsite("https://www.freecodecamp.org")}}>
                    <Text style={styles.socialLinks}>Read More...</Text>
                </TouchableOpacity>

                <TouchableOpacity 
              //  onPress={()=> {openWebsite("https://www.freecodecamp.org")}}
                >
                    <Text style={styles.socialLinks}>Follow me</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    cardHeadingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:10
    },
    card:{
        width:350,
        height:370,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        elevation:3,
        backgroundColor:"#E8BD0D",
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333333",
        shadowOpacity:0.7
    },
    headingContainer:{
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontSize:16,
        fontWeight:"600"
    },
    cardImage:{
        height:190
    },
    cardBodyContainer:{
        padding:10,
    },
    cardFooterContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:8,
    },
    socialLinks:{
        fontSize:16,
        color:"#000000",
        backgroundColor:"#FFF",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
        elevation:4
    }
})