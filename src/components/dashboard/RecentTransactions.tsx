import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, ShoppingBag, Home, Car } from "lucide-react";

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

const RecentTransactions = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.amount > 0 ? 'bg-secondary-100 text-secondary-700' : 'bg-red-100 text-red-700'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div>
                <p className={`font-semibold ${
                  transaction.amount > 0 ? 'text-secondary-700' : 'text-red-700'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentTransactions;