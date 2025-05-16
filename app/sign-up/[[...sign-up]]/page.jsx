import { SignUp } from "@clerk/nextjs";
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
            <SignUp
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "w-full shadow-none bg-transparent",
                  headerTitle: "text-2xl font-bold text-center mb-2",
                  headerSubtitle: "text-muted-foreground text-center mb-6",
                  socialButtonsBlockButton:
                    "hover:bg-secondary transition-colors",
                  formButtonPrimary:
                    "bg-primary hover:bg-primary/90 transition-colors",
                  footerActionLink:
                    "text-primary hover:text-primary/90 transition-colors",
                  formFieldInput: "focus:ring-2 focus:ring-primary/50",
                  formFieldLabel: "text-sm font-medium",
                  identityPreview: "bg-secondary/50",
                  formFieldWarningText: "text-yellow-500",
                  formFieldErrorText: "text-red-500",
                  footer:
                    "border-t border-gray-200 dark:border-gray-700 mt-6 pt-6",
                },
                layout: {
                  socialButtonsPlacement: "bottom",
                  socialButtonsVariant: "iconButton",
                  logoPlacement: "inside",
                },
                variables: {
                  colorPrimary: "#3b82f6", // ✅ Tailwind 'blue-500'
                  colorBackground: "transparent", // ✅ Allowed keyword
                  colorText: "#1d4ed8", // ✅ Tailwind 'blue-700'
                  colorTextSecondary: "#1d4ed8", // ✅ Same, still valid
                  colorTextOnPrimaryBackground: "white", // ✅ Allowed keyword
                },
              }}
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
