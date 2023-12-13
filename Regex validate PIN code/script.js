"use strict";

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
*/

// Solution:
function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		for (let i = 0; i < pin.length; i++) {
			if (isNaN(parseInt(pin[i]))) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		for (let i = 0; i < pin.length; i++) {
			if (isNaN(pin[i])) {
				return false;
			}
		}
		return true;
	}
	return false;
}
