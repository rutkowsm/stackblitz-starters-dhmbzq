// App.js
import React, { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  const [isBlack, setIsBlack] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBlack(!isBlack);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const divStyle = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black',
    padding: '10px',
    marginBottom: '10px',
  };

  return (
    <div className="App" style={divStyle}>
      <h2>Licznik: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Odejmij 1</button>
      <button onClick={() => setCount(count + 1)}>Dodaj 1</button>
      <br />
      <button onClick={toggleBackgroundColor}>Przełącz tło</button>
      <br />
      <button onClick={toggleTextVisibility}>
        {isTextVisible ? 'Ukryj' : 'Pokaż'} tekst
      </button>
      {isTextVisible && <p>Podpowiedź: lorem ipsum</p>}
    </div>
  );
}

export default App;
