
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Sector } from 'recharts';

interface CategoryBreakdownProps {
  darkMode?: boolean;
}

const data = [
  { name: 'Housing', value: 1500 },
  { name: 'Food', value: 800 },
  { name: 'Transport', value: 600 },
  { name: 'Utilities', value: 400 },
  { name: 'Entertainment', value: 300 },
];

const COLORS = ['#1a237e', '#2e7d32', '#c62828', '#f57c00', '#6a1b9a'];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-xs">
        {`${payload.name} ($${value})`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xs">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const CategoryBreakdown = ({ darkMode = false }: CategoryBreakdownProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Expense Categories</h3>
        <div className="text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
          This Month
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke={darkMode ? "#333" : "#fff"} 
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: darkMode ? '#2d3748' : '#fff',
                borderColor: darkMode ? '#4a5568' : '#e2e8f0',
                color: darkMode ? '#fff' : '#000' 
              }}
              formatter={(value) => [`$${value}`, 'Amount']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center text-sm"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <span 
              className="w-3 h-3 rounded-sm mr-2" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {item.name}: <span className="font-medium">${item.value}</span>
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CategoryBreakdown;
