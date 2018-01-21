var signs = [
            {
            name: " I'm calm and I don't get mad",
            image: "img/aries.png",
            sign: "aries"

         	},


	        {
	        	name: " I'm not jealous",
	         image: "img/taurus.png",
	         sign: "taurus"
	     	},


	        {
	        	name: " I don't judge",
	         image: "img/gemini.png",
	         sign: "gemini"

	        },


	        {
	        	name: " I'm fine",
	         image: "img/cancer.png",
	         sign: "cancer"
	        },


	        {
	        	name: "I'm over it",
	         image: "img/leo.png",
	         sign: "leo"
	        },


	        {
	        	name: " I'm not stressed",
	         image: "img/virgo.png",
	         sign: "virgo"
	        },


	        {
	        	name: " I'm not lying",
	         image: "img/libra.png",
	         sign: "libra"
	     	},


	        {
	        	name: " I'm not obsessed",
	         image: "img/scorpio.png",
	         sign: 'scorpio'
	     	},


	        {
	        	name: " I don't care",
	         image: "img/sagittarius.png",
	         sign: "sagittarius"
	     	},


	        {
	        	name: " I don't need help",
	         image: "img/capricorn.png",
	         sign: "capricorn"
	     	},


	        {
	        	name: " I'm not insecure",
	         image: "img/aquarius.png",
	         sign: "aquarius"
	     	},


	        {
	        	name: " I can walk it alone",
	         image: "img/pisces.png",
	         sign: "pisces"
	     	}
		]

		var hello = document.getElementById('userdata')
		hello.addEventListener('keypress',function enterKey(e) {
			if (e.keyCode == 13) {
				myFunction()
			}
		}, false)

		setTimeout(function(){$("#userdata").focus();}, 1000)

		//shows info on the webpage
function myFunction() {
       //store the tag with id="sign" in var userdata
	var userdata = document.getElementById('userdata')

	   //confirms that entered data exists
	console.log("value is:" + userdata.value)
	  //loops thru the array of signs
	for ( var i = 0; i < signs.length; i++){
          
        //if the value user typed in changed to all lowercase letters is equal to one of our signs, then we do something
    if (userdata.value.toLowerCase() === signs[i].sign) {
    	console.log("it works")
          //check some values in the console before updating HTML
    	console.log("users typed in" + userdata.value)
    	console.log("users typed in" + signs[i].image)
    	console.log("users typed in" + signs[i].name)

        //get element with id ="usersign" and change the text to the user input
        document.getElementById("yourSign").textContent = userdata.value
        //get element with id ="icon" and change source attribute to current zodiac image path
        document.getElementById("icon").src = signs[i].image
        document.getElementById("icon").width = "300"
        document.getElementById("icon").height = "400"
        //get element with id ="myHoroscope" and change to the content to this concatenated string
        document.getElementById("myHoroscope").textContent = "Your secret lie is:" + " " + signs[i].name
        document.getElementById("myHoroscope").style.color = "red"
        document.getElementById("myHoroscope").style.fontSize = "xx-large"

        //to stop the function because we found a match and added the data to the page
    return}
	  // If no match is found, do opposite of above, mostly clearing content and images
	document.getElementById("yourSign").textContent = "Ooopss, Try Again Lier!!!"
    document.getElementById("myHoroscope").textContent = ""
    document.getElementById("icon").src = ""
	
}
	
	
};

		
/*
	// For loop used to create the option tags for the dropdown
for(var i = 0; i < signs.length; i++) {
	// Store the actual dropdown as a variable
	var dropdown = document.getElementById('myList');
	// Create an option element
	var selection = document.createElement('option');

	// Give the option element a value
	selection.value = signs[i].name;
	// Set the text of the option element
	selection.textContent = signs[i].name;
	// Append the option element to the dropdown
	dropdown.appendChild(selection);
}

// Using 'dropdown' because we created that variable in the above for loop
dropdown.onchange = function() {
		// Targeting several elements from the HTML and storing them as variables
  	var container = document.getElementById("displayInfo");
  	var sign = document.getElementById("sign");
  	var icon = document.getElementById("icon");

  			// Creating a function, storing it as a variable. This function removes the animate.css classes from an element so that when they get re-applied, the animation happens again
  	var animation = function() {
			container.className = 'form-group displayInfo';
*/




