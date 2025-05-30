"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const faqs = [
  {
    question: "What is AI and how can it help me?",
    answer: "AI (Artificial Intelligence) can help you write, answer questions, translate, organize your day, and much more. It's like having a helpful assistant!",
    icon: "🤖"
  },
  {
    question: "Is it safe to use AI tools?",
    answer: "Yes, as long as you don't share sensitive personal information. We'll guide you on safe usage during your consultation.",
    icon: "🔒"
  },
  {
    question: "Do I need to pay to use ChatGPT?",
    answer: "Some models are free, while others (like GPT-4o) require a subscription. We'll help you choose what's best for your needs.",
    icon: "💸"
  },
  {
    question: "Can you help me set up AI on my device?",
    answer: "Absolutely! We can walk you through every step, at your pace.",
    icon: "📱"
  },
  {
    question: "What can I use AI for in daily life?",
    answer: "You can use AI to write emails, plan meals, get reminders, translate languages, help with homework, and more!",
    icon: "📝"
  },
  {
    question: "Is AI difficult to use for older adults?",
    answer: "Not at all! This guide is designed to be simple and friendly, even if you have no tech experience.",
    icon: "👵👴"
  },
  {
    question: "Can AI help with health or medication reminders?",
    answer: "Yes! You can use AI to set reminders for medication, appointments, and daily routines.",
    icon: "💊"
  },
  {
    question: "How do I keep my information private when using AI?",
    answer: "Never share sensitive details like passwords or bank info. Use AI for general help, not personal data.",
    icon: "🛡️"
  },
  {
    question: "Can AI help my children with homework?",
    answer: "Yes! AI can explain concepts, help with writing, and suggest fun learning activities for kids.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    question: "What if I get stuck or confused?",
    answer: "Just ask! You can always revisit this guide or contact us for extra help.",
    icon: "❓"
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "No problem! Our guide is designed for complete beginners. You'll get step-by-step instructions and friendly support.",
    icon: "🧑‍💻"
  },
  {
    question: "Is my information safe?",
    answer: "Yes! We never ask for sensitive details, and we teach you how to use AI safely.",
    icon: "🔐"
  },
  {
    question: "Can I get help if I get stuck?",
    answer: "Absolutely! You can always revisit the guide or contact us for extra help.",
    icon: "📞"
  }
];

const testimonials = [
  {
    name: "Antonis Pitsalidis (student)",
    text: "AI helped me organize my study schedule and get quick answers for my homework. It makes learning so much easier!"
  },
  {
    name: "Filitsa (mother, nutritionist)",
    text: "As a busy mom and nutritionist, I use AI to plan healthy meals and manage my family's routine. It's a real time-saver!"
  },
  {
    name: "Vassilis (software engineer)",
    text: "This website makes it easy to explain AI to my friends and family. The guides are clear and accessible for everyone!"
  }
];

