// INPUT PAGE

const typeOfGame = document.getElementById("type-of-game");
const numberOfPoints = document.getElementById("number-of-points");
const typeOfCourts = document.getElementById("type-of-court");
const numberOfCourts = document.getElementById("number-of-courts");


const playerNames = [];

function gameInfo() {
    const selectedTypeOfGame = typeOfGame.querySelector('input[name="game"]:checked').value;
    const selectedNumberOfPoints = numberOfPoints.querySelector('input[name="points"]:checked').value;
    const selectedTypeOfCourts = typeOfCourts.querySelector('input[name="court-type"]:checked').value;
    const selectedNumberOfCourts = numberOfCourts.querySelector('input[name="courts"]:checked').value;

    const gameSummary = [selectedTypeOfGame,selectedNumberOfPoints,selectedTypeOfCourts,selectedNumberOfCourts];

    sessionStorage.setItem('gameSummary', JSON.stringify(gameSummary));

    console.log("Nå kjøres gameInfo :)");
    console.log("Her er gameSummary: ", gameSummary);
}

function addPlayers() {
    // get the input element and its value
    const newPlayer = document.getElementById("newPlayer");
    const newName = newPlayer.value;
    
    // check if the input is not empty
    if (newName.trim() !== "") {
        // Make sure the name saves with uppercase
        const formattedName = newName.charAt(0).toUpperCase() + newName.slice(1);
        
        // Adds the name with uppercase to the playerNames array
        playerNames.push(formattedName.toString());

        // clear the input field
        newPlayer.value = "";
        updatePlayerList();
    } 

}

function handleEnterKey(event) {
    // Checks if the Enter or "Go" key has been pressed
    if (event.key === "Enter" || event.key === "Go") {
        addPlayers();
        event.preventDefault(); // Prevent default behavior like form submission
    }
}

// Add event listener to detect "Enter" key on the input
document.getElementById("newPlayer").addEventListener("keydown", handleEnterKey);

function updatePlayerList() {
    // get the list element
    const playerList = document.getElementById("playerList");

    // clear existing list items
    playerList.innerHTML = "";

    // save the names in a list 
    sessionStorage.setItem('namesData', JSON.stringify(playerNames));

    // add each name to the list
    playerNames.forEach((name, index) => {
        const listItem = document.createElement("li");

        // Set up flex styling on list items
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        listItem.style.alignItems = "center";
        listItem.style.width = "150px"; // Set a fixed width to ensure alignment

        // Create the text node with player name 
        const nameText = document.createTextNode(name);
        listItem.appendChild(nameText);

        // Create a delete button for each player
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        //deleteButton.style.marginLeft = "10px"

        // Add click event listener to delete players
        deleteButton.onclick = function() {
            deletePlayer(index);
        };

        // Append the delete button to the list item 
        listItem.appendChild(deleteButton);

        // Append the list item to the player list 
        playerList.appendChild(listItem);

    });
}

function deletePlayer(index) {
    // Remove the player from the array based on index
    playerNames.splice(index, 1);

    // Update session storage
    sessionStorage.setItem('namesData', JSON.stringify(playerNames));

    // Update the displayed player list
    updatePlayerList();
}

function startGame() {
    gameInfo();

    const retrievedSummary = sessionStorage.getItem('gameSummary');
    const gameSummary = JSON.parse(retrievedSummary);
    const retrievedNames = sessionStorage.getItem('namesData');
    const players = JSON.parse(retrievedNames);
    
    console.log("GameSummary: ", gameSummary);
    console.log("Players: ", players);

    if (gameSummary[2] == 'single' && gameSummary[3] == 1 && players.length < 2) {
        // Single, one court and less than 2 players
        var error = "You need to be at least two players.";
        showError(error); // Display error message

    } else if (gameSummary[2] == 'single' && gameSummary[3] == 2 && players.length < 4) {
        // Single, two courts and less than 4 players
        var error = "You need to be at least four players.";
        showError(error); // Display error message

    } else if (gameSummary[2] == 'single' && gameSummary[3] == 2 && players.length > 6) {
        // Single, two courts and more than than 6 players (many on the bench and infinity)
        var error = "You need to be less than 7 players<br>in a single game with two courts.";
        showError(error); // Display error message   

    } else if (gameSummary[2] == 'single' && gameSummary[3] == 3 && players.length < 6) {
        // Single, three courts and less than 6 players
        var error = "You need to be at least six players.";
        showError(error); // Display error message 
    
    } else if (gameSummary[2] == 'double' && gameSummary[3] == 1 && players.length > 6) {
        // Double, one court and more than than 6 players (many on the bench and infinity)
        var error = "You need to be less than 7 players<br>in double game with one cours.";
        showError(error); // Display error message 

    } else if (gameSummary[2] == 'double' && gameSummary[3] == 1 && players.length < 4) {
        // Double, one court and less than than 4 players (many on the bench and infinity)
        var error = "You need to be at least 4 players<br>in double game with one court.";
        showError(error); // Display error message 

    } else if (gameSummary[2] == 'double' && gameSummary[3] == 2 && players.length < 8) {
        // Double, two court and more than less than 7 players 
        var error = "You need to be at least 8 players<br>in double game with two courts.";
        showError(error); // Display error message    

    } else {
        // This will go if no error messages
        clearError(error);
        window.location.href = "game.html"; 
    }

    //gameInfo();
}

function showError(message) {
    let errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = message;
    errorMessageElement.style.display = "block"; // Display the error message
}

function clearError() {
    let errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = "";
    errorMessageElement.style.display = "none"; // Hide the error message
}