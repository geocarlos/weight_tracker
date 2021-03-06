import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Person from 'src/model/Person';
import { useSelector } from 'react-redux';
import UserConfig from '../model/UserConfig';

const getBmi = (weight: number, height: number) => {
    return weight / (height ** 2);
}

interface IProps {
  person: Person;
  setPage: any;
}


const Entry = ({person, setPage}: IProps) => {
  const userConfig = useSelector<any, UserConfig | undefined>(state => state.appUser.user);
  
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, color: 'grey' }}>{person.name}</Text>
        </View>
        <View style={{flex: 3}}>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>Height: </Text>
                <Text style={styles.entryValue}>{person.height / 100}m</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>Latest weight entered: </Text>
                <Text style={styles.entryValue}>{person.weights[person.weights.length - 1].weight}kg</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.entryLabel}>BMI: </Text>
                <Text style={styles.entryValue}>{getBmi(person.weights[person.weights.length - 1].weight, person.height / 100).toFixed(2)}</Text>
            </View>
            <View style={{ width: '50%', justifyContent: 'center'}}>
              <Button title="Add Weight" onPress={() => setPage('addEntry')} />
            </View>
            <View style={{ width: '50%', justifyContent: 'center'}}>
              <Button title="View all entries" onPress={() => setPage('allEntries')} />
            </View>
        </View>
      </View>
      {userConfig?.user.type === 'trainer' &&  <View style={{ width: '100%', justifyContent: 'center', position: 'absolute', bottom: 0 }}>
        <Button title="< GO BACK" onPress={() => setPage('people')} />
      </View>}
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