export interface ComparisonRow {
  problem: string;
  solution: string;
}

export const SUBSCRIPTION_COMPARISON: ComparisonRow[] = [
  {
    problem: "Monthly fees that never stop",
    solution: "One-time purchase — own it forever",
  },
  {
    problem: "Requires internet to work",
    solution: "Works completely offline",
  },
  {
    problem: "Your data stored in their cloud",
    solution: "SQLite database on your computer",
  },
  {
    problem: "Vendor lock-in with no easy exit",
    solution: "Export, backup, and restore anytime",
  },
  {
    problem: "Generic templates you can't customize",
    solution: "Drag-and-drop document designer",
  },
];
