Game = function() {
    this.Klingons = 1
    this.Starbases = 1
    this.Stardates = 1
    this.location = {
        x: 1,
        y: 1
    }
    this.level = {
        novice: 5
    }
}

Game.prototype = {
    generator: function() {
        return Math.random()
    },
    randomGenerate: function(low, hi) {
        return Math.floor(this.generator() * hi);
    }
}