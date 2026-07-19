export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does Paperline work without an internet connection?",
    answer:
      "Yes. Paperline is offline-first. Create, edit, and export documents anywhere — on a plane, at a job site, or when your connection drops. Your data is stored locally in SQLite on your computer.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "Paperline runs on macOS, Windows, and Linux. Download once, install on your machine, and you're ready to go. No browser required.",
  },
  {
    question: "How does the lifetime license work?",
    answer:
      "Pay $79 once and use Paperline forever. No monthly fees, no annual renewals, no surprise price increases. You own the software.",
  },
  {
    question: "Can I migrate from another tool?",
    answer:
      "Yes. Paperline supports import from common formats so you can bring over customers, products, and existing records without starting from scratch.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "On your computer. Paperline uses a local SQLite database — no cloud account, no remote servers, no one else has access to your business records.",
  },
  {
    question: "How do backups work?",
    answer:
      "Create a full backup with one click. Store it anywhere you like — external drive, cloud storage you control, or a USB stick. Restore just as easily.",
  },
  {
    question: "How is this different from cloud invoicing software?",
    answer:
      "Cloud tools rent you access and hold your data. Paperline is a one-time purchase that runs on your machine. You work offline, you own your records, and you never pay a subscription.",
  },
  {
    question: "Do I have to use AI?",
    answer:
      "No. AI is entirely optional. Use Paperline manually, connect a local model via Ollama or LM Studio, or bring your own OpenAI or Claude API key. Turn it off anytime.",
  },
];
