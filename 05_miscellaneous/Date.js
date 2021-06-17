// JavaScript Date objects represent a single moment in time. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// Date()
// When called as a function, returns a string representation of the current date and time, exactly as new Date().toString() does.
//  Ex: >> Date() :: 'Fri Jun 04 2021 16:43:08 GMT+0530 (India Standard Time)'


// new Date()
// When called as a constructor, returns a new Date object.
// Ex: >> new Date() :: 2021-06-04T11:14:07.499Z
// Ex: >> new Date('2021/06/04') :: Fri Jun 04 2021 00:00:00 GMT+0530 (India Standard Time)
// Ex: >> new Date('Fri Jun 04 2021 00:00:00 GMT+0530 (India Standard Time)') :: Fri Jun 04 2021 00:00:00 GMT+0530 (India Standard Time)
// Ex: >> new Date('June 4, 2021 21:00:00') :: Fri Jun 04 2021 21:00:00 GMT+0530 (India Standard Time)


// Date Static Methods
//================
// Date.now()
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
// Ex: >> Date.now() :: 1622806012896

// Date.parse()
// Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
// Ex: >> Date.parse('Fri Jun 04 2021 00:00:00 GMT+0530 (India Standard Time)') :: 1622745000000
// Ex: >> Date.parse('2021/06/04') :: 1622745000000


// Date Instance Methods
// =====================
// let d = new Date();

// getDate() 
// Returns the day of the month (1–31) for the specified date according to local time.
// Ex: >> d.getDate() :: 4

// getDay()
// Returns the day of the week (0–6) for the specified date according to local time.
// Ex: >> d.getDay() :: 5               // Sunday :: 0,  Monday :: 1 ,...., Saturday :: 6

// getMonth()
// Returns the month (0–11) in the specified date according to local time.
// Ex: >> d.getMonth() :: 5             // Jan :: 0 , Feb :: 1, ...., Dec :: 12

// getFullYear()
// Returns the year (4 digits for 4-digit years) of the specified date according to local time.
// d.getFullYear() :: 2021


// Similarly we can also use set methods
// setDate()
// Sets the day of the month for a specified date according to local time.
// d.setDate(6) 1622994433458



// Reference :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date