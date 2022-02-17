import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  const [text, setText] = useState("Daniel");

  return (
    <View style={styles.container}>
      <Text>Hello World, NLW Together!</Text>
      
      <TextInput 
        style={styles.input} 
        onChangeText={setText} 
      />

      <Text> Voce digitou: {text}</Text>
    </View>
  );
}
