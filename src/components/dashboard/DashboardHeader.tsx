import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, DollarSign } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-in">
      <Card className="p-6 bg-gradient-to-r from-primary-100 to-primary-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary-700">Total Balance</p>
            <h3 className="text-2xl font-bold text-primary-900">$24,563.00</h3>
          </div>
          <DollarSign className="h-8 w-8 text-primary-600" />
        </div>
      </Card>
      
      <Card className="p-6 bg-gradient-to-r from-secondary-100 to-secondary-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-secondary-700">Monthly Income</p>
            <h3 className="text-2xl font-bold text-secondary-900">$8,350.00</h3>
          </div>
          <ArrowUpIcon className="h-8 w-8 text-secondary-600" />
        </div>
      </Card>
      
      <Card className="p-6 bg-gradient-to-r from-red-100 to-red-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-red-700">Monthly Expenses</p>
            <h3 className="text-2xl font-bold text-red-900">$4,120.00</h3>
          </div>
          <ArrowDownIcon className="h-8 w-8 text-red-600" />
        </div>
      </Card>
    </div>
  );
};

export default DashboardHeader;