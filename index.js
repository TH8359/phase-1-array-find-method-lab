function superbowlWin(games){
let game = 0
while (game < games.length){
    if (games[game].result === "W"){
        return games[game].year
    }
    game++
}
}


Array.prototype.find(superbowlWin)