import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from  './components/Todo';

function App() {
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <Todo />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
