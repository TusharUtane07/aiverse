import React, { useState } from "react";

const JsToPy = () => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [tip, setTip] = useState("");

  const openai = new OpenAIApi(configuration);
  const conversion = async () => {
    if (input.length === 0) {
      alert("Add something first");
      setResult("");
    }

    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: "#JavaScript to Python:" + input,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setResult(response.data.choices[0].text);
    setTip("Code is not properly indented make sure to format document in your IDE.")
  };

  const sample =
    'dogs = ["bill", "joe", "carl"] car = [] dogs.forEach((dog) { car.push(dog);});';

  return (
    <div>
      Javascript to Python converter:
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></textarea>
      <button onClick={conversion}>Convert the Code</button>
      <p>{result}</p>
      <h3 className="text-3xl">{tip}</h3>
      <button onClick={() => setInput(sample)}>Sample quetion</button>
      <button onClick={() => setInput("")}>Reset</button>

    </div>
  );
};

export default JsToPy;
