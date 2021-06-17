// Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), 
// and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

// The return value should be a string where each date is seperated by a space. 
// The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

// If no end year is given, only return friday the thirteenths during the start year.

function fridayTheThirteenths(start, end) {
  // Create a Date Object
  date = new Date();
  output = [];
  // if end year not given set end year = start year
  if (!end) {
    end = start;
  };

  // looping from start year to end year (inclusive)
  for (let i = start; i <= end; i++) {
    date.setFullYear(i);
    // looping all months from 0 - 11 (jan - dec)
    for (let j = 0; j < 12; j++) {
      date.setMonth(j);
      date.setDate(13);
      // Checking if day is Friday (sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6)
      if (date.getDay() === 5) {
        output.push(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
      };
    };
  };
  return output.join(' ');
};


console.log(fridayTheThirteenths(1999, 2000))  // "8/13/1999 10/13/2000"
console.log(fridayTheThirteenths(2000))        // "10/13/2000"