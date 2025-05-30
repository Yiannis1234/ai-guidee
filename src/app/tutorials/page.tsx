"use client";
import Link from "next/link";
import { useState } from "react";

// FAQ data (copied from main page)
const faqs = [
  { question: "What is AI and how can it help me?", answer: "AI (Artificial Intelligence) can help you write, answer questions, translate, organize your day, and much more. It's like having a helpful assistant!", icon: "🤖" },
  { question: "Is it safe to use AI tools?", answer: "Yes, as long as you don't share sensitive personal information. We'll guide you on safe usage during your consultation.", icon: "🔒" },
  { question: "Do I need to pay to use ChatGPT?", answer: "Some models are free, while others (like GPT-4o) require a subscription. We'll help you choose what's best for your needs.", icon: "💸" },
  { question: "Can you help me set up AI on my device?", answer: "Absolutely! We can walk you through every step, at your pace.", icon: "📱" },
  { question: "What can I use AI for in daily life?", answer: "You can use AI to write emails, plan meals, get reminders, translate languages, help with homework, and more!", icon: "📝" },
  { question: "Is AI difficult to use for older adults?", answer: "Not at all! This guide is designed to be simple and friendly, even if you have no tech experience.", icon: "👵👴" },
  { question: "Can AI help with health or medication reminders?", answer: "Yes! You can use AI to set reminders for medication, appointments, and daily routines.", icon: "💊" },
  { question: "How do I keep my information private when using AI?", answer: "Never share sensitive details like passwords or bank info. Use AI for general help, not personal data.", icon: "🛡️" },
  { question: "Can AI help my children with homework?", answer: "Yes! AI can explain concepts, help with writing, and suggest fun learning activities for kids.", icon: "👨‍👩‍👧‍👦" },
  { question: "What if I get stuck or confused?", answer: "Just ask! You can always revisit this guide or contact us for extra help.", icon: "❓" },
  { question: "What if I'm not tech-savvy?", answer: "No problem! Our guide is designed for complete beginners. You'll get step-by-step instructions and friendly support.", icon: "🧑‍💻" },
  { question: "Is my information safe?", answer: "Yes! We never ask for sensitive details, and we teach you how to use AI safely.", icon: "🔐" },
  { question: "Can I get help if I get stuck?", answer: "Absolutely! You can always revisit the guide or contact us for extra help.", icon: "📞" }
];

