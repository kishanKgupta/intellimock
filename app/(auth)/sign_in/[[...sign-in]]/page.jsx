import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Image with overlay */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen">
        <Image
          src="/interview-bg.jpg"
          alt="Interview background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex items-center justify-center p-8">
          <div className="text-white text-center max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Welcome to IntelliMock
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              Practice your interview skills with AI-powered mock interviews.
              Get instant feedback and improve your performance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">AI-Powered Feedback</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">Real-time Analysis</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-300">Personalized Practice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-b from-background to-muted/20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              IntelliMock
            </h1>
            <p className="text-muted-foreground mt-2">
              AI-Powered Mock Interviews
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <SignIn/>
          </div>
        </div>
      </div>

    </div>
  );
}
