"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { use } from "react";

const Feedback = ({ params }) => {
  const params1 = use(params);
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(null); // New state to store average
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params1.interviewId))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);

    // Filter out invalid ratings
    const validRatings = result
      .map((item) => Number(item.rating))
      .filter((rating) => !isNaN(rating)); // keep only numbers

    if (validRatings.length > 0) {
      const total = validRatings.reduce((sum, rating) => sum + rating, 0);
      const avg = (total / validRatings.length).toFixed(1);
      setAverageRating(avg);
    } else {
      setAverageRating("N/A");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>

      {feedbackList?.length === 0 ? (
        <h2 className="font-bold text-lg text-green-500">
          No interview Feedback
        </h2>
      ) : (
        <>
          <h2 className="text-primary text-lg my-2">
            Your overall interview rating: <strong>{averageRating}/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview questions with correct answers, your answer and
            feedback for improvements for your next interview
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="mt-7">
              <CollapsibleTrigger className="p-2 flex justify-between bg-secondary rounded-lg my-2 text-left gap-7 w-full">
                {item.question} <ChevronsUpDown className="h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg">
                    <strong>Rating:</strong> {item.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                    <strong>Your Answer: </strong> {item.userAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                    <strong>Correct Answer Looks Like: </strong>{" "}
                    {item.correctAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary">
                    <strong>Feedback: </strong> {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}
      <Button className="mt-5" onClick={() => router.replace("/dashboard")}>
        Go Home
      </Button>
    </div>
  );
};

export default Feedback;