const SITE_ACCESS_CODE = "vamvak"; // Updated access code for main site
const EMAIL_ACCESS_CODE = "EMAIL1"; // Change for each paid email enquiry

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);
  const [accessInput, setAccessInput] = useState("");
  const [emailUnlocked, setEmailUnlocked] = useState(false);
  const [emailCodeInput, setEmailCodeInput] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasAccess(localStorage.getItem("ai_guide_access") === "true");
      setEmailUnlocked(localStorage.getItem("ai_guide_email_unlocked") === "true");
    }
  }, []);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessInput.trim() === SITE_ACCESS_CODE) {
      setHasAccess(true);
      if (typeof window !== "undefined") localStorage.setItem("ai_guide_access", "true");
    } else {
      alert("Invalid access code. Please check your code and try again.");
    }
  };

  const handleEmailCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailCodeInput.trim() === EMAIL_ACCESS_CODE) {
      setEmailUnlocked(true);
      if (typeof window !== "undefined") localStorage.setItem("ai_guide_email_unlocked", "true");
    } else {
      alert("Invalid email enquiry code. Please check your code and try again.");
    }
  };

  // PAYWALL: If not unlocked, show paywall
  if (!hasAccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-8">
        <Image src="/ai-friendly.svg" alt="Friendly AI" width={100} height={100} className="mb-4" />
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Unlock Full Access</h1>
        <p className="text-lg text-blue-800 mb-4 max-w-md text-center">
          This AI Guide is a premium product. To access all features and guides, please send £5 via your preferred payment method (e.g., PayPal, bank transfer). After payment, you will receive an access code from us.
        </p>
        <ul className="mb-4 text-blue-900 text-base list-disc pl-6 text-left">
          <li>Price: <span className="font-bold">£5 one-time</span></li>
          <li>Contact us at <a href="mailto:vamvak@outlook.com" className="underline">vamvak@outlook.com</a> for payment details.</li>
        </ul>
        <form onSubmit={handleAccessSubmit} className="flex flex-col gap-2 items-center w-full max-w-xs">
          <label className="font-semibold text-blue-900">Enter Access Code:</label>
          <input
            type="text"
            value={accessInput}
            onChange={e => setAccessInput(e.target.value)}
            className="rounded border border-blue-300 px-3 py-2 w-full"
            placeholder="Access code"
            required
          />
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-900 transition mt-2 w-full">Unlock</button>
        </form>
        <p className="text-sm text-blue-700 mt-4">Already paid? Enter your code above to unlock the site.</p>
      </div>
    );
  }

  // MAIN SITE CONTENT (unlocked)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center font-sans relative">
      {/* Hero Section */}
      <header className="w-full max-w-3xl py-10 flex flex-col items-center text-center gap-4">
        <span className="text-7xl mb-2">🤖</span>
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">Unlock the Power of AI for Your Family!</h1>
        <p className="text-xl text-blue-800 max-w-2xl mt-2 font-semibold">
          Simple, step-by-step guides for seniors, parents, and busy professionals. No tech skills needed.
        </p>
        <p className="text-lg sm:text-xl text-blue-800 max-w-xl mt-2">
          Helping <span className="text-blue-700">older adults</span> stay connected, write, and learn — and <span className="text-blue-700">busy parents</span> with scheduling, reminders, meal planning, and more.
        </p>
        <div className="flex flex-col items-center mt-4">
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-lg">🎉 Special Launch: Limited-Time Offer!</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex gap-4 mb-8">
        <a href="#everyday" className="bg-blue-700 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">AI for Everyday Life</a>
        <a href="#chatgpt" className="bg-blue-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">ChatGPT Models</a>
        <a href="#faq" className="bg-yellow-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">Q & A</a>
        <a href="/prompts" className="bg-purple-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">All Prompts</a>
        <a href="/tutorials" className="bg-green-700 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-green-800 transition">Learning Hub</a>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-3xl flex flex-col gap-16">
        {/* AI for Everyday Life */}
        <section id="everyday" className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2"><span role="img" aria-label="lightbulb">💡</span>How Can AI Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Seniors/Retirees */}
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><span role="img" aria-label="senior">👵👴</span> For Seniors & Retirees</h3>
              <ul className="list-disc pl-6 text-lg text-blue-900 space-y-2">
                <li>Stay connected with family and friends using AI-powered messaging</li>
                <li>Write emails, letters, or even memoirs with ease</li>
                <li>Learn new things or explore hobbies with AI's help</li>
                <li>Get answers to questions, like a friendly assistant</li>
                <li>Translate languages for travel or communication</li>
              </ul>
            </div>
            {/* Busy Parents */}
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2"><span role="img" aria-label="parent">👩‍👧‍👦</span> For Busy Parents</h3>
              <ul className="list-disc pl-6 text-lg text-blue-900 space-y-2">
                <li>Organize your family's schedule and set reminders</li>
                <li>Plan meals and get recipe ideas quickly</li>
                <li>Write and respond to kids' school emails</li>
                <li>Get homework help or fun learning activities for kids</li>
                <li>Save time on daily tasks with AI suggestions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ChatGPT Models Explained */}
        <section id="chatgpt" className="bg-blue-100 rounded-xl shadow p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2"><span role="img" aria-label="robot">🤖</span>ChatGPT Models Explained</h2>
          <p className="text-blue-900 text-lg">There are several versions of ChatGPT, each with its own strengths. Here's a simple guide to help you choose:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200 flex gap-3 items-start">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="font-bold text-blue-700">GPT-4</h3>
                <p className="text-blue-900">The affordable, basic version. Great for everyday questions, writing, and conversation. Reliable and smart. <span className='font-semibold'>Usually free or low cost.</span></p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200 flex gap-3 items-start">
              <span className="text-3xl">🌟</span>
              <div>
                <h3 className="font-bold text-blue-700">GPT-4o</h3>
                <p className="text-blue-900">The newest and most versatile model. Fast, understands text, images, and voice. <span className='font-semibold'>Available with a $20/month subscription.</span> Best for most users who want the latest features and best experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200 flex gap-3 items-start">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-blue-700">GPT-03</h3>
                <p className="text-blue-900">An advanced model, even better than 01 for many tasks. Ideal for users who need more power and flexibility. <span className='font-semibold'>May require a subscription.</span></p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200 flex gap-3 items-start">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="font-bold text-blue-700">GPT-04 Mini</h3>
                <p className="text-blue-900">Specially designed for coding and technical tasks. Fast, efficient, and great for programmers or anyone learning to code. <span className='font-semibold'>Often included in paid plans.</span></p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200 flex gap-3 items-start">
              <span className="text-3xl">🖼️</span>
              <div>
                <h3 className="font-bold text-blue-700">Other AI Models</h3>
                <p className="text-blue-900">There are also image generators (like DALL-E), voice assistants, and more. We can help you choose what's best for you!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="bg-purple-50 rounded-xl shadow p-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-purple-800 mb-2 flex items-center gap-2"><span role="img" aria-label="star">⭐️</span>What Our Clients Say</h2>
          <div className="text-purple-900 text-lg text-center mb-2">⭐⭐⭐⭐⭐ Rated 4.7/5 from 52 users</div>
          <div className="relative w-full max-w-lg flex flex-col items-center">
            <div className="bg-white rounded-lg shadow p-6 text-purple-900 text-lg text-center min-h-[100px] flex flex-col items-center">
              <p className="mb-2">"{testimonials[testimonialIdx].text}"</p>
              <span className="font-bold text-purple-700">- {testimonials[testimonialIdx].name}</span>
            </div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${testimonialIdx === idx ? 'bg-purple-700' : 'bg-purple-300'} transition`}
                  aria-label={`Show testimonial ${idx + 1}`}
                  onClick={() => setTestimonialIdx(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Email Access Section */}
        <section className="bg-green-50 rounded-xl shadow p-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center gap-2"><span role="img" aria-label="email">📧</span>Get Personalized AI Help</h2>
          <div className="bg-white rounded-lg p-6 mb-4 w-full max-w-md">
            <h3 className="text-xl font-bold text-green-700 mb-3">Email Enquiry Package</h3>
            <ul className="list-disc pl-6 text-green-900 space-y-2 mb-4">
              <li>Get 3 personalized email consultations</li>
              <li>Expert guidance for your specific AI needs</li>
              <li>Step-by-step instructions tailored to you</li>
              <li>Quick responses within 48 hours</li>
            </ul>
            <p className="text-green-800 font-semibold">Price: £5 for 3 email enquiries</p>
          </div>
          {!emailUnlocked ? (
            <div className="w-full max-w-md">
              <form onSubmit={handleEmailCodeSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-green-900 font-semibold mb-2">Enter Email Enquiry Code:</label>
                  <input
                    type="text"
                    value={emailCodeInput}
                    onChange={e => setEmailCodeInput(e.target.value)}
                    className="w-full rounded border border-green-300 px-3 py-2"
                    placeholder="Email enquiry code"
                    required
                  />
                </div>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition">
                  Unlock Email Access
                </button>
              </form>
              <p className="text-sm text-green-700 mt-4 text-center">
                Already have a code? Enter it above to unlock email access.
              </p>
            </div>
          ) : (
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-green-900 font-semibold mb-2">Your Name:</label>
                  <input
                    type="text"
                    className="w-full rounded border border-green-300 px-3 py-2"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-900 font-semibold mb-2">Your Email:</label>
                  <input
                    type="email"
                    className="w-full rounded border border-green-300 px-3 py-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-900 font-semibold mb-2">Your Enquiry:</label>
                  <textarea
                    className="w-full rounded border border-green-300 px-3 py-2 h-32"
                    placeholder="Tell us what you need help with..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition">
                  Send Enquiry
                </button>
              </form>
              <p className="text-sm text-green-700 mt-4 text-center">
                You have 3 email enquiries remaining. We'll respond within 48 hours.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* FAQ Section */}
      <section id="faq" className="bg-yellow-50 rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 mt-12 mb-12 border border-yellow-200 w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-yellow-600 mb-2 flex items-center gap-2"><span role="img" aria-label="star">⭐️</span>Frequently Asked Questions</h2>
        <div className="text-yellow-700 text-lg text-center mb-4 font-semibold flex flex-col items-center gap-1">
          <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          Rated 4.7/5 from 52 users
        </div>
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow border border-yellow-100 p-6 text-yellow-900 flex flex-col items-start transition hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{faq.icon}</span>
                <span className="font-bold text-lg">{faq.question}</span>
              </div>
              <div className="pl-9 text-base font-medium text-yellow-800">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}