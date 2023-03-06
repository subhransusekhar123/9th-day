import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        // <View>
        //     <Text>Hello World!</Text>
        // </View>
        <SafeAreaView style={styles.container}>
            <View>
                <Text 
                style={ isDarkMode ? styles.whiteText:styles.darkText }>
                Hello World!
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg:{
        
    },
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    whiteText:{
        color:"#FFFFFF",
    },
    darkText:{
        color:"#000000",
    }
})
export default AppPro;
