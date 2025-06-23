// This component lists all journal entries using dummy data and renders each entry using JournalCard.


import React from "react";
import JournalCard from "./JournalCard";


const dummyEntries = [
  {
    id: 1,
    title: "First Journal Entry",
    content: "Today I started learning Next.js.",
    date: "2025-06-22",
  },
  {
    id: 2,
    title: "Second Journal Entry",
    content: "I understood CSR, SSR and hydration!",
    date: "2025-06-23",
  },
];


const JournalList = () => {
  return (
    <div className="flex flex-col gap-4">
      {dummyEntries.map((entry) => (
        <JournalCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default JournalList;