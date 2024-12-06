/**
 * Displays the current date and time in a formatted string.
 * 	@param {string} resetSec - Optional parameter. If empty, seconds will not be included in the output.
 * 	@returns {string} Formatted string showing the current date and time.
 */
export function displayTime (resetSec = "" ) {	
	var date_text;
	var date_now;
	var minute_value;
	var hour_value;
	var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	var sec;
	try {
		date_now = new Date();
		let month_value = date_now.getMonth();
		date_text = month_names[month_value];
		date_text += " " + formatDataInfo (date_now.getDate());
		date_text += ", " + date_now.getFullYear();
		minute_value = date_now.getMinutes();
		hour_value = date_now.getHours();
		sec = date_now.getSeconds();
		var time_text;
		if (hour_value < 12) {
			if (hour_value == 0)
				hour_value = 12;
			if (resetSec == "")
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) + " AM";
			else
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) +  ":" + formatDataInfo (sec) + " AM";
		}
		else if (hour_value == 12) {
			if (resetSec == "")
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) + " PM";
			else
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) +  ":" + formatDataInfo (sec) + " PM";
		}
		else {
			hour_value = hour_value - 12;
			if (resetSec == "")
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) + " PM";
			else
				time_text = " " + formatDataInfo (hour_value) + ":" + formatDataInfo (minute_value) + ":" + formatDataInfo (sec) + " PM";
		}
		var s = date_text + time_text;
		return s;
	}
	catch (e) {
		store.state.gblConsolePrints.push(e);
	}
}

/**
 * Generates a unique ID based on the current date and time, with a random component.
 *	@returns {string} A unique ID string based on the current time and a random number.
 */
export function genDateTimeID () {		
	var date_now;
	var minute_value;
	var hour_value;	
	var sec;
    var msec;
	try {
		date_now = new Date();		
		minute_value = date_now.getMinutes();
		hour_value = date_now.getHours();
		sec = date_now.getSeconds();
        msec = date_now.getMilliseconds();
		var time_text;
		if (hour_value < 12) {
			if (hour_value == 0)
				hour_value = 12;		
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		else if (hour_value == 12) {
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		else {
			hour_value = hour_value - 12;			
			time_text = formatDataInfo (hour_value).toString() + formatDataInfo (minute_value).toString() + formatDataInfo (sec).toString() + formatDataInfo (msec).toString() + Math.floor(Math.random() * 90000) + 10000;
		}
		var s = time_text;
		return s;
	}
	catch (e) {		
        store.state.gblConsolePrints.push(e);            
	}
}

/**
 * Formats a number to always be two digits by prefixing with a zero if necessary.
 * 	@param {number} v - The number to format.
 * 	@returns {string} The formatted number as a two-digit string.
 */
export function formatDataInfo (v) {
	if (parseInfo(v) < 10)
		return "0" + v;
	else
		return v;
}

/**
 * Parses a number from a string with a specified radix (base).
 * 	@param {string} num - The string representation of the number.
 *	@param {number} [rdx=10] - The radix (base) to use for parsing (default is 10 for decimal).
 * 	@returns {number} The parsed integer.
 */
export function parseInfo (num, rdx) {
	if (rdx == null)
		rdx = 10;
	return parseInt(num, rdx);
}
