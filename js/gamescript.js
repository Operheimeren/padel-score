// GAME PAGE
// Retrieve data form session storage:
const retrievedNames = sessionStorage.getItem('namesData');
const retrievedSummary = sessionStorage.getItem('gameSummary');
// Parse the JSON string back to an array
const players = JSON.parse(retrievedNames);
const gameSummary = JSON.parse(retrievedSummary);
// GamesPlayed variable
let gamesPlayed = 0;
let hasError = false; // Global error state variable


window.addEventListener('load', function() {
    // function which runs at page start to generate matches
    const playerOne = document.getElementById("player1");
    const playerTwo = document.getElementById("player3");

    sessionStorage.setItem('gamesPlayed', 0);
    var gamesPlayed = sessionStorage.getItem('gamesPlayed');

    createObject(players);

    if (gameSummary[0] == 'americano' && gameSummary[2] === 'single') {
        // Americano single

        americanoSingle();

    } else if (gameSummary[0] == 'americano' && gameSummary[2] === 'double'){
        // Americano double 

        americanoDouble();
    };
  });

const gameObject = {}

function createObject(players) {
    // function to create object which will store the score

    players.forEach(name => {
        gameObject[name] = {
            score: 0,
            games: 0,
            average: 0,
            win: 0, 
            lost: 0,
            draw: 0,
        };
    });
    //console.log(gameObject);

}

function shuffleNames(players) {
    // Funtion which suffles the player list

    for (let i = players.length - 1; i > 0; i--) {
        //Generate a random index between 0 and i 
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elemets at indices i and j
        [players[i], players[j]] = [players[j], players[i]];
    }

    sessionStorage.setItem('players', JSON.stringify(players));
}

function americanoSingle() {
    // Function which checks how many games have been played and select outcome

    const playerOne = document.getElementById("player1");
    const playerTwo = document.getElementById("player3");
    const playerThree = document.getElementById("player5");
    const playerFour = document.getElementById("player7");
    const sittingOut = document.getElementById("sittingOut");
    const game2Fieldset = document.getElementById('game2');

    let gamesPlayed = parseInt(sessionStorage.getItem('gamesPlayed'));
    const matchesArray = JSON.parse(sessionStorage.getItem('matchesArray'));
    const nonPlayingPlayerlist = JSON.parse(sessionStorage.getItem('nonPlayingPlayerlist'));
    
    if (players.length == 2){
        //console.log("Single with two players - americanoSingle")
        //singleOneCourtTwoPlayers();
    
        playerOne.textContent = players[0];
        playerTwo.textContent = players[1];

    } else if (gamesPlayed == 0) {
        // This runs first time and when it is new rounds
        if (gameSummary[3] === '1') {
            singleOneCourtGenerator(players);

        } else if (gameSummary[3] === '2') {
            game2Fieldset.style.display = 'block';
            game2Fieldset.style.display = "flex";
            court2.style.display = 'block';
            //singleTwoCourtGenerator(players);
            singel2CourtsDouble1Court(players);

        } else {
            // Tre baner
            console.log('Tre baner!');
        }

    } else if (gamesPlayed == matchesArray.length * 100) {
        // Gamesplayed sets to 0 as it starts a new round 
        // DENNE SKAL SLETTES!!
        gamesPlayed = 0;
        parseInt(sessionStorage.setItem('gamesPlayed', gamesPlayed)); 

        // New round of games
        if (gameSummary[3] === '1') {
            singleOneCourtGenerator(players);

        } else if (gameSummary[3] === '2') {
            game2Fieldset.style.display = 'block';
            game2Fieldset.style.display = "flex";
            court2.style.display = 'block';
            //singleTwoCourtGenerator(players);
            singel2CourtsDouble1Court(players);

        } else {
            // Tre baner
            console.log('Tre baner!');
        }

    } else {

        if (gameSummary[3] === '1') {
            // One court 

            if (gamesPlayed == matchesArray.length) {
                gamesPlayed = 0;
                parseInt(sessionStorage.setItem('gamesPlayed', gamesPlayed)); 
                singleOneCourtGenerator(players);

            } else {
                playerOne.textContent = matchesArray[gamesPlayed][0];
                playerTwo.textContent = matchesArray[gamesPlayed][1];
    
                if (nonPlayingPlayerlist.length > 0) {
                    //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                    sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                }
            }



        } else if (gameSummary[3] === '2') {
            // Two courts

            if (gamesPlayed == matchesArray.length / 2) {
                gamesPlayed = 0;
                parseInt(sessionStorage.setItem('gamesPlayed', gamesPlayed)); 
                singel2CourtsDouble1Court(players);
            } else {
                if (gamesPlayed < 2) {
                    var gameNumber = gamesPlayed + 1;
                } else {
                    var gameNumber = gamesPlayed + 2;
                }
    
                playerOne.textContent = matchesArray[gameNumber][0];
                playerTwo.textContent = matchesArray[gameNumber][1];
                playerThree.textContent = matchesArray[gameNumber+1][0];
                playerFour.textContent = matchesArray[gameNumber+1][1];
                
                if (players.length > 4) {
                    //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                    sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                }
            }

        } else {
            // Tre baner
            console.log('Tre baner!');
        }
    };
}

function americanoDouble() {
    // Function which checks how many games have been played and select outcome

    const playerOne = document.getElementById("player1");
    const playerOneOne = document.getElementById("player2");
    const playerTwo = document.getElementById("player3");
    const playerTwoTwo = document.getElementById("player4");
    const playerThree = document.getElementById("player5");
    const playerThreeThree = document.getElementById("player6");
    const playerFour = document.getElementById("player7");
    const playerFourFour = document.getElementById("player8");
    const sittingOut = document.getElementById("sittingOut");
    const game2Fieldset = document.getElementById('game2');
    const court2 = document.getElementById('court2');

    let gamesPlayed = parseInt(sessionStorage.getItem('gamesPlayed'));
    const matchesArray = JSON.parse(sessionStorage.getItem('matchesArray'));
    const nonPlayingPlayerlist = JSON.parse(sessionStorage.getItem('nonPlayingPlayerlist'));
    
    if (gamesPlayed == 0) {
        // This runs first time and when it is new rounds
        if (gameSummary[3] === '1') {
            singel2CourtsDouble1Court(players);

        } else if (gameSummary[3] === '2') {
            game2Fieldset.style.display = 'block';
            game2Fieldset.style.display = "flex";
            court2.style.display = 'block';
            document.getElementById("game2").style.display = "flex";

            doubleTwoCourtGenerator(players);

        } else {
            // Tre baner
            console.log('Tre baner!');
        }

    } else if (gamesPlayed === matchesArray.length / 2) {
        // Gamesplayed sets to 0 as it starts a new round
        gamesPlayed = 0;
        parseInt(sessionStorage.setItem('gamesPlayed', gamesPlayed)); 

        // New round of games
        if (gameSummary[3] === '1') {
            singel2CourtsDouble1Court(players);

        } else if (gameSummary[3] === '2') {
            game2Fieldset.style.display = 'block';
            game2Fieldset.style.display = "flex";
            court2.style.display = 'block';
            doubleTwoCourtGenerator(players);
            
        } else {
            // Tre baner
            console.log('Tre baner!');
        }

    } else {

        if (gameSummary[3] === '1') {
            // One court and rolling play in matchesArray
      
            var gameNumber = gamesPlayed * 2;

            playerOne.textContent = matchesArray[gameNumber][0];
            playerOneOne.textContent = matchesArray[gameNumber][1];
            playerTwo.textContent = matchesArray[gameNumber+1][0];
            playerTwoTwo.textContent = matchesArray[gameNumber+1][1];
    
            if (nonPlayingPlayerlist.length > 0 && nonPlayingPlayerlist[0] != 0) {
                //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[gamesPlayed].join(', ');
            }

        } else if (gameSummary[3] === '2') {
            // Two courts
            var gameNumber = gamesPlayed * 4;

            playerOne.textContent = matchesArray[gameNumber][0];
            playerOneOne.textContent = matchesArray[gameNumber][1];
            playerTwo.textContent = matchesArray[gameNumber+1][0];
            playerTwoTwo.textContent = matchesArray[gameNumber+1][1];
            playerThree.textContent = matchesArray[gameNumber+2][0];
            playerThreeThree.textContent = matchesArray[gameNumber+2][1];
            playerFour.textContent = matchesArray[gameNumber+3][0];
            playerFourFour.textContent = matchesArray[gameNumber+3][1];
    
            if (players.length > 8) {
                //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[gamesPlayed].join(', ');
                sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[gamesPlayed].join(', ');
            }

        } else {
            // Tre baner
            console.log('Tre baner!');
        } 
    };
}

function uniqueCombinations(players) {
    // Shuffle the players list:
    shuffleNames(players);

    let matchesArray = [];
    
    if (gameSummary[3] === '1') {
        // One court
    }

    // Step 1: Generate all unique pairs
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            matchesArray.push([players[i], players[j]]);


        }
    }
    sessionStorage.setItem('matchesArray', JSON.stringify(matchesArray));
    sessionStorage.setItem('nonPlayingPlayerlist', JSON.stringify(nonPlayingPlayerlist));
}

