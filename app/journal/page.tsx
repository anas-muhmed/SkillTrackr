// Main journal page: shows the form to add new entry and list of existing entries

import JournalForm from "./JournalForm";
import JournalList from "./JournalList";

export default function JournalPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">My Journal</h1>
      <JournalForm />
      <JournalList />
    </div>
  );
}
