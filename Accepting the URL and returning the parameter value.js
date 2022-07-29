window.onload = function() {
	try {
		var url_string = (window.location.href).toLowerCase();
		var url = new URL(url_string);
    var utm_source = url.searchParams.get("utm_source");
		var utm_medium = url.searchParams.get("utm_medium");
		var utm_campaign = url.searchParams.get("utm_campaign");
    console.log(utm_souce+ " and "+utm_medium+ " and "+utm_campaign);
	} catch (err) {
		console.log("Issues with Parsing URL Parameter's - " + err);
	    }
}
