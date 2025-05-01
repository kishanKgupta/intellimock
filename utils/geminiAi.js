import { GoogleGenAI } from "@google/genai";

export async function generateInterviewQuestions({
  jobPosition,
  jobDesc,
  jobExperience,
}) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const model = "gemini-1.5-flash";
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
          Generate 5 interview questions with answers in JSON array format. Use ONLY this structure:
          [{"Question": "...", "Answer": "..."}, ...]
          No additional text or JSON objects.`,
        },
      ],
    },
  ];

  const modelRes = await ai.models.generateContent({
    model,
    contents,
    generationConfig: config,
  });

  const rawText = modelRes.candidates[0].content.parts[0].text;

  // Clean the response
  const aiText = rawText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
    .trim();

  // Debugging logs
  console.log("Raw AI response:", rawText);
  console.log("Cleaned AI response:", aiText);

  let jsonData;
  try {
    // Extract the JSON array portion
    const arrayStart = aiText.indexOf('[');
    const arrayEnd = aiText.lastIndexOf(']') + 1;
    
    if (arrayStart === -1 || arrayEnd === -1) {
      throw new Error('No valid JSON array found in response');
    }

    const questionsJson = aiText.slice(arrayStart, arrayEnd);
    jsonData = JSON.parse(questionsJson);

    // Validate structure
    if (!Array.isArray(jsonData)) {
      throw new Error("Expected an array of questions");
    }
    if (jsonData.length === 0) {
      throw new Error("No questions generated");
    }
    
    jsonData.forEach((item, index) => {
      if (!item.Question || !item.Answer) {
        throw new Error(`Question at index ${index} missing required fields`);
      }
    });
  } catch (error) {
    console.error("Error parsing AI response:", error);
    console.error("Problematic text:", aiText);
    throw new Error(`Failed to parse AI response: ${error.message}`);
  }

  return jsonData;
}

export async function generateFeedback(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const model = "gemini-1.5-flash";
  const config = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1024,
    responseMimeType: "application/json",
  };

  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const modelRes = await ai.models.generateContent({
    model,
    contents,
    generationConfig: config,
  });

  const rawText = modelRes.candidates[0]?.content?.parts[0]?.text || "";

  // Clean response
  const cleanedText = rawText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("Generated Feedback (Raw):", rawText);
  console.log("Cleaned Feedback:", cleanedText);

  return cleanedText;
}
