import React from 'react';
import Pokedex from './pages/Pokedex'
import { DataContext } from './utils/context'


function App() {
  const [ data, setData ] = React.useState([]);
  


  return (
    <DataContext.Provider value={{data}}>
      <div className="App">
        <Pokedex/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
