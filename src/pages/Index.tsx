import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ExpenseChart from "@/components/dashboard/ExpenseChart";
import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import BudgetProgress from "@/components/dashboard/BudgetProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-primary-900">Financial Dashboard</h1>
        
        <DashboardHeader />
        
        <div className="grid gap-8 md:grid-cols-2">
          <ExpenseChart />
          <CategoryBreakdown />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <RecentTransactions />
          <BudgetProgress />
        </div>
      </div>
    </div>
  );
};

export default Index;