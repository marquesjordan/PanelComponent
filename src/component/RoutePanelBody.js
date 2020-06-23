import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoutePanelStops from './RoutePanelStops';

import Swiper from 'react-native-swiper';

export default ({
        patterns, 
        updateDrag,
        color
    }) => {

    useEffect(() => {
    }, [patterns]);

    const displayPatterns = (patterns) => {
        return patterns.map((item, index) => {
            return (
                <RoutePanelStops 
                    key={index.toString()}
                    pattern={item}
                    updateDrag={updateDrag}
                    color={color}
                />
            )
        })
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.container} >
                <View 
                    style={{
                        backgroundColor: 'black',
                        height: 10,
                        width: 10
                    }}
                />
            </View>
            <View style={styles.bottom}>
                <View style={{flex: 1}}>
                    <Swiper
                        key={patterns.length}
                        loop={false}
                        removeClippedSubviews={false}
                        showsButtons={true}
                        nextButton={<View><Text>Next</Text></View>}
                        prevButton={<View><Text>Back</Text></View>}
                        buttonWrapperStyle={styles.buttonWrapper}
                        paginationStyle={styles.pagination}
                        dotStyle={{height: 5, width: 5}}
                        dotColor={`${color}4D`}
                        activeDotStyle={{height: 5, width: 5}}
                        activeDotColor={color}
                    >
                        {displayPatterns(patterns)}
                    </Swiper>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    bottom: {
        flex: 1,
        backgroundColor: '#d4d6db',
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8,
        paddingTop: 10
    },
    inner: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderLeftWidth: 3,
        borderLeftColor: 'red',
        marginVertical: 15,
        marginHorizontal: 5
    },
    buttonWrapper: {
        position: 'absolute', 
        top: 0, 
        alignContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 0,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    pagination: {
        position: 'absolute', 
        top: 0, 
        alignContent: "flex-start",
        alignItems: "flex-start"
    }    
})