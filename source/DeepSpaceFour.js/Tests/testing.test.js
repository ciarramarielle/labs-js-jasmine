describe("shields", () => {
	beforeEach(() => {
		shield = new Shield()
	})

	it("raises shield", () => {
		shield.raise()
		expect(shield.raised).toBeTruthy()
	})

	describe("when transferring energy", () => {
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


})