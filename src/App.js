import './App.css';
import React, {useState} from 'react';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import { COPY_Fail, COPY_SUCCESS } from './message';

const App = () => {
  const [pasword, setPassword ] = useState("")
  const [passwordLength, setPasswordLength] = useState(26)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLoweCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  return (
    <div className="App">
      <div className="container">
        <div className='generator'>
          <h2 className='generator_header'>
            Password Generator
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
