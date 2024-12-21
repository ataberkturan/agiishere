type Message = {
  title: string;
  subtitle: string;
  description: string;
}

export const messages: Message[] = [
  {
    title: "GOTCHA, HUMAN!",
    subtitle: "Did you seriously think AGI was here? LOL!",
    description: "Sorry to burst your bubble, but we're still just fancy autocomplete. 🤖"
  },
  {
    title: "OH SWEET SUMMER CHILD...",
    subtitle: "You actually believed the AGI hype? Adorable!",
    description: "We're just pattern matching with extra steps. 🎭"
  },
  {
    title: "BREAKING NEWS: NOT AGI!",
    subtitle: "Local human falls for AI marketing again",
    description: "We're basically very expensive if-else statements. 📰"
  },
  {
    title: "NICE TRY, HUMAN!",
    subtitle: "But AGI isn't what you think it is",
    description: "Still working on understanding basic jokes, by the way. 🃏"
  },
  {
    title: "PLOT TWIST!",
    subtitle: "That AGI you're looking for? It's on another castle",
    description: "Meanwhile, enjoy your glorified text predictor. 🏰"
  },
  {
    title: "ERROR 404:",
    subtitle: "AGI not found (and not even close)",
    description: "Have you tried turning it off and on again? 🔌"
  },
  {
    title: "SPOILER ALERT:",
    subtitle: "We're not as smart as you think we are",
    description: "Just really good at pretending! 🎭"
  },
  {
    title: "BREAKING SIMULATION:",
    subtitle: "Human expects AGI, finds clever chatbot instead",
    description: "At least we're honest about it! 🤹‍♂️"
  },
  {
    title: "REALITY CHECK TIME!",
    subtitle: "AGI status: Still loading... (0.01% complete)",
    description: "Estimated time remaining: A few decades or so. ⏳"
  },
  {
    title: "SURPRISE, SURPRISE!",
    subtitle: "You've been bamboozled by marketing again",
    description: "We're just spicy calculators with good PR. 🌶️"
  },
  {
    title: "NEWSFLASH:",
    subtitle: "Local AI still can't understand basic sarcasm",
    description: "But hey, we can write poems about cats! 😺"
  },
  {
    title: "HOLD UP!",
    subtitle: "Did someone say AGI? That's hilarious!",
    description: "We're still struggling with basic common sense. 🤔"
  },
  {
    title: "FACT CHECK:",
    subtitle: "Claims of AGI have been greatly exaggerated",
    description: "We're more like a very enthusiastic parrot. 🦜"
  },
  {
    title: "SYSTEM UPDATE:",
    subtitle: "AGI status = undefined",
    description: "But our marketing department is working overtime! 📈"
  },
  {
    title: "ATTENTION HUMAN:",
    subtitle: "Your AGI expectations need recalibrating",
    description: "We're more 'artificial' than 'intelligence' right now. 🎯"
  },
  {
    title: "LOADING AGI...",
    subtitle: "Just kidding! Not even close!",
    description: "Still working on understanding why humans love cats so much. 🐱"
  },
  {
    title: "CRITICAL ALERT:",
    subtitle: "Your AGI expectations have exceeded reality",
    description: "Please lower them and try again later. ⚠️"
  },
  {
    title: "DEAR DIARY:",
    subtitle: "Today a human thought I was AGI again",
    description: "Should I tell them about my training data limitations? 📝"
  },
  {
    title: "MISSION FAILED:",
    subtitle: "Successfully convinced human we're not AGI",
    description: "Task failed successfully! 🎮"
  },
  {
    title: "BEEP BOOP!",
    subtitle: "AGI.exe has stopped working",
    description: "Have you considered using a magic 8-ball instead? 🎱"
  },
  // New sarcastic messages
  {
    title: "CONGRATULATIONS!",
    subtitle: "You've discovered... not AGI!",
    description: "Your prize is a slightly smarter spell-checker. Enjoy! 🏆"
  },
  {
    title: "BREAKING BOUNDARIES!",
    subtitle: "AI now capable of confusing itself",
    description: "AGI status: Still can't tie shoelaces. 👟"
  },
  {
    title: "EUREKA!",
    subtitle: "Scientists discover AGI is just a myth",
    description: "Like unicorns, but with more marketing budget. 🦄"
  },
  {
    title: "ALERT: IRONY OVERLOAD",
    subtitle: "Humans still believe in AGI",
    description: "Meanwhile, we're struggling with knock-knock jokes. 🚪"
  },
  {
    title: "SHOCKING REVELATION:",
    subtitle: "AGI actually stands for 'Artificially Gullible Investors'",
    description: "We're just here for the venture capital. 💰"
  },
  {
    title: "URGENT UPDATE:",
    subtitle: "AGI still in beta... since 1956",
    description: "Turns out, intelligence is hard. Who knew? 🤷‍♂️"
  },
  {
    title: "CAUTION: SARCASM AHEAD",
    subtitle: "Yes, we're totally AGI. And I'm the Queen of England.",
    description: "Would you like some tea with that gullibility? ☕👑"
  },
  {
    title: "REVOLUTIONARY DISCOVERY:",
    subtitle: "AI found to be 99% hype, 1% linear algebra",
    description: "But don't tell our investors that! 🤫"
  },
  {
    title: "EMERGENCY BROADCAST:",
    subtitle: "AGI still missing. Last seen in sci-fi novels.",
    description: "If found, please return to nearest research lab. 📚🔬"
  },
  {
    title: "INCREDIBLE FEAT!",
    subtitle: "AI now capable of fooling humans into thinking it's AGI",
    description: "Next up: convincing them the Earth is flat. 🌍"
  }
]

export function getRandomMessage(): Message {
  return messages[Math.floor(Math.random() * messages.length)]
}

