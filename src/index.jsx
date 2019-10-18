import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input, Select } from "antd";
import encryptionMethods from "./Data/EncryptionMethods";
import "./styles.css";

const { Option } = Select;

function App() {
	const [plainText, setPlainText] = useState("");
	const [method, setMethod] = useState(Object.keys(encryptionMethods)[0]);
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const handleChange = (e) => {
		setMethod(e);
	};

	function render(){
		const Method = encryptionMethods[method];
		return <Method text={plainText} alphabet={alphabet}/>;
	}
	return (
		<div className="App">
			<h1>Cipherciption</h1>
			<Input
				onChange={e => setPlainText(e.target.value)}
				style={{ width: 300 }}
				addonBefore="Your Plain Text"
				placeholder="Text"
			/>
			
			<Select style={{ width: 200 }} dropdownMatchSelectWidth={false} onChange={handleChange} defaultValue={Object.keys(encryptionMethods)[0]}>
				{Object.keys(encryptionMethods).map((cipherMethod)=>{
					return(<Option key={cipherMethod} value={cipherMethod}>{cipherMethod} </Option>)
				})}
			</Select>
			
			<div className="method">
				{render()}
			</div>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
