import React from 'react';
import { Text, View, StatusBar, Button, StyleSheet } from 'react-native';
const data = require('./testData');

const Sets = ({setPage}: any) => {
  return (
    <>
      <View style={styles.appName}>
        <Text style={{ color: 'white' }}>
          Weight Tracker
          </Text>
      </View>
      <StatusBar backgroundColor="grey" />
      <View style={styles.container}>
        <View style={styles.container}>
          {data ? data.map((person: any) => (<Text key={person.name} style={{ fontSize: 30, color: 'grey' }}>{person.name}</Text>)) : <Text style={{ fontSize: 50, color: 'grey' }}>
            No Sets Yet
          </Text>}
        </View>
        <View style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button title="CREATE SET" onPress={() => setPage('create')} />
        </View>
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

export default Sets;