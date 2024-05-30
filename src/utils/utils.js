const axios = require('axios');
const { prompt} = require('./CONSTANTS');

const prompt1 = prompt;

const call_llm = async (message) => {
  try {
    let Response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi3",
      prompt: prompt1+message,
      stream: false,
      embedding_only: false,
      rope_frequency_base: 1.1,
      rope_frequency_scale: 0.8,
      num_thread: 8,
      options: {
        num_keep: 5,
        seed: 42,
        num_predict: 1000,
        top_k: 20,
        top_p: 0.9,
        tfs_z: 0.5,
        typical_p: 0.7,
        repeat_last_n: 33,
        temperature: 0.8,
        repeat_penalty: 1.2,
        presence_penalty: 1.5,
        frequency_penalty: 1.0,
        mirostat_tau: 0.8,
        mirostat_eta: 0.6,
        penalize_newline: true,
        num_ctx: 1024,
        num_batch: 2,
        num_gqa: 1,
        main_gpu: 1,
        low_vram: false,
        f16_kv: true,
        vocab_only: false,
        use_mmap: true
      }
    })

    return Response.data.response;

  } catch (error) {
    console.error('Error:', error);
  }

}

const callGroqApi = async (question) => {
  const base = "https://api.groq.com/openai/v1/chat/completions";

  const data = {
    "messages": [
      {
        "role": "system",
        "content": "you are a helpful assistant."
      },
      {
        "role": "user",
        "content": prompt+question
      }
    ],
    "model": "mixtral-8x7b-32768",
    "max_tokens": 512
  };

  const headers = {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
  };

  try {
    const response = await fetch(base, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const responseJson = await response.json();
    const content = responseJson.choices[0].message.content;

    return content;
  } catch (error) {
    console.error('Error:', error);

    return null;
  }
};


module.exports = {call_llm, callGroqApi};