function singleOneCourtGenerator(players) {
    // Function which generates matches and who is not playing

    const playerOne = document.getElementById("player1");
    const playerTwo = document.getElementById("player3");
    const sittingOut = document.getElementById("sittingOut");
    
    // Shuffle the players list:
    shuffleNames(players);

    const matchesArray = [];
    
    // Setting up the matches and the person(s) sitting out
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            // create an array of game players and add to an array
            const currentMatch = [players[i], players[j]];
            matchesArray.push(currentMatch);
            
            // Find players who are not in the current match
            // const nonPlayingPlayers = players.filter(player => !currentMatch.includes(player));
            //nonPlayingPlayerlist.push(nonPlayingPlayers);
        }
    }

    // Shuffling the matchesArray
    for (let i = matchesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
        [matchesArray[i], matchesArray[j]] = [matchesArray[j], matchesArray[i]];  // Swap elements
    }

    // Finding the non playing players
    const nonPlayingPlayerlist = [];
    for (i=0; i<matchesArray.length; i++) {

        const nonPlayingPlayers = players.filter(player => !matchesArray[i].includes(player));
        nonPlayingPlayerlist.push(nonPlayingPlayers); 
    }

    sessionStorage.setItem('matchesArray', JSON.stringify(matchesArray));
    sessionStorage.setItem('nonPlayingPlayerlist', JSON.stringify(nonPlayingPlayerlist));
    console.log('Her er matchesArray: ', matchesArray);
    console.log('Her er sittingout: ', nonPlayingPlayerlist);

    //Displaying the players 
    playerOne.textContent = matchesArray[0][0];
    playerTwo.textContent = matchesArray[0][1];
    
    if (nonPlayingPlayerlist.length > 0) {
        //sittingOut.textContent = 'Sitting out: ' + nonPlayingPlayerlist[0].join(', ');
        sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[0].join(', ');
    }
    
}

function singleTwoCourtGenerator(players) {
    // function which sets up all the matches with two courts

    const playerOne = document.getElementById("player1");
    const playerTwo = document.getElementById("player3");
    const playerThree = document.getElementById("player5");
    const playerFour = document.getElementById("player7");
    const sittingOut = document.getElementById("sittingOut");
    
    // Shuffle the players list:
    shuffleNames(players);

    let initialMatchesArray = [];
    
    // Step 1: Generate all unique pairs
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            initialMatchesArray.push([players[i], players[j]]);
        }
    }
    
    // Step 2: Shuffle matches to ensure no player is in two consecutive matches
    let matchesArray = [];
    
    // Keep track of players scheduled in the last round
    let lastRoundPlayers = new Set();

    while (initialMatchesArray.length > 0) {
        let currentRoundMatches = [];
        let currentRoundPlayers = new Set();
    
        for (let i = 0; i < initialMatchesArray.length; i++) {
            const [player1, player2] = initialMatchesArray[i];
    
            // Ensure no player is scheduled twice in the current round
            if (!currentRoundPlayers.has(player1) && !currentRoundPlayers.has(player2) && 
                !lastRoundPlayers.has(player1) && !lastRoundPlayers.has(player2)) {
                currentRoundMatches.push(initialMatchesArray[i]);
                currentRoundPlayers.add(player1);
                currentRoundPlayers.add(player2);
            }
        }
    
        // Remove the matches scheduled in the current round from matchesArray
        initialMatchesArray = initialMatchesArray.filter(match => !currentRoundMatches.includes(match));
    
        // Update the final matches and the last round players
        matchesArray.push(...currentRoundMatches);
        lastRoundPlayers = currentRoundPlayers;
    }

    if (players.length > 4) {
        // Code which updates the matchesArray so non players a features twich in two sets of matches 
        console.log('More than 4 players -> Update the matchesArray')                

    } else {
        console.log('Kjør på som vanlig :)')
    }
    
    // Output the final matches
    console.log('Matches: ', matchesArray);

    sessionStorage.setItem('matchesArray', JSON.stringify(matchesArray));
    //sessionStorage.setItem('nonPlayingPlayerlist', JSON.stringify(nonPlayingPlayerlist));

    console.log('MatchesArray: ', matchesArray);
    console.log('Sitting Out: ', nonPlayingPlayerlist);

    playerOne.textContent = matchesArray[0][0];
    playerTwo.textContent = matchesArray[0][1];
    playerThree.textContent = matchesArray[1][0];
    playerFour.textContent = matchesArray[1][1];
}

function singleThreeCourtGenerator(players) {
    // Function which sets up all the matches with three courts 
    // Use same logic as for doubleTwoCourtGenerator to set up the matches 
}

