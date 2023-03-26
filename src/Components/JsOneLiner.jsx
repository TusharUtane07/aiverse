import React, { useState } from 'react'

const JsOneLiner = () => {

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const convertIt = async () => {
        const response = await openai.createCompletion({
            model: "code-davinci-002",
            prompt: `Use list comprehension to convert this into one line of JavaScript:  ${input} JavaScript one line version:`,
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: [";"],
          });
          setResult(response.data.choices[0].text)
    }

    const sample = " dogs.forEach((dog) => { car.push(dog); }); "
  return (
    <div>
        Converts Javascript Function into One line code.
        <textarea  cols="30" rows="10" onChange={(e)=> setInput(e.target.value)} value={input}></textarea>
        <button onClick={convertIt}>Convert to One liner</button>
        <p>{result}</p>
        <button onClick={(e)=> setInput(sample)}>Sample Code</button>
        <button onClick={(e)=> setInput("")}>Reset</button>
    </div>
  )
}

export default JsOneLiner