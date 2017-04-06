describe ("Ship", () => {
    beforeEach(() => {
        ship = new Ship()
    }
    )
    describe ("Ship Energy", () => {
	    it("Has Energy", () => {
	        expect(ship.getRemainingEnergy()).toEqual(100000)
	    })
    })


});