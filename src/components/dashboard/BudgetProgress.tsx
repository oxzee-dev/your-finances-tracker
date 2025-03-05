
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface BudgetProgressProps {
  darkMode?: boolean;
}

const BudgetProgress = ({ darkMode = false }: BudgetProgressProps) => {
  const [budgets, setBudgets] = useState([
    {
      category: "Housing",
      spent: 1200,
      total: 1500,
      color: "bg-primary-600 dark:bg-primary-500",
      emoji: "🏠"
    },
    {
      category: "Food",
      spent: 750,
      total: 800,
      color: "bg-secondary-600 dark:bg-secondary-500",
      emoji: "🍔"
    },
    {
      category: "Transport",
      spent: 400,
      total: 600,
      color: "bg-red-600 dark:bg-red-500",
      emoji: "🚗"
    }
  ]);

  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleBudgetClick = (index: number) => {
    setSelectedBudget(selectedBudget === index ? null : index);
    setEditMode(false);
  };

  const toggleEditMode = () => {
    if (selectedBudget !== null) {
      setEditMode(!editMode);
    }
  };

  const handleBudgetChange = (value: number[]) => {
    if (selectedBudget !== null) {
      const newBudgets = [...budgets];
      newBudgets[selectedBudget].total = value[0];
      setBudgets(newBudgets);
    }
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Budget Progress</h3>
        <div className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
          {new Date().toLocaleDateString('en-US', { month: 'long' })}
        </div>
      </div>
      
      <div className="space-y-6">
        {budgets.map((budget, index) => {
          const percentage = (budget.spent / budget.total) * 100;
          const isSelected = selectedBudget === index;
          const isOverBudget = budget.spent > budget.total;
          
          return (
            <div 
              key={budget.category} 
              className={`p-4 rounded-lg transition-all duration-200 ${
                isSelected 
                  ? darkMode ? 'bg-gray-700' : 'bg-gray-100' 
                  : ''
              } cursor-pointer`}
              onClick={() => handleBudgetClick(index)}
            >
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{budget.emoji}</span>
                  <span className="font-medium">{budget.category}</span>
                </div>
                <span className={`text-sm ${
                  isOverBudget 
                    ? 'text-red-600 dark:text-red-400' 
                    : percentage > 80 
                      ? 'text-amber-600 dark:text-amber-400' 
                      : 'text-gray-600 dark:text-gray-400'
                }`}>
                  ${budget.spent} / ${budget.total}
                </span>
              </div>
              
              <Progress
                value={Math.min(percentage, 100)}
                className={`h-2 ${budget.color} ${
                  isOverBudget ? 'bg-red-200 dark:bg-red-950' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
              
              {isSelected && (
                <div className="mt-3 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {percentage.toFixed(1)}% used
                    </span>
                    <button 
                      className={`text-xs ${
                        darkMode ? 'text-primary-300 hover:text-primary-200' : 'text-primary-600 hover:text-primary-800'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleEditMode();
                      }}
                    >
                      {editMode ? 'Done' : 'Adjust Budget'}
                    </button>
                  </div>
                  
                  {editMode && (
                    <div className="mt-4 px-2">
                      <Slider 
                        defaultValue={[budget.total]}
                        max={budget.total * 2}
                        step={50}
                        onValueChange={handleBudgetChange}
                      />
                      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>${Math.floor(budget.total / 2)}</span>
                        <span>${budget.total}</span>
                        <span>${budget.total * 2}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Total Budget</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              $2,900
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Remaining</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              $550
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BudgetProgress;
