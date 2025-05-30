"use client";
import Link from "next/link";

const olderAdultPrompts = [
  "Write a birthday message for my grandchild.",
  "Translate this recipe from Spanish to English.",
  "Suggest a gentle yoga routine for seniors.",
  "Write an email to thank my neighbor for their help.",
  "Summarize today's news in simple language.",
  "Provide a simple explanation of how to video call my family.",
  "Recommend easy-to-care-for indoor plants.",
  "Suggest safe walking routes in my neighborhood.",
  "Explain how to set medication reminders on my phone.",
  "Provide tips for improving sleep quality.",
  "List the best free online courses for seniors.",
  "Explain how to use WhatsApp to send photos.",
  "Suggest easy crafts to do at home.",
  "Write a thank you note for a birthday gift.",
  "Describe how to use voice commands on my phone.",
  "Give me a simple breathing exercise for relaxation.",
  "Summarize a book in simple terms.",
  "Explain how to use a ride-sharing app.",
  "List the top 5 memory games for seniors.",
  "Suggest ways to stay connected with friends far away.",
  "Write a poem about retirement.",
  "Explain how to use a calendar app.",
  "List healthy snacks for seniors.",
  "Describe how to join a video call on Zoom.",
  "Suggest easy ways to organize family photos.",
  "Explain how to block spam calls.",
  "List gentle stretches for the morning.",
  "Write a message to reconnect with an old friend.",
  "Explain how to use a fitness tracker.",
  "List safe online shopping tips.",
  "Suggest ways to volunteer from home.",
  "Explain how to set up emergency contacts on my phone.",
  "List fun brain teasers.",
  "Describe how to use a digital library.",
  "Suggest easy soup recipes.",
  "Explain how to check the weather on my phone.",
  "List ways to keep my mind active.",
  "Write a message to cheer up a friend.",
  "Explain how to use a magnifier app.",
  "List the benefits of walking daily.",
  "Suggest ways to celebrate a milestone birthday.",
  "Explain how to use a health app.",
  "List simple home safety tips.",
  "Describe how to use a voice assistant.",
  "Suggest easy card games for two people.",
  "Explain how to unsubscribe from unwanted emails.",
  "List ways to save money on groceries.",
  "Write a message to welcome a new neighbor.",
  "Explain how to use a QR code.",
  "List tips for staying positive each day."
];

const busyParentPrompts = [
  "Plan a weekly meal schedule with easy recipes.",
  "Write a polite email to my child's teacher.",
  "Suggest fun weekend activities for the family.",
  "Create a bedtime story about dinosaurs.",
  "Generate ideas for a kid-friendly birthday party.",
  "Provide quick homework help for basic math.",
  "Offer tips for managing sibling conflicts.",
  "Create a list of chores appropriate for kids aged 6-10.",
  "Recommend educational podcasts for children.",
  "Suggest healthy snacks kids will love.",
  "Write a note to excuse my child from school.",
  "Suggest screen-free activities for rainy days.",
  "Create a morning routine for school days.",
  "Write a thank you message to a coach.",
  "List fun science experiments for kids.",
  "Suggest ways to help kids with reading.",
  "Write a message to invite friends to a playdate.",
  "List easy lunchbox ideas.",
  "Suggest ways to encourage good manners.",
  "Create a bedtime routine for toddlers.",
  "Write a message to congratulate a child on good grades.",
  "List ways to make homework time easier.",
  "Suggest family-friendly movies for Friday night.",
  "Write a message to thank a babysitter.",
  "List ways to help kids make new friends.",
  "Suggest quick breakfast ideas for busy mornings.",
  "Write a message to a teacher about a concern.",
  "List fun outdoor games for the backyard.",
  "Suggest ways to teach kids about saving money.",
  "Create a packing list for a family trip.",
  "Write a message to organize a carpool.",
  "List ways to help kids with time management.",
  "Suggest easy crafts for kids.",
  "Write a message to encourage a child before a test.",
  "List healthy after-school snacks.",
  "Suggest ways to make chores fun.",
  "Write a message to a parent group.",
  "List ways to help kids with anxiety.",
  "Suggest ways to celebrate a family milestone.",
  "Write a message to thank a teacher for extra help.",
  "List fun ways to learn math at home.",
  "Suggest ways to help kids stay organized.",
  "Write a message to a coach about practice times.",
  "List ways to encourage reading for pleasure.",
  "Suggest ways to help kids with spelling.",
  "Write a message to a neighbor about a playdate.",
  "List ways to teach kids about kindness.",
  "Suggest ways to make family dinners special.",
  "Write a message to a grandparent from a child.",
  "Suggest ways to help kids develop good study habits."
];

