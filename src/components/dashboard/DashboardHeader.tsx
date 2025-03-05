
import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";

interface DashboardHeaderProps {
  darkMode?: boolean;
}

const DashboardHeader = ({ darkMode = false }: DashboardHeaderProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Total Balance",
      value: "$24,563.00",
      percentChange: "+5.2%",
      icon: DollarSign,
      gradientFrom: "from-primary-100",
      gradientTo: "to-primary-200",
      darkGradientFrom: "dark:from-primary-900",
      darkGradientTo: "dark:to-primary-800",
      textColor: "text-primary-700",
      darkTextColor: "dark:text-primary-200",
      iconColor: "text-primary-600",
      darkIconColor: "dark:text-primary-300",
    },
    {
      title: "Monthly Income",
      value: "$8,350.00",
      percentChange: "+3.1%",
      icon: ArrowUpIcon,
      gradientFrom: "from-secondary-100",
      gradientTo: "to-secondary-200",
      darkGradientFrom: "dark:from-secondary-900",
      darkGradientTo: "dark:to-secondary-800",
      textColor: "text-secondary-700",
      darkTextColor: "dark:text-secondary-200",
      iconColor: "text-secondary-600",
      darkIconColor: "dark:text-secondary-300",
    },
    {
      title: "Monthly Expenses",
      value: "$4,120.00",
      percentChange: "-2.3%",
      icon: ArrowDownIcon,
      gradientFrom: "from-red-100",
      gradientTo: "to-red-200",
      darkGradientFrom: "dark:from-red-900",
      darkGradientTo: "dark:to-red-800",
      textColor: "text-red-700",
      darkTextColor: "dark:text-red-300",
      iconColor: "text-red-600",
      darkIconColor: "dark:text-red-400",
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-in">
      {cards.map((card, index) => (
        <Card 
          key={index}
          className={`p-6 relative overflow-hidden transition-all duration-300 ${
            hoveredCard === index ? 'shadow-lg scale-[1.02]' : 'shadow'
          } bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} ${card.darkGradientFrom} ${card.darkGradientTo}`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className={`text-sm font-medium ${card.textColor} ${card.darkTextColor}`}>{card.title}</p>
              <h3 className={`text-2xl font-bold text-primary-900 dark:text-white mt-1`}>{card.value}</h3>
              <div className="flex items-center mt-2">
                <TrendingUp className={`h-3 w-3 mr-1 ${
                  card.percentChange.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`} />
                <span className={`text-xs font-medium ${
                  card.percentChange.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {card.percentChange} from last month
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm ${card.iconColor} ${card.darkIconColor}`}>
              <card.icon className="h-6 w-6" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/10 dark:bg-white/5"></div>
          <div className="absolute top-6 right-12 h-12 w-12 rounded-full bg-white/10 dark:bg-white/5"></div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardHeader;
