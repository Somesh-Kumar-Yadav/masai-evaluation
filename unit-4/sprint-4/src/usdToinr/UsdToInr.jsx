import React from 'react'

const convertToINR = (amount, currency) => {
    if (currency === "INR") {   
        return " USD " +(amount/74.5).toFixed(2);
    } else {
        return " INR "+(amount*74.5).toFixed(2);
    } 
    }
export function UsdToInr() {
    const [value, setValue] = React.useState("");
    const [currency, setCurrency] = React.useState("INR");
    const [text,setText ] = React.useState("");
    const handleConvert = () => {
       setText(convertToINR(value, currency));
    }
    return <>
        <div>
        <input type="number" value={value} onChange={(e) => {setValue(e.target.value)}}/>
        <select value={ currency} onChange={(e)=>{setCurrency(e.target.value)}}>
            <option>INR</option>
            <option>USD</option>
        </select>
        <button onClick={ handleConvert}>{ currency==="INR"?"Convert to USD":"Convert to INR"}</button>
        </div>
        <p>{text}</p>
    </>
}