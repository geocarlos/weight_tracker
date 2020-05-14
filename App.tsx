import React from 'react';
import People from './components/People';
import AddPerson from './components/AddPerson';
import Entry from './components/Entry';
import AddEntry from './components/AddEntry';

enum Pages {
  PEOPLE = 'people',
  ADD = 'addPerson',
  ENTRY = 'entry',
  ADD_ENTRY = 'addEntry'
}

const App = () => {

  const [page, setPage] = React.useState<Pages>(Pages.PEOPLE);
  const [person, setPerson] = React.useState<any>(null);

  const View = {
    people: <People setPage={setPage} setPerson={setPerson} />,
    addPerson: <AddPerson setPage={setPage} />,
    entry: <Entry setPage={setPage} person={person} />,
    addEntry: <AddEntry setPage={setPage} />
  }

  return (
    <>
     {View[page]}
    </>
  )
}

export default App;