function singel2CourtsDouble1Court(players) {

    const playerOne = document.getElementById("player1");
    const playerOneOne = document.getElementById("player2");
    const playerTwo = document.getElementById("player3");
    const playerTwoTwo = document.getElementById("player4");
    const playerThree = document.getElementById("player5");
    const playerThreeThree = document.getElementById("player6");
    const playerFour = document.getElementById("player7");
    const playerFourFour = document.getElementById("player8");
    const sittingOut = document.getElementById("sittingOut");

    var matchesArray = [];
    
    // Setting up the matches and the person(s) sitting out
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {

            // create an array of game players and add to an array
            const currentMatch = [players[i], players[j]];
            matchesArray.push(currentMatch);
        }
    }

    // Double the matches if odd number of players
    if (matchesArray.length % 2 === 1) {
        // Odd number of games -> doubling the number
        matchesArray = matchesArray.concat(matchesArray);
        //console.log('Concat version: ', matchesArray);
    } 
    
    // Shuffling the matchesArray
    for (let i = matchesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
        [matchesArray[i], matchesArray[j]] = [matchesArray[j], matchesArray[i]];  // Swap elements
    }

    // Sets up the matches to make sure a player is not present in two sets of matches
    
    var newMatchesArray = [];
    var matchesCopy = [...matchesArray];
    var matchesNOTSuccess = true;
    var telleverk = 0;

    while (matchesNOTSuccess) {
        //console.log('Telleverk: ', telleverk);
    
        // Reset newMatchesArray for each attempt
        newMatchesArray = [];
    
        // Check if matchesArray has an odd number of matches
        let leftoverMatch = null;
        if (matchesCopy.length % 2 !== 0) {
            leftoverMatch = matchesCopy.pop();  // Remove and store the last match
        }
    
        for (let i = 0; i < matchesArray.length; i++) {
    
            if (matchesCopy.length > 0) {
                const firstMatch = matchesCopy[0];
                const playersInFirstMatch = new Set(firstMatch);
    
                let secondMatchFound = false;
    
                // Find the second match that does not include players in the first match
                for (let j = 1; j < matchesCopy.length; j++) {
                    const secondMatch = matchesCopy[j];
    
                    // Check if any player in the first match is present in the second match
                    const hasConflict = secondMatch.some(player => playersInFirstMatch.has(player));
    
                    if (!hasConflict) {
                        newMatchesArray.push(firstMatch, secondMatch);
    
                        // Remove both matches from matchesCopy
                        matchesCopy.splice(j, 1); // Remove second match
                        matchesCopy.splice(0, 1); // Remove first match
    
                        secondMatchFound = true;
                        break;  // Exit the loop for this round
                    }
                }
    
                // If we cannot find a second valid match, break and reshuffle
                if (!secondMatchFound) {
                    //console.log("No valid second match found, reshuffling...");
                    break;
                }
    
            } else {
                //console.log("No more matches to process.");
                break;
            }
        }
    
        // Handle the leftover match (if it exists)
        if (leftoverMatch) {
            newMatchesArray.push(leftoverMatch);  // Add the leftover match at the end
        }
    
        // Check if all matches are set up successfully
        if (matchesArray.length === newMatchesArray.length) {
            //console.log('Let me break free!');
            matchesNOTSuccess = false;  // Success! Break the loop.
    
        } else {
            // Shuffle the matches and try again
            //console.log("Reshuffling and retrying...");
    
            for (let i = matchesArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                [matchesArray[i], matchesArray[j]] = [matchesArray[j], matchesArray[i]];  // Swap elements
            }
    
            matchesCopy = [...matchesArray];  // Reset matchesCopy to try again
    
            // Add leftover match back to matchesCopy if it exists
            if (leftoverMatch) {
                matchesCopy.push(leftoverMatch);
                leftoverMatch = null;  // Clear leftover match after retry
            }
            newMatchesArray.splice(0, newMatchesArray.length);  // Empty the newMatchesArray for the next attempt
        }
    
        telleverk++;
    }

    // Sets up the sittingout array based on the playing matches 
    var nonPlayingPlayerlist = [];

    for (let i = 0; i < newMatchesArray.length; i += 2) {  // Loop through every two matches
        
        // Ensure there are at least two matches to process
        if (i + 1 < newMatchesArray.length) {
            const currentPlayers = [...newMatchesArray[i], ...newMatchesArray[i + 1]];
    
            // Find the players who are not part of the current two matches
            const currentSittingOut = players.filter(player => !currentPlayers.includes(player));
    
            // Add the players sitting out in this round to the sittingOut array
            nonPlayingPlayerlist.push(currentSittingOut);
        }
    }

    // Optmising the sitting out array to ensure players are not on the bench several games
    var sittingOutCopy = [...nonPlayingPlayerlist];
    var newSittingOut = [];
    var isNotSuccess = true;
    var telleverket = 0;
    
    if (players.length > 5) {
        while (isNotSuccess) {
            //console.log('Telleverket: ', telleverket);

            if(telleverket > 76) {
                // Shuffle if not found solution
                sittingOutCopy = [...nonPlayingPlayerlist];
                newSittingOut = [];
    
                for (let i = sittingOutCopy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                    [sittingOutCopy[i], sittingOutCopy[j]] = [sittingOutCopy[j], sittingOutCopy[i]];  // Swap elements
                }
                //console.log('Her er ny sittingOutCopy: ', sittingOutCopy);
                //console.log('Her er ny newSittingOut: ', newSittingOut);
                telleverket = 0;

            };

            if (newSittingOut.length < 1) {
                // Adding the first match to the array and removes it from original array
                newSittingOut.push(sittingOutCopy[0]);
                sittingOutCopy.splice(0,1);   
            };

            // If the two last matches have the same players -> shuffle the array and start again
            if (sittingOutCopy.length < 3){
                //console.log('Halloi!')
                var isAnyPresent1 = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[sittingOutCopy.length-2].includes(name));
                var isAnyPresent2 = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[sittingOutCopy.length-1].includes(name));
                var isAnyPresent3 = sittingOutCopy[sittingOutCopy.length-2].some(name => sittingOutCopy[sittingOutCopy.length-1].includes(name));
                
                /*
                console.log('Her er siste i newSittingOut: ', newSittingOut[newSittingOut.length-1]);
                console.log('Her er nest siste i sittingOutCopy: ', sittingOutCopy[sittingOutCopy.length-2]);
                console.log('Her er siste i sittingOutCopy: ', sittingOutCopy[sittingOutCopy.length-1]);
                console.log('isAny: ', isAnyPresent1);
                console.log('isAny: ', isAnyPresent2);
                console.log('isAny: ', isAnyPresent3);
                */

                if (isAnyPresent1 === true || isAnyPresent2 === true || isAnyPresent3 === true){
                    // Time for shuffling and restart...
                    sittingOutCopy = [...nonPlayingPlayerlist];
                    newSittingOut = [];
        
                    for (let i = sittingOutCopy.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                        [sittingOutCopy[i], sittingOutCopy[j]] = [sittingOutCopy[j], sittingOutCopy[i]];  // Swap elements
                    }
                } else {
                    // IT WORKS AND FINAL TWO MATCHES ARE ADDED TO THE ARRAY
                    //console.log('It worked motherfucker!')
                    newSittingOut.push(...sittingOutCopy);
                    isNotSuccess = false; // Break out of the while loop
                }
            } else {
                for (var j=sittingOutCopy.length-1; j>-1; j--){
                    // Checks if players in the previous match are present in the next match
                    var isAnyPresent = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[j].includes(name));
                    // Returns TRUE if name is present
    
                    if (isAnyPresent === false) {
                        // The players are not present and are added to array
                        newSittingOut.push(sittingOutCopy[j]);
                        sittingOutCopy.splice(j,1);
                        break;
                    }
                }
            }
            telleverket++;
        }
    
        
    // Setting up a new matches based on the new sittingOut array
    const finalMatchesArray = [];
    const indexArray = [];

    for (let i=0; i < newSittingOut.length; i++) {
        // i is the sittingout variable 

        for (let j=0; j < newSittingOut.length; j++) {
            // Finding the same sittingOut in the original sittingOut array

            if (newSittingOut[i] === nonPlayingPlayerlist[j]) {

                if (indexArray.indexOf(j) === -1) {
                    // If not already selected add the match to final matches array and add J to array
                    finalMatchesArray.push(newMatchesArray[j*2], newMatchesArray[j*2+1]);
                    indexArray.push(j);
                    break;
                }
            }
        }
    }
    // Saving new info to variable
    matchesArray = [...finalMatchesArray];
    var nonPlayingPlayerlist = [...newSittingOut];
    } else {
        // Less than 6 players
        matchesArray = [...newMatchesArray];

    }

    console.log('MatchesArray: ', matchesArray);
    console.log('Sitting Out: ', nonPlayingPlayerlist);

    sessionStorage.setItem('matchesArray', JSON.stringify(matchesArray));
    sessionStorage.setItem('nonPlayingPlayerlist', JSON.stringify(nonPlayingPlayerlist));

    if (gameSummary[2] === 'single') {
        // Single play

        //Displaying the players 
        playerOne.textContent = matchesArray[0][0];
        playerTwo.textContent = matchesArray[0][1];
        playerThree.textContent = matchesArray[1][0];
        playerFour.textContent = matchesArray[1][1];

        if (players.length > 4) {
            //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[0].join(', ');
            sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[0].join(', ');
        }
 
    } else if (gameSummary[2] === 'double' && gameSummary[3] === '1'){
        // Double play and one court 

        playerOne.textContent = matchesArray[0][0];
        playerOneOne.textContent = matchesArray[0][1];
        playerTwo.textContent = matchesArray[1][0];
        playerTwoTwo.textContent = matchesArray[1][1];

        if (nonPlayingPlayerlist.length > 0 && nonPlayingPlayerlist[0] != 0) {
            //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[0].join(', ');
            sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[0].join(', ');
        }

    } else if (gameSummary[2] === 'double' && gameSummary[3] === '2') {
        console.log("Double og to baner!! Tjohei!")

    }
}

