import React from 'react';
import './App.css';
import Table from './table/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
