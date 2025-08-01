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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-24 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Financial Calculator
        </h1>
        <div className="mb-4">
          <label
            htmlFor="income"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Yearly Income/Salary
          </label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 60000"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="expenses"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Yearly Expenses
          </label>
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 20000"
          />
        </div>
        <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-700">
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-800 dark:text-white">
            Budget Summary
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">Yearly</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${yearlyBudget.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${monthlyBudget.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">Weekly</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${weeklyBudget.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}