"use client";

import { useState } from "react";

export default function HomePage() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const calculateBudget = () => {
    const incomeNum = parseFloat(income);
    const expensesNum = parseFloat(expenses);

    if (isNaN(incomeNum) || isNaN(expensesNum)) {
      return { yearlyBudget: 0, monthlyBudget: 0, weeklyBudget: 0 };
    }

    const yearlyBudget = incomeNum - expensesNum;
    const monthlyBudget = yearlyBudget / 12;
    const weeklyBudget = yearlyBudget / 52;

    return { yearlyBudget, monthlyBudget, weeklyBudget };
  };

  const { yearlyBudget, monthlyBudget, weeklyBudget } = calculateBudget();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 p-6">
      <div className="w-full max-w-lg mx-auto">
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              💰 Financial Calculator
            </h1>
            <p className="text-gray-600">Calculate your budget breakdown</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="income" className="block text-sm font-semibold text-gray-700 mb-2">
                💵 Yearly Income/Salary
              </label>
              <input
                type="number"
                id="income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-green-200 bg-green-50 text-gray-900 focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg font-medium placeholder-green-400"
                placeholder="e.g., 60000"
              />
            </div>
            
            <div>
              <label htmlFor="expenses" className="block text-sm font-semibold text-gray-700 mb-2">
                💸 Yearly Expenses
              </label>
              <input
                type="number"
                id="expenses"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-red-200 bg-red-50 text-gray-900 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all duration-200 text-lg font-medium placeholder-red-400"
                placeholder="e.g., 20000"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              📊 Budget Summary
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <p className="text-sm font-medium opacity-90 mb-1">📅 Yearly Budget</p>
                <p className="text-3xl font-bold">
                  ${yearlyBudget.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <p className="text-sm font-medium opacity-90 mb-1">🗓️ Monthly Budget</p>
                <p className="text-3xl font-bold">
                  ${monthlyBudget.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <p className="text-sm font-medium opacity-90 mb-1">📆 Weekly Budget</p>
                <p className="text-3xl font-bold">
                  ${weeklyBudget.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              ✨ Made by Tony • Powered by Next.js
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}