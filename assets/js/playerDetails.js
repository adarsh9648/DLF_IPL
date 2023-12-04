// $(window).on('load', function() {

// 	let playerId ="";
// 	var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++) 
//     {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == "id") 
//         {
//             playerId = sParameterName[1];
//             console.log(playerId);
//             console.log("playerId",playerId);
//         }
//     }
 

// });

// if(player){
 
//   console.log(arrFilter, "player")
// }

  
  // Function to get player details by ID
  function getPlayerDetailsById(playerId) {

    console.log(playerId,"playerId")
    // const urlParams = new URLSearchParams(window.location.search);
    // const playerId = parseInt(urlParams.get('id'));
    let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
    let arrFilter = teamData.filter(obj => obj.id == playerId);
    console.log(arrFilter, "arrFilter")
    return arrFilter.find(player => player.id === playerId);
  }
  
  // Function to display player details on player details page
  function displayPlayerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = parseInt(urlParams.get('id'));
  
    const player = getPlayerDetailsById(playerId);
    if (player) {
        let playerDetails = "";
    //   document.getElementById('playerName').textContent = player.playerName;
    //   document.getElementById('playerTeam').textContent = player.from;
    //   document.getElementById('playerPrice').textContent = player.price;
    //   document.getElementById('playingStatus').textContent = player.isPlaying ? 'Playing' : 'On-bench';
    //   document.getElementById('playerRole').textContent = player.description;
      // Update other elements with player details as needed
playerDetails+= `<h1 class="title-pen"> Player <span> Details</span> </h1>
<div class="user-profile">
	<img class="avatar" src="assets/img/${player.description}.png" alt="Ash" />
    <div class="username">${player.playerName}</div>
  <div class="bio">
  	${player.description}
  </div>
    <div class="description">
      I use to design websites and applications
      for the web.
  </div>
  <ul class="data">
    <li>
    <span class="entypo-heart">Team </span>
   <span class="entypo-heart">  ${player.from}</span>
    </li>
    <li>
    <span class="entypo-heart">Role </span>
      <span class="entypo-eye">${player.description}</span>
    </li>
    <li>
    <span class="entypo-heart">Price </span>
      <span class="entypo-user"> ${player.price }</span>
    </li>
 </ul>
</div>
`


$("#player-details").html(playerDetails);

    } else {
      // Handle player not found
      console.log('Player not found');
    }
  }
  
  // Display player details on page load
  window.onload = displayPlayerDetails;

//   playerDetails += '<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 detailCard" data-aos="fade-up" data-aos-c="200" id="detailCard'+player.id+'" ><div class="icon-box"><div class="icon"><img src="assets/img/'+player.description+'.png" class="player-icon" /></div><h4 class="title">Full Name - '+player.playerName+'</h4><p class="description">Team - </p><p class="description">Price - '+player.price+'</p><p class="description">Player Status - </p><p class="description">Role - '+player.description+'</p></div></div>';
  