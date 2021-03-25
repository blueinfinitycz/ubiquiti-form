import React, { useState } from 'react';
import TableData from './components/table/index';
import Login from './widgets/DataForm';

const App = () => {
  const [loadData, setLoadData] = useState<boolean>(false);
  return (
    <section>
      <Login />
      <TableData />
    </section>
  );
};

export default App;
