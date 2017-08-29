$(document).ready(function(){


	// var nameInput = "";
	// var last_nameInput = "";


	//var address = "";
	var price = 0;
	var bedroom = 0;
	var city = "";
	var state = "";
	//var zip = 0;
	//var lat = 0;
	//var longitude = 0;
	//var image_url = "";


	var submitForm = $("#submitForm");
	var finalQuery = "";

	//console.log(nameInput  + last_nameInput);


	// this happens when you submit the search at the front
	// if it is a form, then will be this way
	// if it is a button, then will be $("#button").on("click", function() etc....)
	$("#apartmentSearch").on("click", function getDataFromInput(event) {

		event.preventDefault();

		//address = $("#address").val().trim();
		price = $("#price").val().trim();
		bedroom = $("#bedroom").val().trim();
		city = $("#city").val().trim();
		state = $("#state").val().trim();
		//zip = $("#zip").val().trim();
		//lat = $("#lat").val().trim();
		//longitude = $("#longitude").val().trim();
		//image_url = $("#image_url").val().trim();

		finalQuery = "/?price=" + price + "&bedroom=" + bedroom + "&city=" + city + "&state=" + state;

		console.log(finalQuery);



		// here you make the ajax call to the "/api" route
		// you are using the finalQuery string which holds key-value pairs
		// this is needed as many things are optional
		$.ajax(

			{
				method: "GET",
				url: "/api" + finalQuery
			}

		//  finally you are receiving the data back and need to send it to the front. 
		).done(function(receivedDataFromDatabase){

			console.log("Now at the apartemtns.js we received this: " + JSON.stringify(receivedDataFromDatabase,null,'\t'));



			// received data will be an array of object 
			// you will loop through all of the objects that you received 
			// and each time you will create a div to hold the info
			// then you will append the "toDisplayDiv" at the front HTML page (insert it)
			console.log('right before loop');
			for(var i=0; i<receivedDataFromDatabase.length; i++) {
				console.log(i);
				var toDisplayDiv = $('<div>')
				.addClass('item')
					.append($('<div>').addClass('card apartment')
					.append($('<img>').addClass('card-img-top').attr('src',receivedDataFromDatabase[i].image_url).attr('alt','Card image cap'))
					.append($('<div>').addClass('card-block')
						.append($('<h4>').addClass('card-title')
							.text(receivedDataFromDatabase[i].address))
						.append($('<p>').addClass('card-text')
							.text("$" + receivedDataFromDatabase[i].price + " Bedrooms: " + receivedDataFromDatabase[i].bedroom + " Location: " + receivedDataFromDatabase[i].city + " , " +receivedDataFromDatabase[i].state ))));


				//toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].address + '</p>');
				// toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].price +'</p>');
				// toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].bedroom +'</p>');
				// toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].city +'</p>');
				// toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].state +'</p>');
				//toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].zip +'</p>');
				//toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].lat +'</p>');
				//toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].longitude +'</p>');
				//toDisplayDiv.append('<p>' + receivedDataFromDatabase[i].image_url +'</p>');
				$('.carousel-inners').append(toDisplayDiv);



				// <div class="item active">
				// 	<div class="card apartment1">
				//   	<img class="card-img-top" src="https://placehold.it/318x180" alt="Card image cap">
				//   		<div class="card-block">
				// 		    <h4 class="card-title"> $ADDRESS </h4>
				// 		    <p class="card-text">$Price: $2 Bedroom city postal</p>
				// 	    </div>
				// 	</div>
				// </div>
			}


		});

	});

});




// //-----------------------------------------------------------------------------------------------------------------------


// 	// this will be called when we need the details page
// 	//$(document).on("click", "button.detailsPageButton", sendInfoToDetailsPage(arrayOfAppartments));

// 	var arrayOfAppartments = [];

// 	//var  address = $('.address').val().trim();
// 	var city = $('#city').val().trim;
// 	//var state = $('.state').val().trim;
// 	// var zip = $('.zip').val().trim;
// 	// var lat = $('.lat').val().trim;
// 	// var long = $('.long').val().trim;
// 	// var image_url = $('.image_url').val().trim;
// 	//var queryURL = "/?";

// 	// query should look like this: 
// 	//var finalQuery = "/?address=" + address + "&city=" + city +"&state=" + state + "&zip=" + zip + "&lat=" + lat + "&long=" + long + "&image_url=" + image_url;
// 	var finalQuery = "sf";

// 	// this function will send search info to our database
// 	// and get the data back
// 	// once the data is received it will be in a json format (array of objects)
// 	// each object will represent one individual appartment that was listed. 
// 	// with that data we will create our div for display and once that is done we will insert our
// 	// new div into our front page. 
// 	var sendSearchInfo = function(finalQuery) {
// 		$.ajax(
// 			{
// 				method: "GET",
// 				url: "/api/" + finalQuery
// 			}
// 		).done(function(receivedArrayOfApartments) {

// 			//arrayOfAppartments = receivedArrayOfApartments;
// 			//  now use the data to post it for the user
// 			//  received data should be in a json format, array of objects
// 			//  each object will be a single appartment with information

// 			//   looping through the array of objects, and getting each object
// 			//
// 			alert(JSON.stringify(receivedArrayOfApartments, null, 2));   
// 			receivedArrayOfApartments.forEach(function(apartment){
// 				var apartmentDetails = $('div');
// 				// we will store the info in this div
// 				//  add class to each small div if we want to do CSS styling later
// 				apartmentDetails.addClass('appartmentDisplay');

// 				apartmentDetails.append("<p>" + apartment.address + "</p>");
// 				apartmentDetails.append("<p>" + apartment.city + "</p>");
// 				apartmentDetails.append("<p>" + apartment.state + "</p>");
// 				apartmentDetails.append("<p>" + apartment.zip + "</p>");
// 				apartmentDetails.append("<p>" + apartment.lat + "</p>");
// 				apartmentDetails.append("<p>" + apartment.long + "</p>");
// 				// we will need to make sure we provide source for the image and insert an image
// 				// not the url. how dinamically to add source apartmentDetails.addAttr('src', appartment.image_url);
// 				apartmentDetails.append("<img class='aptImage' src=' " + apartment.image_url + " '>");


// 				// here we will need to access the DIV from the front and insert our apartmentDetails DIV


		
// 			})
			
// 		})
// 	};

// 	//"#apartmentSearch", sendSearchInfo(finalQuery));
// 	$( "#apartmentSearch" ).click(sendSearchInfo(finalQuery));


// });