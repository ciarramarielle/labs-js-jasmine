var ship
describe ("Ship", () => {
    beforeEach(() => {
        ship = new Ship()
    })

    describe ("Ship Energy", () => {
	    it("Has Energy", () => {
	        expect(ship.getRemainingEnergy()).toEqual(100000)
	    })
    })

    describe("when transferring n energy to the shield", () => {
        ship = new Ship()

        var currentEnergy = ship.energy
        var currentShieldStrength = ship.shield.strength

        beforeEach(() => {
            ship.transferEnergyToShield(100)
        })

        it("should have n less energy", ()=> {
            expect(ship.energy).toBe(currentEnergy-100)
        })

        it("s shield should have n more strength", () => {
            expect(ship.shield.strength).toBe(currentShieldStrength+100)
        })
    })
});