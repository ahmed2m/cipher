import React, { useState, useEffect } from 'react';
import './style.css'
import { Input, InputNumber, Typography } from "antd";

const { Paragraph } = Typography;

function Caeser(props) {
	const [key,setKey] = useState(0);
	const [cipher,setCipher] = useState("");
	const [deCipher,setDeCipher] = useState("");
	const [deCipherText,setDeCipherText] = useState("");

	function handleKeyChange(e){
	  setKey(e);
	}
	function Cipher(plain, key){
	  key = key?parseInt(key):0;
	  let newCipher = "";
	  plain.split('').forEach((char)=>{
		let newChar = String.fromCharCode(((char.charCodeAt(0)-'A'.charCodeAt(0))+key)%26+'A'.charCodeAt(0));
		newCipher+=newChar;
	  })
	  setCipher(newCipher);
	}
	function DeCipher(plain, key){
	  key = key?parseInt(key):0;
	  let newCipher = "";
	  plain.split('').forEach((char)=>{
		console.log((char.charCodeAt(0)-'A'.charCodeAt(0))-key + " " + char + " "+char.charCodeAt(0));
		let newChar = String.fromCharCode(((char.charCodeAt(0)-'A'.charCodeAt(0))-key)%26+'A'.charCodeAt(0));
		newCipher+=newChar;
	  })
	  setDeCipher(newCipher);
	}
	useEffect(()=>{
	  Cipher(props.text.toUpperCase(),key);
	},[props.text, key])

	useEffect(()=>{
	  DeCipher(deCipherText,key);
	},[deCipherText,key])

	return (
	<div className="main">
	  <h4>Caeser Things</h4>
	  <InputNumber
		onChange={e => handleKeyChange(e)}
		style={{ width: 360 }}
		addonBefore="Your Key"
		value={key}
		min={0}
	  />
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

export default Caeser;