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
		if (energy > this.energy) {
			energy = this.energy
		}
		if (this.shield.strength + energy > this.shield.getMaxStrength()) {
			this.shield.strength = this.shield.getMaxStrength()
		} else {
			this.shield.strength += energy
		}
		this.energy -= energy
	},
	getEnergyFromShield: function(energy) {
		if (energy > this.shield.energy) {
			energy = this.shield.energy
		}
		if (this.shield.strength - energy < this.shield.getMinStrength()) {
			this.shield.strength = this.shield.getMinStrength()
		} else {
			this.shield.strength -= energy
		}
		this.energy += energy
	}
}