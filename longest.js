// Write a function that accepts an array of strings. Return the longest string.
// Do we need to consider if there are no strings in the array?
// Do we need to consider times when all of the strings are the same length?

//ES 5 Syntax Possible Solution:

function longestString1(arr) {
	var longest = ''; // Step 0
	for (var i = 0; i < arr.length; i++) { // Step 1
		if (arr[i].length > longest.length) { // Step 2 & 3
			longest = arr[i]; // Step 4
		}
	}
	return longest; // Step 5
}

//ES 6 Syntax Possible Solution:

const longestString2 = (arr) => {
	let longest = ''; // Step 0
	arr.forEach((item) => { // Step 1
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; // Step 5
};