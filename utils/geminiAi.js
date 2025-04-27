import { GoogleGenAI } from "@google/genai";

export async function generateInterviewQuestions({ jobPosition, jobDesc, jobExperience }) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const model = "gemini-1.5-flash"; // or gemini-1.5-pro (depends on your account)
  const config = {
    responseMimeType: "text/plain",
  };

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}.
          Based on this information, give me 5 interview questions with answers in JSON format. Use "Question" and "Answer" fields.`,
        },
      ],
    },
  ];

  const modelRes = await ai.models.generateContent({
    model,
    contents,
    generationConfig: config,
  });

  // ✅ Correct way to extract text
  const rawText = modelRes.candidates[0].content.parts[0].text;

  const aiText = rawText
    .replace(/```json/g, '') // remove ```json
    .replace(/```/g, '')     // remove ```
    .trim();                 // remove extra spaces

  let jsonData;
  try {
    jsonData = JSON.parse(aiText);
  } catch (error) {
    console.error("Error parsing AI response:", aiText);
    throw new Error("Failed to parse AI response: " + error.message);
  }

  return jsonData;
}
