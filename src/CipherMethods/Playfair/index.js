import React, {useState,useEffect} from "react";
import { Input, Button, Typography, Select } from "antd";
import './style.css';
import { uniqueString } from "../../Helper";
const { Paragraph } = Typography;
const { Option } = Select;

function Playfair({ alphabet }) {
  const [key,setKey] = useState("");
  const [cipher,setCipher] = useState("");
  const [deCipher,setDeCipher] = useState("");
  const [deCipherText,setDeCipherText] = useState("");
  const [toChange,setToChange] = useState("J");
  const [changeWith,setChangeWith] = useState("I");
  const [matrix, setMatrix ] = useState(alphabet.replace("J", "I"));
  
  function handleKeyChange(val){
    const newKey = uniqueString(val);
    setKey(newKey);
  }

  useEffect(()=>{
    const filteredKey = key.toUpperCase().replace(toChange, changeWith);
    const filteredAlphabet = alphabet.toUpperCase().replace(toChange, changeWith);
    setMatrix(uniqueString(filteredKey+filteredAlphabet));
  },[key, toChange, changeWith, alphabet]);

  return (

    <div className="main">
      <h4>Playfair Things</h4>
      <Input
        onChange={e => handleKeyChange(e.target.value)}
        style={{ width: 360 }}
        addonBefore="Your Key"
        value={key}
      />
      <div>
        <span>Substitute: </span>
        <Select onChange={(e)=>setToChange(e)} style={{ width: 50 }} dropdownMatchSelectWidth={false} defaultValue={"J"}>
          {alphabet.split('').filter(char=>char!==changeWith).map((char)=>{
            return(<Option key={char} value={char}>{char}</Option>);
          })}
        </Select>
        <span style={{margin:10}}>with</span>
        <Select onChange={(e)=>setChangeWith(e)} style={{ width: 50 }} dropdownMatchSelectWidth={false} defaultValue={"I"}>
          {alphabet.split('').filter(char=>char!==toChange).map((char)=>{
            return(<Option key={char} value={char}>{char}</Option>)
          })}
        </Select>
      </div>
      
      <div className="matrix">
        {matrix.split('').map((char)=>{
          if(char===changeWith){
            return <span key={char} className="double">{changeWith}/{toChange}</span>;
          }
          return <span key={char}>{char}</span>;
        })}
      </div>

      <Paragraph copyable>{cipher}</Paragraph>
      <h2>Decrypt?</h2>
      <Input
        onChange={e =>{setDeCipherText(e.target.value)}}
        style={{ width: 360 }}
        addonBefore="Your Encrypted Text"
        value={deCipherText}
      />
      <Paragraph copyable>{deCipher}</Paragraph>
    </div>
    
  );
}

export default Playfair;
