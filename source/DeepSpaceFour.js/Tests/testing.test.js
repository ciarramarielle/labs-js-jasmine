describe("shields", () => {
	beforeEach(() => {
		shield = new Shield()
	})

	it("raises shield", () => {
		shield.raise()
		expect(shield.raised).toBeTruthy()
	})
})