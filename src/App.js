import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
 return (
    <div className="App">
      <SwaggerUI url="/api-docs.json" />
    </div>
 );
}

export default App;
