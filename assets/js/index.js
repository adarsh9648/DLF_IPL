$(window).on('load', function() {
 //    if (localStorage.getItem("iplTeamDetails") === null) {
	// 	let iplString = JSON.stringify(objData);
	// 	localStorage.setItem("iplTeamDetails", iplString);
	// }
	// alert();
	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
	console.log("teamData",teamData);

});

function showTeamDetails(team){
	let teamDetailUrl = window.location.href.replace("/index.html", "/teamDetails.html?id="+team);
	// let teamDetailUrl = window.location.href+"/teamDetails"+team;
	window.location.href = teamDetailUrl;
}

function addPlayers(){
	let addUrl = window.location.href.replace("/index.html", "/addplayer.html");
	// let teamDetailUrl = window.location.href+"/teamDetails"+team;
	window.location.href = addUrl;
}

  

  
 
  
  // Function to search for players from a specific team
  function searchPlayersByTeam(teamCode) {
	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
	const teamPlayers = teamData.filter(player => player.from.toUpperCase() === teamCode.toUpperCase());
	console.log(teamPlayers, "teamPlayers")
	return teamPlayers;

  }


  
  // Function to display searched players
  function displaySearchedPlayers() {
	const searchButton = document.getElementById('searchButton');
	const searchInput = document.getElementById('searchInput');
	const searchResults = document.getElementById('searchResults');
  
	searchInput.addEventListener('input', () => {
	  const searchTerm = searchInput.value.trim();
	  if (searchTerm !== '') {
		const foundPlayers = searchPlayersByTeam(searchTerm);
		// Display found players in searchResults
		searchResults.innerHTML = ''; // Clear previous results
  
		foundPlayers.forEach(player => {
		  const playerCard = document.createElement('div');
		  playerCard.textContent = player.playerName;
		  playerCard.classList.add('player-card');
  
		  // Add click event to view player details
		  playerCard.addEventListener('click', () => {
			viewPlayerDetails(player.id);
		  });
  
		  searchResults.appendChild(playerCard);
		});
	  } else {
		// Handle empty search term
		searchResults.innerHTML = '';
	  }
	});
  }
  
  // Function to view player details page
  function viewPlayerDetails(playerId) {
	// Redirect to player details page or update UI to show player details
	// You might want to use localStorage or pass data to another page to display player details
	// For simplicity, let's assume redirection to a new page for player details
	window.location.href = `playerDetails.html?id=${playerId}`;
  }
  
  // Display teams and implement search functionality on page load
  window.onload = () => {

	displaySearchedPlayers();
  };
  