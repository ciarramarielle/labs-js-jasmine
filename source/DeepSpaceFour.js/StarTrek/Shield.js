Shield = function() {
	this.raised = false
	this.strength = 0
	this.shipEnergyReserves = 10000
};

Shield.prototype = {
	raise: function() {
		this.raised = true
	},
	lower: function() {
		this.raised = false
	},
	transferEnergy : function(energy) {
		if (energy > this.shipEnergyReserves) {
			// ship to shield
			energy = this.shipEnergyReserves
		} else if ((energy*-1) > this.strength) {
			// shield to ship
			energy = this.strength*-1
		}
		this.strength += energy
		this.shipEnergyReserves -= energy
	},
	getHit : function(damage){
		if (shield.raised){
			var excessDamage = damage - shield.strength

			if (excessDamage > 0){
				shield.strength = 0;
				shield.lower()
			}
			else {
				shield.strength -= damage	
			}
		}
	}
};