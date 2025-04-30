"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation"; // 👈 Move here correctly

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateInterviewQuestions } from "@/utils/geminiAi";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/utils/db";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [interviewQuestions, setInterviewQuestions] = useState(null);

  const { user } = useUser();
  const router = useRouter(); // ✅ Correct place inside component

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitted:", jobPosition, jobDesc, jobExperience);

      const questions = await generateInterviewQuestions({
        jobPosition,
        jobDesc,
        jobExperience,
      });

      console.log("Interview Questions:", questions);
      setInterviewQuestions(questions);

      if (questions) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: questions,
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("DD-MM-YYYY"),
          })
          .returning({ mockId: MockInterview.mockId });

        console.log("Inserted ID:", resp);
        if (resp && resp[0]?.mockId) {
          setOpenDialog(false);
          router.push("/dashboard/interview/" + resp[0].mockId);
        } else {
          console.error("Failed to insert into DB.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate interview questions. Please try again.");
    } finally {
      setLoading(false); // ✅ Always stop loading spinner finally
    }
  };

  return (
    <div>
      {/* Button to open form */}
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      {/* Dialog with Form */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <h2>
                  Add details about your job position, description, and
                  experience
                </h2>

                <div className="mt-7 my-3">
                  <label>Job Role/Position</label>
                  <Input
                    placeholder="Ex. Full Stack Developer"
                    required
                    onChange={(e) => setJobPosition(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <label>Job Description/Tech Stack</label>
                  <Textarea
                    placeholder="Ex. React, NodeJS, MySQL etc."
                    required
                    onChange={(e) => setJobDesc(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <label>Years of Experience</label>
                  <Input
                    placeholder="Ex. 5"
                    type="number"
                    max="80"
                    required
                    onChange={(e) => setJobExperience(e.target.value)}
                  />
                </div>

                <div className="flex gap-5 justify-end mt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin mr-2" />
                        AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
