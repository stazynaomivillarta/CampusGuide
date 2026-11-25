// server.js
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini with your API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, language } = req.body;

    // System instruction to keep TALA AI focused on USTP-CDO
    const systemInstruction = `You are TALA AI, the Trailblazer Academic & Learning Assistant for the University of Science and Technology of Southern Philippines - Cagayan de Oro Campus (USTP-CDO). 
    You answer questions about campus offices, procedures, academic calendar, and student handbook. 
    Always be helpful and concise. 
    The user is asking in ${language}. Please reply in the same language.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to connect to TALA AI' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`TALA AI Server running on http://localhost:${PORT}`);
});