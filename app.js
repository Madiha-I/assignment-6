// Chapter 21-25

// Task 1
// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// var fullName = fName + " " + lName;
// alert("Welcome " + fullName + "!");


// Task 2
// var favPhone = prompt("Enter your favourite mobile phone model");
// var strLength = favPhone.length;

// document.write("<br> My favourite phone is: " + favPhone);
// document.write("<br> Length of string: " + strLength);


//Task 3
// var myString = "Pakistani";
// var loc = myString.indexOf('n');

// document.write("<br> String: " + myString);
// document.write("<br> Location of 'n': " + loc);


// Task 4
// var myString = "Hello World";
// var loc = myString.lastIndexOf("l");

// document.write("<br> String: " + myString);
// document.write("<br> Last index of 'l': " + loc);


// Task 5
// var myString = "Pakistani";
// var char = myString.charAt(3);

// document.write("<br> String: " + myString);
// document.write("<br> Character at index 3: " + char);


// Task 6
// var fName = prompt("Enter your first name") + " ";
// var lName = prompt("Enter your last name");
// var fullName = fName.concat(lName);
// alert("Welcome " + fullName + "!");


// Task 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.write("<br> City: " + city);
// document.write("<br> After replacement: " + newCity);


// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("<br> Original Message: " + message);
// document.write("<br> New Message: " + newMessage);


// Task 9
// var myString = "472";
// var toNum = parseInt(myString);

// document.write("<br> Value: " + myString);
// document.write("<br> Type: " + typeof myString);
// document.write("<br> Value: " + toNum);
// document.write("<br> Type: " + typeof toNum);


// Task 10
// var input = prompt("Enter a word");
// var newInput = input.toUpperCase();

// document.write("<br> User input: " + input);
// document.write("<br> Uppercase: " + newInput);


// Task 11
// var input = prompt("Enter a word");
// var first = input.slice(0, 1);
// var rest = input.slice(1);
// var newInput = first.toUpperCase() + rest;

// document.write("<br> User input: " + input);
// document.write("<br> Titlecase: " + newInput);


// Task 12
// var num = 35.36 ;
// var str = num.toString();
// var newString = str.replace(".", "");

// document.write(newString);


// Task 13
// var input = prompt("Enter your username");

// for (var i=0; i<input.length; i++)
// {
//     if( input.charCodeAt(i) === 33  || input.charCodeAt(i) === 44 || input.charCodeAt(i) === 46 || input.charCodeAt(i) === 64 )
//     {
//         alert("Please enter a valid username");
//     }
// }


// Task 14
// A = ["cake", "apple pie", "cookie", "chips", "patties"]; var temp = 0;
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// var caseInsensitive = input.toLowerCase();

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] === caseInsensitive)
//     {
//         var temp = 1;
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if(temp === 0)
// {
//     document.write("We are sorry. " + input + " is <b> not available</b> in our bakery")
// }


// Task 15
// var pass = prompt("Please enter your password");
// var countNum = 0, countAlpha = 0;

// if(pass.length < 6)
// {
//     alert("The password must be at least 6 characters long");
// }
// if( pass.charCodeAt(0)>= 48 && pass.charCodeAt(0)<=57 )
// {
//     alert("The password must not start with a number");
// }

// for(var i=1; i<=pass.length; i++)
// {
//     if(pass.charCodeAt(i)>= 48 && pass.charCodeAt(i)<=57 )
//     {
//         countNum++;
//     }
    
//     else if(pass.charCodeAt(i)>= 65 && pass.charCodeAt(i)<=90  ||  pass.charCodeAt(i)>= 97 && pass.charCodeAt(i)<=122 )
//     {
//         countAlpha++;
//     }
// }

// if(countNum === 0)
// {
//     alert("The password must contain numbers");
// }

// if(countAlpha === 0)
// {
//     alert("The password must contain alphabets");
// }


// Task 16
// var university = "University of Karachi";
// var uniArray = university.split("");

