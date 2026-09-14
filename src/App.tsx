import React, { useState, useEffect } from 'react';
import type { Technology } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainLayout } from './components/MainLayout';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.statusText}`);
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error('Error loading technology dataset:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-pink-100 selection:text-pink-600">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MainLayout
          technologies={technologies}
          loading={loading}
          stack={stack}
          handleAddToStack={handleAddToStack}
          sidebar={
            <Sidebar
              stack={stack}
              handleRemoveFromStack={handleRemoveFromStack}
            />
          }
        />
      </main>
    </div>
  );
};

export default App;
