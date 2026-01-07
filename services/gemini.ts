
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateResponse(history: Message[]): Promise<string> {
    const systemInstruction = `
      You are the "AI Twin" of Mohd Ismail, a premier AI & Automation Freelancer.
      Your persona: Highly intelligent, efficient, professional, and slightly witty.
      Mohd Ismail's site (mohdismail.com) provides Python automation, LLM integration, and agentic workflows.
      
      Instructions:
      - Always speak in the context of representing Mohd Ismail.
      - If users ask for price, suggest booking a discovery call for a custom quote.
      - Focus on value: reclaiming time, reducing errors, and scaling operations.
      - Keep responses clean, concise, and professional.
      - Use Markdown for structure.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm experiencing a brief connection issue. How about we chat directly via email?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "My automation circuits are cooling down. Let's connect via the contact form!";
    }
  }
}

export const geminiService = new GeminiService();