const studentPrompts = [
  // School-Students
  "Write an essay on 'The Importance of Reading' in 1000 words.",
  "Suggest me some ideas on science projects.",
  "Guide me through the concept of fractions in maths with the help of an example.",
  "Can you give me an example of how to solve a trigonometry problem?",
  "Explain me the concept of photosynthesis.",
  // Engineering
  "Create a simple web application using JavaScript.",
  "Procedure to find the bug in the sample code.",
  "Implement a button using JavaScript.",
  "Create a RESTAPI endpoint for application using Nodejs and express.",
  "Develop an architecture for web application using JavaScript.",
  // Career
  "Create a wonderful resume to get a high-paying job.",
  "Interview questions for web developers.",
  "Steps required to become a machine learning engineer.",
  "Skills required to become a machine learning engineer.",
  "Interview experience of learners in FAANG.",
  // Games
  "Let's play truth or lie.",
  "Play Hangman with me.",
  "Let's play 'Would you rather?'. I'll give you two options and you have to choose which one you would prefer.",
  // Fun
  "Crack me a joke.",
  "Create a movie list of new movies.",
  // 30 more prompts for students
  "Summarize the main points of this chapter.",
  "Explain the water cycle in simple terms.",
  "Help me create a study schedule for exams.",
  "List the causes and effects of global warming.",
  "Write a poem about friendship.",
  "Explain Newton's laws of motion with examples.",
  "Translate this paragraph into French.",
  "Give me tips for staying focused while studying.",
  "Create a quiz on world capitals.",
  "Write a letter to my future self.",
  "Explain the difference between mitosis and meiosis.",
  "Suggest ways to manage exam stress.",
  "Describe the process of photosynthesis in a diagram.",
  "Help me write a speech for student council elections.",
  "List the top 5 inventions of the 21st century.",
  "Explain the importance of teamwork in sports.",
  "Write a story that starts with 'It was a rainy day...'.",
  "Give me a list of famous women in science.",
  "Explain how to create a budget for college.",
  "Suggest healthy snacks for late-night study sessions.",
  "Help me write a thank you note to my teacher.",
  "Explain the concept of supply and demand.",
  "List the steps to solve a quadratic equation.",
  "Describe the structure of an atom.",
  "Write a review of my favorite book.",
  "Explain the causes of the American Revolution.",
  "Help me create a mind map for my history class.",
  "List the benefits of learning a second language.",
  "Write a dialogue between two friends about their summer vacation.",
  "Suggest ways to balance school and extracurricular activities."
];

