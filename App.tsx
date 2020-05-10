import React from 'react';
import People from './components/People';
import AddPerson from './components/AddPerson';
import Entry from './components/Entry';

enum Pages {
  PEOPLE = 'people',
  ADD = 'addPerson',
  ENTRY = 'entry'
}

const App = () => {

  const [page, setPage] = React.useState<Pages>(Pages.PEOPLE);
  const [person, setPerson] = React.useState<any>(null);

  const View = {
    people: <People setPage={setPage} setPerson={setPerson} />,
    addPerson: <AddPerson setPage={setPage} />,
    entry: <Entry setPage={setPage} person={person} />
  }

  return (
    <>
     {View[page]}
    </>
  )
}

export default App;