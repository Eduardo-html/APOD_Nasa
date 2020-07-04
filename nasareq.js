let req = new XMLHttpRequest();

req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=rdfSwRdg8UiUF4KdI37lRuGhwf3v8bKAkH2YkmE1");

req.onload = function () {
	let object = JSON.parse(req.responseText);
	console.log(object);
	title.textContent = object.title;
	img.src = object.url;
	date.textContent = object.date;
	explanation.textContent = object.explanation;
	copyright.textContent = "Copyright: " + object.copyright;
};

req.send();

	
	let date = document.getElementById("data");
	let img = document.getElementById("imgPrincipal");
    let title = document.getElementById("imgSub");
	let copyright = document.getElementById("copy");
	let explanation = document.getElementById("textExplanation");
    
    