import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          {['7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','=','+'].map((btn, idx) => (
              <button
                key={idx}
                onClick={() => btn === '=' ? handleCalculate() : handleClick(btn)}
              >
                {btn}
              </button>
          ))}
          <button className="clear" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
