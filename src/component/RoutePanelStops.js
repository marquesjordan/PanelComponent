import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ActivityShadow from './ActivityShadow';
import {FlatList} from 'react-native-gesture-handler'

export default ({pattern, updateDrag, color, dragHandler, setInnerScroll, forwardedRef}) => {
    const [toggleShadow, setToggleShadow] = useState(false);
    const STOPS_LENGTH = pattern.stops.length;

    const onScroll = (e) => {
        setInnerScroll(e.nativeEvent.contentOffset.y)
        if (e.nativeEvent.contentOffset.y > 0) {
            setToggleShadow(true)
            updateDrag(false);
        } else {
            console.log('stop ', e.nativeEvent.contentOffset.y)
            setToggleShadow(false)
            updateDrag(true)
        }
    }

    return (
        <View style={styles.fullFlex}>
            <View style={{...styles.headerWrapper, ...{borderBottomWidth: toggleShadow ? 0 : 1 }}}>
                <View style={styles.headerConatiner}>
                    <Text style={styles.headerTitle}>{pattern.name}</Text>
                </View>
            </View>

            <View style={styles.fullFlex}>
                <View>
                <ActivityShadow showHeaderShadow={toggleShadow} bgColor={'#d4d6db'} />
                    <FlatList  
                        {...dragHandler}
                        ref={forwardedRef}
                        onScroll={event => {
                            onScroll(event)
                            // console.log('HHHH ', dragHandler)
                        }}
                        onMomentumScrollEnd={event => {
                            onScroll(event)
                        }}

                        scrollEventThrottle={5}
                        scrollEventThrottle={2}
                        style={styles.listConatiner}
                        data={pattern.stops}
                        renderItem={({ item, index }) => (
                            <View style={{paddingVertical: 20, marginVertical: 10, borderWidth: 1}}>
                                <View>
                                    <Text>{item.stop.name} </Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={true}
                        bounces={false}
                    />
                </View>
            </View>
        </View>
  
    )
}

const styles = StyleSheet.create({
    fullFlex: {
        flex: 1
    },
    container: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    listConatiner: {
        paddingHorizontal: 16
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
        height: '100%',
        borderLeftWidth: 4,
        borderLeftColor: 'red',
        marginVertical: 15,
        marginHorizontal: 4
    },
    headerWrapper: {
        marginHorizontal: 16, 
        paddingVertical: 5,
        borderBottomColor: '#787F8D',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    headerConatiner: {
        height: 'auto',
        paddingHorizontal: 30, 
        paddingTop: 15, 
        flexDirection: 'row'
    },
    headerTitle: {
        marginHorizontal: 8,
        lineHeight: 23
    }

})