import React, { useState, useEffect } from 'react';
import './style.css'
import { Input, Button, Typography } from "antd";

const { Paragraph } = Typography;

function Mono(props) {
    const [key,setKey] = useState(props.alphabet);
    const [cipher,setCipher] = useState("");
    const [deCipher,setDeCipher] = useState("");
    const [deCipherText,setDeCipherText] = useState("");
    function genKey(){
      var shuffledWord = '';
      let word = props.alphabet;
      word = word.split('');
      while (word.length > 0) {
        shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
      }
      setKey(shuffledWord);
    }
    function handleKeyChange(e){
      const s = new Set();
      let newKey = "";
      let text=e.target.value;
      text.split('').filter(char=>{
        char =char.toUpperCase();
        // to only append letters
        if(char>='A'&&char<='Z'){
          if(!s.has(char)){
            s.add(char);
            newKey+=char;
          }
        }
      });
      setKey(newKey);
    }
    function Cipher(plain, key, alphabet){
      let newCipher = "";
      let newChar = "";
      plain.split('').filter((char)=>{
        let newIndex = char.charCodeAt(0)-'A'.charCodeAt(0);
        if(key.charAt(newIndex)){
          newChar = key.charAt(newIndex);
        }else{
          newChar = alphabet.charAt(newIndex);          
        }
        newCipher+=newChar;
      })
      setCipher(newCipher);
    }
    function DeCipher(plain, key, alphabet){
      let finalText =""
      plain=plain.toUpperCase();
      plain.split('').map((char)=>{
        finalText+= alphabet.charAt(key.indexOf(char));
      })
      setDeCipher(finalText)
    }
    useEffect(()=>{
      Cipher(props.text.toUpperCase(),key,props.alphabet);
    },[props.text,props.alphabet, key])

    useEffect(()=>{
      DeCipher(deCipherText,key,props.alphabet);
    },[deCipherText,key,props.alphabet])
    return (
    <div className="main">
      <h4>Monoalphabetic Things</h4>
      <Input
        onChange={e => handleKeyChange(e)}
        style={{ width: 360 }}
        addonBefore="Your Key"
        value={key}
      />
      <Button
        type="dashed"
        onClick={()=>{genKey()}}
        style={{ width: 200 }}
      >Generate Random Key</Button>
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
};

export default Mono;