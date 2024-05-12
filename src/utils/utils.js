const axios = require('axios');

const call_llm = async (message) => {
  try {
    let Response = await axios.post("http://localhost:11434/api/generate", {
      model: "phi3",
      prompt: message,
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

module.exports = call_llm;

