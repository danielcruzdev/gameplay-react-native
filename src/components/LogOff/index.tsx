import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler';

type Props = {
  handleOptionLogOff: (option: boolean) => void;
}

export function LogOff({ handleOptionLogOff }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deseja sair do
        <Text style={styles.titleWhiteBold}> Game</Text>
        <Text style={styles.titlePlay}>Play</Text>
        <Text style={styles.titleWhiteBold}>?</Text>
      </Text>

      <View style={styles.buttons}>
        <View style={styles.viewButtonNao}>
          <RectButton style={styles.buttonNao}>
            <Text style={styles.titleButton}>
              Não
            </Text>
          </RectButton>
        </View>
        <View style={styles.viewButtonSim}>
          <RectButton style={styles.buttonSim}>
            <Text style={styles.titleButton}>
              Sim
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
} 