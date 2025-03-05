
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, ArrowDownIcon, ShoppingBag, Home, Car, Search } from "lucide-react";

interface RecentTransactionsProps {
  darkMode?: boolean;
}

const transactions = [
  {
    id: 1,
    name: "Grocery Shopping",
    amount: -120.50,
    date: "2024-02-20",
    icon: ShoppingBag,
    category: "Food"
  },
  {
    id: 2,
    name: "Salary Deposit",
    amount: 3500.00,
    date: "2024-02-19",
    icon: ArrowUpIcon,
    category: "Income"
  },
  {
    id: 3,
    name: "Rent Payment",
    amount: -1200.00,
    date: "2024-02-18",
    icon: Home,
    category: "Housing"
  },
  {
    id: 4,
    name: "Gas Station",
    amount: -45.00,
    date: "2024-02-17",
    icon: Car,
    category: "Transport"
  }
];

const RecentTransactions = ({ darkMode = false }: RecentTransactionsProps) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [hoveredTransaction, setHoveredTransaction] = useState<number | null>(null);

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    if (filter === 'income') return transaction.amount > 0;
    if (filter === 'expense') return transaction.amount < 0;
    return true;
  });

  return (
    <Card className={`p-6 transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-md p-1 self-end sm:self-auto">
          <Button 
            variant={filter === 'all' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('all')}
            className="text-xs px-3 py-1 h-auto"
          >
            All
          </Button>
          <Button 
            variant={filter === 'income' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('income')}
            className="text-xs px-3 py-1 h-auto"
          >
            Income
          </Button>
          <Button 
            variant={filter === 'expense' ? 'default' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('expense')}
            className="text-xs px-3 py-1 h-auto"
          >
            Expenses
          </Button>
        </div>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search transactions..." 
          className={`w-full pl-10 pr-4 py-2 text-sm rounded-lg border ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-primary-500`}
        />
      </div>
      
      <div className="space-y-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => {
            const Icon = transaction.icon;
            const isHovered = hoveredTransaction === transaction.id;
            
            return (
              <div 
                key={transaction.id} 
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  isHovered ? 'scale-[1.01]' : ''
                } ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-650' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onMouseEnter={() => setHoveredTransaction(transaction.id)}
                onMouseLeave={() => setHoveredTransaction(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.amount > 0 
                      ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300' 
                      : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount > 0 
                      ? 'text-secondary-700 dark:text-secondary-300' 
                      : 'text-red-700 dark:text-red-300'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {transaction.date}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8">
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
              No transactions found.
            </p>
          </div>
        )}
      </div>
      
      {filteredTransactions.length > 0 && (
        <div className="mt-4 text-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs ${darkMode ? 'text-primary-300 hover:text-primary-200' : 'text-primary-600 hover:text-primary-800'}`}
          >
            View All Transactions
          </Button>
        </div>
      )}
    </Card>
  );
};

export default RecentTransactions;