function doubleTwoCourtGenerator(players) {
    // Function which sets up all the matches with double two courts and sitting out

    const playerOne = document.getElementById("player1");
    const playerOneOne = document.getElementById("player2");
    const playerTwo = document.getElementById("player3");
    const playerTwoTwo = document.getElementById("player4");
    const playerThree = document.getElementById("player5");
    const playerThreeThree = document.getElementById("player6");
    const playerFour = document.getElementById("player7");
    const playerFourFour = document.getElementById("player8");
    const sittingOut = document.getElementById("sittingOut");

    var matchesArray = [];
    
    // Setting up the matches
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {

            // create an array of game players and add to an array
            const currentMatch = [players[i], players[j]];
            matchesArray.push(currentMatch);
        };
    };

    // Shuffling the matchesArray
    for (let i = matchesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
        [matchesArray[i], matchesArray[j]] = [matchesArray[j], matchesArray[i]];  // Swap elements
    };

    //console.log("Her er første matchesArray: ", matchesArray);

    // Sets up the matches to make sure a player is not present in two sets of matches
    
    var newMatchesArray = [];
    var matchesCopy = [...matchesArray];
    var matchesNOTSuccess = true;
    var telleverk = 0;

    while (matchesNOTSuccess) {
        //console.log('Telleverk: ', telleverk);
    
        // Reset newMatchesArray for each attempt
        newMatchesArray = [];
        var temporaryMatches = [];
        var restMatches = [];

        // Check if matchesArray has an odd number of matches
        //console.log('Her er oppdatert matchesCopy: ', matchesCopy);

        if (telleverk > 500) {
            //console.log('Telleverket er: ', telleverk);
            matchesNOTSuccess = false;
        }

        outermostLoop: // This is a label for the outermost loop  
        for (let i = 0; i < matchesArray.length; i++) {
            outerLoop:

            if (matchesCopy.length > 0) {
                // Add the first match to the temporary array
                temporaryMatches.push(matchesCopy[0]);

                if (matchesCopy.length < 2) {
                    //console.log("Under 2 spillere som ved 10 spillere!")

                    // Unique players in remaining matches and added to list
                    restMatches.push(...matchesCopy);
                    //console.log('Her er restMatches: ', restMatches);
                    //console.log('Her er rest av matchesCopy: ', matchesCopy);
                    //console.log('Her er newArray: ', newMatchesArray);
                    //console.log('Nå breakes det!!')
                    //break outermostLoop; // Breaks out of all loops and continues with the outermost loop
                    matchesNOTSuccess = false;
                    break outermostLoop;

                }

                // Players in the first match
                const playersInFirstMatch = new Set(temporaryMatches[0]);
    
                let matchesFound = false;
    
                // Find the second match that does not include players in the first match
                for (let j = 1; j < matchesCopy.length; j++) {
                    const secondMatch = matchesCopy[j];
    
                    // Check if any player in the first match is present in the second match
                    const hasConflict = secondMatch.some(player => playersInFirstMatch.has(player));
            
                    if (!hasConflict) {
                        // Add the match to the temporary array and save the players
                        temporaryMatches.push(matchesCopy[j]);
                        const playersInSecondMatch = new Set(temporaryMatches[1]);

                        for (let k = 1; k < matchesCopy.length; k++) {
                            const thirdMatch = matchesCopy[k];

                            // Check if any player in the first match is present in the third match
                            const hasConflict1 = thirdMatch.some(player => playersInFirstMatch.has(player));

                            // Check if any player in the first match is present in the third match
                            const hasConflict2 = thirdMatch.some(player => playersInSecondMatch.has(player));

                            if (!hasConflict1 && !hasConflict2) {
                                // Add the match to the temporary array and save the players
                                temporaryMatches.push(matchesCopy[k]);
                                const playersInThirdMatch = new Set(temporaryMatches[2]);
                                //console.log('First match: ', temporaryMatches[0]);
                                //console.log('SecondMatch: ', secondMatch);
                                //console.log('Thirdmatch: ', thirdMatch);

                                if (matchesCopy.length < 4) {
                                    // Less than 4 players 

                                    // Unique players in remaining matches and added to list
                                    restMatches.push(...matchesCopy);
                                    //console.log('Her er restMatches: ', restMatches);
                                    //console.log('Her er rest av matchesCopy: ', matchesCopy);
                                    //console.log('Her er newArray: ', newMatchesArray);
                                    //console.log('Nå breakes det!!')
                                    //break outermostLoop; // Breaks out of all loops and continues with the outermost loop
                                    matchesNOTSuccess = false;
                                    break outermostLoop;
                                }

                                for (let l = 1; l < matchesCopy.length; l++) {
                                    const fourthMatch = matchesCopy[l];

                                    // Check if any player in the first match is present in the fourth match
                                    const hasConflict1 = fourthMatch.some(player => playersInFirstMatch.has(player));

                                    // Check if any player in the second match is present in the fourth match
                                    const hasConflict2 = fourthMatch.some(player => playersInSecondMatch.has(player));

                                    // Check if any player in the third match is present in the fourth match
                                    const hasConflict3 = fourthMatch.some(player => playersInThirdMatch.has(player));   


                                    if (!hasConflict1 && !hasConflict2 && !hasConflict3) {
                                        // Successfull! Add the matches to newArray and remove from copy Array
                                        
                                        temporaryMatches.push(matchesCopy[l]);

                                        // Add matches to newMatchesArray
                                        newMatchesArray.push(...temporaryMatches);
                                        //console.log('Her er temporary matches helt inn: ', temporaryMatches);
                                        //console.log('Her er newmatches helt inn: ', newMatchesArray);
                                        //console.log('Her er matchesCopy helt inn: ', matchesCopy);
                
                                        // Remove all elements in the temporary array
                                        temporaryMatches = [];

                                        // Create an array to sort the order to make sure elements are removed in correct order
                                        var indexArray = []
                                        indexArray.push(l,k,j);
                                        indexArray.sort((a, b) => b - a);

                                        // Remove the matches in matchesCopy
                                        matchesCopy.splice(indexArray[0], 1);
                                        matchesCopy.splice(indexArray[1], 1);
                                        matchesCopy.splice(indexArray[2], 1);
                                        matchesCopy.splice(0, 1);

                                        // Matches are found! 
                                        matchesFound = true;
                                        //console.log('MatchesFound: ', matchesFound);
                                        //console.log('Her er temporary matches før ny runde ', temporaryMatches);
                                        //console.log('Her er newmatches før ny runde: ', newMatchesArray);
                                        //console.log('Her er matchesCopy før ny runde: ', matchesCopy);

                                        break outerLoop; // Breaks out of all loops and continues with the outermost loop  
                                    }

                                    if (l === matchesCopy.length - 1) {
                                        // No more matches and restart
                                        //console.log("Ikke flere kamper!!")

                                        break outermostLoop; // It did not work and neet to restart!

                                    };
                                };
                            };
                        };
                    };
                };

                // If we cannot find valid matcher, break and reshuffle
                if (!matchesFound) {
                    //console.log("No valid matches, reshuffling...");
                    break;
                };
    
            } else {
                //console.log("No more matches to process.");
                break;
            }
        }
    
        // Check if all matches are set up successfully
        if (matchesArray.length === newMatchesArray.length || restMatches.length != 0) {
            //console.log('Let me break free!');

            matchesNOTSuccess = false;  // Success! Break the loop.
    
        } else {
            // Shuffle the matches and try again
            //console.log("Reshuffling and retrying...");
    
            for (let i = matchesArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                [matchesArray[i], matchesArray[j]] = [matchesArray[j], matchesArray[i]];  // Swap elements
            }
    
            matchesCopy = [...matchesArray];  // Reset matchesCopy to try again
            //console.log('Her er shuffla matchesCopy: ', matchesCopy)
            
            newMatchesArray.splice(0, newMatchesArray.length);  // Empty the newMatchesArray for the next attempt
            //console.log('Her er er tom newMatchesArray klar for ny runde: ', matchesArray)
        }

        telleverk++;
    }

    // Adding remaining matches to the last game 
    if (restMatches.length != 0) {

        if (restMatches.length === 1 && matchesCopy.length === 1) {
            outerLoop:
            for (i = 0; i < matchesArray.length; i++) {
                const playersRestMatch1 = new Set(restMatches[0]);
                
                const match1 = matchesArray[i];            
                const restConflict1 = match1.some(player => playersRestMatch1.has(player));

                if (!restConflict1) {
                    // Match two is found and added to the list 
                    restMatches.push(match1)
                    const playersRestMatch2 = new Set(match1)

                    for (j = 2; j < matchesArray.length; j++) {

                        const match2 = matchesArray[j];
                        const restConflict2 = match2.some(player => playersRestMatch1.has(player));
                        const restConflict3 = match2.some(player => playersRestMatch2.has(player));

                        if (!restConflict2 && !restConflict3) {
                            // Match three is found and added to the list 
                            restMatches.push(match2);
                            const playersRestMatch3 = new Set(match2);

                            for (k = 0; k < matchesArray.length; k++) {

                                const match3 = matchesArray[k];
                                const restConflict2 = match3.some(player => playersRestMatch1.has(player));
                                const restConflict3 = match3.some(player => playersRestMatch2.has(player));
                                const restConflict4 = match3.some(player => playersRestMatch3.has(player));

                                if (!restConflict2 && !restConflict3 && !restConflict4) {
                                    // Add the latest match to list and push to new matchesArray

                                    restMatches.push(match3);
                                    newMatchesArray.push(...restMatches);

                                    break outerLoop; // Break free
                                }
                            }
                        }
                    }
                }
            }
        }

        if (restMatches.length === 3 && matchesCopy.length === 3) {
            for (i = 0; i < matchesArray.length; i++) {
                const playersRestMatch1 = new Set(matchesCopy[0]);
                const playersRestMatch2 = new Set(matchesCopy[1]);
                const playersRestMatch3 = new Set(matchesCopy[2]);
    
                //console.log('Here er restmatch 1: ', matchesCopy[0]);
                //console.log('Here er restmatch 2: ', matchesCopy[1]);
                //console.log('Here er restmatch 3: ', matchesCopy[2]);
                
                const currentMatch = matchesArray[i];            
    
                const restConflict1 = currentMatch.some(player => playersRestMatch1.has(player));
                const restConflict2 = currentMatch.some(player => playersRestMatch2.has(player));
                const restConflict3 = currentMatch.some(player => playersRestMatch3.has(player));
    
                //console.log('RestMatches: ', restMatches);
                //console.log('Current Match: ', currentMatch);
                //console.log('RestConflict1: ', restConflict1);
                //console.log('RestConflict2: ', restConflict2);
                //console.log('RestConflict3: ', restConflict3);
    
                if (!restConflict1 && !restConflict2 && !restConflict3) {
                    // Adding it to restMatches and push to newMatches 
                    restMatches = [];
                    restMatches.push(...matchesCopy, currentMatch);
                    newMatchesArray.push(...restMatches);
                    break;
                }
            }
        }

    }

    //console.log('Her er final newMatchesArray: ', newMatchesArray);
    //console.log('Her er rest matches: ', restMatches);

    // Sets up the sittingout array based on the playing matches 
    var newSittingOutCopy = [];

    if (players.length > 8) {
        for (let i = 0; i < newMatchesArray.length; i += 4) {  // Loop through every two matches
        
            // Ensure there are at least two matches to process
            if (i + 3 < newMatchesArray.length) {
                const currentPlayers = [...newMatchesArray[i], ...newMatchesArray[i + 1], ...newMatchesArray[i + 2], ...newMatchesArray[i + 3],];
        
                // Find the players who are not part of the current two matches
                const currentSittingOut = players.filter(player => !currentPlayers.includes(player));
        
                // Add the players sitting out in this round to the sittingOut array
                newSittingOutCopy.push(currentSittingOut);
            }
        }
    }

    //console.log('SittingOut: ', newSittingOutCopy);

    // Optmising the sitting out array to ensure players are not on the bench several games
    var sittingOutCopy = [...newSittingOutCopy];
    var newSittingOut = [];
    var isNotSuccess = true;
    var telleverket = 0;
    //console.log('Player length: ', players.length)
    
    if (players.length > 9) {
        while (isNotSuccess) {
            //console.log('Telleverket: ', telleverket);

            if(telleverket > 76) {
                // Shuffle if not found solution
                sittingOutCopy = [...newSittingOutCopy];
                newSittingOut = [];
    
                for (let i = sittingOutCopy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                    [sittingOutCopy[i], sittingOutCopy[j]] = [sittingOutCopy[j], sittingOutCopy[i]];  // Swap elements
                }
                //console.log('Her er ny sittingOutCopy: ', sittingOutCopy);
                //console.log('Her er ny newSittingOut: ', newSittingOut);
                telleverket = 0;

            };

            if (newSittingOut.length < 1) {
                // Adding the first match to the array and removes it from original array
                newSittingOut.push(sittingOutCopy[0]);
                sittingOutCopy.splice(0,1);   
            };

            // If the two last matches have the same players -> shuffle the array and start again
            if (sittingOutCopy.length < 3){
                //console.log('Halloi!')
                var isAnyPresent1 = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[sittingOutCopy.length-2].includes(name));
                var isAnyPresent2 = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[sittingOutCopy.length-1].includes(name));
                var isAnyPresent3 = sittingOutCopy[sittingOutCopy.length-2].some(name => sittingOutCopy[sittingOutCopy.length-1].includes(name));
                
                /*
                console.log('Her er siste i newSittingOut: ', newSittingOut[newSittingOut.length-1]);
                console.log('Her er nest siste i sittingOutCopy: ', sittingOutCopy[sittingOutCopy.length-2]);
                console.log('Her er siste i sittingOutCopy: ', sittingOutCopy[sittingOutCopy.length-1]);
                console.log('isAny: ', isAnyPresent1);
                console.log('isAny: ', isAnyPresent2);
                console.log('isAny: ', isAnyPresent3);
                */

                if (isAnyPresent1 === true || isAnyPresent2 === true || isAnyPresent3 === true){
                    // Time for shuffling and restart...
                    sittingOutCopy = [...newSittingOutCopy];
                    newSittingOut = [];
        
                    for (let i = sittingOutCopy.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));  // Generate a random index
                        [sittingOutCopy[i], sittingOutCopy[j]] = [sittingOutCopy[j], sittingOutCopy[i]];  // Swap elements
                    }
                } else {
                    // IT WORKS AND FINAL TWO MATCHES ARE ADDED TO THE ARRAY
                    //console.log('It worked motherfucker!')
                    newSittingOut.push(...sittingOutCopy);
                    isNotSuccess = false; // Break out of the while loop
                }
            } else {
                for (var j=sittingOutCopy.length-1; j>-1; j--){
                    // Checks if players in the previous match are present in the next match
                    var isAnyPresent = newSittingOut[newSittingOut.length-1].some(name => sittingOutCopy[j].includes(name));
                    // Returns TRUE if name is present
    
                    if (isAnyPresent === false) {
                        // The players are not present and are added to array
                        newSittingOut.push(sittingOutCopy[j]);
                        sittingOutCopy.splice(j,1);
                        break;
                    }
                }
            }
            telleverket++;
        } 
    }
    
    // Setting up a new matches based on the new sittingOut array
    var finalMatchesArray = [];
    const index = [];

    if (players.length > 9) {
        for (let i=0; i < newSittingOut.length; i++) {
            // i is the sittingout variable 
    
            for (let j=0; j < newSittingOut.length; j++) {
                // Finding the same sittingOut in the original sittingOut array
    
                if (newSittingOut[i] === newSittingOutCopy[j]) {
    
                    if (index.indexOf(j) === -1) {
                        // If not already selected add the match to final matches array and add J to array
                        finalMatchesArray.push(newMatchesArray[j*4], newMatchesArray[j*4+1], newMatchesArray[j*4+2], newMatchesArray[j*4+3]);
                        index.push(j);
                        console.log('FinalMatchesArray i loop: ', finalMatchesArray);
                        break;
                    }
                }
            } 
        };
    } else {
        //console.log('newMatchesArray: ', newMatchesArray);
        finalMatchesArray = [...newMatchesArray];

        if (players.length > 8) {
            newSittingOut = [...newSittingOutCopy];
        }
    }

    //console.log('finalmatchesArray: ', finalMatchesArray)
    // Saving new info to variable
    matchesArray = [...finalMatchesArray];
    if (players.length > 8) {
        var nonPlayingPlayerlist = [...newSittingOut];
        sessionStorage.setItem('nonPlayingPlayerlist', JSON.stringify(nonPlayingPlayerlist));
    }

    console.log('MatchesArray: ', matchesArray);
    console.log('Sitting Out: ', nonPlayingPlayerlist);

    sessionStorage.setItem('matchesArray', JSON.stringify(matchesArray));

    playerOne.textContent = matchesArray[0][0];
    playerOneOne.textContent = matchesArray[0][1];
    playerTwo.textContent = matchesArray[1][0];
    playerTwoTwo.textContent = matchesArray[1][1];
    playerThree.textContent = matchesArray[2][0];
    playerThreeThree.textContent = matchesArray[2][1];
    playerFour.textContent = matchesArray[3][0];
    playerFourFour.textContent = matchesArray[3][1];

    if (players.length > 8) {
        //sittingOut.textContent = "Sitting out: " + nonPlayingPlayerlist[0].join(', ');
        sittingOut.innerHTML = "<strong>Sitting out:</strong> " + nonPlayingPlayerlist[0].join(', ');
    }

}

