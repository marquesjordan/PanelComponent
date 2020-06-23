import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';


export default ActivityShadow = ({showHeaderShadow = false, bgColor = '#000'}) => {
    const screenWidth = useWindowDimensions().width;

    return (
        <View style={{...styles.container, ...{width: screenWidth}}}>
            {showHeaderShadow && <View style={
                {...styles.shadow, ...{backgroundColor: bgColor, borderColor: bgColor}}
            }></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -4,
        zIndex: 55
    },
    shadow: {
        borderWidth: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.9,
        elevation: 8,
        zIndex: 500 
    }

}) 