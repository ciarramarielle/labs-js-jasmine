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
        var currentEnergy
        var currentShieldStrength
        beforeEach(() => {
            ship = new Ship()

            currentEnergy = ship.energy
            currentShieldStrength = ship.shield.strength
        })

        describe("when energy within bounds", () => {
            beforeEach(()=> {
                ship.transferEnergyToShield(100)
            })

            it("should have n less energy", ()=> {
                expect(ship.energy).toBe(currentEnergy-100)
            })

            it("s shield should have n more strength", () => {
                expect(ship.shield.strength).toBe(currentShieldStrength+100)
            })
        })

        describe("when energy passes max shield strength", () => {
            beforeEach(()=>{
                var energy = 10001
                ship.transferEnergyToShield(energy)
            })

            it("should only turn shield strength into max value", () => {
                expect(ship.shield.strength).toBe(ship.shield.getMaxStrength())
            })
        })
    })
});