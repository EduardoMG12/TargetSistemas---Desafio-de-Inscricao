interface DailyRevenue {
    day: number;
    value: number;
}

const monthlyRevenue: DailyRevenue[] = [
    { day: 1, value: 0 },
    { day: 2, value: 200 },
    { day: 3, value: 300 },
    { day: 4, value: 0 },
    { day: 5, value: 500 },
    { day: 6, value: 600 },
    { day: 7, value: 0 },
    { day: 8, value: 100 },
    { day: 9, value: 300 },
    { day: 10, value: 0 }
];

function calculateRevenue(monthlyRevenue: DailyRevenue[]) {
    const daysWithRevenue = monthlyRevenue.filter(day => day.value > 0);

    if (daysWithRevenue.length === 0) {
        return "There is no valid revenue to calculate.";
    }

    const lowestValue = Math.min(...daysWithRevenue.map(day => day.value));
    const highestValue = Math.max(...daysWithRevenue.map(day => day.value));

    const totalRevenue = daysWithRevenue.reduce((sum, day) => sum + day.value, 0);
    const monthlyAverage = totalRevenue / daysWithRevenue.length;

    const daysAboveAverage = daysWithRevenue.filter(day => day.value > monthlyAverage).length;

    return {
        lowestValue,
        highestValue,
        daysAboveAverage,
    };
}

// Exemplo de uso
const revenueResult = calculateRevenue(monthlyRevenue);

if (typeof revenueResult === "string") {
    console.log(revenueResult);
} else {
    console.log(`Lowest revenue: ${revenueResult.lowestValue}`);
    console.log(`Highest revenue: ${revenueResult.highestValue}`);
    console.log(`Days with revenue above average: ${revenueResult.daysAboveAverage}`);
}
