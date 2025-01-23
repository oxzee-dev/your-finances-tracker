import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const budgets = [
  {
    category: "Housing",
    spent: 1200,
    total: 1500,
    color: "bg-primary-600"
  },
  {
    category: "Food",
    spent: 750,
    total: 800,
    color: "bg-secondary-600"
  },
  {
    category: "Transport",
    spent: 400,
    total: 600,
    color: "bg-red-600"
  }
];

const BudgetProgress = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Budget Progress</h3>
      <div className="space-y-6">
        {budgets.map((budget) => (
          <div key={budget.category}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{budget.category}</span>
              <span className="text-gray-600">
                ${budget.spent} / ${budget.total}
              </span>
            </div>
            <Progress
              value={(budget.spent / budget.total) * 100}
              className={`h-2 ${budget.color}`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BudgetProgress;