function doubleThreeCourtGenerator(players) {
    // Use same logic as for doubleTwoCourtGenerator to set up the matches 

}

function updateScoreCourt1() {
    // function which updates the score for court 1
    const scoreInput1 = document.getElementById("scoreInput1");
    const scoreInput2 = document.getElementById("scoreInput2");
    const nextMatchButton = document.getElementById("nextMatchButton");


    let value1 = parseInt(scoreInput1.value) || 0;
    let value2 = parseInt(scoreInput2.value) || 0;

    const gamePoints = gameSummary[1];  // Assume gameSummary[1] is set elsewhere
    const gameScoreCourt1 = [];

    if (value1 > gamePoints || value2 > gamePoints) {
        const error = 'Max score is ' + gamePoints + '. Please enter a valid score.';
        showError(error); // Display error message
        nextMatchButton.disabled = true; // disable nextMatchButton
    } else {
        clearError();

        if (document.activeElement === scoreInput1 && value1 > 0) {
            scoreInput2.value = gamePoints - value1;
        } else if (document.activeElement === scoreInput2 && value2 > 0) {
            scoreInput1.value = gamePoints - value2;
        }

        // Update values in the gameScoreCourt1 array
        value1 = parseInt(scoreInput1.value);
        value2 = parseInt(scoreInput2.value);
        gameScoreCourt1.push(value1, value2);

        // Store the scores in session storage
        sessionStorage.setItem('gameScoreCourt1', JSON.stringify(gameScoreCourt1));
        sessionStorage.setItem('scoreInput1', scoreInput1.value);
        sessionStorage.setItem('scoreInput2', scoreInput2.value);

        // Enable and disable the nextbutton
        if (gameSummary[2] === "single" && gameSummary[3] === "1") {
            // Single and 1 court 
            nextMatchButton.disabled = !(scoreInput1.value);

        } else if (gameSummary[2] === "double" && gameSummary[3] === "1") {
            // Single and 2 court
            nextMatchButton.disabled = !(scoreInput1.value);
        } else {
            // Two courts 
            // Enable button if both scores are entered
            nextMatchButton.disabled = !(scoreInput1.value && scoreInput2.value);

            // Enable button if all required scores are entered
            const court1Filled = scoreInput1.value && scoreInput2.value;
            const court2Filled =  document.getElementById("scoreInput3").value && document.getElementById("scoreInput4").value;
            nextMatchButton.disabled = !(court1Filled && court2Filled);
        }

    }
}

