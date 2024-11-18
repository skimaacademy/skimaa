'use client'

import React from 'react';
import { useTranslation } from 'react-i18next';

type Milestone = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const milestones: Milestone[] = [
  {
    title: "Financial Aid",
    description: "Apply for financial aid through the university. Track and manage all aid funds and scholarships.",
    icon: <span>🌞</span>,
    color: "bg-yellow-200",
  },
  {
    title: "Getting Banked",
    description: "Choose a banking service to help with financial management. Open checking and savings accounts.",
    icon: <span>🏦</span>,
    color: "bg-blue-200",
  },
  {
    title: "Direct Deposit",
    description: "Set up direct deposit for your income, such as work-study earnings, to ensure secure access to funds.",
    icon: <span>💸</span>,
    color: "bg-pink-200",
  },
  {
    title: "Budgeting & Expenses",
    description: "Learn to manage daily expenses, track spending, and establish a basic budget to stay on track.",
    icon: <span>📊</span>,
    color: "bg-yellow-200",
  },
  {
    title: "Finlit Workshops",
    description: "Attend financial literacy workshops to learn about financial planning, debt management, and investing.",
    icon: <span>📈</span>,
    color: "bg-purple-200",
  },
  {
    title: "Internships & Jobs",
    description: "Explore and secure internships or part-time jobs for experience and additional income.",
    icon: <span>🔍</span>,
    color: "bg-blue-200",
  },
  {
    title: "Emergency Fund",
    description: "Set aside funds for unexpected expenses, such as medical or other urgent needs.",
    icon: <span>🚑</span>,
    color: "bg-red-200",
  },
  {
    title: "Study Abroad",
    description: "Learn about funding options for study abroad programs and plan financial resources accordingly.",
    icon: <span>🌍</span>,
    color: "bg-green-200",
  },
];

export default function RoadmapSection() {
  const { t } = useTranslation("common");
  
  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center">
        Road <span className="text-primary">Map</span>
      </h1>
      <p className="text-center text-secondary-foreground/60 mb-8">{t('home.Roadmap Description')}</p>

      <div className="relative">
        <div className="absolute w-1 bg-gray-300 h-[calc(100%-7%)] left-[17px]"></div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start">
              <div className={`w-10 h-10 aspect-square rounded-full flex items-center justify-center ${milestone.color} text-xl`}>
                {milestone.icon}
              </div>
              <div className="ml-8">
                <h2 className="text-lg font-semibold">{milestone.title}</h2>
                <p className="text-sm text-foreground/80">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
