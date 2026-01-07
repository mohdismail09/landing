
import { Message } from "../types";

// Client-safe Gemini service.
// Avoid importing `@google/genai` at module load time because that package
// pulls in Node-only APIs and will break the client bundle. Instead we
// return a friendly offline response in the browser. If you run code in a
// server (Node) environment and set `VITE_GEMINI_API_KEY`, you can enable
// server-side usage by dynamically importing the library there.

export async function generateResponse(history: Message[]): Promise<string> {
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

  // Use Vite env var for client/server parity. Do not attempt to use
  // `@google/genai` in the browser — only in server/node environments.
  const apiKey = (typeof process !== 'undefined' && (process.env.API_KEY || process.env.GEMINI_API_KEY)) || (import.meta.env && (import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY));

  // If running in a browser (window exists) or no API key, return offline message.
  if (typeof window !== 'undefined' || !apiKey) {
    return "I'm currently in offline mode. Please check the API configuration.";
  }

  try {
    // Dynamically import server-side library only when running in Node.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: String(apiKey) });

    const response = await ai.models.generateContent({
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

    return (response as any).text || "I'm experiencing a brief connection issue. How about we chat directly via email?";
  } catch (error) {
    // Log on server, but don't crash the client.
    // eslint-disable-next-line no-console
    console.error('Gemini API Error:', error);
    return "My automation circuits are cooling down. Let's connect via the contact form!";
  }
}

// Backwards-compatible export used by components. Keep a simple object
// so existing imports like `geminiService.generateResponse(...)` still work.
export const geminiService = { generateResponse };
