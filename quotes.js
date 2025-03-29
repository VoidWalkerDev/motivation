// Quote database with updated, useful tips and tricks for JEE preparation
const quotes = [
    // General Motivation
    {
        text: "Extra effort turns average study into mastery.",
        meaning: "Success in JEE isn't about natural talent; it's about consistently dedicating an extra hour of focused study each day.",
        keyPoints: [
            "Set a daily goal to revise a difficult concept or solve extra problems.",
            "Break your study sessions into focused intervals with short breaks to maximize retention.",
            "Reflect on each session to identify what extra effort delivered the highest returns."
        ],
        tags: ['motivation', 'discipline', 'general-motivation']
    },
    {
        text: "Loving your subject fuels effective learning.",
        meaning: "Connecting emotionally with the material makes complex topics easier to understand and remember.",
        keyPoints: [
            "Relate theoretical concepts to real-life applications.",
            "Join study groups or online forums to share your passion for the subject.",
            "Seek out multimedia resources that make abstract ideas tangible."
        ],
        tags: ['motivation', 'general-motivation', 'positive-mindset']
    },
    {
        text: "Action today paves your path to success tomorrow.",
        meaning: "Procrastination is costly—taking concrete steps now sets you up for long-term achievement.",
        keyPoints: [
            "Divide your syllabus into small, actionable tasks.",
            "End each day by planning the next day's study schedule.",
            "Track your daily efforts to see how incremental improvements add up."
        ],
        tags: ['action', 'discipline', 'general-motivation']
    },
    
    // Time Management
    {
        text: "Master your schedule to master your studies.",
        meaning: "Effective time management is the cornerstone of JEE preparation. Prioritize and organize your study blocks to cover all topics.",
        keyPoints: [
            "Use digital calendars or planners to block out study sessions.",
            "Identify and focus on your high-yield subjects first.",
            "Revisit and adjust your schedule weekly to optimize learning pace."
        ],
        tags: ['time-management', 'discipline', 'focus']
    },
    {
        text: "Stop delaying; act now for a stress-free study flow.",
        meaning: "Combat procrastination by implementing structured techniques that keep distractions at bay.",
        keyPoints: [
            "Adopt the Pomodoro technique—study for 25 minutes, break for 5.",
            "Create a clutter-free study space dedicated solely to learning.",
            "Break down intimidating tasks into clear, achievable steps."
        ],
        tags: ['action', 'discipline', 'procrastination', 'time-management']
    },
    
    // Mental Strength
    {
        text: "Your resilience fuels success in the face of challenges.",
        meaning: "A strong mindset is key. Build mental resilience to navigate setbacks during JEE preparation.",
        keyPoints: [
            "Practice mindfulness or meditation daily to clear your mind.",
            "Visualize overcoming specific academic challenges.",
            "Turn mistakes into learning opportunities by reviewing errors thoroughly."
        ],
        tags: ['mental-strength', 'focus', 'positive-mindset']
    },
    {
        text: "Transform stress into a stepping stone toward excellence.",
        meaning: "Proper stress management can propel you forward rather than hold you back during exam preparation.",
        keyPoints: [
            "Schedule regular short breaks and stretch to relieve tension.",
            "Alternate between subjects to keep your mind fresh.",
            "Keep a journal to reflect on challenges and recognize progress."
        ],
        tags: ['stress-management', 'mental-strength', 'positive-mindset']
    },
    
    // Problem-Solving
    {
        text: "Every complex problem is an opportunity to refine your skills.",
        meaning: "Each challenging question is a chance to enhance your analytical abilities and deepen your understanding.",
        keyPoints: [
            "Break down problems into smaller parts and tackle them step by step.",
            "Regularly review solved questions to discover more efficient strategies.",
            "Practice with a variety of problems to build flexible problem-solving skills."
        ],
        tags: ['problem-solving', 'positive-mindset', 'growth']
    },
    {
        text: "Simplicity often triumphs; strive for clarity in problem-solving.",
        meaning: "Focus on mastering basic concepts first—simple, clear techniques can lead to faster and more accurate solutions.",
        keyPoints: [
            "Use diagrams and flowcharts to visualize problems.",
            "Prioritize understanding over memorization by solving problems manually.",
            "Regularly challenge yourself with past year questions to spot trends."
        ],
        tags: ['problem-solving', 'focus', 'study-technique']
    },
    
    // Study Techniques
    {
        text: "Deep understanding beats rote memorization any day.",
        meaning: "Invest time in truly grasping the core concepts rather than passively memorizing facts.",
        keyPoints: [
            "Summarize key points in your own words after studying.",
            "Engage in group discussions to test and expand your understanding.",
            "Utilize active recall and spaced repetition techniques."
        ],
        tags: ['study-technique', 'focus', 'discipline']
    },
    {
        text: "Perfect practice transforms routine learning into peak performance.",
        meaning: "Quality practice—not just quantity—builds a strong foundation and enhances problem-solving speed.",
        keyPoints: [
            "Regularly simulate exam conditions to build stamina and focus.",
            "Review errors in detail to understand and correct your approach.",
            "Alternate between timed drills and concept review sessions."
        ],
        tags: ['study-technique', 'discipline', 'focus']
    },
    
    // Overwhelm-specific quotes
    {
        text: "Divide and conquer: break overwhelming topics into clear, manageable parts.",
        meaning: "When the syllabus feels too vast, focus on small, sequential tasks instead of the whole picture at once.",
        keyPoints: [
            "List all topics and assign simpler subtopics to each study session.",
            "Set micro-goals for each day and reward yourself upon completion.",
            "Review your progress daily to gain perspective on the journey."
        ],
        tags: ['overwhelm', 'stress-management', 'small-steps']
    },
    {
        text: "Every monumental goal begins with a single small step.",
        meaning: "Starting small can ease the pressure of overwhelming tasks—each step forward builds momentum.",
        keyPoints: [
            "Focus on one concept until you master it before moving on.",
            "Divide your study material into bite-sized pieces.",
            "Maintain a progress chart to visually track your daily advancements."
        ],
        tags: ['overwhelm', 'small-steps', 'low-energy-overwhelm']
    },
    
    // Focus-specific quotes
    {
        text: "Sharpen your focus like a laser; clarity is the key to success.",
        meaning: "A distraction-free environment enhances your ability to tackle complex topics efficiently.",
        keyPoints: [
            "Designate a quiet, organized study space free of non-essential items.",
            "Use productivity apps to block distracting websites during study time.",
            "Set specific goals for each study session and stick to them."
        ],
        tags: ['focus', 'concentration', 'discipline']
    },
    {
        text: "Minimize distractions to maximize clarity.",
        meaning: "Building a habit of deep concentration leads to quicker, more precise problem-solving.",
        keyPoints: [
            "Keep your phone away or use focus mode during study hours.",
            "Establish a regular routine that signals your brain it's study time.",
            "Employ techniques like deep breathing to re-center your focus when distracted."
        ],
        tags: ['focus', 'concentration', 'discipline']
    },
    
    // Self-doubt specific quotes
    {
        text: "Silence your inner critic by reviewing your achievements.",
        meaning: "Combat self-doubt by reflecting on how far you've come and the skills you've built along the way.",
        keyPoints: [
            "Keep a success journal noting every challenging problem you solved.",
            "Regularly compare your current progress with past performance to gauge improvement.",
            "Seek feedback from mentors or peers to validate your learning."
        ],
        tags: ['self-doubt', 'confidence', 'self-belief']
    },
    {
        text: "Believe in your preparation and trust the process.",
        meaning: "Shift your focus from negative thoughts to actionable steps that reinforce your strengths.",
        keyPoints: [
            "Create a list of affirmations to boost your confidence before each session.",
            "Discuss your challenges with study groups to receive constructive support.",
            "Remind yourself of previous successes on tough topics."
        ],
        tags: ['self-doubt', 'build-confidence', 'self-belief']
    },
    
    // Energy-level specific quotes
    {
        text: "Harness your high energy by channeling it into challenging tasks.",
        meaning: "When you're feeling energized, push yourself to tackle hard problems and complex concepts.",
        keyPoints: [
            "Schedule high-intensity study sessions during your peak energy periods.",
            "Alternate subjects to maintain engagement and avoid burnout.",
            "Incorporate quick self-tests or quizzes to utilize your alertness."
        ],
        tags: ['action', 'momentum', 'high-energy']
    },
    {
        text: "When energy is low, focus on sustaining progress with lighter tasks.",
        meaning: "Use low-energy periods for review and organization rather than learning new material.",
        keyPoints: [
            "Revise your notes or watch summary videos during sluggish moments.",
            "Organize your study materials and plan for the next high-energy session.",
            "Practice mindfulness or take a short walk to gradually recharge."
        ],
        tags: ['low-energy', 'small-steps', 'realistic-approach']
    },
    
    // Peace-specific quotes
    {
        text: "Cultivate a calm mind to unlock your learning potential.",
        meaning: "A peaceful state of mind will help you absorb and understand new concepts more effectively.",
        keyPoints: [
            "Begin each study session with a few minutes of deep breathing or meditation.",
            "Set up a study environment with soft lighting and minimal clutter.",
            "Take regular breaks to avoid overwhelming stress and maintain mental clarity."
        ],
        tags: ['peace', 'balance', 'stress-management']
    },
    {
        text: "A tranquil mind leads to clear, focused thoughts.",
        meaning: "By maintaining balance and calm, you can approach tough questions with a refreshed perspective.",
        keyPoints: [
            "Incorporate breaks into your study sessions to reset your thinking.",
            "Engage in light physical activity, like stretching, to reduce mental fatigue.",
            "Keep a consistent sleep schedule to support overall mental clarity."
        ],
        tags: ['peace', 'balance', 'stress-management']
    },
    
    // Motivation-specific quotes
    {
        text: "Your daily actions make the blueprint of your future.",
        meaning: "Every habit and decision, no matter how small, contributes to a better tomorrow.",
        keyPoints: [
            "Develop long-term study routines and stick with them even on off-days.",
            "Regularly review your strategies to adapt to your evolving needs.",
            "View setbacks as temporary and maintain focus on your long-term goals."
        ],
        tags: ['motivation', 'discipline', 'long-term-thinking']
    },
    {
        text: "Consistency and perseverance turn challenges into triumphs.",
        meaning: "Persistent, everyday efforts will help you overcome obstacles and reach your goal.",
        keyPoints: [
            "Stick to a revision schedule even when progress feels minimal.",
            "Analyze setbacks to adjust your approach rather than get discouraged.",
            "Celebrate every small victory to build momentum over time."
        ],
        tags: ['motivation', 'discipline', 'consistency']
    },

    // Subject-specific quotes - Physics
    {
        text: "In physics, understanding the 'why' matters more than the formula.",
        meaning: "Building a conceptual foundation in physics will help you solve problems more effectively than memorizing equations.",
        keyPoints: [
            "Draw diagrams for every physics problem to visualize the scenario.",
            "Connect equations to their real-world applications and derivations.",
            "When stuck, go back to fundamental laws (Newton's laws, conservation principles)."
        ],
        tags: ['study-technique', 'focus', 'problem-solving']
    },
    {
        text: "Physics is not about formulas; it's about patterns of thinking.",
        meaning: "Developing a physics mindset allows you to tackle unfamiliar problems by applying core principles.",
        keyPoints: [
            "Practice dimensional analysis to verify your approach.",
            "Build intuition by estimating answers before solving completely.",
            "Create your own examples that connect multiple concepts together."
        ],
        tags: ['problem-solving', 'study-technique', 'discipline']
    },
    {
        text: "Master the fundamentals of mechanics; everything else builds on them.",
        meaning: "A strong foundation in basic mechanics provides the building blocks for more complex physics topics.",
        keyPoints: [
            "Dedicate extra time to mastering Newton's laws and their applications.",
            "Create a force diagram for every mechanics problem.",
            "Connect mechanics concepts to other areas like fluid dynamics and thermodynamics."
        ],
        tags: ['focus', 'study-technique', 'discipline']
    },

    // Subject-specific quotes - Chemistry
    {
        text: "Chemistry is about trends, not isolated facts.",
        meaning: "Understanding patterns in the periodic table and reaction types is more valuable than memorizing individual reactions.",
        keyPoints: [
            "Create mind maps connecting similar elements and their properties.",
            "Focus on understanding reaction mechanisms rather than memorizing products.",
            "Practice drawing electronic configurations to better understand bonding patterns."
        ],
        tags: ['study-technique', 'focus', 'problem-solving']
    },
    {
        text: "Organic chemistry is a language; learn its grammar, not just vocabulary.",
        meaning: "Understanding reaction mechanisms allows you to predict outcomes rather than memorizing countless reactions.",
        keyPoints: [
            "Focus on electron movement patterns across different reaction types.",
            "Create reaction flowcharts connecting different functional group transformations.",
            "Practice drawing mechanisms step-by-step for every reaction you study."
        ],
        tags: ['study-technique', 'focus', 'discipline']
    },
    {
        text: "Physical chemistry bridges mathematical concepts with chemical principles.",
        meaning: "Approaching physical chemistry with strong mathematical fundamentals will make complex topics more accessible.",
        keyPoints: [
            "Strengthen your calculus skills for understanding reaction kinetics and thermodynamics.",
            "Create graphs to visualize relationships between variables.",
            "Connect theoretical equations to experimental observations."
        ],
        tags: ['problem-solving', 'study-technique', 'focus']
    },

    // Subject-specific quotes - Mathematics
    {
        text: "Mathematics isn't about calculations; it's about logical thinking.",
        meaning: "Developing strong reasoning skills helps tackle complex JEE math problems more effectively than memorizing formulas.",
        keyPoints: [
            "Practice explaining your solution approach before computing.",
            "Look for multiple solution methods for the same problem.",
            "Focus on understanding theorems' proofs rather than just applications."
        ],
        tags: ['problem-solving', 'study-technique', 'focus']
    },
    {
        text: "Calculus is the language of change; master its vocabulary.",
        meaning: "A strong foundation in calculus principles will help you tackle advanced problems across multiple subjects.",
        keyPoints: [
            "Visualize derivatives as slopes and integrals as areas.",
            "Connect calculus concepts to their applications in physics and real-world problems.",
            "Practice both computational and conceptual problems to build comprehensive understanding."
        ],
        tags: ['study-technique', 'focus', 'discipline']
    },
    {
        text: "In mathematics, every problem tells a story; listen carefully.",
        meaning: "Taking time to fully understand what a problem is asking helps identify the correct approach and techniques.",
        keyPoints: [
            "Break down word problems into mathematical statements before solving.",
            "Draw diagrams or representations for geometry and coordinate problems.",
            "List all given information and identify what you're asked to find."
        ],
        tags: ['problem-solving', 'focus', 'concentration']
    },

    // Time Management
    {
        text: "It's not about having time; it's about making time.",
        meaning: "Prioritizing JEE preparation requires deliberate choices about how you allocate your hours each day.",
        keyPoints: [
            "Use time blocking to dedicate specific hours to specific subjects.",
            "Eliminate or minimize low-value activities from your schedule.",
            "Track your time usage for a week to identify efficiency opportunities."
        ],
        tags: ['time-management', 'discipline', 'action']
    },
    {
        text: "The 2-minute rule: If it takes less than 2 minutes, do it now.",
        meaning: "Handling quick tasks immediately prevents them from piling up and creating overwhelming backlogs.",
        keyPoints: [
            "Quickly organize study materials before starting each session.",
            "Immediately note down questions or concepts that need clarification.",
            "Review the day's learning points briefly before sleeping."
        ],
        tags: ['time-management', 'action', 'small-steps']
    },
    {
        text: "Plan tomorrow today; win the morning, win the day.",
        meaning: "Setting clear intentions the night before creates momentum and clarity for effective study sessions.",
        keyPoints: [
            "End each day by planning the next day's specific study goals.",
            "Prepare study materials the night before to eliminate morning decision fatigue.",
            "Front-load your most challenging subjects during your peak energy hours."
        ],
        tags: ['time-management', 'discipline', 'action']
    },
    {
        text: "Time wasted is potential lost; guard your study hours fiercely.",
        meaning: "The difference between average and exceptional JEE results often comes down to how effectively you use your time.",
        keyPoints: [
            "Communicate boundaries clearly with friends and family about your study schedule.",
            "Use website blockers or app timers to limit social media during study periods.",
            "Batch similar activities together to minimize context-switching time."
        ],
        tags: ['time-management', 'discipline', 'focus']
    },
    {
        text: "The Pareto Principle: 20% of your efforts yield 80% of your results.",
        meaning: "Identifying and focusing on high-impact topics and activities will maximize your JEE preparation effectiveness.",
        keyPoints: [
            "Analyze past JEE papers to identify frequently tested topics and prioritize them.",
            "Focus on mastering fundamental concepts that appear across multiple questions.",
            "Regularly review your strategy to ensure you're investing time in high-yield activities."
        ],
        tags: ['time-management', 'focus', 'study-technique']
    },

    // Focus Enhancement
    {
        text: "Deep work produces exponential results compared to shallow studying.",
        meaning: "Extended periods of focused, distraction-free study lead to significantly better understanding and retention.",
        keyPoints: [
            "Schedule 90-minute deep work blocks with no digital interruptions.",
            "Create a study environment that signals your brain it's time for deep focus.",
            "Build your deep work stamina gradually, starting with shorter sessions."
        ],
        tags: ['focus', 'concentration', 'discipline']
    },
    {
        text: "Multitasking is the enemy of mastery; focus on one subject at a time.",
        meaning: "Splitting your attention reduces comprehension and retention of complex JEE topics.",
        keyPoints: [
            "Study one subject per session without switching between topics.",
            "Close all unrelated browser tabs and applications while studying.",
            "Use monotasking techniques like the Pomodoro method to maintain focus."
        ],
        tags: ['focus', 'concentration', 'discipline']
    },
    {
        text: "Your environment shapes your focus; design it intentionally.",
        meaning: "Creating optimal physical and digital spaces for studying dramatically improves concentration and productivity.",
        keyPoints: [
            "Designate a specific location used exclusively for studying.",
            "Ensure proper lighting, comfortable seating, and appropriate desk height.",
            "Keep all necessary materials within reach to avoid disrupting your flow."
        ],
        tags: ['focus', 'concentration', 'discipline']
    },
    {
        text: "Your brain follows your breath; control one to master the other.",
        meaning: "Conscious breathing techniques can quickly restore focus when your mind begins to wander.",
        keyPoints: [
            "Practice 4-7-8 breathing when you notice your concentration waning.",
            "Take three deep breaths before starting a challenging problem.",
            "Incorporate brief mindful breathing breaks between study sessions."
        ],
        tags: ['focus', 'concentration', 'peace']
    },
    {
        text: "Discipline your digital life to reclaim your attention.",
        meaning: "Managing technology usage is essential for maintaining the deep focus required for JEE success.",
        keyPoints: [
            "Turn off all non-essential notifications on your devices.",
            "Use apps like Forest or Focus Timer to stay accountable.",
            "Implement a digital sunset one hour before bedtime for better sleep."
        ],
        tags: ['focus', 'discipline', 'concentration']
    },

    // Overcoming Procrastination
    {
        text: "Begin before you feel ready; momentum builds after you start.",
        meaning: "Waiting for motivation often leads to delay; action itself creates the motivation you seek.",
        keyPoints: [
            "Use the 5-second rule: count down from 5 and then begin regardless of hesitation.",
            "Start with just 5 minutes of work to overcome initial resistance.",
            "Focus on the process of studying rather than the end goal."
        ],
        tags: ['procrastination', 'action', 'discipline']
    },
    {
        text: "Eat the frog first: tackle your most challenging subject early.",
        meaning: "Completing your most difficult or dreaded task first creates momentum and reduces anxiety for the rest of the day.",
        keyPoints: [
            "Identify your 'frog' the night before so you know exactly what to start with.",
            "Work on your most challenging subject during your peak energy hours.",
            "Reward yourself after completing difficult tasks to reinforce the habit."
        ],
        tags: ['procrastination', 'discipline', 'action']
    },
    {
        text: "The 2-minute rule: if it takes less than 2 minutes, do it now.",
        meaning: "Small tasks completed immediately prevent the buildup of psychological resistance and administrative overhead.",
        keyPoints: [
            "Organize your study materials before beginning each session.",
            "Answer easy questions first to build momentum for harder ones.",
            "Immediately note down concepts you need to review later."
        ],
        tags: ['procrastination', 'action', 'small-steps']
    },
    {
        text: "Break it down until it can't say no: make tasks impossibly small.",
        meaning: "Dividing overwhelming subjects into tiny, specific actions makes starting much easier.",
        keyPoints: [
            "Convert 'Study organic chemistry' to 'Review 5 reaction mechanisms of alcohols'.",
            "Create incremental micro-goals that build toward larger objectives.",
            "Focus on completing just one small task at a time."
        ],
        tags: ['procrastination', 'small-steps', 'overwhelm']
    },
    {
        text: "Done is better than perfect; progress beats perfection.",
        meaning: "Perfectionism often leads to procrastination; focusing on completion helps maintain momentum.",
        keyPoints: [
            "Set time limits for solving problems rather than aiming for perfect solutions.",
            "Submit practice tests even if you haven't answered everything perfectly.",
            "Review and improve after completion rather than delaying submission."
        ],
        tags: ['procrastination', 'action', 'discipline']
    },

    // Mental Strength
    {
        text: "Your thoughts become your reality; guard them carefully.",
        meaning: "Maintaining positive, solution-focused thoughts directly impacts your performance and perseverance.",
        keyPoints: [
            "Replace 'I can't solve this' with 'I haven't solved this yet'.",
            "Keep a success journal to reference when negative thoughts arise.",
            "Practice thought-stopping techniques when unproductive thinking patterns emerge."
        ],
        tags: ['mental-strength', 'positive-mindset', 'self-belief']
    },
    {
        text: "Pressure is privilege; it means you're pursuing something worthwhile.",
        meaning: "Reframing stress as a sign of importance rather than threat improves performance and reduces anxiety.",
        keyPoints: [
            "Before exams, remind yourself that pressure indicates opportunity.",
            "Use pre-test nervousness as energy rather than trying to eliminate it.",
            "Practice performance under pressure with timed mock tests."
        ],
        tags: ['mental-strength', 'stress-management', 'positive-mindset']
    },
    {
        text: "The mind is a muscle; train it daily for peak performance.",
        meaning: "Mental toughness, like physical strength, improves with consistent, deliberate practice.",
        keyPoints: [
            "Challenge yourself with progressively harder problems to build resilience.",
            "Practice visualization techniques to improve problem-solving abilities.",
            "Develop mental endurance by extending focus sessions gradually."
        ],
        tags: ['mental-strength', 'discipline', 'focus']
    },
    {
        text: "Embrace discomfort; growth happens at the edge of your abilities.",
        meaning: "The feeling of struggle during learning is a sign of expanding capabilities, not failure.",
        keyPoints: [
            "Intentionally work on your weakest subjects rather than avoiding them.",
            "Count the number of mistakes you make as progress indicators, not failures.",
            "Set stretch goals slightly beyond your current abilities."
        ],
        tags: ['mental-strength', 'growth', 'positive-mindset']
    },
    {
        text: "Resilience isn't about never falling; it's about rising every time you fall.",
        meaning: "The ability to recover from setbacks is more important than avoiding them altogether.",
        keyPoints: [
            "After a disappointing test result, analyze mistakes and create an improvement plan.",
            "Set a time limit for feeling discouraged before taking constructive action.",
            "Share challenges with peers or mentors to gain perspective and support."
        ],
        tags: ['mental-strength', 'positive-mindset', 'self-belief']
    },

    // Stress Management
    {
        text: "Stress is not your enemy; poor recovery is.",
        meaning: "Strategic recovery and rest periods are essential for maintaining peak cognitive performance.",
        keyPoints: [
            "Schedule deliberate breaks between intensive study sessions.",
            "Use active recovery techniques like walking or stretching.",
            "Ensure 7-8 hours of quality sleep for optimal cognitive function."
        ],
        tags: ['stress-management', 'balance', 'mental-strength']
    },
    {
        text: "The calm mind learns more than the anxious one.",
        meaning: "Reducing anxiety improves information processing, memory retention, and problem-solving abilities.",
        keyPoints: [
            "Practice progressive muscle relaxation before tackling difficult topics.",
            "Use guided visualization to reduce test anxiety.",
            "Develop a pre-study ritual that signals your brain to enter a calm, focused state."
        ],
        tags: ['stress-management', 'peace', 'focus']
    },
    {
        text: "Your body affects your mind; take care of both equally.",
        meaning: "Physical well-being directly impacts cognitive performance and emotional resilience.",
        keyPoints: [
            "Incorporate 20-30 minutes of moderate exercise daily to boost brain function.",
            "Stay hydrated and maintain balanced nutrition for optimal cognitive performance.",
            "Practice good posture during study sessions to improve energy and focus."
        ],
        tags: ['stress-management', 'balance', 'mental-strength']
    },
    {
        text: "Small habits create big changes; micro-breaks prevent macro-burnout.",
        meaning: "Regular short breaks throughout study sessions prevent exhaustion and maintain consistent productivity.",
        keyPoints: [
            "Use the 50-10 rule: 50 minutes of focused study followed by a 10-minute break.",
            "Practice the 20-20-20 rule for eye strain: every 20 minutes, look at something 20 feet away for 20 seconds.",
            "Take a 5-minute movement break every hour to reset your body and mind."
        ],
        tags: ['stress-management', 'small-steps', 'balance']
    },
    {
        text: "Control what you can; accept what you cannot.",
        meaning: "Focusing energy on controllable factors reduces anxiety and improves performance.",
        keyPoints: [
            "Create a list separating controllable factors (study hours, practice tests) from uncontrollable ones (exam difficulty).",
            "Develop contingency plans for different scenarios to reduce uncertainty anxiety.",
            "Practice acceptance techniques for situations beyond your control."
        ],
        tags: ['stress-management', 'peace', 'mental-strength']
    },

    // Study Techniques
    {
        text: "Active recall trumps passive review every time.",
        meaning: "Testing yourself on material is far more effective than simply reviewing notes or textbooks.",
        keyPoints: [
            "Convert your notes into question-answer pairs for active recall practice.",
            "Use flashcards for formula recall and concept testing.",
            "Close your books and explain concepts in your own words as if teaching someone."
        ],
        tags: ['study-technique', 'discipline', 'focus']
    },
    {
        text: "Spaced repetition builds lasting knowledge; cramming builds temporary recall.",
        meaning: "Distributing practice over time dramatically improves long-term retention compared to concentrated study.",
        keyPoints: [
            "Review material at increasing intervals (1 day, 3 days, 1 week, 2 weeks).",
            "Use spaced repetition software like Anki to optimize review schedules.",
            "Interleave subjects rather than blocking study time by topic."
        ],
        tags: ['study-technique', 'time-management', 'discipline']
    },
    {
        text: "Connection beats memorization; link new concepts to existing knowledge.",
        meaning: "Building mental associations between topics creates stronger neural pathways and better retrieval.",
        keyPoints: [
            "Create concept maps connecting related topics across subjects.",
            "Use analogies to link abstract concepts to familiar ideas.",
            "Identify overlapping principles between physics, chemistry, and mathematics."
        ],
        tags: ['study-technique', 'focus', 'problem-solving']
    },
    {
        text: "The Feynman Technique: If you can't explain it simply, you don't understand it well enough.",
        meaning: "Teaching complex concepts in simple language reveals and fills gaps in your understanding.",
        keyPoints: [
            "Explain difficult concepts as if teaching a 12-year-old.",
            "Identify points where you struggle to explain clearly and revisit those areas.",
            "Use simple analogies and examples rather than technical jargon."
        ],
        tags: ['study-technique', 'focus', 'discipline']
    },
    {
        text: "Deliberate practice beats mindless repetition.",
        meaning: "Focused practice targeting specific weaknesses with immediate feedback leads to faster improvement.",
        keyPoints: [
            "Identify specific areas of weakness through error analysis.",
            "Practice similar problems with progressive difficulty.",
            "Seek immediate feedback through solution verification or teacher guidance."
        ],
        tags: ['study-technique', 'discipline', 'focus']
    },

    // Problem-Solving
    {
        text: "First understand the problem completely, then solve it methodically.",
        meaning: "Taking time to analyze a problem before attempting solutions prevents wasted effort and incorrect approaches.",
        keyPoints: [
            "Read the problem multiple times, noting all given information.",
            "Draw diagrams or representations to visualize the scenario.",
            "Identify which concepts and formulas might apply before calculating."
        ],
        tags: ['problem-solving', 'focus', 'study-technique']
    },
    {
        text: "When stuck, change your perspective, not your goal.",
        meaning: "Approaching problems from different angles often reveals solutions that weren't initially apparent.",
        keyPoints: [
            "Try working backward from the answer if you know what form it should take.",
            "Apply different concepts or formulas that might relate to the same situation.",
            "Check for simplified cases or extreme conditions to gain insight."
        ],
        tags: ['problem-solving', 'mental-strength', 'focus']
    },
    {
        text: "Learn from each error; mistakes well-analyzed are knowledge gained.",
        meaning: "Thoughtful error analysis converts incorrect answers into powerful learning opportunities.",
        keyPoints: [
            "Keep an error log categorizing mistakes by type and concept.",
            "Review incorrect solutions to identify exactly where your reasoning went wrong.",
            "Create custom practice sets focusing on your most common error types."
        ],
        tags: ['problem-solving', 'growth', 'discipline']
    },
    {
        text: "Simplify before you multiply; complexity builds from basics.",
        meaning: "Breaking down complex problems into simpler components makes seemingly difficult questions manageable.",
        keyPoints: [
            "Identify the core concepts hidden within complex problems.",
            "Solve simpler versions of the problem first to establish a pattern.",
            "Connect multiple basic concepts to address sophisticated questions."
        ],
        tags: ['problem-solving', 'study-technique', 'focus']
    },
    {
        text: "In problem-solving, patience is your greatest ally.",
        meaning: "Rushing through problems leads to careless errors; deliberate analysis leads to accurate solutions.",
        keyPoints: [
            "Read each problem twice before attempting a solution.",
            "Estimate the answer before calculating to catch major errors.",
            "Double-check your work systematically rather than rushing to the next problem."
        ],
        tags: ['problem-solving', 'discipline', 'focus']
    },

    // Overcoming Overwhelm
    {
        text: "The syllabus climbed one concept at a time.",
        meaning: "Breaking down the vast JEE syllabus into small, sequential steps makes it manageable and less intimidating.",
        keyPoints: [
            "Create a detailed topic breakdown with dependencies mapped out.",
            "Focus on mastering one sub-topic per day rather than covering multiple areas superficially.",
            "Track completion visually to see your progress over time."
        ],
        tags: ['overwhelm', 'small-steps', 'focus']
    },
    {
        text: "Progress isn't always visible, but it's always happening when you're consistent.",
        meaning: "Even when you don't see immediate results, consistent study builds foundation and understanding.",
        keyPoints: [
            "Maintain a study journal to track daily activities even when results aren't apparent.",
            "Focus on process goals (completing practice sets) rather than outcome goals (test scores).",
            "Celebrate consistency milestones regardless of performance metrics."
        ],
        tags: ['overwhelm', 'positive-mindset', 'consistency']
    },
    {
        text: "Start anywhere, but start now.",
        meaning: "When feeling overwhelmed, beginning with any topic is better than paralysis by analysis.",
        keyPoints: [
            "Choose any subject that interests you rather than overthinking the perfect starting point.",
            "Commit to just 25 minutes of focused work to overcome initial resistance.",
            "Use the 5-second rule to push past hesitation and begin immediately."
        ],
        tags: ['overwhelm', 'action', 'small-steps']
    },
    {
        text: "Focus on today's page, not the entire book.",
        meaning: "Narrowing your attention to the immediate task prevents feeling overwhelmed by the total workload.",
        keyPoints: [
            "Set clear boundaries for each day's material rather than thinking about the entire syllabus.",
            "Create detailed micro-goals for each study session.",
            "Use physical or digital dividers to literally see only the current section you're studying."
        ],
        tags: ['overwhelm', 'focus', 'small-steps']
    },
    {
        text: "Small steps taken consistently beat occasional giant leaps.",
        meaning: "Regular, manageable study sessions yield better results than irregular intensive cramming.",
        keyPoints: [
            "Commit to daily minimum study sessions even if they're short.",
            "Track your consistency streak to build momentum.",
            "Prioritize regularity over duration in your study schedule."
        ],
        tags: ['overwhelm', 'small-steps', 'consistency']
    },

    // Self-Doubt
    {
        text: "Your doubts are not your destiny; they're just thoughts passing through.",
        meaning: "Self-doubt is a normal experience that doesn't have to determine your actions or outcomes.",
        keyPoints: [
            "Practice observing negative thoughts without attaching to them.",
            "Create evidence lists documenting past successes to counter doubt.",
            "Develop a specific phrase to repeat when doubt surfaces: 'This is just a thought, not a fact.'"
        ],
        tags: ['self-doubt', 'mental-strength', 'positive-mindset']
    },
    {
        text: "Compare yourself to yesterday's version of you, not to others.",
        meaning: "Measuring your progress against your past self provides meaningful feedback without destructive comparison.",
        keyPoints: [
            "Keep a progress journal documenting improvements in specific areas.",
            "Set personal benchmark tests to measure growth against your previous performance.",
            "Celebrate improvements regardless of where you stand relative to peers."
        ],
        tags: ['self-doubt', 'confidence', 'positive-mindset']
    },
    {
        text: "Action is the antidote to doubt; do what you fear.",
        meaning: "Taking concrete steps forward is the most effective way to overcome self-doubt and build confidence.",
        keyPoints: [
            "Identify one specific action that intimidates you and do it immediately.",
            "Break challenging tasks into smaller steps to make action less daunting.",
            "Track completed actions rather than outcomes to build momentum."
        ],
        tags: ['self-doubt', 'action', 'build-confidence']
    },
    {
        text: "Your brain believes what you tell it; speak positively about your abilities.",
        meaning: "Self-talk directly influences your confidence, performance, and perseverance.",
        keyPoints: [
            "Replace phrases like 'I'm bad at this' with 'I'm still learning this'.",
            "Practice positive affirmations specific to your study goals.",
            "Journal about your strengths and capabilities regularly."
        ],
        tags: ['self-doubt', 'positive-mindset', 'build-confidence']
    },
    {
        text: "Mistakes are proof you're trying, not evidence you're failing.",
        meaning: "Errors and setbacks are normal parts of the learning process, not indicators of inadequacy.",
        keyPoints: [
            "Document lessons learned from each mistake rather than dwelling on the error itself.",
            "Share struggles with peers to normalize the challenges everyone faces.",
            "Set 'failure quotas' that encourage risk-taking and learning from mistakes."
        ],
        tags: ['self-doubt', 'growth', 'positive-mindset']
    },

    // Confidence Building
    {
        text: "Confidence comes from evidence of competence; build it through practice.",
        meaning: "True confidence is developed through demonstrated ability, not positive thinking alone.",
        keyPoints: [
            "Create increasingly challenging practice tests to prove your abilities to yourself.",
            "Keep a 'victory log' of problems you've mastered, especially previously difficult ones.",
            "Regularly teach concepts to others to solidify your understanding."
        ],
        tags: ['build-confidence', 'discipline', 'action']
    },
    {
        text: "Your inner voice shapes your outer reality; manage it intentionally.",
        meaning: "Developing positive, supportive self-talk directly impacts your performance and persistence.",
        keyPoints: [
            "Identify and challenge negative thought patterns during study sessions.",
            "Create personalized affirmations addressing your specific doubts.",
            "Practice responding to setbacks with constructive rather than critical inner dialogue."
        ],
        tags: ['build-confidence', 'mental-strength', 'positive-mindset']
    },
    {
        text: "Preparation beats anxiety every time.",
        meaning: "Thorough preparation is the most effective way to build confidence and reduce test anxiety.",
        keyPoints: [
            "Take more practice tests than you think necessary under exam conditions.",
            "Deliberately practice the most challenging topics until they become comfortable.",
            "Create and follow a comprehensive review schedule leading up to exams."
        ],
        tags: ['build-confidence', 'discipline', 'stress-management']
    },
    {
        text: "Celebrate small victories along the way.",
        meaning: "Acknowledging incremental successes builds momentum and reinforces your belief in your abilities.",
        keyPoints: [
            "Create milestones for concept mastery, not just completion.",
            "Reward yourself for consistency as well as achievement.",
            "Share successes with others to reinforce their significance."
        ],
        tags: ['build-confidence', 'positive-mindset', 'small-steps']
    },
    {
        text: "The voice of doubt grows quieter with each challenge you overcome.",
        meaning: "Each time you push through difficulty, you build evidence that weakens future self-doubt.",
        keyPoints: [
            "Keep a 'challenge journal' documenting obstacles you've overcome.",
            "Intentionally tackle intimidating topics to build confidence through conquest.",
            "Reflect on past victories when facing new challenges."
        ],
        tags: ['build-confidence', 'mental-strength', 'growth']
    },

    // Low Energy Management
    {
        text: "Energy management matters more than time management.",
        meaning: "Matching tasks to your energy levels is more effective than simply allocating hours on a schedule.",
        keyPoints: [
            "Track your energy patterns for a week to identify your peak and low periods.",
            "Schedule conceptual learning during high-energy times and review during low-energy periods.",
            "Use body scanning techniques to identify early signs of fatigue before productivity plummets."
        ],
        tags: ['low-energy', 'time-management', 'balance']
    },
    {
        text: "Lower the bar for getting started when energy is low.",
        meaning: "Making tasks extremely small and approachable helps overcome the inertia of low-energy periods.",
        keyPoints: [
            "Commit to just 5 minutes of study when feeling drained.",
            "Break tasks into micro-steps that feel almost too easy to complete.",
            "Use the 'Swiss cheese' approach: poke small holes in large tasks rather than tackling them head-on."
        ],
        tags: ['low-energy', 'small-steps', 'action']
    },
    {
        text: "Physical movement renews mental energy.",
        meaning: "Strategic physical activity can combat mental fatigue and restore focus during study sessions.",
        keyPoints: [
            "Take a 5-minute walk when concentration begins to fade.",
            "Practice energizing breathing exercises between study blocks.",
            "Use quick stretching routines to reactivate your body and mind."
        ],
        tags: ['low-energy', 'focus', 'balance']
    },
    {
        text: "Nutrition fuels cognition; eat for your brain.",
        meaning: "Strategic eating habits can help maintain consistent energy levels throughout study sessions.",
        keyPoints: [
            "Avoid high-glycemic foods that cause energy crashes.",
            "Stay hydrated—even mild dehydration impairs cognitive function.",
            "Incorporate foods rich in omega-3s, antioxidants, and complex carbohydrates."
        ],
        tags: ['low-energy', 'balance', 'discipline']
    },
    {
        text: "Rest is part of work, not separate from it.",
        meaning: "Strategic recovery periods are essential components of an effective study regimen, not indulgences.",
        keyPoints: [
            "Schedule deliberate rest periods as non-negotiable parts of your study plan.",
            "Use techniques like the Pomodoro method to formalize work-rest cycles.",
            "Prioritize sleep quality to maximize learning efficiency during waking hours."
        ],
        tags: ['low-energy', 'balance', 'discipline']
    },

    // High Energy Utilization
    {
        text: "Harness peak energy periods for maximum cognitive return.",
        meaning: "Identifying and leveraging your high-energy windows dramatically increases learning efficiency.",
        keyPoints: [
            "Track your alertness levels throughout the day to identify your personal peak periods.",
            "Schedule your most challenging or conceptually difficult subjects during these times.",
            "Protect these peak hours from interruptions and distractions."
        ],
        tags: ['high-energy', 'time-management', 'focus']
    },
    {
        text: "Strike while the iron is hot; energy surges are valuable resources.",
        meaning: "Recognizing and immediately utilizing periods of high motivation and energy leads to exceptional productivity.",
        keyPoints: [
            "Keep a list of high-challenge tasks ready for when you feel highly energized.",
            "Don't waste peak energy on administrative or routine tasks.",
            "Extend high-energy periods by maintaining momentum once started."
        ],
        tags: ['high-energy', 'momentum', 'action']
    },
    {
        text: "High energy without direction is wasted potential.",
        meaning: "Creating clear structures and priorities ensures your high-energy periods yield maximum results.",
        keyPoints: [
            "Plan specific high-yield activities before high-energy periods arrive.",
            "Set concrete goals for each high-energy study session.",
            "Eliminate decision-making during these periods by planning in advance."
        ],
        tags: ['high-energy', 'focus', 'discipline']
    },
    {
        text: "Challenge yourself most when you're at your best.",
        meaning: "Reserve your peak cognitive hours for the most demanding intellectual tasks in your JEE preparation.",
        keyPoints: [
            "Identify your three most challenging topics and tackle them during peak energy.",
            "Use high-energy periods for active problem-solving rather than passive review.",
            "Push beyond your comfort zone when you have the mental resources to do so."
        ],
        tags: ['high-energy', 'growth', 'discipline']
    },
    {
        text: "Momentum builds on itself; use high energy to create forward motion.",
        meaning: "Periods of high energy can create psychological momentum that carries into subsequent study sessions.",
        keyPoints: [
            "Set up the next day's materials during high-energy periods.",
            "Create clear transition plans between tasks to maintain flow.",
            "Document insights and progress during peak times to motivate future sessions."
        ],
        tags: ['high-energy', 'momentum', 'action']
    },

    // Balance and Peace
    {
        text: "Balance isn't about equal time; it's about appropriate attention.",
        meaning: "Effective balance means giving each area of life the right amount of focus, not necessarily equal portions.",
        keyPoints: [
            "Identify your non-negotiable personal needs and schedule them first.",
            "Use time blocking to ensure important life areas don't get overlooked.",
            "Adjust your balance seasonally—intense study periods require different balances than regular times."
        ],
        tags: ['balance', 'peace', 'time-management']
    },
    {
        text: "Mental peace comes from preparation, not perfection.",
        meaning: "Knowing you've prepared thoroughly brings more peace than striving for flawless performance.",
        keyPoints: [
            "Focus on consistent preparation rather than cramming.",
            "Create realistic study plans you can actually follow.",
            "Accept that comprehensive understanding, not perfection, is the goal."
        ],
        tags: ['peace', 'balance', 'mental-strength']
    },
    {
        text: "Your worth isn't measured by your rank; separate identity from achievement.",
        meaning: "Maintaining perspective about JEE results helps preserve mental health during intense preparation.",
        keyPoints: [
            "List your strengths and values beyond academic performance.",
            "Connect regularly with activities and people who appreciate you for more than your studies.",
            "Practice unconditional self-acceptance regardless of academic outcomes."
        ],
        tags: ['peace', 'balance', 'mental-strength']
    },
    {
        text: "Silence cultivates clarity; make space for quiet reflection.",
        meaning: "Regular periods of quiet contemplation improve learning integration and reduce mental noise.",
        keyPoints: [
            "Schedule 10-minute reflection periods after intensive study sessions.",
            "Practice mindful walks without digital distractions.",
            "Start or end your day with a brief meditation to clear mental clutter."
        ],
        tags: ['peace', 'focus', 'balance']
    },
    {
        text: "The present moment is where learning happens; be fully there.",
        meaning: "Mindful presence during study sessions dramatically improves comprehension and retention.",
        keyPoints: [
            "Practice single-tasking instead of multitasking during study sessions.",
            "Use the STOP technique (Stop, Take a breath, Observe, Proceed) when mind wandering occurs.",
            "Engage all your senses in the learning process to deepen presence."
        ],
        tags: ['peace', 'focus', 'concentration']
    },

    // Consistency and Long-Term Thinking
    {
        text: "Consistency compounds; small daily actions create exponential results.",
        meaning: "Regular, persistent effort accumulates and accelerates over time in ways that sporadic intensity cannot match.",
        keyPoints: [
            "Commit to daily minimum viable study sessions, even if brief.",
            "Track your consistency streak to build momentum.",
            "Focus on process goals (daily practice) rather than outcome goals (test scores)."
        ],
        tags: ['consistency', 'discipline', 'long-term-thinking']
    },
    {
        text: "Play the long game; what matters is who you become through the journey.",
        meaning: "The habits and mindsets you develop during JEE preparation will serve you long after the exam.",
        keyPoints: [
            "Identify skills you're building that transcend exam preparation.",
            "Focus on developing learning approaches that will serve your entire career.",
            "View challenges as opportunities to build character, not just knowledge."
        ],
        tags: ['long-term-thinking', 'growth', 'positive-mindset']
    },
    {
        text: "Rome wasn't built in a day, but they were laying bricks every hour.",
        meaning: "Consistent, incremental progress is the true secret to mastering the JEE syllabus.",
        keyPoints: [
            "Set daily 'brick-laying' goals that advance your knowledge incrementally.",
            "Celebrate consistency milestones separate from performance metrics.",
            "Track your study hours visually to see how they accumulate over time."
        ],
        tags: ['consistency', 'small-steps', 'discipline']
    },
    {
        text: "Future you is watching through memories; make them proud.",
        meaning: "Considering your future perspective helps maintain discipline and purpose during challenging periods.",
        keyPoints: [
            "Write a letter from your future self thanking you for specific actions taken now.",
            "Make decisions based on what you'll be glad you did, not just what feels good now.",
            "Create a visualization of your future self who benefited from your current efforts."
        ],
        tags: ['long-term-thinking', 'discipline', 'motivation']
    },
    {
        text: "Systems outlast spurts; build reliable study routines.",
        meaning: "Creating sustainable, repeatable study systems yields better results than relying on motivation alone.",
        keyPoints: [
            "Establish fixed study triggers that automatically initiate your routine.",
            "Design your environment to make studying the path of least resistance.",
            "Create backup plans for when primary routines are disrupted."
        ],
        tags: ['consistency', 'discipline', 'long-term-thinking']
    },
    {
        text: "Strategy is the key to success; adapt and overcome challenges.",
        meaning: "Effective strategies are essential for navigating the complexities of JEE preparation.",
        keyPoints: [
            "Identify and implement strategies that align with your learning style and goals.",
            "Adapt strategies as needed based on new challenges or obstacles encountered.",
            "Regularly review and refine strategies to improve effectiveness."
        ],
        tags: ['strategy', 'action', 'focus', 'discipline', 'high-energy', 'mental-strength', 'adaptability', 'sun-tzu']
    }
];

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quotes;
}