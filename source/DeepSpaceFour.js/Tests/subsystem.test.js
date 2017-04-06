describe ("subsystems", () => {
    beforeEach(() => {
        subsystem = new Subsystem()
    }
    )
    it("Starts not damaged", () => {
        expect(subsystem.isDamaged).toBeFalsy()
    });


});