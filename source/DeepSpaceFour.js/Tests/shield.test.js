describe("shields", () => {
	beforeEach(() => {
		shield = new Shield()
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
				shield.getHit()
				expect(shield.strength).toEqual(1000)
			})
		})

	})
})