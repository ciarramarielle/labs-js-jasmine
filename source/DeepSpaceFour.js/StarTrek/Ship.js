Ship = function(){
	this.energy = 100000
	this.engine = new Engine()
	this.shield = new Shield()
}

Ship.prototype = {
	getRemainingEnergy: function(){
		return this.energy
	}
}