const BillingForState = [
    { state: "SP", billing: 67836.43 },
    { state: "RJ", billing: 36678.66 },
    { state: "MG", billing: 29229.88 },
    { state: "ES", billing: 27165.48 },
    { state: "Outros", billing: 19849.53 }
];
function calculatePercentages(BillingForState) {
    const totalBilling = BillingForState.reduce((total, state) => total + state.billing, 0);
    const percentage = BillingForState.map(state => {
        const percentual = (state.billing / totalBilling) * 100;
        return {
            state: state.state,
            percentual: percentual.toFixed(2) + '%'
        };
    });
    return percentage;
}
// Exemplo de uso
const percentage = calculatePercentages(BillingForState);
percentage.forEach(state => {
    console.log(`${state.state}: ${state.percentual}`);
});
