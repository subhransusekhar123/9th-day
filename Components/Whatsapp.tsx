import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Whatsapp() {
    const data = [
        {
            id: 1,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },
        {
            id: 2,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },
        {
            id: 3,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },
        {
            id: 4,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },
        {
            id: 4,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },        {
            id: 4,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },        {
            id: 4,
            img: "https://resizing.flixster.com/jkGOzqwEYfpd0TSoalyYW4EmEQk=/218x280/v2/https://flxt.tmsimg.com/assets/238324_v9_bb.jpg",
            name: "subhransu",
            text:"lorem ipsum kdk jdfk  kdfj kf kjdk"
        },

    ]
    return (
        <View>
            <Text style={styles.headerText}>Whatsapp Cards</Text>
           
            <ScrollView style={styles.cardContainer} nestedScrollEnabled = {true}>
                
                {
                    data.map(({img, name, text, id}, index)=>(
                        <View style={[styles.whatsappCard, styles.elevatedCard]}>  
                            <Image source={{uri:img}} style={styles.whatsappCardImage}/>
                            <View style={styles.whatsappCardContent}>
                                <Text style={styles.wpCardContentHeader}>{name}</Text>
                                <Text style={styles.wpCardContentpara}>{text}</Text>
                            </View>
                        </View>
                    ))
                }

            </ScrollView>
          
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        paddingHorizontal:10,
        fontSize:24,
        fontWeight:"bold",
        marginBottom:10
    },
    whatsappCard:{
        paddingHorizontal:10,
        height:80,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:6,
        marginVertical:4
        
    },
    elevatedCard:{
        elevation:4,
        backgroundColor:"#f6e58d"
    },
    whatsappCardImage:{
        height:60,
        width:60,
        borderRadius: 60/2,
        borderColor:"#fff",
        borderWidth:2,
        marginRight:16
    },
    whatsappCardContent:{
    },
    wpCardContentHeader:{
        fontSize:18,
        fontWeight:"600",
        color:"#535c68"
    },
    wpCardContentpara:{
        color:"#535c68",
        fontWeight:"600"
    },
    cardContainer:{
        flex:1,
        display:"flex",
        gap:8,
        marginHorizontal:10,
        height:360,
    },
    
})