export default function TutorialsPage() {
  const [openTutorial, setOpenTutorial] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center font-sans p-6">
      <header className="w-full max-w-3xl py-8 flex flex-col items-center text-center gap-2">
        <span className="text-4xl mb-2">🤖🚀</span>
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Learning Hub & Tutorials</h1>
        <p className="text-lg text-blue-800 max-w-2xl mb-4">Explore easy tutorials, AI basics, and practical guides to help you get the most out of AI tools. Perfect for beginners and curious minds!</p>
        <Link href="/" className="text-blue-700 underline font-semibold">← Back to Home</Link>
      </header>
      <main className="w-full max-w-3xl flex flex-col gap-12">
        {/* AI Basics Section */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">🤖 AI Basics</h2>
          <ul className="list-disc pl-6 text-blue-900 space-y-2">
            <li><strong>What is AI?</strong> Artificial Intelligence (AI) is technology that can understand, learn, and help you with tasks—like a smart assistant.</li>
            <li><strong>What is GPT?</strong> GPT stands for "Generative Pre-trained Transformer"—a type of AI that can write, answer questions, and chat with you.</li>
            <li><strong>What's a token?</strong> A token is a small piece of text (like a word or part of a word) that AI uses to understand and generate language.</li>
            <li><strong>Is AI safe?</strong> Yes, as long as you don't share sensitive personal information. Use AI for general help, not private data.</li>
          </ul>
        </section>
        {/* How-To Guides Section */}
        <section className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col gap-4 border border-yellow-100">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center gap-2">📝 How-To Guides</h2>
          <ul className="list-disc pl-6 text-yellow-900 space-y-2">
            <li><strong>How to use AI to write cold emails:</strong> Start with a clear goal, give the AI details about your recipient, and ask for a friendly, concise draft. Edit as needed!</li>
            <li><strong>How to use AI for meal planning:</strong> Tell the AI your dietary needs and preferences, and ask for a weekly meal plan with recipes.</li>
            <li><strong>How to use AI for reminders:</strong> Ask the AI to help you set up reminders for appointments, medication, or daily routines using your phone or calendar app.</li>
            <li><strong>How to use AI for learning:</strong> Request explanations, summaries, or practice questions on any topic you want to learn.</li>
          </ul>
        </section>
        {/* Short Videos or Blog Posts Section */}
        <section className="bg-green-50 rounded-xl shadow p-6 flex flex-col gap-4 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center gap-2">🎥 Short Videos & Blog Posts</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Coming soon:</span>
              <span>Watch short, friendly videos and read blog posts about using AI in everyday life. Have a topic request? <a href="mailto:vamvak@outlook.com" className="underline text-green-700">Let us know!</a></span>
            </div>
          </div>
        </section>
        {/* Quick Tutorials Section */}
        <section className="bg-purple-50 rounded-xl shadow p-6 flex flex-col gap-6 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-800 mb-2 flex items-center gap-2">⚡ Quick Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Organize Weekly Schedule */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 0 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 0 ? null : 0)}
            >
              <span className="text-3xl">🗓️</span>
              <span className="font-bold text-purple-700">Organize Your Weekly Schedule with AI</span>
              <span className="text-purple-900 text-sm">Let AI help you plan your week, balance work and family, and never miss an important task or event.</span>
              {openTutorial === 0 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool (like ChatGPT, Gemini, or Bing Copilot).</li>
                  <li>Type your request: <span className="italic">"Help me organize my weekly schedule. I work 9-5, want to exercise 3 times, and need family time on weekends."</span></li>
                  <li>Review the suggested schedule and adjust it to fit your needs.</li>
                  <li>Copy your new schedule into your calendar or planner.</li>
                </ol>
              )}
            </div>
            {/* Card 2: Plan a Family Trip */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 1 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 1 ? null : 1)}
            >
              <span className="text-3xl">🧳</span>
              <span className="font-bold text-purple-700">Plan a Family Trip with AI</span>
              <span className="text-purple-900 text-sm">Let AI help you organize a travel itinerary, find attractions, and suggest packing lists.</span>
              {openTutorial === 1 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Ask: <span className="italic">"Plan a 3-day family trip to Athens with activities for kids and a packing list."</span></li>
                  <li>Review the suggested itinerary and edit as needed.</li>
                  <li>Use the packing list to get ready for your trip!</li>
                </ol>
              )}
            </div>
            {/* Card 3: Detect Email Scams */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 2 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 2 ? null : 2)}
            >
              <span className="text-3xl">🕵️‍♂️</span>
              <span className="font-bold text-purple-700">Detect Email Scams</span>
              <span className="text-purple-900 text-sm">Learn how to use AI to check if a suspicious email might be a scam or phishing attempt.</span>
              {openTutorial === 2 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Copy the suspicious email text (do not click any links).</li>
                  <li>Open an AI chat tool.</li>
                  <li>Ask: <span className="italic">"Does this email look like a scam?"</span> and paste the email text.</li>
                  <li>Read the AI's advice and follow safety tips provided.</li>
                </ol>
              )}
            </div>
            {/* Card 4: Custom AI Voice Message */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 3 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 3 ? null : 3)}
            >
              <span className="text-3xl">🔊</span>
              <span className="font-bold text-purple-700">Make a Custom AI Voice Message</span>
              <span className="text-purple-900 text-sm">Use AI to generate a spoken message for birthdays, reminders, or fun greetings.</span>
              {openTutorial === 3 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open a text-to-speech AI tool (like ElevenLabs, PlayHT, or Google Text-to-Speech).</li>
                  <li>Type your message. Example: <span className="italic">"Happy Birthday, Yiannis! Wishing you a fantastic year ahead."</span></li>
                  <li>Select a voice and click to generate the audio.</li>
                  <li>Download or share your custom voice message.</li>
                </ol>
              )}
            </div>
            {/* Card 5: AI Study Buddy for Exam Revision */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 4 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 4 ? null : 4)}
            >
              <span className="text-3xl">📚</span>
              <span className="font-bold text-purple-700">AI Study Buddy for Exam Revision</span>
              <span className="text-purple-900 text-sm">Let AI quiz you, explain tough topics, and help you make a revision plan for exams.</span>
              {openTutorial === 4 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool (like ChatGPT).</li>
                  <li>Type: <span className="italic">"Quiz me on biology for my upcoming exam. Ask me 10 questions and explain any wrong answers."</span></li>
                  <li>Let AI guide your revision and ask for explanations on topics you find hard.</li>
                  <li>Request a personalized study plan for your exam dates.</li>
                </ol>
              )}
            </div>
            {/* Card 6: Create a Family Chore Chart with AI */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 5 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 5 ? null : 5)}
            >
              <span className="text-3xl">🧹</span>
              <span className="font-bold text-purple-700">Create a Family Chore Chart with AI</span>
              <span className="text-purple-900 text-sm">Use AI to divide chores fairly and make a fun, printable chart for your family.</span>
              {openTutorial === 5 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Help me create a weekly chore chart for a family of 4 (2 adults, 2 kids, ages 8 and 12)."</span></li>
                  <li>Review the suggested chart and ask for age-appropriate tasks.</li>
                  <li>Copy the chart into a document or print it for your fridge.</li>
                </ol>
              )}
            </div>
            {/* Card 7: AI-Powered Science Fair Project Ideas */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 6 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 6 ? null : 6)}
            >
              <span className="text-3xl">🔬</span>
              <span className="font-bold text-purple-700">AI-Powered Science Fair Project Ideas</span>
              <span className="text-purple-900 text-sm">Get creative, age-appropriate science project ideas and step-by-step help from AI.</span>
              {openTutorial === 6 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Suggest 3 science fair projects for a 10-year-old. Include materials and steps."</span></li>
                  <li>Pick your favorite idea and ask AI for more details or a project timeline.</li>
                  <li>Use AI to help write your project summary or presentation.</li>
                </ol>
              )}
            </div>
            {/* Card 8: Plan a Healthy Family Menu with AI */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 7 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 7 ? null : 7)}
            >
              <span className="text-3xl">🥗</span>
              <span className="font-bold text-purple-700">Plan a Healthy Family Menu with AI</span>
              <span className="text-purple-900 text-sm">Let AI suggest balanced meals, shopping lists, and recipes for your family's week.</span>
              {openTutorial === 7 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Plan a healthy weekly menu for a family of 5, including vegetarian options."</span></li>
                  <li>Ask for a shopping list and easy recipes for each meal.</li>
                  <li>Adjust the plan for allergies or preferences as needed.</li>
                </ol>
              )}
            </div>
            {/* Card 9: Use AI to Write a Story Together */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 8 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 8 ? null : 8)}
            >
              <span className="text-3xl">📖</span>
              <span className="font-bold text-purple-700">Use AI to Write a Story Together</span>
              <span className="text-purple-900 text-sm">Collaborate with your child or sibling to create a fun, original story using AI prompts.</span>
              {openTutorial === 8 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Let's write a story about a magical dog and a time-traveling bicycle. Ask me for ideas as we go!"</span></li>
                  <li>Take turns adding to the story with help from AI suggestions.</li>
                  <li>Print or share your finished story with friends and family.</li>
                </ol>
              )}
            </div>
            {/* Card 10: AI for Language Learning Practice */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 9 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 9 ? null : 9)}
            >
              <span className="text-3xl">🗣️</span>
              <span className="font-bold text-purple-700">AI for Language Learning Practice</span>
              <span className="text-purple-900 text-sm">Practice vocabulary, grammar, and conversation in any language with AI as your tutor.</span>
              {openTutorial === 9 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Help me practice French conversation. Ask me questions and correct my answers."</span></li>
                  <li>Request vocabulary quizzes or grammar explanations.</li>
                  <li>Try role-playing real-life situations (ordering food, asking directions, etc.).</li>
                </ol>
              )}
            </div>
            {/* Card 11: Organize School Events with AI */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 10 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 10 ? null : 10)}
            >
              <span className="text-3xl">🎉</span>
              <span className="font-bold text-purple-700">Organize School Events with AI</span>
              <span className="text-purple-900 text-sm">Let AI help you plan, schedule, and communicate for school fairs, fundraisers, or class parties.</span>
              {openTutorial === 10 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Help me organize a school fundraiser event. Suggest a timeline, task list, and email templates."</span></li>
                  <li>Use AI to draft invitations, reminders, and thank-you notes.</li>
                  <li>Ask for ideas to make your event more fun and inclusive.</li>
                </ol>
              )}
            </div>
            {/* Card 12: AI-Generated Flashcards for Any Subject */}
            <div
              className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:scale-105 transition-transform cursor-pointer ${openTutorial === 11 ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setOpenTutorial(openTutorial === 11 ? null : 11)}
            >
              <span className="text-3xl">🃏</span>
              <span className="font-bold text-purple-700">AI-Generated Flashcards for Any Subject</span>
              <span className="text-purple-900 text-sm">Quickly create digital or printable flashcards for revision, languages, or fun quizzes.</span>
              {openTutorial === 11 && (
                <ol className="mt-2 pl-4 list-decimal text-purple-900 text-sm space-y-1">
                  <li>Open an AI chat tool.</li>
                  <li>Type: <span className="italic">"Make 10 flashcards for world capitals (or your chosen subject)."</span></li>
                  <li>Copy the flashcards into a study app or print them out.</li>
                  <li>Ask AI to quiz you or your child using the flashcards.</li>
                </ol>
              )}
            </div>
          </div>
          <span className="text-purple-700 text-sm mt-4">More tutorials coming soon! Have a request? <a href="mailto:vamvak@outlook.com" className="underline">Let us know!</a></span>
        </section>
      </main>
    </div>
  );
} 