import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-pink-100 selection:text-pink-600">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default App;
