var ship
describe ("ships", () => {
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
            currentEnergy = ship.energy
            currentShieldStrength = ship.shield.strength
        })

        describe("when n energy is more than the ship energy reserve", () => {
            beforeEach(()=> {
                ship.transferEnergyToShield(100001)
            })

            it("should only transfer energy reserve", () => {
                expect(ship.energy).toBe(0)
            })
        })

        describe("when ship energy will be within min and max", () => {
            beforeEach(()=> {
                ship.transferEnergyToShield(100)
            })

            it("should have n less energy", ()=> {
                expect(ship.energy).toBe(currentEnergy-100)
            })

            it("its shield should have n more strength", () => {
                expect(ship.shield.strength).toBe(currentShieldStrength+100)
            })
        })

        describe("when attempting to add energy that will pass max value", () => {
            var energy
            beforeEach(()=>{
                energy = 10001
                ship.transferEnergyToShield(energy)
            })

            it("should not allow shield strength to have more than max value", () => {
                expect(ship.shield.strength).toBe(ship.shield.getMaxStrength())
            })
        })
    })
    describe("when attempting to consume shield energy that will pass min value", () => {
        beforeEach(()=>{
            var energy = 1
            ship.getEnergyFromShield(energy)
        })

        it("should not allow shield strength to have less than min value", () => {
            expect(ship.shield.strength).toBe(ship.shield.getMinStrength())
        })
    })
});