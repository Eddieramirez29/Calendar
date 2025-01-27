// Function to get the current date and display it in the format "Month Year"
const getCurrentDate = () =>
    {
        // Get the HTML element where the date will be displayed
        const date = document.getElementById("date");
        
        // Create a new Date object representing the current date
        const currentDate = new Date();
    
        // Get the current month (Note: Months are zero-indexed, so add 1)
        const month = currentDate.getMonth() + 1;
    
        // Get the current year
        const year = currentDate.getFullYear();
    
        // Convert the month number to its corresponding name
        const monthName = convertMonthNumberToNameMonth(month);
    
        // Display the month and year in the designated HTML element
        date.textContent = String(monthName + " " + year);
    }
    
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
    