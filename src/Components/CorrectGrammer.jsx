import React, { useState } from 'react'

const CorrectGrammer = () => {

    const [input, setInput] = useState()
    const [result, setResult] = useState();
    const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
}); 
const openai = new OpenAIApi(configuration);

const correctIt = async () =>{

    if (input.length === 0 ) {
        alert('add something first')
        setResult('')
    }

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Correct this to standard English: "+input,
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    setResult(response.data.choices[0].text)

}

const sample = "She no went to the market."

  return (
    <div>
        Correct your english sentences.
        <textarea  cols="30" rows="10" onChange={(e)=>setInput(e.target.value)} value={input}></textarea>
        <button onClick={correctIt}>Correct this sentence</button>
        <p>{result}</p>
        <button onClick={()=>setInput(sample)}>Sample Quetion</button>
        <button onClick={()=>setInput("")}>Reset</button>

    </div>
  )
}

export default CorrectGrammer