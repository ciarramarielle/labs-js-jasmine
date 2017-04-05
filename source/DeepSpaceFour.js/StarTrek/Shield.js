Shield = function() {
	this.raised = false
	this.strength = 0
	this.shipEnergyReserves = 10000
};

Shield.prototype = {
	raise: function() {
		this.raised = true
	},
	transferEnergy : function(energy) {
		if (energy > this.shipEnergyReserves) {
			energy = this.shipEnergyReserves
		}
		this.strength += energy
		this.shipEnergyReserves -= energy
	}
};