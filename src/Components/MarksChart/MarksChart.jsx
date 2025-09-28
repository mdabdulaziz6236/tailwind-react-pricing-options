import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data
// data processing for the chart
const marksChartData = marksData.map(studentData => {
    const student = {
        id : studentData.id,
        name: studentData.name,
        arabic:studentData.marks.Arabic ,
        physics:studentData.marks.Physics,
        chemistry:studentData.marks.Chemistry,
        math:studentData.marks.Math
    }
    const avg = (student.arabic + student.physics + student.chemistry + student.math)/4
    student.avg = avg
    return student
})

    
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={800} height={500} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'avg'} fill='green' ></Bar>
                <Bar dataKey={'chemistry'} fill='blue' ></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;