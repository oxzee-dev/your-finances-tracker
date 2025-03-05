
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ExpenseChart from "@/components/dashboard/ExpenseChart";
import CategoryBreakdown from "@/components/dashboard/CategoryBreakdown";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import { PieChart, BarChart, ArrowUpRight } from "lucide-react";

const Index = () => {
  const [view, setView] = useState<"chart" | "list">("chart");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-primary-900"} transition-colors`}>
              Financial Dashboard
            </h1>
            <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Track, analyze and optimize your finances
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Dark Mode</span>
              <Switch 
                checked={darkMode} 
                onCheckedChange={setDarkMode}
              />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-1 flex">
              <Button
                variant={view === "chart" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("chart")}
                className="rounded-md"
              >
                <PieChart className="h-4 w-4 mr-1" />
                Charts
              </Button>
              <Button
                variant={view === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("list")}
                className="rounded-md"
              >
                <BarChart className="h-4 w-4 mr-1" />
                Lists
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 animate-fade-in">
          <DashboardHeader darkMode={darkMode} />
          
          <div className="grid gap-6 md:grid-cols-2">
            {(view === "chart" || view === "list") && (
              <>
                <ExpenseChart darkMode={darkMode} />
                <CategoryBreakdown darkMode={darkMode} />
              </>
            )}
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <RecentTransactions darkMode={darkMode} />
            <BudgetProgress darkMode={darkMode} />
          </div>
          
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              className={`group ${darkMode ? "text-white hover:text-white border-gray-700" : "text-gray-700"}`}
            >
              View Full Financial Report
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
