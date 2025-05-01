"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="hidden lg:block relative overflow-hidden">
        <Image
          src="/interview-bg.jpg"
          alt="Interview background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center p-8 max-w-lg"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Welcome to IntelliMock
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Practice your interview skills with AI-powered mock interviews. Get instant feedback and improve your performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">AI-Powered Feedback</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">Real-time Analysis</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">Personalized Practice</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-gradient-to-b from-background to-muted/20">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center lg:hidden mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              IntelliMock
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              AI-Powered Mock Interviews
            </p>
          </div>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout; 