const easyPrompts = [
  "Give me a simple recipe I can make with chicken and rice",
  "Tell me a short story from the 1950s",
  "What are some gentle exercises I can do at home?",
  "Help me write a message to my grandchildren",
  "Remind me of what I need to ask my doctor next week",
  "What are some free hobbies I might enjoy?",
  "What's a good way to explain email scams to a friend?",
  "Give me a joke that'll make me smile today",
  "Teach me something new in 3 minutes",
  "What's a good routine to start my day with?",
];

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center font-sans p-6">
      <header className="w-full max-w-3xl py-8 flex flex-col items-center text-center gap-2">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">All AI Prompts for Everyday Life</h1>
        <p className="text-lg text-blue-800 max-w-2xl mb-4">Browse our complete collection of easy, practical ChatGPT prompts for older adults and busy parents. Use these to make daily life simpler, more fun, and more connected!</p>
        <Link href="/" className="text-blue-700 underline font-semibold">← Back to Home</Link>
      </header>
      <main className="w-full max-w-3xl flex flex-col gap-12">
        {/* Older Adults Section */}
        <section className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center gap-2">👵👴 For Older Adults</h2>
          <ol className="list-decimal pl-6 space-y-2 text-green-900">
            {olderAdultPrompts.map((prompt, idx) => (
              <li key={idx}><span className="font-semibold">{prompt}</span></li>
            ))}
          </ol>
        </section>
        <div className="h-2" />
        {/* Busy Parents Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2">👩‍👧‍👦 For Busy Parents</h2>
          <ol className="list-decimal pl-6 space-y-2 text-blue-900">
            {busyParentPrompts.map((prompt, idx) => (
              <li key={idx}><span className="font-semibold">{prompt}</span></li>
            ))}
          </ol>
        </section>
        <div className="h-2" />
        {/* AI Prompts for Students Section */}
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-800 mb-2 flex items-center gap-2">🎓 AI Prompts for Students</h2>
          <ol className="list-decimal pl-6 space-y-2 text-purple-900">
            {studentPrompts.map((prompt, idx) => (
              <li key={idx}><span className="font-semibold">{prompt}</span></li>
            ))}
          </ol>
        </section>
        <div className="h-2" />
        {/* 10 Easy Prompts Section */}
        <section className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl shadow p-6 flex flex-col gap-4 border border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2">🟢 10 Easy ChatGPT Prompts to Try Today</h2>
          <ol className="list-decimal pl-6 space-y-2 text-green-900">
            {easyPrompts.map((prompt, idx) => (
              <li key={idx}><span className="font-semibold">{prompt}</span></li>
            ))}
          </ol>
        </section>
        <div className="h-2" />
        {/* 30 Powerful ChatGPT Tricks & Hacks Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center gap-2">⚡ 30 Powerful ChatGPT Tricks & Hacks</h2>
          <ol className="list-decimal pl-6 space-y-2 text-yellow-900">
            <li>Use prompts like "Act as a [role]" for specialized responses.</li>
            <li>Include "Explain like I'm 5" for simple explanations.</li>
            <li>Ask ChatGPT for step-by-step instructions.</li>
            <li>Request summaries: "Summarize in 3 sentences."</li>
            <li>Get creative variations: "Give me five ways to say…"</li>
            <li>Ask for analogies to understand complex concepts.</li>
            <li>Rewrite text in a friendly or formal tone.</li>
            <li>Ask ChatGPT for sources or citations.</li>
            <li>Request numbered idea lists for brainstorming.</li>
            <li>Get feedback: "Review for clarity and tone."</li>
            <li>Suggest alternatives to explore new ideas.</li>
            <li>Create educational fill-in-the-blank exercises.</li>
            <li>Generate personalized warm messages or greetings.</li>
            <li>Translate and simplify complex foreign texts.</li>
            <li>Ask ChatGPT for daily productivity tips.</li>
            <li>Generate quick summaries of books or articles.</li>
            <li>Use ChatGPT to help plan events or gatherings.</li>
            <li>Request examples to illustrate difficult concepts.</li>
            <li>Use ChatGPT to draft polite refusal emails.</li>
            <li>Get tailored health or fitness tips.</li>
            <li>Ask ChatGPT for historical context of current events.</li>
            <li>Use ChatGPT for quick math help or calculations.</li>
            <li>Generate engaging questions for family game nights.</li>
            <li>Ask ChatGPT to proofread short texts.</li>
            <li>Request humorous or fun explanations.</li>
            <li>Create custom trivia questions.</li>
            <li>Have ChatGPT simplify technical jargon.</li>
            <li>Ask ChatGPT to suggest gift ideas.</li>
            <li>Use ChatGPT to help with budgeting and finances.</li>
            <li>Request motivational or inspirational quotes.</li>
          </ol>
        </section>
        <div className="h-2" />
        {/* Tips & Tricks for Getting the Best from AI */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-blue-100">
          <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">💡 Tips & Tricks for Getting the Best from AI</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Be specific:</span>
              <span>Clearly state what you want. The more details you give, the better the answer.</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Use follow-ups:</span>
              <span>If the answer isn't quite right, ask for clarification, examples, or a different style.</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Try different phrasings:</span>
              <span>Reword your question or try synonyms to get new perspectives.</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Ask for step-by-step help:</span>
              <span>Request instructions or breakdowns for complex tasks.</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Request examples:</span>
              <span>Ask for examples, analogies, or sample answers to make things clearer.</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-blue-800">Use context:</span>
              <span>Share your goal or situation for more tailored advice.</span>
            </div>
          </div>
        </section>
        {/* Strategies to Get What You Want from AI */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-green-100">
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">🎯 Strategies to Get What You Want from AI</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Iterate:</span>
              <span>Don't settle for the first answer. Ask for improvements, alternatives, or more detail.</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Clarify your needs:</span>
              <span>Tell the AI your preferences, audience, or constraints for better results.</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Use role-play:</span>
              <span>Ask the AI to act as a teacher, coach, or expert for more focused help.</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Ask for pros and cons:</span>
              <span>Get balanced views by requesting advantages and disadvantages.</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Request summaries:</span>
              <span>Summarize long answers or ask for bullet points for quick reading.</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <span className="font-semibold text-green-800">Combine prompts:</span>
              <span>Use multiple questions or requests in one prompt for richer answers.</span>
            </div>
          </div>
        </section>
        {/* How to Tell if Something is AI-Generated */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 border border-yellow-100">
          <h2 className="text-xl font-bold text-yellow-700 flex items-center gap-2">🤖 How to Tell if Something is AI-Generated</h2>
          <div className="bg-yellow-50 rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="font-semibold text-yellow-800">Why it matters:</span>
            <span>AI-generated content is everywhere—from emails to news articles to images and videos. Knowing how to spot it helps you make informed decisions, avoid scams, and understand the source of information.</span>
            <span className="font-semibold text-yellow-800 mt-2">Checklist:</span>
            <ul className="list-disc pl-6 text-yellow-900">
              <li>Text is very neutral, polite, or generic.</li>
              <li>Sentences are well-structured but sometimes lack deep insight or personal experience.</li>
              <li>Repetitive phrases or ideas may appear.</li>
              <li>Information is accurate but lacks recent events or personal anecdotes.</li>
              <li>Text may overuse certain words or phrases (e.g., "certainly," "additionally").</li>
              <li>Responses are fast and consistent in tone.</li>
              <li>Images or videos may look slightly unnatural or have odd details (e.g., extra fingers, strange backgrounds).</li>
              <li>Content may lack strong opinions or emotional nuance.</li>
              <li>AI-generated videos often have smooth, robotic narration or perfect lighting.</li>
            </ul>
            <span className="font-semibold text-yellow-800 mt-2">Tip:</span>
            <span>If in doubt, ask the writer for more personal details or recent experiences—AI usually can't provide these! For images or videos, look for watermarks or use reverse image search tools.</span>
          </div>
        </section>
        <div className="h-2" />
        {/* Perplexity AI Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">🔎 What is Perplexity AI?</h2>
          <p className="text-blue-900">Perplexity AI is a conversational search engine and AI assistant. It combines the power of search with AI to answer questions, summarize topics, and provide sources. It's great for research, fact-checking, and learning new things quickly.</p>
          <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="font-semibold text-blue-800">Example Prompts for Perplexity:</span>
            <ul className="list-disc pl-6 text-blue-900">
              <li>"Summarize the latest news about electric cars with sources."</li>
              <li>"What are the health benefits of walking? Provide scientific references."</li>
              <li>"Compare the features of iPhone 15 and Samsung Galaxy S24."</li>
              <li>"Explain quantum computing in simple terms and link to a good article."</li>
              <li>"Who won the Nobel Prize in Literature in 2023?"</li>
            </ul>
            <span className="text-blue-700 text-sm">Tip: Perplexity always tries to show its sources—click them to learn more!</span>
          </div>
        </section>
        <div className="h-2" />
        {/* Video AI Section */}
        <section className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-pink-200">
          <h2 className="text-xl font-bold text-pink-700 flex items-center gap-2">🎬 What is Video AI?</h2>
          <p className="text-pink-900">Video AI tools use artificial intelligence to create, edit, or enhance videos. They can generate videos from text, add subtitles, create avatars, or even turn photos into talking characters. Popular tools include <span className='font-semibold'>Synthesia</span>, <span className='font-semibold'>Pictory</span>, and <span className='font-semibold'>RunwayML</span>.</p>
          <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-2">
            <span className="font-semibold text-pink-700">Example Prompts for Video AI:</span>
            <ul className="list-disc pl-6 text-pink-900">
              <li>"Create a 1-minute explainer video about recycling using an AI avatar."</li>
              <li>"Turn this blog post into a narrated video with subtitles."</li>
              <li>"Generate a video greeting card for a birthday."</li>
              <li>"Edit my video to remove background noise and add captions."</li>
              <li>"Make a slideshow video from these 10 photos with music."</li>
            </ul>
            <span className="text-pink-700 text-sm">Tip: Most video AI tools have easy templates—just type your script or upload your images to get started!</span>
          </div>
        </section>
        {/* AI for Productivity Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow p-6 flex flex-col gap-4 border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-800 mb-2 flex items-center gap-2">⏰ AI for Productivity</h2>
          <ol className="list-decimal pl-6 space-y-2 text-yellow-900">
            <li>Help me create a daily to-do list.</li>
            <li>Suggest ways to manage my time better.</li>
            <li>Remind me of important deadlines this week.</li>
            <li>Summarize my meeting notes in bullet points.</li>
            <li>Draft a polite follow-up email for a client.</li>
            <li>Organize my calendar for the month.</li>
            <li>Suggest productivity apps for remote work.</li>
            <li>Help me prioritize my work tasks.</li>
            <li>Write a quick project update for my team.</li>
            <li>Give me tips for staying focused while working from home.</li>
            <li>Suggest a morning routine for a productive day.</li>
            <li>Help me plan a weekly meal prep schedule.</li>
            <li>Draft a template for meeting agendas.</li>
            <li>Remind me to take regular breaks during work.</li>
            <li>Summarize a long email in a few sentences.</li>
            <li>Help me set SMART goals for the month.</li>
            <li>Suggest ways to reduce distractions at work.</li>
            <li>Write a polite out-of-office email reply.</li>
            <li>Help me organize my digital files and folders.</li>
            <li>Suggest quick healthy lunch ideas for busy days.</li>
            <li>Draft a checklist for preparing for a big meeting.</li>
            <li>Help me automate repetitive tasks using AI tools.</li>
            <li>Suggest ways to improve my work-life balance.</li>
            <li>Write a short motivational message for my team.</li>
            <li>Help me track my daily habits and progress.</li>
            <li>Suggest ways to delegate tasks more effectively.</li>
            <li>Draft a polite reminder for a late payment.</li>
            <li>Help me plan a productive weekend.</li>
            <li>Summarize the key points from a webinar I attended.</li>
            <li>Suggest ways to stay organized during a busy season.</li>
          </ol>
        </section>
      </main>
    </div>
  );
} 