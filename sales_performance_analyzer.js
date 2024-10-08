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

//Task 3:
function findTopAndBottomPerformers(Performers) {
    Performers.forEach(Performer => {Performer.TotalSales = Performer.sales.reduce((total, sale) => total + sale, 0);
    }); //adding a total sales column to display that for top and bottom performer verification by user
    const SortedPerformers = Performers.sort((a, b) => a.TotalSales - b.TotalSales);
     //sort original array in ascending
    const TopPerformer = SortedPerformers[SortedPerformers.length - 1];
    //top performer is last entry
    const BottomPerformer = SortedPerformers[0];
    //bottom performer is first entry
return {TopPerformer, BottomPerformer};
}

//Task 4:
function generatePerformanceReport(Performers) {
    Performers.forEach(Performer => {
    Performer.AverageSales = calculateAverageSales(Performer.sales);
    Performer.PerformanceRating = determinePerformanceRating(Performer.AverageSales)}
)
//using forEach method to display the average sales and performance rating
return {
Performers: Performers,
TopAndBottomPerformers: findTopAndBottomPerformers(Performers)}
//calling findTopAndBottomPerformers function to return object requried
}

const salesData = [

    { name: 'Alice', sales: [12000, 15000, 13000] },
    
    { name: 'Bob', sales: [7000, 6000, 7500] },
    
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    
    { name: 'Diana', sales: [9000, 8500, 9200] },
    
    ];

    console.log(generatePerformanceReport(salesData));
//testing sales data provided in challenge