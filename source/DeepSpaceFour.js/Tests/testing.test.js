describe("shields", () => {
	beforeEach(() => {
		shield = new Shield()
	})

	it("raises shield", () => {
		shield.raise()
		expect(shield.raised).toBeTruthy()
	})

	it("transfers n energy from ship reserves to shields", () => {
		var current = shield.energy 
		shield.transferEnergy(1)
		expect(shield.energy).toEqual(current+1)
	})
})