import React, { useState } from 'react';
import Saludo from './Saludo'; 
import Despedida from './Despedida';  

function App() {
  const [esSaludo, setEsSaludo] = useState(true);
  const nombre = 'Carlos'; 

  return (
    <div>
      {esSaludo ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
      <button onClick={() => setEsSaludo(!esSaludo)}>
        Cambiar Mensaje
      </button>
    </div>
  );
}

export default App;
