import { Configuration, OpenAIApi } from "openai";
import React from "react";
import { useState } from "react";

const QandA = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const option = {
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    console.log(response);
    setResult(response.data.choices[0].text);
  };

  let sample = "who is prime minister of india"

  return (
    <div className="">
      <div className="box1">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={doStuff} className="btn">do stuff</button>
        <p>{result}</p>
        <button onClick={()=> setInput(sample)}>sample quetion</button>
        <button onClick={()=>setInput("")}>Reset</button>
      </div>
    </div>
  );
};

export default QandA;
