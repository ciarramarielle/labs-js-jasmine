Engine = function(ship){
	this.ship = ship
}

Engine.prototype = {
	warp: function(warpFactor, quadrants, sectors){
        if(warpFactor < 0)
		{
			// Comment to change file for Git push
            return false
        }
		else
        {
            var energyToUse = (quadrants + sectors * .1) * (warpFactor * warpFactor * warpFactor)
            this.ship.energy -= energyToUse
        }
	}
}