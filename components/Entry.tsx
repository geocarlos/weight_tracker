import React from 'react';
import { Text, View, StatusBar, Button, StyleSheet } from 'react-native';

const getBmi = (weight: number, height: number) => {
    return weight / (height ** 2);
}

const Entry = ({person, setPage}: any) => {
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
            <Text style={{ fontSize: 30, color: 'grey' }}>{person.name}</Text>
        </View>
        <View style={{flex: 3}}>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>Height: </Text>
                <Text style={styles.entryValue}>{person.height / 100}m</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>Latest weight entered: </Text>
                <Text style={styles.entryValue}>{person.weights[0]}kg</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>BMI: </Text>
                <Text style={styles.entryValue}>{getBmi(person.weights[0], person.height / 100).toFixed(2)}</Text>
            </View>
        </View>
        <View style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button title="< GO BACK" onPress={() => setPage('people')} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appName: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'purple'
  },
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
      flex: 0.1,
      flexDirection: 'row',
      alignSelf: 'flex-start',
      justifyContent: 'flex-start'
  },
  entryLabel: {
    fontSize: 25, 
    fontWeight: "bold",
    color: 'grey'
  },
  entryValue: {
    fontSize: 25,
    color: 'grey'
  }
})

export default Entry;