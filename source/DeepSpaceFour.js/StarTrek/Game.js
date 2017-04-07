Game = function(level) {
    switch (level) {
        case 'novice':
            this.levelBound = 5
            break
        case 'intermediate':
            this.levelBound = 10
            break
        case 'expert':
            this.levelBound = 15
            break
        default:
            this.levelBound = 5
            break
    }

    this.Klingons = this.randomGenerate(0, this.levelBound)
    this.Starbases = this.randomGenerate(0, this.levelBound)
    this.Stardates = this.randomGenerate(0, this.levelBound)
    this.location = {
        x: this.randomGenerate(0, this.levelBound),
        y: this.randomGenerate(0, this.levelBound)
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