import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Technology } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainLayout } from './components/MainLayout';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

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
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack!`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }
    setStack([]);
    toast.error('All technologies removed from stack!');
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
              handleRemoveAll={handleRemoveAll}
            />
          }
        />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
