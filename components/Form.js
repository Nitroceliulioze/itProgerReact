import React, { useState } from "react";

import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function Form({addHandler}) {
  const [text, setvalue] = useState("");

  const onChange = (text) => {
    setvalue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter new task... "
      />
      <Button color='grey' onPress={() => addHandler(text)} title='Add task'/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});
