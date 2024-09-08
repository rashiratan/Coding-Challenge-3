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

//Task 2:
function determinePerformanceRating(AverageSales) {
    let PerformanceRating;
    if (AverageSales >= 10000) {
       PerformanceRating = "Excellent";
    } //using the highest number for the first condition
    else if (AverageSales >= 7000 && AverageSales < 10000) {
        PerformanceRating = "Good";
    } //second highest for condition no. 2
    else if (AverageSales >= 4000 && AverageSales < 7000) {
        PerformanceRating = "Satisfactory";
    } //third highest for condition no. 3
    else {
        PerformanceRating = "Needs Improvement";
    } //for all other values
    return PerformanceRating;
}