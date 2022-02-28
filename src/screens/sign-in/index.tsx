import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/button-icon";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
};

export function SignIn() {
  type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<homeScreenProp>();

  function handleSignIn() {
    navigation.navigate('Home');
  }


  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
