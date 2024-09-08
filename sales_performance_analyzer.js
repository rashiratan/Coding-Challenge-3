//Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    let TotalSales = sales.reduce((total, sale) => total + sale, 0);
    //calculate the total sales of the sales array provided in function
        let AverageSales;
    if (sales.length > 0) {AverageSales = TotalSales / sales.length;}
        else {AverageSales = 0;}
        return AverageSales;
    //using if-else to ensure avoid the division by zero in case input is empty.
}
