import {useState} from 'react'
import './InputUrl.css';

function InputUrl({sendRequest}) {

const [inputText, setInputText] = useState('');

  return (
    <div className="inputUrl">
      <div className="title">Please enter a url to retrive valid json and display in tree view:</div>
      <input value={inputText} onChange={(e)=>handleChange(e)}></input>
      <button onClick={()=>sendRequest(inputText)}>SEND</button>
    </div>
  );
  function handleChange(event) {
    setInputText(event.target.value);
  }
}

export default InputUrl;
