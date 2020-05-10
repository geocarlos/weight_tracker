import React from 'react';
import { Text, View, StatusBar, Button, StyleSheet, TextInput } from 'react-native';

const AddPerson = ({setPage}: any) => {
  return (
    <>
      <View style={styles.appName}>
        <Text style={{ color: 'white' }}>
          Weight Tracker
        </Text>
      </View>
      <StatusBar backgroundColor="grey" />
      <View style={styles.container}>
          <View style={styles.textInputView}>
            <Text style={styles.label}>Name: </Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.label}>Height: </Text>
            <TextInput style={styles.textInput} keyboardType="numeric" />
            <Text style={styles.label}>Weight: </Text>
            <TextInput style={styles.textInput} keyboardType="numeric" />
          </View>
      </View>
      <View style={{ width: '100%', justifyContent: 'flex-end' }}>
        <Button title="< GO BACK" onPress={() => setPage('people')} />
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
  },
  textInputView: {
    width: '100%',
    padding: 5
  },
  textInput: {
    fontSize: 25,
    borderBottomWidth: 1
  },
  label: {
    fontSize: 25
  }
})

export default AddPerson;