function updateScoreCourt2() {
    // function which updates the score fro court 2
    const scoreInput3 = document.getElementById("scoreInput3");
    const scoreInput4 = document.getElementById("scoreInput4");
    const nextMatchButton = document.getElementById("nextMatchButton");

    let value3 = parseInt(scoreInput3.value) || 0;
    let value4 = parseInt(scoreInput4.value) || 0;

    const gamePoints = gameSummary[1];  // Assume gameSummary[1] is set elsewhere
    const gameScoreCourt2 = [];

    if (value3 > gamePoints || value4 > gamePoints) {
        const error = 'Max score is ' + gamePoints + '. Please enter a valid score.';
        showError(error); // Display error message
        nextMatchButton.disabled = true; // disable nextMatchButton
    } else {
        clearError();

        if (document.activeElement === scoreInput3 && value3 > 0) {
            scoreInput4.value = gamePoints - value3;
        } else if (document.activeElement === scoreInput4 && value4 > 0) {
            scoreInput3.value = gamePoints - value4;
        }

        // Update values in the gameScoreCourt1 array
        value3 = parseInt(scoreInput3.value);
        value4 = parseInt(scoreInput4.value);
        gameScoreCourt2.push(value3, value4);

        // Store the scores in session storage
        sessionStorage.setItem('gameScoreCourt2', JSON.stringify(gameScoreCourt2));
        sessionStorage.setItem('scoreInput3', scoreInput3.value);
        sessionStorage.setItem('scoreInput4', scoreInput4.value);

        // Enable button if all required scores are entered
        const court1Filled = document.getElementById("scoreInput1").value && document.getElementById("scoreInput2").value;
        const court2Filled = scoreInput3.value && scoreInput4.value;
        nextMatchButton.disabled = !(court1Filled && court2Filled);
    
    }
}

function updateScoreCourt3() {
    // Code for updateScoreCourt 3

}

