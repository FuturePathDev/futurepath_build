import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { CareerBanner } from './components/CareerBanner';

function App() {
  const [student] = useState({
    name: "Jessie Lopez",
    username: "@Jessiesgirl131",
    grade: "11th Grade",
    avatar: "/avatar.png", // replace with actual avatar URL or builder later
    focusCareer: "Health & Medicine",
    progress: 52,
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-teal-100 via-white to-blue-100 font-raleway">
      <Sidebar student={student} />
      <main className="flex-1 p-6 overflow-y-scroll">
        <CareerBanner student={student} />
        {/* You can insert Tasks, Schedule, Journal components here */}
      </main>
    </div>
  );
}

export default App;
