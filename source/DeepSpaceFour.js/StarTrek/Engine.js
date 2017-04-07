Engine = function(ship){
	this.ship = ship
}

Engine.prototype = {
	warp: function(warpFactor, quadrants, sectors){
		var energyToUse = (quadrants + sectors *.1) * (warpFactor * warpFactor * warpFactor)
		this.ship.energy -= energyToUse
	}
}