import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: "#f0f0f0",
        height:50,
        marginHorizontal: 10,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    SerchIcon:{
        marginLeft:25,
        height: 25,
        width: 25,
        tintColor: "#b9b7b7"
    },
    input: {
        height:50,
        width: 320,
        fontSize: 16
    }
});


export default styles;