import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native-elements";
import { PhotosData } from '../utils/photosData';

interface settingsProps{
    limit:number;
}
export function Settings({limit}:settingsProps ):any{
    return(
        <View>
            Hello
        </View>
    )
}