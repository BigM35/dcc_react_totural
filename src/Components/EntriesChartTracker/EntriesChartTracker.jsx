import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";


const EntriesChartTracker = (props) => {

    const [charData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = props.parentEntries.map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData);
    },[props.parentEntries]);

    return (
        <Chart
            chartType="LineChart"
            data={[["Date", "Weight"], ...charData]}
            width="100%"
            height="400px"
            legendToggle
        />
    );
}

export default EntriesChartTracker;