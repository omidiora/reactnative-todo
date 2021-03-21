import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View ,FlatList ,TouchableOpacity } from 'react-native';
import  Header  from './component/Header';
import TodoItem from './component/TodoItem';

export default function App() {

  const [todos , setTodos] =useState([
    {text:'Buy Coffee' , key:'1'} , 
    {text:'Create an app' , key:'2'} , 
    {text:'Play on the swithc' , key:'3'} , 
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key);
    })
  }
  
  return (
    <View style={styles.container}>
    
    {/* header */}
    <Header/>
    
    <View style={styles.content}>
    <View style={styles.list} >
      <FlatList data={todos}   renderItem={(({item})=>(

       <TodoItem item={item}  pressHandler={pressHandler}/> 
      ))} >

      </FlatList>

    </View>
      
    </View>
      

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20

  }


});