function updateLeaderboard() {
    // function which takes the update score info and update the gameObject 
    const matchesArray = JSON.parse(sessionStorage.getItem('matchesArray'));
    let gamesPlayed = parseInt(sessionStorage.getItem('gamesPlayed'));
    const gameScoreCourt1 = JSON.parse(sessionStorage.getItem('gameScoreCourt1'));
    const gameScoreCourt2 = JSON.parse(sessionStorage.getItem('gameScoreCourt2'));

    if (gameSummary[0] == 'americano' && gameSummary[2] === 'single' && players.length === 2) {
        // Single for two players 
        players.forEach((player, index) => {
            if (!gameObject[player]) {
                // Initialize player in gameObject if not already present
                gameObject[player] = { score: 0, games: 0 };
            }
        
            // Update player score and games count
            gameObject[player].score += gameScoreCourt1[index];
            gameObject[player].games += 1; // Increment the number of games played
        });

        // Update win and lost info
        if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
            // Player one won
            gameObject[players[0]].win += 1;
            gameObject[players[1]].lost += 1;

        } else {
            // Player two won
            gameObject[players[0]].lost += 1;
            gameObject[players[1]].win += 1;
        }
        //console.log(gameObject);

    } else if (gameSummary[0] == 'americano' && gameSummary[2] === 'single' && gameSummary[3] === '1') {
        // Update the score for single play on one court

        matchesArray[gamesPlayed].forEach((player, index) => {
            gameObject[player] 
            gameObject[player].score += gameScoreCourt1[index];
            gameObject[player].games += 1; // Increment the number of games played
        });  

        // Update win and lost info
        if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
            // Player one won
            gameObject[matchesArray[gamesPlayed][0]].win += 1;
            gameObject[matchesArray[gamesPlayed][1]].lost += 1;

        } else {
            // Player two won
            gameObject[matchesArray[gamesPlayed][0]].lost += 1;
            gameObject[matchesArray[gamesPlayed][1]].win += 1;
        }

    } else if (gameSummary[0] == 'americano' && gameSummary[2] === 'single' && gameSummary[3] == '2') {
        // Update the score for singel play with two courts

        if (gamesPlayed === 0) {
            // first round
            // First court
            matchesArray[gamesPlayed].forEach((player, index) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt1[index];
                gameObject[player].games += 1; // Increment the number of games played
            });  
        
            // Second court
            matchesArray[gamesPlayed+1].forEach((player, index) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt2[index];
                gameObject[player].games += 1; // Increment the number of games played
            }); 
            
            // Update win and lost info on first court
            if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                // Player one won
                gameObject[matchesArray[0][0]].win += 1;
                gameObject[matchesArray[0][1]].lost += 1;

            } else {
                // Player two won
                gameObject[matchesArray[0][0]].lost += 1;
                gameObject[matchesArray[0][1]].win += 1;
            }
            
            // Update win and lost info on second court
            if (gameScoreCourt2[0] > gameScoreCourt2[1]) {
                // Player one won
                gameObject[matchesArray[1][0]].win += 1;
                gameObject[matchesArray[1][1]].lost += 1;

            } else {
                // Player two won
                gameObject[matchesArray[1][0]].lost += 1;
                gameObject[matchesArray[1][1]].win += 1;
            }

            //console.log(gameObject);

        } else {
            // All games except the first match 

            if (gamesPlayed < 2) {
                // Second match
                const gameNumber = gamesPlayed + 1;

                // First court
                matchesArray[gameNumber].forEach((player, index) => {
                    gameObject[player] 
                    gameObject[player].score += gameScoreCourt1[index];
                    gameObject[player].games += 1; // Increment the number of games played
                });  
                
                // Second court
                matchesArray[gameNumber+1].forEach((player, index) => {
                    gameObject[player] 
                    gameObject[player].score += gameScoreCourt2[index];
                    gameObject[player].games += 1; // Increment the number of games played
                });  

                // Update win and lost info on first court
                if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                    // Player one won
                    gameObject[matchesArray[gameNumber][0]].win += 1;
                    gameObject[matchesArray[gameNumber][1]].lost += 1;

                } else {
                    // Player two won
                    gameObject[matchesArray[gameNumber][0]].lost += 1;
                    gameObject[matchesArray[gameNumber][1]].win += 1;
                }
                
                // Update win and lost info on second court
                if (gameScoreCourt2[0] > gameScoreCourt2[1]) {
                    // Player one won
                    gameObject[matchesArray[gameNumber+1][0]].win += 1;
                    gameObject[matchesArray[gameNumber+1][1]].lost += 1;

                } else {
                    // Player two won
                    gameObject[matchesArray[gameNumber+1][0]].lost += 1;
                    gameObject[matchesArray[gameNumber+1][1]].win += 1;
                }
                
                //console.log(gameObject);

            } else {
                // Rest of the matches 
                const gameNumber = gamesPlayed * 2;

                // First court
                matchesArray[gameNumber].forEach((player, index) => {
                    gameObject[player] 
                    gameObject[player].score += gameScoreCourt1[index];
                    gameObject[player].games += 1; // Increment the number of games played
                });  
                
                // Second court
                matchesArray[gameNumber+1].forEach((player, index) => {
                    gameObject[player] 
                    gameObject[player].score += gameScoreCourt2[index];
                    gameObject[player].games += 1; // Increment the number of games played
                });  

                // Update win and lost info on first court
                if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                    // Player one won
                    gameObject[matchesArray[gameNumber][0]].win += 1;
                    gameObject[matchesArray[gameNumber][1]].lost += 1;

                } else {
                    // Player two won
                    gameObject[matchesArray[gameNumber][0]].lost += 1;
                    gameObject[matchesArray[gameNumber][1]].win += 1;
                }
                
                // Update win and lost info on second court
                if (gameScoreCourt2[0] > gameScoreCourt2[1]) {
                    // Player one won
                    gameObject[matchesArray[gameNumber+1][0]].win += 1;
                    gameObject[matchesArray[gameNumber+1][1]].lost += 1;

                } else {
                    // Player two won
                    gameObject[matchesArray[gameNumber+1][0]].lost += 1;
                    gameObject[matchesArray[gameNumber+1][1]].win += 1;
                }
                
            }
        }

    } else if (gameSummary[0] == 'americano' && gameSummary[2] === 'double' && gameSummary[3] == '1') {
        // Update the score for americano, double on one court

        if (gamesPlayed === 0) {
       
            // Update score and games played for both players in the first match
            matchesArray[gamesPlayed].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[0]; 
                gameObject[player].games += 1;  
            }); 
            
            matchesArray[gamesPlayed+1].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[1]; 
                gameObject[player].games += 1;  
            });  

            // Update win and lost info on first court
            if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                // Players one won
                gameObject[matchesArray[0][0]].win += 1;
                gameObject[matchesArray[0][1]].win += 1;
                gameObject[matchesArray[1][0]].lost += 1;
                gameObject[matchesArray[1][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[0][0]].lost += 1;
                gameObject[matchesArray[0][1]].lost += 1;
                gameObject[matchesArray[1][0]].win += 1;
                gameObject[matchesArray[1][1]].win += 1;
            }
        

        } else {
            // Update the score for the rest of the matches 

            var gameNumber = gamesPlayed * 2;

            matchesArray[gameNumber].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[0]; 
                gameObject[player].games += 1;  
            }); 
            
            matchesArray[gameNumber+1].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[1]; 
                gameObject[player].games += 1;  
            });  

            // Update win and lost info on first court
            if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                // Players one won
                gameObject[matchesArray[gameNumber][0]].win += 1;
                gameObject[matchesArray[gameNumber][1]].win += 1;
                gameObject[matchesArray[gameNumber+1][0]].lost += 1;
                gameObject[matchesArray[gameNumber+1][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[gameNumber][0]].lost += 1;
                gameObject[matchesArray[gameNumber][1]].lost += 1;
                gameObject[matchesArray[gameNumber+1][0]].win += 1;
                gameObject[matchesArray[gameNumber+1][1]].win += 1;
            }
        
        };     
               
    } else if (gameSummary[0] == 'americano' && gameSummary[2] === 'double' && gameSummary[3] == '2') {
        // Update the score for americano, double on two courts

        if (gamesPlayed === 0) {
       
            // Update score and games: court 1
            matchesArray[gamesPlayed].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[0]; 
                gameObject[player].games += 1;  
            }); 
            
            matchesArray[gamesPlayed+1].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[1]; 
                gameObject[player].games += 1;  
            });  

            // Update score and games: court 2
            matchesArray[gamesPlayed+2].forEach((player) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt2[0];
                gameObject[player].games += 1; // Increment the number of games played
            });  

            matchesArray[gamesPlayed+3].forEach((player) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt2[1];
                gameObject[player].games += 1; // Increment the number of games played
            });  

            // Update win and lost info on first court
            if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                // Players one won
                gameObject[matchesArray[0][0]].win += 1;
                gameObject[matchesArray[0][1]].win += 1;
                gameObject[matchesArray[1][0]].lost += 1;
                gameObject[matchesArray[1][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[0][0]].lost += 1;
                gameObject[matchesArray[0][1]].lost += 1;
                gameObject[matchesArray[1][0]].win += 1;
                gameObject[matchesArray[1][1]].win += 1;
            }
            
            // Update win and lost info on second court
            if (gameScoreCourt2[0] > gameScoreCourt2[1]) {
                // Players one won
                gameObject[matchesArray[2][0]].win += 1;
                gameObject[matchesArray[2][1]].win += 1;
                gameObject[matchesArray[3][0]].lost += 1;
                gameObject[matchesArray[3][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[2][0]].lost += 1;
                gameObject[matchesArray[2][1]].lost += 1;
                gameObject[matchesArray[3][0]].win += 1;
                gameObject[matchesArray[3][1]].win += 1;
            }
        
            
        } else {
            // Update the score for the rest of the matches 

            var gameNumber = gamesPlayed * 4;

            // Update score and games: court 1
            matchesArray[gameNumber].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[0]; 
                gameObject[player].games += 1;  
            }); 
            
            matchesArray[gameNumber+1].forEach(player => {
                // Update the score and games played for the player
                gameObject[player].score += gameScoreCourt1[1]; 
                gameObject[player].games += 1;  
            });  

            // Update score and games: court 2
            matchesArray[gameNumber+2].forEach((player) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt2[0];
                gameObject[player].games += 1; // Increment the number of games played
            });  

            matchesArray[gameNumber+3].forEach((player) => {
                gameObject[player] 
                gameObject[player].score += gameScoreCourt2[1];
                gameObject[player].games += 1; // Increment the number of games played
            });  
            
                        // Update win and lost info on first court
            if (gameScoreCourt1[0] > gameScoreCourt1[1]) {
                // Players one won
                gameObject[matchesArray[gameNumber][0]].win += 1;
                gameObject[matchesArray[gameNumber][1]].win += 1;
                gameObject[matchesArray[gameNumber+1][0]].lost += 1;
                gameObject[matchesArray[gameNumber+1][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[gameNumber][0]].lost += 1;
                gameObject[matchesArray[gameNumber][1]].lost += 1;
                gameObject[matchesArray[gameNumber+1][0]].win += 1;
                gameObject[matchesArray[gameNumber+1][1]].win += 1;
            }
            
            // Update win and lost info on second court
            if (gameScoreCourt2[0] > gameScoreCourt2[1]) {
                // Players one won
                gameObject[matchesArray[gameNumber+2][0]].win += 1;
                gameObject[matchesArray[gameNumber+2][1]].win += 1;
                gameObject[matchesArray[gameNumber+3][0]].lost += 1;
                gameObject[matchesArray[gameNumber+3][1]].lost += 1;

            } else {
                // Players two won
                gameObject[matchesArray[gameNumber+2][0]].lost += 1;
                gameObject[matchesArray[gameNumber+2][1]].lost += 1;
                gameObject[matchesArray[gameNumber+3][0]].win += 1;
                gameObject[matchesArray[gameNumber+3][1]].win += 1;
            }
            
        };     
    }

    // Calculating the average score 
    players.forEach(player => {
        // Update player score and games count
        if (gameObject[player].games > 0) {
            let avg = gameObject[player].score / gameObject[player].games;
            gameObject[player].average = avg % 1 === 0 ? avg : (avg).toFixed(1);
        }
    });
    
    // Convert the object to an array for sorting
    const sortedArray = Object.entries(gameObject)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => {
    // First, compare scores
        if (b.score !== a.score) {
            return b.score - a.score; // Higher score first
        }
        // If scores are the same, compare wins
        return b.win - a.win; // Higher number of wins first
    });
    
    // Updating the the object based on score
    const sortedGameObject = {};
    sortedArray.forEach(player => {
        sortedGameObject[player.name] = { score: player.score, win: player.win, average: player.average, lost: player.lost, games: player.games };
    });

    // Checking if players have same score 
    players.forEach(player => {
        // Update player score and games count
        if (gameObject[player].games > 0) {
            let avg = gameObject[player].score / gameObject[player].games;
            gameObject[player].average = avg % 1 === 0 ? avg : (avg).toFixed(1);
        }
    });

    //console.log('Her er oppdatert object etter score: ', sortedGameObject);

    // ________updating the leaderboard___________  
    //let tableBody = document.getElementById("leaderboardBody");


    // Sets the heading
    //tableBody.innerHTML = "<tr><th>Player</th><th>G</th><th>W</th><th>L</th><th>Avg.</th><th>Score</th></tr>";

    /*
    // Iterate over the object and populate the table
    for (let player in sortedGameObject) {
        if (sortedGameObject.hasOwnProperty(player)) {
            let playerData = sortedGameObject[player];
            let row = `<tr><td><strong>${player}</strong></td><td>${playerData.games}</td><td>${playerData.win}</td><td>${playerData.lost}</td><td>${playerData.average}</td><td>${playerData.score}</td></tr>`;
            tableBody.innerHTML += row;
        }
    }*/

    showLeaderboard(sortedGameObject);

}

