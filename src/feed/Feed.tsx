import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native-elements";
import { PhotosData } from '../utils/photosData';

interface feedProps{
    data:PhotosData[];
    onEndReached():void;
}
export const Feed = ({data,onEndReached}:feedProps):any=>{
    return(
        <FlatList
                data={data}
                keyExtractor={(photo) => photo['id']+''}
                onEndReached={onEndReached}
                onEndReachedThreshold={5}
                numColumns={2}
                renderItem={
                    ({item:photo})=>{
                        return(
                        <TouchableOpacity style={styles.opacity}>
                            <Image source={{uri:photo.url}} style={styles.photo}></Image>
                        </TouchableOpacity>
                            
                        )
                    }
                }
        />
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList:{
        width:"100%",
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    opacity: {
        width: '50%',
        height: 200,
        padding:2
    },
    photo: {
        width: '100%',
        height: '100%',
    },
});  