"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Mic, MessageSquare, Star, Target, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MockInterviewPage() {
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
              AI-Powered Mock Interviews
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-100 mb-8">
              Practice your interview skills with our advanced AI system. Get instant feedback and improve your performance.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/dashboard/mock-interview/start">
                Start Interview <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Our Mock Interviews?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform offers a comprehensive interview preparation experience with advanced features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8 text-primary" />,
                title: "Real-time Feedback",
                description: "Get instant analysis of your answers, tone, and body language."
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Role-Specific Questions",
                description: "Practice with questions tailored to your target job position."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Detailed Analysis",
                description: "Receive comprehensive feedback on your performance."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "24/7 Availability",
                description: "Practice anytime, anywhere at your convenience."
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

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start your mock interview journey in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Select Role", description: "Choose your target job position" },
              { step: "2", title: "Start Interview", description: "Begin your practice session" },
              { step: "3", title: "Answer Questions", description: "Respond to AI-generated questions" },
              { step: "4", title: "Get Feedback", description: "Receive detailed performance analysis" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the advantages of practicing with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Improved Confidence",
                description: "Build confidence through regular practice and feedback."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Better Communication",
                description: "Enhance your communication skills and interview presence."
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Higher Success Rate",
                description: "Increase your chances of landing your dream job."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your Interview?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start practicing with our AI-powered mock interview platform today.
            </p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <Link href="/dashboard/mock-interview/start">
                Start Interview Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 