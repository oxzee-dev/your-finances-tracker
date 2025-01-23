import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Housing', value: 1500 },
  { name: 'Food', value: 800 },
  { name: 'Transport', value: 600 },
  { name: 'Utilities', value: 400 },
  { name: 'Entertainment', value: 300 },
];

const COLORS = ['#1a237e', '#2e7d32', '#c62828', '#f57c00', '#6a1b9a'];

const CategoryBreakdown = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CategoryBreakdown;