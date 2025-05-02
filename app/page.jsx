"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  Mic,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
              Ace Your Next Interview with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-100 mb-8 max-w-3xl mx-auto">
              Practice your interview skills with our AI-powered platform. Get
              instant feedback and improve your performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/sign_up">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-gray-700 hover:bg-white/10 dark:hover:bg-black"
                asChild
              >
                <Link href="/dashboard">Try Mock Interview</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose IntelliMock?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines AI technology with expert interview
              techniques to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8 text-primary" />,
                title: "AI-Powered Feedback",
                description:
                  "Get instant, detailed feedback on your answers and delivery.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Real-time Analysis",
                description:
                  "Analyze your performance with comprehensive metrics and insights.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "24/7 Practice",
                description:
                  "Practice anytime, anywhere with our on-demand interview platform.",
              },
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started with IntelliMock in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account in seconds",
              },
              {
                step: "2",
                title: "Choose Role",
                description: "Select your target job position",
              },
              {
                step: "3",
                title: "Start Interview",
                description: "Begin your mock interview",
              },
              {
                step: "4",
                title: "Get Feedback",
                description: "Receive AI-powered analysis",
              },
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of successful candidates who aced their interviews
              with IntelliMock.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer",
                company: "Google",
                testimonial:
                  "IntelliMock helped me prepare for my technical interviews. The AI feedback was incredibly detailed and helped me improve my communication skills.",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                company: "Microsoft",
                testimonial:
                  "The platform's real-time analysis gave me the confidence I needed. I landed my dream job thanks to the practice sessions.",
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist",
                company: "Amazon",
                testimonial:
                  "The personalized feedback and practice questions were exactly what I needed to prepare for my interviews. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {testimonial.testimonial}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who have improved their
              interview skills with IntelliMock.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary"
              asChild
            >
              <Link href="/sign_up">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
