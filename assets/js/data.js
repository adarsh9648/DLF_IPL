let objData = [
	{
		"id": 0,
		"playerName": "Hardik Pandya",
		"from": "MI",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 1,
		"playerName": "Rohit Sharma",
		"from": "MI",
		"price": "15.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 3,
		"playerName": "Surya Kumar Yadav",
		"from": "MI",
		"price": "10.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 4,
		"playerName": "AB de Villiers",
		"from": "RCB",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 5,
		"playerName": "Andre Russell",
		"from": "KKR",
		"price": "15.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 6,
		"playerName": "Rishab Pant",
		"from": "DC",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 7,
		"playerName": "Shreyas Iyer",
		"from": "DC",
		"price": "12.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 8,
		"playerName": "Virat Kohli",
		"from": "RCB",
		"price": "22.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 9,
		"playerName": "Ben Stokes",
		"from": "RR",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 10,
		"playerName": "Eoin Morgan",
		"from": "KKR",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 11,
		"playerName": "K L Rahul",
		"from": "PBKS",
		"price": "18 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 12,
		"playerName": "David Warner",
		"from": "SRH",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 13,
		"playerName": "Kane Williamson",
		"from": "SRH",
		"price": "16.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 14,
		"playerName": "Shakib Al Hasan",
		"from": "KKR",
		"price": "5 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 15,
		"playerName": "M S Dhoni",
		"from": "CSK",
		"price": "21.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	}
];

$(window).on('load', function() {
    if (localStorage.getItem("iplTeamDetails") === null) {
		let iplString = JSON.stringify(objData);
		localStorage.setItem("iplTeamDetails", iplString);
	}
});

function addNewPlayer(player) {
	// Retrieve existing data from local storage
	const storedData = localStorage.getItem('iplTeamDetails');
	let retrievedData = storedData ? JSON.parse(storedData) : [];
  
	// Add the new player to the array
	retrievedData.push(player);
  
	// Update local storage with the updated data
	localStorage.setItem('iplTeamDetails', JSON.stringify(retrievedData));
  
	// Add the new player to the current data array (objData)
	objData.push(player);
  }


  // Function to add a new player based on user input
  function addNewPlayerFromInput() {
	const playerNameInput = document.getElementById('playerNameInput').value;
	const teamInput = document.getElementById('teamInput').value;
	const priceInput = document.getElementById('priceInput').value;
	const isPlayingInput = document.getElementById('isPlayingInput').checked;
	const descriptionInput = document.getElementById('descriptionInput').value;


	console.log(playerNameInput, "playerNameInput")
	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));


  console.log(objData.length, "objData.length")
  let uniqueid = teamData.length+1
	// Create a new player object using the user input
	const newPlayer = {
	  id: uniqueid, // Generate ID dynamically (assuming each new player has a unique ID)
	  playerName: playerNameInput,
	  from: teamInput,
	  price: priceInput,
	  isPlaying: isPlayingInput,
	  description: descriptionInput
	};
  
	// Call the function to add the new player
	addNewPlayer(newPlayer);
  
	// Optionally, perform any additional actions after adding the player
	// For example, clear the form fields or update the UI

  }

// Example: Triggering the addition of a new player when a form is submitted
const addPlayerForm = document.getElementById('addPlayerForm');
addPlayerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  addNewPlayerFromInput(); // Call function to add new player from form input
  
	let backtoHomePage = window.location.href.replace( "/addplayer.html", "/index.html");

	window.location.href = backtoHomePage;
});