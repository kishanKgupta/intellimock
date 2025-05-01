"use client";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const params1 = use(params);
  const [interviewData, setInterviewData] = useState("");
  const [webCamEnabled, setwebCamEnabled] = useState(false);

  useEffect(() => {
    // Define a new async function inside useEffect
    const fetchInterviewDetails = async () => {
      try {
        if (params1?.interviewId) {
          const result = await db
            .select()
            .from(MockInterview)
            .where(eq(MockInterview.mockId, params1.interviewId));
           console.log(result);
          setInterviewData(result[0]); // Assuming only one record comes
        }
      } catch (error) {
        console.error("Error fetching interview details:", error);
      }
    };

    fetchInterviewDetails(); // Call the inner function
  }, [params1.interviewId]); // ✅ Dependency added

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Lets's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col my-7 gap-5 p-5 rounded-lg border">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position : </strong>
              {interviewData.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech Stack : </strong>
              {interviewData.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years od Experience : </strong>
              {interviewData.jobExperience}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yelloe-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-700">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-600">
              Enable your webcam and microphone to start the AI-generated mock
              interview. It consists of 5 questions that you can answer. At the
              end, you will receive a report based on your responses. Note: We
              do not record your video. You can disable webcam access at any
              time if you wish.
            </h2>
          </div>
        </div>
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
              <WebcamIcon className="h-96 w-full  my-7 p-32 bg-secondary rounded-lg border " />
              <Button variant="ghost" onClick={() => setwebCamEnabled(true)} className="w-full">
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={"/dashboard/interview/" + params1.interviewId + "/start"}>
          <Button className="cursor-pointer">Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
