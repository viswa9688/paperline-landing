export interface ComparisonRow {
  problem: string;
  solution: string;
}

export const SUBSCRIPTION_COMPARISON: ComparisonRow[] = [
  {
    problem: "Monthly fees that never stop",
    solution: "One payment — own it forever",
  },
  {
    problem: "Requires internet to work",
    solution: "Works completely offline",
  },
  {
    problem: "Your data stored in their cloud",
    solution: "Your data stays on your computer",
  },
  {
    problem: "Vendor lock-in with no easy exit",
    solution: "Backup anywhere, anytime",
  },
  {
    problem: "Generic templates you can't customize",
    solution: "Documents that look like your brand",
  },
];
