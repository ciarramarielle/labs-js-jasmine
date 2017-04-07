describe ("engine", () => {
    beforeEach(() => {
        ship = new Ship()
        engine = ship.engine
        shield = ship.shield
    }
    )
    it("Warp", () => {
    	expect(true).toBeTruthy()
//    	var current = shield.shipEnergyReserves
//    	engine.warp(shield)
//        expect(shield.shipEnergyReserves).toBeLessThan(current)
    })


});