/*****************************************/
/********** Null & 0 comparison **********
/*****************************************/

null > 0; // false
null < 0; // false
null == 0; // false
null >= 0; // true
null <= 0; // true

/*****************************************/
/************ Null & addition ************/
/*****************************************/

null + 0; // 0
null + 1; // 1
null + "1"; // "null1"
null + true; // 1
null + false; // 0

/*****************************************/
/************* Falsey values *************/
/*****************************************/

!!0; // false
!!null; // false
!!undefined; // false
!!""; // false
!!NaN; // false
!![]; // true
!!"0"; // true

/*****************************************/
/****** Falsey values vs Comparison ******/
/*****************************************/

0 == false; // true
[] == 0; // true
"" == false; // true
[] == false; // true
[] == ""; // true
{ } == false; // false
{ } == []; // false
[] == []; // false
[] == ![]; // true
null == false; // false
undefined == false; // false

/*****************************************/
/******* Falsey values vs Addition *******/
/*****************************************/

true + true; // 2
true + false; // 1
false + false; // 0
true + 'true'; // "truetrue"
0 + false; // 0
"" + false; // "false"
[] + false; // "false"
{ } + false; // "[object Object]false"
{ } +[]; // "[object Object]"
[] + {}; // "[object Object]"
[] + []; // ""
{ } + {}; // "[object Object][object Object]"
null + null; // 0
null + 1; // 1
null + []; // 'null'
null + {}; // 'null[object Object]'
null + ''; // 'null'
(!+[] + [] + ![]).length; // 9


/*****************************************/
/******* Preceding Unary Opearator *******/
/*****************************************/

+0; // 0
-0; // -0
+true; // 1
+false; // 0
+null; // 0
+undefined; // NaN
+[]; // 0
+{}; // NaN
+"1"; // 1
+"0x10"; // 16

'5' + - '2'; // "5-2"
'5' - - '2'; // 7
'5' - + '2'; // 3
'5' + + '2'; // "52"
'5' + - '0'; // "50"
'5' + - + - - + - - + + - + - + - + - - -'2'; // "5-2"

/*****************************************/
/******* Addition vs Concatenation *******/
/*****************************************/

1 + 1; // 2
"1" + "1"; // "11"

1 + "1"; // "11"
1 + 1 + "1"; // "21"

"1" + 1; // "11"
"1" + 1 + 1; // "111"

1 + "0"; // "10"
"0" + 1; // "01"

/**********************************************/
/** Addition vs Concatenation vs Subtraction **/
/**********************************************/

2 + 2 - 2; // 2
"2" + 2 - 3; // 19

/******************************************/
/********* Floating point numbers *********/
/******************************************/

0.1 + 0.1 === 0.2; // true
0.1 + 0.2 === 0.3; // false

/******************************************/
/***************** Others *****************/
/******************************************/

// Banana
('b' + 'a' + +'a' + 'a').toLowerCase();



// TODO: Also Check this
// https://github.com/denysdovhan/wtfjs