import { generateInterviewQuestions } from "@/utils/geminiAi";

export async function POST(request) {
  try {
    const body = await request.json();
    const { jobPosition, jobDesc, jobExperience } = body;

    const result = await generateInterviewQuestions({ jobPosition, jobDesc, jobExperience });

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
