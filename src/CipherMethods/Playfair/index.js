import React, {useState,useEffect} from "react";
import { Input, Button, Typography, Select } from "antd";
import './style.css';
const { Paragraph } = Typography;
const { Option } = Select;

function Playfair(props) {
  const [key,setKey] = useState(props.alphabet);
  const [cipher,setCipher] = useState("");
  const [deCipher,setDeCipher] = useState("");
  const [deCipherText,setDeCipherText] = useState("");
  const [toChange,setToChange] = useState("J");
  const [changeWith,setChangeWith] = useState("I");
  return (
    
    <div className="main">
      <h4>Playfair Things</h4>
      <Input
        // onChange={e => handleKeyChange(e)}
        style={{ width: 360 }}
        addonBefore="Your Key"
        // value={key}
      />
      <Button
        type="dashed"
        // onClick={()=>{genKey()}}
        style={{ width: 200 }}
      >Generate Random Key</Button>
      <div>
        <span>Substitute: </span>
        <Select onChange={(e)=>setToChange(e)} style={{ width: 50 }} dropdownMatchSelectWidth={false} defaultValue={"J"}>
          {props.alphabet.split('').map((char)=>{
            return(<Option key={char} value={char}>{char}</Option>)
          })}
        </Select>
        <span style={{margin:10}}>with</span>
        <Select onChange={(e)=>setChangeWith(e)} style={{ width: 50 }} dropdownMatchSelectWidth={false} defaultValue={"I"}>
          {props.alphabet.split('').map((char)=>{
            return(<Option key={char} value={char}>{char}</Option>)
          })}
        </Select>
      </div>
      
      <div className="matrix">
        {props.alphabet.split('').map((char)=>{
          if(char==changeWith){
            return <span className="double">{changeWith}/{toChange}</span>;
          }if(char==toChange){
            return;
          }
          return <span>{char}</span>;
        })}
      </div>

      <Paragraph copyable>{cipher}</Paragraph>
      <h2>Decrypt?</h2>
      <Input
        onChange={e =>{setDeCipherText(e.target.value)}}
        style={{ width: 360 }}
        addonBefore="Your Encrypted Text"
        // value={deCipherText}
      />
      <Paragraph copyable>{deCipher}</Paragraph>
    </div>
    
  );
}

export default Playfair;
