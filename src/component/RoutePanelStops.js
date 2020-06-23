import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ActivityShadow from './ActivityShadow';
import {FlatList} from 'react-native-gesture-handler'

export default ({pattern, updateDrag, color}) => {
    const [toggleShadow, setToggleShadow] = useState(false);
    const STOPS_LENGTH = pattern.stops.length;

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
                        onScroll={event => {
                            event.nativeEvent.contentOffset.y > 0 ?
                            setToggleShadow(true) : setToggleShadow(false)
                        }}
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
                        onTouchStart={() => updateDrag(false)}
                        onTouchEnd={() => updateDrag(true)}
                        onTouchCancel={() => updateDrag(true)}
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