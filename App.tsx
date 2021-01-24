import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native-elements";
import { Feed } from './src/feed/Feed';
import { PhotosData } from './src/utils/photosData';

export interface appState{
  photos:PhotosData[],
  currentPage:number,
    limit:number
}
export default class App extends React.Component<any,appState>{
  state={
    photos:[],
    currentPage:1,
    limit:10
  }
  async componentDidMount() {
    console.log('mount');
    this.loadPhotos();
  };
  async loadPhotos(){
    try{
      const response:PhotosData[] = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${this.state.currentPage}&_limit=${this.state.limit}`);
      const photos:PhotosData[] = [...this.state.photos];
      const newData:PhotosData[] =  photos.concat(response.data);
      this.setState({photos:newData});
    }catch(err){
      console.log(err);
    }
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Feed data={this.state.photos} onEndReached={()=>{
          this.setState({currentPage:++this.state.currentPage});
          this.loadPhotos();
        }}/>
        {/*
        <Navigation data={this.state.photos} limit={this.state.limit} onEndReached={()=>{
          this.setState({currentPage:++this.state.currentPage});
          this.loadPhotos();
        }}/> */}
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});