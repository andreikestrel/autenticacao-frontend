import React, { useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
  useEffect(() => {
    // Define o título da página
    document.title = 'DOCUMENTAÇÃO API DESAFIO 2 ESCRIBO';
  }, []);

 return (
    <div className="App">
      <SwaggerUI url="/api-docs.json" />
    </div>
 );
}

export default App;
