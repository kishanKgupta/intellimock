"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);

  useEffect(() => {
    // Define a new async function inside useEffect
    const fetchInterviewDetails = async () => {
      try {
        console.log("Interview ID:", params.interviewId);

        if (params?.interviewId) {
          const result = await db
            .select()
            .from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId));

          console.log("Interview Details:", result);
          setInterviewData(result[0]); // Assuming only one record comes
        }
      } catch (error) {
        console.error("Error fetching interview details:", error);
      }
    };

    fetchInterviewDetails(); // Call the inner function
  }, [params.interviewId]); // ✅ Dependency added

  return (
    <div className="my-10 flex justify-center">
      <h2 className="font-bold text-2xl">Lets's Get Started</h2>
    </div>
  );
};

export default Interview;
