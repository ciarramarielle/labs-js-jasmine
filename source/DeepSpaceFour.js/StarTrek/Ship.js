Ship = function(){
	this.energy = 100000
	this.engine = new Engine()
	this.shield = new Shield()
}

Ship.prototype = {
	getRemainingEnergy: function(){
		return this.energy
	},
	transferEnergyToShield : function(energy) {
		// TODO: Test for min and max values of ship strength
		this.shield.strength += energy
		this.energy -= energy
	}
}