import './App.css';
import React, {useState} from 'react';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character'
import { COPY_Fail, COPY_SUCCESS } from './message';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [password, setPassword ] = useState("")
  const [passwordLength, setPasswordLength] = useState(26)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const notify = (message, hasError = false)=>{
    if(hasError){
      toast.error(message,{

      })
    }
    else{
      toast(message, {

      })
    }
  }

  const copyToClipboard = (password) =>{
    navigator.clipboard.writeText(password)
  }

  const handleGeneratePassword = () => {
    if(!includeLowerCase && !includeUpperCase && !includeNumbers && includeSymbols){
      notify("To generate password you must select atleast one checkbox", true)
    }
    else{
      let characterList = ""
      if(includeNumbers){
        characterList = characterList + numbers
      }
      if(includeUpperCase){
        characterList = characterList + upperCaseLetters
      }
      if(includeLowerCase){
        characterList = characterList + lowerCaseLetters
      }
      if(includeSymbols){
        characterList = characterList + specialCharacters
      }
      setPassword(createPassword(characterList))
      notify("Password is generated successfully", false)
    }
  }

  const handleCopyPassword = (e)=>{
    if (password === ""){
      notify(COPY_Fail, true)
    }
    else{
      copyToClipboard(password)
      notify(COPY_SUCCESS)
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='generator'>
          <h2 className='generator_header'>
            Password Generator
          </h2>
          <div className='generator_password'>
            <h3>{password}</h3>
            <button className='copy_btn'>
              <i onClick={handleCopyPassword} className='far fa-clipboard'></i>
            </button>
          </div>
          <div className='form-group'>
            <label htmlFor="password-strength">Password length</label>
            <input type="number" className='pw' defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} id='password-strength' name='password-strength' max='26' min='8'/>
          </div>
          <div className='form-group'>
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input checked={includeUpperCase} type="checkbox" className='pw' defaultValue={passwordLength} onChange={(e) => setIncludeUpperCase(e.target.checked)} id='uppercase-letters' name='uppercase-letters' />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers" />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols" />
          </div>
          <button onClick={handleGeneratePassword}>
            Generate Password
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
