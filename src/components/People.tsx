import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../actions/Actions';
import Person from 'src/model/Person';
import UserConfig from 'src/model/UserConfig';

const People = ({setPage, setPerson}: any) => {
  const dispatch = useDispatch();
  const people = useSelector<any, Person[]>(state => state.peopleList.people);
  const userConfig = useSelector<any, UserConfig | undefined>(state => state.appUser.user);

  React.useEffect(() => {
    if (userConfig) {
      dispatch(fetchPeople(`http://10.0.2.2:3003/people/${userConfig.user.username}`));
    }
  }, [dispatch, userConfig]);

  const goToEntry = (person: Person) => {
    setPerson(person);
    setPage('entry');
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          {people ? people.map((person: Person) => (<TouchableOpacity key={person.name} onPress={() => goToEntry(person)}><Text style={{ fontSize: 30, color: 'grey' }}>{person.name}</Text></TouchableOpacity>)) : <Text style={{ fontSize: 50, color: 'grey' }}>
            No People Yet
          </Text>}
        </View>
        <View style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Button title="ADD PERSON" onPress={() => setPage('addPerson')} />
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default People;