Ship = function(){
	this.energy = 100000
	this.engine = new Engine(this)
	this.shield = new Shield()
}

Ship.prototype = {
	getRemainingEnergy: function(){
		return this.energy
	},
	transferEnergyToShield : function(energy) {
		if (this.shield.strength + energy > this.shield.getMaxStrength()) {
			this.shield.strength = this.shield.getMaxStrength()
		} else {
			this.shield.strength += energy
		}
		this.energy -= energy
	}
}