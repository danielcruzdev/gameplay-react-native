import React from "react";
import { View } from "react-native";
import { ButtonAd } from "../../components/button-ad";
import { CategorySelect } from "../../components/category-select";
import { Profile } from "../../components/profile";
import { styles } from "./styles";

export function Home() {
  return (
    <View>
      <View style={styles.header}>
          <Profile></Profile>
          <ButtonAd />
      </View>

      <View>
        <CategorySelect></CategorySelect>
      </View>
    </View>
  );
}
