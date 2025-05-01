"use client";
import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const textToSpeech = useCallback((text) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      alert("Text-to-speech not supported in your browser");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }, []);

  if (!isClient || !mockInterviewQuestion) return null;

  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion.map((_, index) => (
          <button
            key={`Question-${index}`}
            className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${
              activeQuestionIndex === index ? "text-green-800" : ""
            }`}
          >
            Question #{index + 1}
          </button>
        ))}
      </div>

      <h2 className="my-5 text-md md:text-lg">
        {mockInterviewQuestion[activeQuestionIndex]?.Question}
      </h2>

      <button
        onClick={() =>
          textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
        }
        className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
      >
        <Volume2 size={18} />
        <span>Listen to Question</span>
      </button>

      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <div className="flex gap-2 items-center text-primary">
          <Lightbulb size={18} />
          <strong>Note:</strong>
        </div>
        <p className="text-sm text-primary my-2">
          Click "Record Answer" to respond. After the interview, you'll receive
          detailed feedback comparing your answers to the correct responses.
        </p>
      </div>
    </div>
  );
};

export default QuestionsSection;
