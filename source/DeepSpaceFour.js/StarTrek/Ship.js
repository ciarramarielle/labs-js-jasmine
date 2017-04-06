Ship = function(){
	this.energy = 100000
}

Ship.prototype = {
	getRemainingEnergy: function(){
		return this.energy
	}
}