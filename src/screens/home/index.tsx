import React from "react";
import { View } from "react-native";
import { ButtonAd } from "../../components/button-ad";
import { CategorySelect } from "../../components/category-select";
import { Profile } from "../../components/profile";
import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = React.useState("");

  function handleCategorySelect(categoryId: string){
    categoryId == category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
          <Profile></Profile>
          <ButtonAd />
      </View>

      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}></CategorySelect>
      </View>
    </View>
  );
}
