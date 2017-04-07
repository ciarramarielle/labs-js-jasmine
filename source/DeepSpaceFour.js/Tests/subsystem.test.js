describe ("subsystems", () => {
    beforeEach(() => {
        subsystem = new Subsystem()
    })
    
    it("starts not damaged", () => {
        expect(subsystem.isDamaged()).toBeFalsy()
    })
    
    it("can get damaged", () => {
    	subsystem.damage()
    	expect(subsystem.isDamaged()).toBeTruthy()
    })

    describe("when damaged", () => {
        beforeEach(() => {
            subsystem.damage()
        })

        it("cannot function", ()=> {
            expect(subsystem.isDamaged()).toBeTruthy()
        })

        describe("once fully repaired", () => {
            beforeEach(() => {
                subsystem.repairFull()
            })

            it("can function once fully repaired", () => {
                expect(subsystem.isDamaged()).toBeFalsy()
            })
        })
    })


});