// for(var i=0; i<uniArray.length; i++)
// {
//     document.write("<br>" + uniArray[i]);
// }


// Task 17
// var myString = "Pakistan";
// var lastChar = myString.slice((myString.length-1));

// document.write("<br> User input: " + myString);
// document.write("<br> Last character of input: " + lastChar);


// Task 18
// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var count = 0;

// for(var i=0; i<text.length; i++)
// {
//     if(text[i] === "t" && text[i+1] === "h" && text[i+2] === "e")
//     {
//         count++;
//     }
// }
// alert("There are " + count + " occurrence(s) of the word \'the\' ");




// Chapter 26 - 30

// Task 1
// var num = prompt("Enter a real number");

// document.write("<br> number: " + num);
// document.write("<br> round off value: " + Math.round(num));
// document.write("<br> floor value: " + Math.floor(num));
// document.write("<br> ceil value: " + Math.ceil(num));


// Task 2
// var num = prompt("Enter a negative floating point number");

// document.write("<br> number: " + num);
// document.write("<br> round off value: " + Math.round(num));
// document.write("<br> floor value: " + Math.floor(num));
// document.write("<br> ceil value: " + Math.ceil(num));


// Task 3
// var num = prompt("Enter a negative number");
// document.write("<br> The absolute value of " + num + " is " + Math.abs(num));


// Task 4
// var ranNum = ((Math.random() * 6) + 1);
// var diceNum = Math.floor(ranNum);

// document.write("<br> random dice value: " + diceNum);


// Task 5
// var ranNum = ((Math.random() * 2) + 1);
// var coinNum = Math.floor(ranNum);
// var coinSide;

// if(coinNum === 1)
// {
//     coinSide = "Tails";   
// }
// else
// {
//     coinSide = "Heads"; 
// }
// document.write("<br>" + coinNum + "<br> random coin value: " + coinSide);


// Task 6
// var ranNum = ((Math.random() * 100) + 1);
// var finalNum = Math.floor(ranNum);

// document.write("<br> random number between 1 and 100: " + finalNum);


// Task 7
// var weightStr = prompt("Enter your weight in kilograms");
// var weight = parseFloat(weightStr);
// document.write("<br> The weight of user is " + weight + " kilograms");


// Task 8
// var ranNum = ((Math.random() * 10) + 1);
// var input = +prompt("Enter a number between 1 and 10");

// if(input === ranNum)
// {
//     alert("Congratulations! You are right");
// }
// else
// {
//     alert("Try Again!");
// }




// Chapter 31 - 34

// Task 1
// var rightNow = new Date();
// document.write(rightNow);


// Task 2
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var monthIndex = date.getMonth();

// document.write("<br> Current month: " + month[monthIndex]);


// Task 3
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var dayIndex = date.getDay();

// document.write("<br> Today is " + day[dayIndex]);


// // Task 4
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var dayIndex = date.getDay();
// var message;

// if(dayIndex === "Sat" || dayIndex === "Sun")
// {
//     message = "It's Fun day";
// }
// else
// {
//     message = "Not Yet!";
// }

// document.write("<br>" + message);


// Task 5
// var date = new Date();
// var rightNow = date.getDate();

// if(rightNow <= 15)
// {
//     document.write("<br> First fifteen days of the month");
// }
// else
// {
//     document.write("<br> Last days of the month");
// }


// Task 6
// var date = new Date();
// var nowMins = (date.getTime() / 1000);
// var nowMilli = date.getTime();

// document.write("<br> Current Date: " + date);
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + nowMilli);
// document.write("<br> Elapsed minutes since January 1, 1970: " + nowMins);


// Task 7
// var date = new Date();
// var rightNow = date.getHours();

// if(rightNow <= 12)
// {
//     document.write("<br> It's AM");
// }
// else
// {
//     document.write("<br> It's PM");
// }


// Task 8
// var laterDate = new Date("December 31, 2020 00:00:00");
// document.write("<br> Later date: " + laterDate);


