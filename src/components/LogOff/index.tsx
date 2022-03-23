import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

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
          <TouchableOpacity style={styles.buttonNao} onPress={() => handleOptionLogOff(false)}>
            <Text style={styles.titleButton}>
              Não
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonSim}>
          <TouchableOpacity style={styles.buttonSim} onPress={() => handleOptionLogOff(true)}>
            <Text style={styles.titleButton}>
              Sim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
} 