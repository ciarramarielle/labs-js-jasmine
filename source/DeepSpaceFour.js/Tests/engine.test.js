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
        startingEnergy = ship.getRemainingEnergy()
    }
    )
    it("Warp no distant", () => {
    	engine.warp(1, 0, 0)
    	expect(ship.getRemainingEnergy()).toEqual(startingEnergy)
    })
    
    it("Warp no quadrants, but some sectors", () => {
    	engine.warp(2,0,8)
    	expect(ship.getRemainingEnergy()).toEqual(startingEnergy-6.4)    
    })

    it("Can't warp negative amounts", () => {
        expect(engine.warp(-1,0,8)).toBeFalsy()
        expect(ship.getRemainingEnergy()).toEqual(startingEnergy)

    })


});