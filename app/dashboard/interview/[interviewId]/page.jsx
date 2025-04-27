"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setwebCamEnabled] = useState(false);

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
    <div className="my-10 flex justify-center flex-col items-center">
      <h2 className="font-bold text-2xl">Lets's Get Started</h2>
      <div>
        {webCamEnabled ? (
          <Webcam
            onUserMedia={() => {
              setwebCamEnabled(true);
            }}
            onUserMediaError={() => setwebCamEnabled(false)}
            mirrored={true}
            style={{ height: 300, width: 300 }}
          />
        ) : (
          <>
            <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border " />
            <Button onClick={()=>setwebCamEnabled(true)}>
              Enable Web Cam and Microphone
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Interview;
