var button = document.querySelector(".submit");
var input = document.querySelector(".input_text");
var listings = document.querySelector(".list-group");



button.addEventListener("click", function (event) {
	event.preventDefault();
	search(event);

});

// function addCode() {
// 	document.getElementById("#listings").insertAdjacentHTML("afterend",
// "<h3>This is the text which has been inserted by JS</h3>");

// }



function search(event) {

	var term = input.value;

	fetch(
		"https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=" + term,
	{method: 'GET',
	headers: {
		"X-RapidAPI-Key": "0170700766mshcf69fb08a467c9bp100823jsn51c168ac4b25",
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
}
	)
	.then((response) => response.json())
    .then((data) => {
      console.log(data);
	const items = [];
     


	for (let i = 0; i < 5; i++) {
		items.push(data.results[i].name %6);
		console.log(data.results[i].name);

		var mealName = data.results[i].name;
		$( "p" ).append( "<div>" + data.results[i].name) + "</div>";

	}
	
	// addCode()
	// console.log(addCode())

	// listings.append(
	// 	'<p>hello</p>'
	// 	'<div class="d-flex gap-2 w-100 justify-content-between"> <div> <h6 class="mb-0">' + mealName + 
	// 	'</h6> <p class="mb-0 opacity-75">'
	// 		+  '</p></div>'+
	// 	'<small class="opacity-50 text-nowrap">now</small> </div>'
	// +
	//   '<img src="https://github.com/twbs.png" alt="twbs" width="32"	height="32" class="rounded-circle flex-shrink-0"/>'
	// );
	input.value = "";

	
	})
	

}


///LIST///


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "0170700766mshcf69fb08a467c9bp100823jsn51c168ac4b25",
// 		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// /MORE INFO///

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://tasty.p.rapidapi.com/recipes/get-more-info?id=8354",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "0170700766mshcf69fb08a467c9bp100823jsn51c168ac4b25",
// 		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



///Edamam////



// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=bucketwheat%20flour",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "0170700766mshcf69fb08a467c9bp100823jsn51c168ac4b25",
// 		"X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });