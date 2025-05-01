"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CheckCircle2, Clock, Code, MessageSquare, Mic, Star, Target, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/interview-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>
        
        <div className="relative z-10 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
              Practice Makes Perfect
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-100 mb-8">
              Master your interview skills with our comprehensive practice platform. Get detailed feedback and improve with every session.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/dashboard/practice/start">
                Start Practicing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Interview Process Section */}
      <section className="py-20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The Interview Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our practice platform simulates real interview scenarios with advanced AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8 text-primary" />,
                title: "Voice Analysis",
                description: "Our AI analyzes your voice tone, clarity, and confidence level in real-time."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Content Analysis",
                description: "Get feedback on your answers' relevance, structure, and completeness."
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered Questions",
                description: "Practice with intelligent questions that adapt to your responses."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Types Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Question Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practice with a variety of question types to prepare for any interview scenario.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Technical Questions",
                description: "Practice coding problems and technical concepts."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Behavioral Questions",
                description: "Master your responses to common behavioral questions."
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Role-Specific Questions",
                description: "Questions tailored to your target job position."
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Problem-Solving",
                description: "Practice solving real-world business problems."
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback System Section */}
      <section className="py-20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Comprehensive Feedback</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get detailed insights into your performance with our advanced feedback system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                title: "Answer Quality",
                description: "Analysis of your answer's relevance, completeness, and structure."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Response Time",
                description: "Feedback on your response timing and pacing."
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Improvement Areas",
                description: "Specific suggestions for improvement in each category."
              }
            ].map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feedback.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feedback.title}</h3>
                <p className="text-muted-foreground">{feedback.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Track Your Progress</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Monitor your improvement over time with detailed analytics and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Performance Metrics",
                description: "Track your scores, response times, and improvement areas."
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Personalized Goals",
                description: "Set and achieve specific interview preparation goals."
              }
            ].map((tracking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{tracking.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{tracking.title}</h3>
                <p className="text-muted-foreground">{tracking.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground w-full">
        <div className="px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Skills?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start practicing with our AI-powered platform and get detailed feedback on your performance.
            </p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <Link href="/dashboard/practice/start">
                Start Practicing Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 