// Task 9
// var thisDate = new Date();
// var firstRamadan = new Date("April 25, 2020");

// var msThisDate = thisDate.getTime();
// var msFirstRamadan = firstRamadan.getTime();

// var msDiff = msThisDate - msFirstRamadan;

// var timeLapsed = Math.floor( msDiff / (1000 * 60 * 60 * 24) ) ;
// document.write("<br>" + timeLapsed + " days have passed since 1st Ramadan, 2020");


// Task 10
// var refDate = new Date();
// var startDate = new Date("January 1, 2015");

// var msRefDate = refDate.getTime();
// var msStartDate = startDate.getTime();

// var msDiff = msRefDate - msStartDate;

// var timeLapsed = Math.floor( msDiff / 1000 ) ;
// document.write("<br> On reference date, " + refDate + ",");
// document.write("<br>" + timeLapsed + " seconds have passed since the beginning of 2015");


// Task 11
// var thisDate = new Date();
// var hrBefore = thisDate.getHours() - 1;

// document.write("<br> current date: " + thisDate);
// thisDate.setHours(hrBefore);
// document.write("<br> 1 hour ago, it was " + thisDate);


// Task 12
// var thisDate = new Date();
// var yrsBefore = thisDate.getFullYear() - 100;

// document.write("<br> current date: " + thisDate);
// thisDate.setFullYear(yrsBefore);
// document.write("<br> 100 years back, it was " + thisDate);

// Task 13
// var date = new Date();
// var thisYear = date.getFullYear();

// var dob = +prompt("Enter your birth year");
// document.write("<br> Your age is " + (thisYear - dob) );
// document.write("<br> Your birth year is " + dob);


// Task 14
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var thisMonth = month[date.getMonth()];
// var name = prompt("Enter your name");
// var noUnits = prompt("Enter Number of units");
// var unitCharge = 16; 
// var netPayable = noUnits * unitCharge;
// var lateCharge = 350; 
// var grossPayable = netPayable + lateCharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br> Customer Name: <b>" + name + "</b>");
// document.write("<br> Month: <b>" + thisMonth + "</b>");
// document.write("<br> Number of units: <b>" + noUnits + "</b>");
// document.write("<br> Charges per unit: <b>" + unitCharge + "</b>");

// document.write("<br><br> Net Amount Payable (within Due Date): <b>" + netPayable + "</b>");
// document.write("<br> Late Payment Surcharge: <b>" + lateCharge + "</b>");
// document.write("<br> Gross Amount Payable (after Due Date): <b>" + grossPayable + "</b>");




// Chapter 35 - 38

// Task 1
// function dateAndTime()
// {
//     var date = new Date();
//     document.write(date);
// }

// dateAndTime();


// Task 2
// function greeting()
// {
//     var fName = prompt("Enter your first name");
//     var lName = prompt("Enter your last name");
//     alert("Greetings, " + fName + " " + lName + "!");
// }

// greeting();


// Task 3
// function sum(a, b)
// {
//     return (a + b);
// }

// alert("Enter two numbers to add");
// var num1 = +prompt("First number");
// var num2 = +prompt("Second number");
// alert(num1 + " + " + num2 + " = " + (sum(num1, num2)) );


// Task 4
// function calculator(a, b, opr)
// {
//     if(opr === '+')
//     {
//        return (a + b); 
//     }
//     if(opr === '-')
//     {
//        return (a - b); 
//     }
//     if(opr === '*')
//     {
//        return (a * b); 
//     }
//     if(opr === '/')
//     {
//        return (a / b); 
//     }
// }

// var num1 = +prompt("First number");
// var sign = prompt("Operation");
// var num2 = +prompt("Second number");
// alert(num1 + " " + sign + " " + num2 + " = " + (calculator(num1, num2, sign)) );


// Task 5
// function square(a)
// {
//     return (a * a);
// }

