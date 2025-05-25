// This component lists all journal entries using dummy data and renders each entry using JournalCard.

import { dummyEntries } from "./data";
import React from "react";
import JournalCard from "./JournalCard";

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