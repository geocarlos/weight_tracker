import React from 'react';
import { Text, View, StatusBar, Button, StyleSheet, TextInput } from 'react-native';

const CreateRecord = () => {
  return (
    <>
      <View style={styles.appName}>
        <Text style={{ color: 'white' }}>
          Weight Tracker
          </Text>
      </View>
      <StatusBar backgroundColor="grey" />
      <View style={styles.container}>
          <Text>Name: </Text>
          <TextInput />
          <Text>Height: </Text>
          <TextInput />
          <Text>Weight: </Text>
          <TextInput />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appName: {
    width: '100%',
    position: 'absolute',
    top: 0,
    padding: 5,
    backgroundColor: 'purple'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CreateRecord;