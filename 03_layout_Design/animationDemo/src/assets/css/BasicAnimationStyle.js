import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    animatedView: {
        height: 100,
        backgroundColor:'white',
        borderRadius:10,
    },
    ClickTouchableOpacity:{
        margin:10, 
        height:40, 
        width:200, 
        backgroundColor:'#676d9e',
        
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderRadius: 10,
        
    },
    ClickText:{
        color:'white',
        fontSize: 20,
    },
});

export default styles;