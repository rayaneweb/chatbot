import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Vérifie que la clé est présente
if (!process.env.OPENAI_API_KEY) {
  console.error("⚠️ OPENAI_API_KEY n'est pas défini dans .env");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  const { message, sarcasme } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Le message est vide" });
  }

  try {
    const prompt = `
Réponds de façon sarcastique et méprisante à la question suivante (niveau de sarcasme: ${sarcasme}/100):
"${message}"
Réponds en français.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 250
    });

    const responseText = completion.choices[0].message.content;
    res.json({ response: responseText });
  } catch (err) {
    console.error("Erreur OpenAI:", err);
    res.status(500).json({ error: "Erreur serveur OpenAI" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
