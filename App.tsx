import React from 'react';
import Sets from './components/Sets';
import CreateRecord from './components/CreateRecord';

enum Pages {
  SETS = 'sets',
  CREATE = 'create'
}

const App = () => {

  const [page, setPage] = React.useState<Pages>(Pages.SETS);

  return (
    <>
     {page === Pages.SETS ? <Sets setPage={setPage} /> : <CreateRecord />}
    </>
  )
}

export default App;