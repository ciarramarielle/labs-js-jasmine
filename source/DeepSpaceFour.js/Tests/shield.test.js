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
				expect(shield.strength).toBe(0)
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
				
				it("should damage a random subsystem", () => {
					expect(shield.damagedSubsystem).toBeTruthy()
				})
			})
		})
	})
})