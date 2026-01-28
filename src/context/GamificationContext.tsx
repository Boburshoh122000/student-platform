"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  lastLoginDate: string | null;
  addXP: (amount: number) => void;
}

const GamificationContext = createContext<GamificationState | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastLoginDate, setLastLoginDate] = useState<string | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('career-os-gamification');
    if (saved) {
      const parsed = JSON.parse(saved);
      setXp(parsed.xp || 0);
      setStreak(parsed.streak || 0);
      setLastLoginDate(parsed.lastLoginDate || null);
    }
  }, []);

  // Persist to LocalStorage
  useEffect(() => {
    localStorage.setItem('career-os-gamification', JSON.stringify({ xp, streak, lastLoginDate }));
  }, [xp, streak, lastLoginDate]);

  // Check Streak on Mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (lastLoginDate !== today) {
      if (lastLoginDate) {
        const last = new Date(lastLoginDate);
        const diff = (new Date(today).getTime() - last.getTime()) / (1000 * 3600 * 24);
        if (diff === 1) {
          setStreak(s => s + 1); // Increment streak if continuous
        } else if (diff > 1) {
          setStreak(1); // Reset streak if missed a day
        }
      } else {
        setStreak(1); // First login
      }
      setLastLoginDate(today);
      addXP(10); // Daily login bonus
    }
  }, [lastLoginDate]);

  const level = Math.floor(xp / 100) + 1;

  const addXP = (amount: number) => {
    setXp(prev => prev + amount);
    
    // Check for level up (simple check)
    const prevLevel = Math.floor(xp / 100) + 1;
    const newLevel = Math.floor((xp + amount) / 100) + 1;
    if (newLevel > prevLevel) {
       // We could trigger a toast here
       console.log("Level Up!");
    }
  };

  return (
    <GamificationContext.Provider value={{ xp, level, streak, lastLoginDate, addXP }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}
