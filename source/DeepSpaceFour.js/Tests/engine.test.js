//Note: PRD Calculations:
// Sector = Quadrant * 0.1
// Star Date = 10 * Distant in Quadrants / Warp(squared)
// Energy = Distant in Quadrants * Warp (to the 3rd) * 2 if shields up
// 

describe ("engine", () => {
    beforeEach(() => {
        ship = new Ship()
        engine = ship.engine
        shield = ship.shield
    }
    )
    it("Warp no distant", () => {
    	var current = ship.getRemainingEnergy()
    	engine.warp(1, 0, 0)
    	expect(ship.getRemainingEnergy()).toEqual(current)
//    	var current = shield.shipEnergyReserves
//    	engine.warp(shield)
//        expect(shield.shipEnergyReserves).toBeLessThan(current)
    })


});