function nextMatch() {
    const scoreInput1 = document.getElementById("scoreInput1");
    const scoreInput2 = document.getElementById("scoreInput2");
    const scoreInput3 = document.getElementById("scoreInput3");
    const scoreInput4 = document.getElementById("scoreInput4");
    const leaderboard = document.getElementById("leaderboardFieldset");
    let infoFieldset = document.getElementById("infoFieldset");
    var value1 = parseInt(scoreInput1.value) || 0;
    var value2 = parseInt(scoreInput2.value) || 0;
    var value3 = parseInt(scoreInput3.value) || 0;
    var value4 = parseInt(scoreInput4.value) || 0;
    let gamesPlayed = sessionStorage.getItem('gamesPlayed');

    if (gameSummary[3] === '1' && value1 === 0 && value2 === 0) {
        // One court

        const error = "Please enter the final score.";
        showError(error); // Display error message

    } else if (gameSummary[3] === '2' && value1 === 0 && value2 === 0) {
        // Two court
        const error = "Please enter the final score.";
        showError(error); // Display error message

    } else if (gameSummary[3] === '2' && value3 === 0 && value4 === 0) {
        // Two court
        const error = "Please enter the final score.";
        showError(error); // Display error message
    
    } else { 
        clearError(); // Erease error message

        // Update the leaderboard 
        updateLeaderboard();

        // Hide leaderboard
        leaderboard.style.display = "none";  // Hide the fieldset

        // Hide info
        infoFieldset.style.display = "none";  // Hide the fieldset

        // Update the games played 
        gamesPlayed++;
        parseInt(sessionStorage.setItem('gamesPlayed', gamesPlayed)); 
    
        // Setting the score input as 0
        scoreInput1.value = "";
        scoreInput1.setAttribute("placeholder", "Score");
        scoreInput2.value = "";
        scoreInput2.setAttribute("placeholder", "Score");   

        if (gameSummary[3] === '2') {
            // Setting the score input as 0
            scoreInput3.value = "";
            scoreInput3.setAttribute("placeholder", "Score");
            scoreInput4.value = "";
            scoreInput4.setAttribute("placeholder", "Score");              
        }
        
        if (gameSummary[0] === 'americano' && gameSummary[2] === 'single') {
            // Single!
            americanoSingle();  
        
        } else if (gameSummary[0] === 'americano' && gameSummary[2] === 'double') {
            // Double!
            americanoDouble();

        }   
    }; 
    nextMatchButton.disabled = true; // disable nextMatchButton
    //document.querySelector("button[onclick='nextMatch()']").disabled = false; // Enable the "Next match" button
    document.getElementById("leaderboardButton").disabled = false;
} 

function showError(message) {
    let errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
    hasError = true;
    errorMessageElement.style.display = "block"; // Display the error message
    errorMessageElement.style.display = "flex";
}

function clearError() {
    let errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "";
    errorMessageElement.style.display = "none"; // Hide the error message
    hasError = false;
    document.querySelector("button[onclick='nextMatch()']").disabled = false; // Enable the "Next match" button
}

function infoFieldset() {
    let infoElement = document.getElementById("info");
    let infoFieldset = document.getElementById("infoFieldset");
    let gamesPlayed = parseInt(sessionStorage.getItem('gamesPlayed'));
    const matchesArray = JSON.parse(sessionStorage.getItem('matchesArray'));
    const text = "Type:"
    var noRounds = 0;
    var courtType = 0;
    var games = gamesPlayed + 1;

    if (gameSummary[0] === 'americano' && gameSummary[2] === 'single' && gameSummary[3] === '1') {
        // Americano, single, 1 court  
        courtType = "Single"; 
        if (players.length === 2) {
            noRounds = "";
        } else {
            noRounds = "<strong>No. of rounds: </strong>"+ games + '/' + matchesArray.length;
        }
    } else if (gameSummary[0] === 'americano' && gameSummary[2] === 'single' && gameSummary[3] === '2') {
        noRounds = "<strong>No. of rounds: </strong>" + games + '/' + matchesArray.length / 2;
        courtType = "Single";

    } else if (gameSummary[0] === 'americano' && gameSummary[2] === 'double') {
        noRounds = "<strong>No. of rounds: </strong>" + games + '/' + matchesArray.length / 2;
        courtType = "Double";
    }

    infoElement.innerHTML = "<strong>Type:</strong> " + "Americano" + "<br>" +
                            "<strong>Type of court(s):</strong> " + courtType + "<br>" + 
                            "<strong>No. of players:</strong> " + players.length + "<br>" + 
                            noRounds + "<br>"

    if (infoFieldset.style.display === "none") {
        infoFieldset.style.display = "block"; // Show the fieldset
        infoFieldset.style.display = "flex";
    } else {
        infoFieldset.style.display = "none";  // Hide the fieldset
    }
}

function hideShowLeaderboard() {
    const leaderboard = document.getElementById("leaderboardFieldset");
    if (leaderboard.style.display === "none") {
        leaderboard.style.display = "block"; // Show the fieldset
        leaderboard.style.display = "flex";
    } else {
        leaderboard.style.display = "none";  // Hide the fieldset
    }
}