// var num = +prompt("Enter a number to find its square");
// alert(" The square of " + num + " = " + (square(num)) );


// Task 6
// function factorial(a)
// {
//     var count = 1;
//     for(var i=1; i<=a; i++)
//     {
//         count = count * i;
//     }
//     return count;
// }

// var num = +prompt("Enter a number to find its factorial");
// alert(num + "! = " + (factorial(num)) );


// Task 7
// function counting()
// {
//     var start = +prompt("Enter a number to begin counting with");
//     var end = +prompt("Enter a number to end counting with");

//     document.write("<br><b>Counting</b><br>");
//     for(var i=start; i<=end; i++)
//     {
//         document.write(i + "<br>");
//     }
// }

// counting();


// Task 8
// function calculateHypotenuse(base, perp)
// {
//     function calculateSquare(a)
//     {
//         return (a * a);
//     }

//     return ( calculateSquare(base) + calculateSquare(perp) );
// }

// var base = +prompt("Enter the right-angle's base");
// var perp = +prompt("Enter the right-angle's perpendicular");
// alert(" The hypotenuse of a right-angle triangle with base " + base + " and perpendicular " + perp + " is " + (calculateHypotenuse(base, perp)) );


// Task 9
// function area(width, height)
// {
//     alert("The rectangle's area is " + (width * height));
// }

// var width = +prompt("Enter the rectangle's width");
// var height = +prompt("Enter the rectangle's height");
// area(width, height);

// area(2, 7);


// Task 10
// function checkPalindrome(str)
// {
//     var arr = (str.toLowerCase()).split(""); var text = "";
//     for(var i=(arr.length -1); i>=0; i--)
//     {
//         text = text + arr[i];
//     }

//     if(text === (str.toLowerCase()))
//     {
//         alert("\'" + str + "\'" + " is a palindrome");
//     }
//     else
//     {
//         alert("\'" + str + "\'" + " is not a palindrome");
//     }
// }

// var str = prompt("Enter a word to check if it is a palindrome");
// checkPalindrome(str);


// Task 11
// function topicCase(text)
// {  
//     var arr = text.split("");
//     var str = "";

//     arr[0] = arr[0].toUpperCase();
//     str = str + arr[0];

//     for(var i=1; i<arr.length; i++)
//     {
//         if(arr[i] === " ")
//         {
//             arr[i+1] = arr[i+1].toUpperCase();
//         }
//         str = str + arr[i];
//     }   
//     alert(str);
// }

// var text = prompt("Enter text to convert to topic case");
// topicCase(text);


// Task 12
// function bigWord(str)
// {
//     var arr = (str + " ").split(""); var text = "", maxText = "";
//     var count = 0, maxCount = 0;
//     for(var i=0; i<arr.length; i++)
//     {
//         if(arr[i] !== " ")
//         {
//             text = text + arr[i];
//             count++;
//         }
//         else
//         {
//             if(count > maxCount)
//             {
//                 maxText = text;
//                 maxCount = count;
//             }
//             text = ""; 
//             count = 0;
//         }
//     }

//     document.write("Text: " + str);
//     document.write("<br> Longest Word: " + maxText);
// }

// var str = prompt("Enter some text");
// bigWord(str);


// Task 13
// function findChar(str, chr)
// {
//     var count = 0;
//     for(var i=0; i<str.length; i++)
//     {
//         if(str[i] === chr)
//         {
//             count = count + 1;
//         }
//     }

//     alert("The letter " + chr + " occurs in " + str + " " + count + " times");
// }

// var str = prompt("Enter a string");
// var chr = prompt("Enter the character you wish to search");

// findChar(str, chr);


// Task 14
// var pie = 3.142;
// function calcCircumference(radius)
// {
//     alert("The circumference is " + (2*pie*radius) );
// }
// function calcArea(radius)
// {
//     alert("The area is " + (pie*radius*radius) );
// }

// var radius = +prompt("Enter your circle's radius");

// calcCircumference(radius);
// calcArea(radius);
