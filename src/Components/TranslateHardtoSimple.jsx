import React, { useState } from 'react'

const TranslateHardtoSimple = () => {

    const [input, setInput] = useState();
    const [result, setResult] = useState();

    const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);
const translateIt = async() => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Summarize this for a second-grade student: "+input,
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    setResult(response.data.choices[0].text)

}

const sample = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."


  return (
    <div>
        Translates difficult text into simpler concepts.
        <textarea  cols="30" rows="10" onChange={(e)=> setInput(e.target.value)} value={input}></textarea>
        <button onClick={translateIt}>Translate to simpler to text</button>
        <p>{result}</p>
        <button onClick={()=>setInput(sample)}>Sample text</button>
        <button onClick={()=>setInput("")}>Reset</button>
    </div>
  )
}

export default TranslateHardtoSimple