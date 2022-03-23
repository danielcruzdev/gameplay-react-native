import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { LogOff } from '../LogOff';
import { ModalLogOffView } from '../ModalLogOffView';
import { styles } from './styles';

export function Profile() {
  const { user, singOut } = useAuth();
  const [openLogOff, setOpenLogOff] = useState(false);


  function handleOptionLogOff(option: boolean) {
    if(option){
      singOut()
    }

    handleCloseLogOff();
  }

  function handleOpenLogOff() {
    setOpenLogOff(true);
  }

  function handleCloseLogOff() {
    setOpenLogOff(false);
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={handleOpenLogOff}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

      <ModalLogOffView visible={openLogOff} closeModal={handleCloseLogOff}>
        <LogOff handleOptionLogOff={handleOptionLogOff} />
      </ModalLogOffView>

    </View>
  )

}