import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

export function CategorySelect() {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingRight: 40 }} 
            style={styles.container}>

        </ScrollView>
    );
}
