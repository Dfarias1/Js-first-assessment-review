console.log("it works")
//1 A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
//
// cows = 4 legs
//
// pigs = 4 legs

function animals(chickenNum, cowNum, pigNum){
	return (chickenNum * 2) + (cowNum * 4) + (pigNum * 4)
}

console.log(animals(3, 4, 4));

//2 Define a function named findPerimeter that takes in length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
	return (length * 2) + (width * 2)
}
console.log(findPerimeter(5, 3));
//3 Define a function named concatName. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastname) {
	return lastname + " , " + firstName;
}
console.log(concatName(farias, daniel));

//4 Write a function named triArea that takes in 2 inputs, the base and height of a triangle and return its area.
function triArea(base, height){
	return (base * height) / 2;
}
console.log(triArea(10, 10));

//5 Define a function named lessThan100. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2){
	if((num1 + num2) < 100) {
		return true;
	} else {
		return false;
	}
}
console.log(lessThan100(50, 25));
//6 Write a function named makesTen that takes two inputs. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b){
	if(a === 10 || b === 10){
		return true;
	} else if ((a + b) === 10) {
		return true;
	} else {
		return false;
	}
}
//7 You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, create a function named points that will find the final points for the team and return that value.
function points(twoPointers, threePointers){
	return (twoPointers * 2) + (threePointers * 3);
}
console.log(points(4, 5))
//8 Define a function named Convert that takes in minutes as an input and will converts those minutes into seconds.
function Convert(minutes){
	return minutes * 60;
}

console.log(Convert(6))
//9Write a function named remained that takes two numbers as inputs. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remained(num1, num2){
	return num1 % num2;
}

console.log(remained(4,2));

//10 Write a function named getFisrtValue that takes an array containing only numbers and return the first element.
function getFirstValue(arr){
	let invalid = false
	arr.forEach(function (item) {
		if(isNaN(item)){
			console.log("invalid")
			invalid = true;
		}
	})
	if(invalid){
		return "value is not a number"
	}else {
		return arr[0]
	}
}

console.log(getFirstValue(arr["joe", 1, 2]));
console.log(getFirstValue([1, 2, 3]));