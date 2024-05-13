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
import {call_llm, callGroqApi} from "src/utils/utils";

const ChatUI = () => {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const handleSend = async () => {
    if (input.trim() !== "") {
      // Add the user's message to the chat
      const newMessage = { id: messages.length + 1, text: input, sender: "user" };

      // Update messages state using functional form of setMessages
      setMessages(prevMessages => [...prevMessages, newMessage]);

      // Make API call to get bot response

      const botResponse = await callGroqApi(input);

      // Add the bot's response to the chat
      const botMessage = { id: messages.length + 2, text: botResponse, sender: "bot" };

      // Update messages state using functional form of setMessages
      setMessages(prevMessages => [...prevMessages, botMessage]);

      setInput(""); // Clear input field
    }
  };


  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
      setInput(""); // Clear input field
    }
  };

  return (
    <Grid container spacing={4}>
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f1f5f9",
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
                autoFocus={true}
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Handle Enter key press
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
    </Grid>
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
        <Avatar
          sx={{
            bgcolor: isBot ? "primary.contrastText" : "secondary.main",
          }}
        >
          {isBot ? "B" : "U"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot
              ? "primary.contrastText"
              : "secondary.contrastText",
            borderRadius: isBot
              ? "20px 20px 20px 5px"
              : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;
