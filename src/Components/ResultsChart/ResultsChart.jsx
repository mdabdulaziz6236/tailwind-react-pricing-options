import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const studentsMarks = [
  { id: 1, name: "Ali", Arabic: 85, Physics: 78, Chemistry: 90, Math: 88 },
  { id: 2, name: "Sara", Arabic: 92, Physics: 81, Chemistry: 85, Math: 95 },
  { id: 3, name: "Omar", Arabic: 76, Physics: 74, Chemistry: 80, Math: 70 },
  { id: 4, name: "Laila", Arabic: 88, Physics: 90, Chemistry: 92, Math: 94 },
  { id: 5, name: "Hassan", Arabic: 65, Physics: 70, Chemistry: 68, Math: 72 },
  { id: 6, name: "Mona", Arabic: 80, Physics: 85, Chemistry: 78, Math: 82 },
  { id: 7, name: "Youssef", Arabic: 90, Physics: 88, Chemistry: 86, Math: 91 },
  { id: 8, name: "Fatima", Arabic: 70, Physics: 75, Chemistry: 72, Math: 68 },
  { id: 9, name: "Khalid", Arabic: 82, Physics: 80, Chemistry: 85, Math: 87 },
  { id: 10, name: "Noura", Arabic: 95, Physics: 92, Chemistry: 90, Math: 96 },
];

const ResultsChart = () => {
    return (
        <div className='bg-amber-500'>
            <LineChart  width={800} height={500} data={studentsMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>

            <Line dataKey="Arabic" stroke="purple"></Line>
            <Line dataKey={'Physics'}></Line>
            <Line dataKey="Math"></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;