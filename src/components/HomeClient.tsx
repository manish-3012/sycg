'use client';

import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import IntroButton from "@/components/IntroButton";

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Hero/>
      <IntroButton/>
      <Camp/>
      <Guide />
      <Features/>
      <div id="get-app">
        <GetApp/>
      </div>
    </>
  );
}