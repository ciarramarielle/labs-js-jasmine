Game = function(level) {
    switch (level) {
        case 'novice':
            this.levelBound = 5
        case 'intermediate':
            this.levelBound = 10
        case 'expert':
            this.levelBound = 15
        default:
            this.levelBound = 0
    }

    this.Klingons = 1
    this.Starbases = 1
    this.Stardates = 1
    this.location = {
        x: 1,
        y: 1
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