import React from 'react';
import Data from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

const product = Data.data;

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={product} />
    </div>
  );
}

export default App;
