
//createa XMLHttpRequest object
current_data = new XMLHttpRequest();

//send the request to the server
current_data.open("GET","https://api.thevirustracker.com/free-api?countryTotal=IN");
current_data.onload = function () {
	//Parse the data
	var data = JSON.parse(current_data.responseText);
	 
	document.getElementById('total_cases').innerHTML            = data.countrydata[0].total_cases;
	document.getElementById('total_recovered').innerHTML        = data.countrydata[0].total_recovered;
	document.getElementById('total_unresolved').innerHTML       = data.countrydata[0].total_unresolved;
	document.getElementById('total_deaths').innerHTML           = data.countrydata[0].total_deaths;
	document.getElementById('total_new_cases_today').innerHTML  = data.countrydata[0].total_new_cases_today;
	document.getElementById('total_new_deaths_today').innerHTML = data.countrydata[0].total_new_deaths_today;
	document.getElementById('total_active_cases').innerHTML     = data.countrydata[0].total_active_cases;
	document.getElementById('total_serious_cases').innerHTML    = data.countrydata[0].total_serious_cases;

}

current_data.send();