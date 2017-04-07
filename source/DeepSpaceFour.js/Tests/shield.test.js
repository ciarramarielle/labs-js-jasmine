describe("shields", () => {
	beforeEach(() => {
		shield = new Shield()
	})

	it ("is a subsystem", () => {
		expect(shield.damaged).toBeFalsy()
	})

	it("can be raised", () => {
		shield.raise()
		expect(shield.raised).toBeTruthy()
	})

	it("can be lowered", () => {
		shield.lower()
		expect(shield.raised).toBeFalsy()
	})

	describe("when transferring energy from ship to shield", () => {
		var current
		var currentShipReserve
		beforeEach(() => {
			current = shield.strength
			currentShipReserve = shield.shipEnergyReserves
		})

		it("transfers n energy from ship reserves to shields", () => {
			var energy = 1
			shield.transferEnergy(energy)
			expect(shield.strength).toEqual(current+energy)
			expect(shield.shipEnergyReserves).toEqual(currentShipReserve-energy)
		})

		it("does not allow transfer of >10000 energy", () => {
			var energy = 10001
			shield.transferEnergy(energy)
			expect(shield.strength).toEqual(10000)
			expect(shield.shipEnergyReserves).toEqual(0)
		})
	})

	describe("when transferring energy from shield to ship", () => {
		var current
		var currentShipReserve
		beforeEach(() => {
			var energy = 5000
			shield.transferEnergy(energy)			
			current = shield.strength
			currentShipReserve = shield.shipEnergyReserves
		})

		it("transfers n energy from shield to ship", () => {
			var energy = -1
			shield.transferEnergy(energy)	
			expect(shield.strength).toEqual(current+energy)
			expect(shield.shipEnergyReserves).toEqual(currentShipReserve-energy)
		})

		it("does not allow shield strength to be <0", () => {
			var energy = -5001
			shield.transferEnergy(energy)
			expect(shield.strength).toEqual(0)
			expect(shield.shipEnergyReserves).toEqual(10000)
		})
	})

	describe("when enemy fires", () => {
		beforeEach(()=>{
			shield.strength = 1000
			
		})

		describe("when shield is down", () => {
			beforeEach(() =>{
				shield.lower()
			})

			it("does not take damage", () => {
				shield.getHit(1000)
				expect(shield.strength).toEqual(1000)
			})
		})

		describe("when shield is up", () => {
			beforeEach(() =>{
				shield.raise()
			})

			it("shields take damage", () => {
				shield.getHit(1000)
				expect(shield.strength).toBeLessThan(1000)
			})

			describe("when shields are depleted to 0", () => {
				beforeEach(() =>{
					shield.strength = 1000
					shield.getHit(1001)
				})

				it ("should have 0 strength", () => {
					expect(shield.strength).toEqual(0)
				})

				it ("should be lowered", () => {
					expect(shield.raised).toBeFalsy()
				})
				
				// TODO: should refactor into subsystem class
				it("should damage a random subsystem", () => {
					expect(shield.damagedSubsystem).toBeTruthy()
				})
			})
		})
	})
})