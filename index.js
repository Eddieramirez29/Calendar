// Function to create an object for the buttons
const createDayButtonsObject = () =>
{
    const dayButtons = {};
    for (let i = 1; i <= 35; i++)
    {
        dayButtons[`day${i}`] = document.getElementById(`day-${i}`);
    }
    return dayButtons;
};

const drawNumbersOnCalendar = () =>
{
    const dayButtons = createDayButtonsObject();
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    // Get the first day of the month (1: Sunday, 2: Monday, ..., 7: Saturday)
    let startDay = firstDayOfMonth.getDay() + 1;
    //Get the number of the last day of the month
    let endDay = lastDayOfMonth.getDate();
    let currentDay = currentDate.getDate();
    currentDay = currentDay + 3;
    

    let dayCounter = 1;

    for (let number = 1; number <= 35; number++)
    {
        if (number >= startDay && dayCounter <= endDay)
        {
            dayButtons[`day${number}`].textContent = String(dayCounter);
            dayButtons[`day${number}`].style.pointerEvents = 'auto';
            dayButtons[`day${currentDay}`].style.backgroundColor = "#ff8599";
            dayCounter++;
        }
        else
        {
            dayButtons[`day${number}`].textContent = "";
            dayButtons[`day${number}`].style.pointerEvents = 'none';
        }
    }

}

// Function to get the current date and display it in the format "Month Year"
const getCurrentDate = () =>
    {
        // Get the HTML element where the date will be displayed
        const date = document.getElementById("date");
        
        // Create a new Date object representing the current date
        const currentDate = new Date();

        //Get the current day of week(1(Monday)--> 7(Sunday))
        const day = currentDate.getDay();
        const dayName = convertDayNumberToNameDay(day);
        console.log(day)
    
        // Get the current month (Note: Months are zero-indexed, so add 1)
        const month = currentDate.getMonth() + 1;
    
        // Get the current year
        const year = currentDate.getFullYear();
    
        // Convert the month number to its corresponding name
        const monthName = convertMonthNumberToNameMonth(month);
    
        // Display the month and year in the designated HTML element
        date.textContent = String(monthName + " " + year);
    }
    
// Function to convert a day number to its corresponding day name
const convertDayNumberToNameDay = (day) =>
    {
        // Return the name of the day based on the number provided
        if (day === 1)
        {
            return "Monday";
        }
        else if (day === 2)
        {
            return "Tuesday";
        }
        else if (day === 3)
        {
            return "Wednesday";
        }
        else if (day === 4)
        {
            return "Thursday";
        }
        else if (day === 5)
        {
            return "Friday";
        }
        else if (day === 6)
        {
            return "Saturday";
        }
        else if (day === 7)
        {
            return "Sunday";
        }
        else
        {
            return "Invalid day number";
        }
    };
    


    // Function to convert a month number to its corresponding month name
    const convertMonthNumberToNameMonth = (month) =>
    {
        // Return the name of the month based on the number provided
        if (month === 1)
        {
            return "January";
        }
        else if (month === 2)
        {
            return "February";
        }
        else if (month === 3)
        {
            return "March";
        }
        else if (month === 4)
        {
            return "April";
        }
        else if (month === 5)
        {
            return "May";
        }
        else if (month === 6)
        {
            return "June";
        }
        else if (month === 7)
        {
            return "July";
        }
        else if (month === 8)
        {
            return "August";
        }
        else if (month === 9)
        {
            return "September";
        }
        else if (month === 10)
        {
            return "October";
        }
        else if (month === 11)
        {
            return "November";
        }
        else if (month === 12)
        {
            return "December";
        }
        else
        {
            // Return an error message if an invalid month is passed
            return "Invalid month";
        }
    }
    
    // Call the function to display the current date
    getCurrentDate();
    drawNumbersOnCalendar();
    