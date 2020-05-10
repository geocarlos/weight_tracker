import React from 'react';
import People from './components/People';
import AddPerson from './components/AddPerson';

enum Pages {
  SETS = 'sets',
  CREATE = 'create'
}

const App = () => {

  const [page, setPage] = React.useState<Pages>(Pages.SETS);

  return (
    <>
     {page === Pages.SETS ? <People setPage={setPage} /> : <AddPerson setPage={setPage} />}
    </>
  )
}

export default App;