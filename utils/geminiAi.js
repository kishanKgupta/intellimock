import { GoogleGenAI } from "@google/genai";

export async function generateInterviewQuestions({
  jobPosition,
  jobDesc,
  jobExperience,
}) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const model = "gemini-1.5-flash"; // or gemini-1.5-pro (depends on your account)
  const config = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
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
    .replace(/```json/g, "") // remove ```json
    .replace(/```/g, "") // remove ```
    .trim(); // remove extra spaces

  // Debug the AI response
  console.log("Raw AI response:", rawText);
  console.log("Cleaned AI response:", aiText);

  let jsonData;
  try {
    jsonData = JSON.parse(aiText);
    // Validate the JSON structure
    if (!Array.isArray(jsonData)) {
      throw new Error("Expected an array of questions");
    }
    if (jsonData.length === 0) {
      throw new Error("No questions generated");
    }
    // Validate each question has required fields
    jsonData.forEach((item, index) => {
      if (!item.Question || !item.Answer) {
        throw new Error(`Question at index ${index} missing required fields`);
      }
    });
  } catch (error) {
    console.error("Error parsing AI response:", error);
    console.error("Raw text that caused error:", aiText);
    throw new Error("Failed to parse AI response: " + error.message);
  }

  return jsonData;
}
