let firstSunday = (month) => {
    // Create a Date Object, having current date
    let date = new Date();

    // Clear the Hours
    date.setHours(0, 0, 0, 0);
    if (month) {
        if (month > 11) {
            date.setYear(date.getFullYear() + 1)
        }
        date.setMonth(month % 12)
    }

    // Move the date to first of the month
    date.setDate(1);

    // Get the day of the first of the month
    let day = date.getDay();

    // calculate the distance from day of the first of the month to sunday
    let toFirstSunday = day === 0 ? 0 : 7 - day;

    // Calculating first Sunday 
    date.setDate(date.getDate() + toFirstSunday);

    return date.toString();
};

let upcomingFirstSunday = () => {
    // First Sunday of current month
    let date = new Date(firstSunday());
    // Today's Date
    let today = new Date();

    // Check if current month first sunday is over or not
    // if current month sunday is over then calculate next months first sunday
    let upcomingFirstSunday = date < today ? firstSunday(today.getMonth() + 1) : firstSunday()

    return upcomingFirstSunday
}

console.log(upcomingFirstSunday());
