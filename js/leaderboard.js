function showLeaderboard (gameObject) {
    // Opprettet variabel med navn div som skal inneholde grid
    var div = document.createElement('div');

    // Oppretter ny class
    div.setAttribute('class', 'leaderboard-grid');

    div.style()

    // Legger div under main class
    document.querySelector('.table-container').appendChild(div);

    // leaderboard header
    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "Player";
    div.appendChild(d); // append d to div class

    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "G";
    div.appendChild(d); // append d to div class

    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "W";
    div.appendChild(d); // append d to div class

    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "L";
    div.appendChild(d); // append d to div class

    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "Avg.";
    div.appendChild(d); // append d to div class

    var d = document.createElement('div');
    d.setAttribute('class', 'leaderboard-header');
    d.innerHTML = "Score";
    div.appendChild(d); // append d to div class

    for (let i=0; i<Object.keys(gameObject).length; i++) {

        const playerName = Object.keys(gameObject)[i] // Get the player name (key)
        const playerData = gameObject[playerName]

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-players');
        d.innerHTML = `${playerName}`
        div.appendChild(d); // append d to div class

        // Get all keys from gameObject
        const keys = Object.keys(gameObject);
        console.log("Lenght: ", Object.keys(gameObject).length)

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-info');
        d.innerHTML = `${playerData.games}`;
        div.appendChild(d); // append d to div class

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-info');
        d.innerHTML = `${playerData.win}`
        div.appendChild(d); // append d to div class

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-info');
        d.innerHTML = `${playerData.lost}`
        div.appendChild(d); // append d to div class

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-info');
        d.innerHTML = `${playerData.average}`
        div.appendChild(d); // append d to div class

        var d = document.createElement('div');
        d.setAttribute('class', 'leaderboard-info');
        d.innerHTML = `${playerData.score}`
        div.appendChild(d); // append d to div class
    
    }
}