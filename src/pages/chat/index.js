import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios"; // Import axios for making HTTP requests

const ChatUI = () => {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleSend = () => {
    if (input.trim() !== "") {
      // Add the user's message to the chat
      const newMessage = { id: messages.length + 1, text: input, sender: "user" };
      setMessages([...messages, newMessage]);

      // Make API call to get bot response
      axios.post("http://localhost:11434/api/generate", {
        model: "phi3",
        prompt: input,
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
      }}
    ).then(response => {
        const botResponse = response.data.response;

        // Add the bot's response to the chat
        const botMessage = { id: messages.length + 2, text: botResponse, sender: "bot" };
        setMessages([...messages, botMessage]);
      })
      .catch(error => {
        console.error('Error:', error);
      });

      setInput(""); // Clear input field
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? "primary.contrastText" : "secondary.main" }}>
          {isBot ? "B" : "U"}
        </Avatar>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "primary.contrastText" : "secondary.contrastText",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="text">{message.text}</Typography>

        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;


// how can i print response in the chat box in markdown

// You can use the `react-markdown` library to render the bot's response in the chat box in Markdown format. Here's how you can modify the `Message` component to render the bot's response in Markdown:
