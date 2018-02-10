function showMoreInfo(event) {
	var button = event.target;
	var buttonId = button.id;
	var parId = buttonId + "-p";
	var par = document.getElementById(parId);
	
	if(par.style.display === "none") {
	   	par.style.display = "block";
	} else {
		par.style.display = "none";
	}
}