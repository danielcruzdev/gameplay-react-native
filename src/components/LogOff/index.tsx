import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles'

type Props = {
  handleOptionLogOff: (option: boolean) => void;
}

export function LogOff({ handleOptionLogOff }: Props) {
  return (
    <View style={styles.container}>
      <Text>LogOff</Text>
    </View>
  )
}