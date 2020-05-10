import React from 'react';
import People from './components/People';
import AddPerson from './components/AddPerson';

enum Pages {
  PEOPLE = 'people',
  ADD = 'addPerson'
}

const App = () => {

  const [page, setPage] = React.useState<Pages>(Pages.PEOPLE);

  return (
    <>
     {page === Pages.PEOPLE ? <People setPage={setPage} /> : <AddPerson setPage={setPage} />}
    </>
  )
}

export default App;