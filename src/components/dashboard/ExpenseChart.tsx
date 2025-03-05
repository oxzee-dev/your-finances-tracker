
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ExpenseChartProps {
  darkMode?: boolean;
}

const data = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
];

const ExpenseChart = ({ darkMode = false }: ExpenseChartProps) => {
  const [timeframe, setTimeframe] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  return (
    <Card className={`p-6 transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Income vs Expenses</h3>
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-md p-1">
          <Button 
            variant={timeframe === 'monthly' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setTimeframe('monthly')}
            className="text-xs px-3 py-1 h-auto"
          >
            Monthly
          </Button>
          <Button 
            variant={timeframe === 'quarterly' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setTimeframe('quarterly')}
            className="text-xs px-3 py-1 h-auto"
          >
            Quarterly
          </Button>
          <Button 
            variant={timeframe === 'yearly' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setTimeframe('yearly')}
            className="text-xs px-3 py-1 h-auto"
          >
            Yearly
          </Button>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2e7d32" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2e7d32" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d32f2f" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#d32f2f" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#eee"} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: darkMode ? '#ccc' : '#333' }} 
              axisLine={{ stroke: darkMode ? '#555' : '#eee' }}
            />
            <YAxis 
              tick={{ fill: darkMode ? '#ccc' : '#333' }}
              axisLine={{ stroke: darkMode ? '#555' : '#eee' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: darkMode ? '#2d3748' : '#fff',
                borderColor: darkMode ? '#4a5568' : '#e2e8f0',
                color: darkMode ? '#fff' : '#000' 
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#2e7d32" 
              activeDot={{ r: 6 }} 
              strokeWidth={2}
              dot={{ fill: '#2e7d32', strokeWidth: 2 }}
              fillOpacity={1}
              fill="url(#incomeGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#d32f2f" 
              activeDot={{ r: 6 }} 
              strokeWidth={2}
              dot={{ fill: '#d32f2f', strokeWidth: 2 }}
              fillOpacity={1}
              fill="url(#expenseGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-secondary-600 mr-1"></span>
          <span>Income Trend: +12.8%</span>
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-red-600 mr-1"></span>
          <span>Expense Trend: +5.3%</span>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseChart;
