describe ("subsystems", () => {
    beforeEach(() => {
        subsystem = new Subsystem()
    }
    )
    it("Starts not damaged", () => {
        expect(subsystem.isDamaged).toBeFalsy()
    })
    
    it("Damage subsystem", () => {
    	subsystem.damage()
    	expect(subsystem.isDamaged).toBeTruthy()
    })


});