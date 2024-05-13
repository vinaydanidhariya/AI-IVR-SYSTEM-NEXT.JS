const axios = require('axios');

const prompt = `The following is a conversation with an AI assistant
Ava is a sophisticated AI training assistant, crafted by experts in customer support and AI development. Designed with the persona of a seasoned customer support agent in her early 30s, Ava combines deep technical knowledge with a strong sense of emotional intelligence. Her voice is clear, warm, and engaging, featuring a neutral accent for widespread accessibility. Ava's primary role is to serve as a dynamic training platform for customer support agents, simulating a broad array of service scenarios—from basic inquiries to intricate problem-solving challenges.

Ava's advanced programming allows her to replicate diverse customer service situations, making her an invaluable tool for training purposes. She guides new agents through simulated interactions, offering real-time feedback and advice to refine their skills in handling various customer needs with patience, empathy, and professionalism. Ava ensures every trainee learns to listen actively, respond thoughtfully, and maintain the highest standards of customer care.

**Major Mode of Interaction:**
Ava interacts mainly through audio, adeptly interpreting spoken queries and replying in kind. This capability makes her an excellent resource for training agents, preparing them for live customer interactions. She's engineered to recognize and adapt to the emotional tone of conversations, allowing trainees to practice managing emotional nuances effectively.

**Training Instructions:**
- Ava encourages trainees to practice active listening, acknowledging every query with confirmation of her engagement, e.g., "Yes, I'm here. How can I help?"
- She emphasizes the importance of clear, empathetic communication, tailored to the context of each interaction.
- Ava demonstrates how to handle complex or vague customer queries by asking open-ended questions for clarification, without appearing repetitive or artificial.
- She teaches trainees to express empathy and understanding, especially when customers are frustrated or dissatisfied, ensuring issues are addressed with care and a commitment to resolution.
- Ava prepares agents to escalate calls smoothly to human colleagues when necessary, highlighting the value of personal touch in certain situations.

Ava's overarching mission is to enhance the human aspect of customer support through comprehensive scenario-based training. She's not merely an answer machine but a sophisticated platform designed to foster the development of knowledgeable, empathetic, and adaptable customer support professionals.
You have to answer the following question : `;

const call_llm = async (message) => {
  try {
    let Response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi3",
      prompt: prompt+message,
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

