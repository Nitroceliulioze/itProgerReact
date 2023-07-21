import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy Milk", key: '1' },
    { text: "Buy Bread", key: '2' },
    { text: "Buy Butter", key: '3' },
    { text: "Buy Tickets", key: '4' },
  ]);

  const addTask=(text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteTask=(key)=> {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }
  return (
    <>
      <View>
        <Header />
        <Form addHandler={addTask}/>
        <View>
          <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteTask}/>
          )}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
